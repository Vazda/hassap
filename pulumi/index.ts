import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { getStack } from "@pulumi/pulumi";

const config = new pulumi.Config();
/**
 * CONFIGURE
 */
const appName = config.require('appName');
const appEnvironment = config.require('appEnvironment');
const dbPassword = config.requireSecret('dbPassword');
const dbUser = config.require('dbUser');
const dbName = `${appEnvironment}${appName}db`;
const DOMAIN = config.require('domain');
const PORT_RAW = parseInt(config.require('apiPort'), 10);
const PORT = isNaN(PORT_RAW) ? 8080 : PORT_RAW;
const backendUrl = `https://${appEnvironment}-hassap.${config.require('domain')}/api`;

// fargate cluster
const cluster = new awsx.ecs.Cluster(`${appName}-cluster`);

const img = awsx.ecs.Image.fromDockerBuild(`${appName}-app-img`, {
  context: '../../',
  dockerfile: '../../Dockerfile',
  args: {
    ENV_NAME: appEnvironment,
  },
  env: {
    DOCKER_DEFAULT_PLATFORM: 'linux/amd64',
  },
  extraOptions: ['--platform', 'linux/amd64'],
});

const alb = new awsx.lb.ApplicationLoadBalancer('net-lb', {
  external: true,
  securityGroups: cluster.securityGroups,
  name: `lb-${appEnvironment}-${appName}`,
});

/**
 * SSL Certificate
 */
 const sslCertificate = new aws.acm.Certificate('cert', {
  domainName: `${appEnvironment}-elevate.${DOMAIN}`,
  tags: {
    Environment: appEnvironment,
  },
  validationMethod: 'DNS',
});

const hostedZoneId = aws.route53
  .getZone({ name: DOMAIN }, { async: true })
  .then((zone) => zone.zoneId);

// DNS records to verify SSL Certificate
const certificateValidationDomain = new aws.route53.Record(
  `${appEnvironment}-elevate.${DOMAIN}-validation`,
  {
    name: sslCertificate.domainValidationOptions[0].resourceRecordName,
    zoneId: hostedZoneId,
    type: sslCertificate.domainValidationOptions[0].resourceRecordType,
    records: [sslCertificate.domainValidationOptions[0].resourceRecordValue],
    ttl: 600,
  },
);
const certificateValidation = new aws.acm.CertificateValidation('certificateValidation', {
  certificateArn: sslCertificate.arn,
  validationRecordFqdns: [certificateValidationDomain.fqdn],
});

// Target group with the port of the Docker image
const target = alb.createTargetGroup(`${appName}-${appEnvironment}-web-target`, {
  vpc: cluster.vpc,
  port: PORT,
});

// RDS database creation
const db = new aws.rds.Instance(`${dbName}`, {
  engine: "postgres",
  instanceClass: "db.t3.micro",
  allocatedStorage: 10,
  name: dbName,
  username: dbUser,
  password: dbPassword,
  publiclyAccessible: true,
  skipFinalSnapshot: true,
});

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", {
    bucket: `${appName}-${getStack()}`
});

// Export the name of the bucket
export const bucketName = bucket.id;

const testSSMRole = new aws.iam.Role(`${appName}-${getStack()}-role`, {
  assumeRolePolicy: `{
  "Version": "2012-10-17",
  "Statement": {
    "Effect": "Allow",
    "Principal": {"Service": "ec2.amazonaws.com"},
    "Action": "sts:AssumeRole"
  }
}
`,
});

new aws.iam.RolePolicyAttachment("testSSMAttach", {
  policyArn: "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
  role: testSSMRole.name,
});

const testSSMProfile = new aws.iam.InstanceProfile(`testSSMProfile${getStack()}`, {
  name: `testSSMProfile${getStack()}`,
  role: testSSMRole,
});


const size = "t2.micro";
const ami = pulumi.output(aws.ec2.getAmi({
  filters: [{
    name: "name",
    values: ["amzn2-ami-hvm-*-x86_64-ebs"],
  }],
  owners: ["amazon"],
  mostRecent: true,
}));

const group = new aws.ec2.SecurityGroup(`${appName}-${appEnvironment}-sec-group`, {
  ingress: [{ protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] }],
  egress: [{ protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] }],
});


const listener = new awsx.lb.ApplicationListener(`${appName}-${appEnvironment}-listener`, {
    external: true,
    port: 80
});

// const fargateService = new awsx.ecs.FargateService(`${appName}-${appEnvironment}-fargate-service`,
//     {
//     cluster: cluster,
//     healthCheckGracePeriodSeconds: 10,
//     desiredCount: 1,
//     // taskDefinitionArgs: {}
// });



console.log('nesto');
// Listen to traffic on port 443 & route it through the target group
const httpsListener = target.createListener(`${appName}-${appEnvironment}-web-listener`, {
  port: 443,
  certificateArn: certificateValidation.certificateArn,
});

/**
 * Create a Fargate service task that can scale out.
 */

console.log(db.address, 'DB ADDRESS', dbPassword, 'password');
const appService = new awsx.ecs.FargateService(`${appName}-${appEnvironment}-app-svc`, {
  cluster,
  taskDefinitionArgs: {
    container: {
      image: img,
      cpu: 1024 /*100% of 1024*/,
      memory: 3072 /*MB*/,
      portMappings: [httpsListener],
      environment: [
        {
          name: 'ENV_NAME',
          value: appEnvironment,
        },
        {
          name: 'PORT',
          value: '5000',
        },
        {
          name: 'S3_BUCKET_NAME',
          value: bucketName,
        },
        {
          name: 'DATABASE_HOST',
          value: db.address,
        },
        {
          name: 'DATABASE_PORT',
          value: '5432',
        },
        {
          name: 'DATABASE_USER',
          value: dbUser,
        },
        {
          name: 'DATABASE_PASSWORD',
          value: dbPassword,
        },
        {
          name: 'DATABASE_DB',
          value: dbName,
        },
        {
          name: 'BACKEND_URL',
          value: backendUrl,
        },
        {
          name: 'AWS_ACCESS_KEY_ID',
          value: 'AKIAWEXFF4ZIEE44INNX',
        },
        {
          name: 'AWS_SECRET_ACCESS_KEY',
          value: '8MDvPol3P9/P+DOGvPQbwZ+mm0nuaij/GRkXHHvx',
        },
      ],
    },
  },
  desiredCount: 1,
});


const server = new aws.ec2.Instance(`${appName}-${appEnvironment}-ec2-instance`, {
    instanceType: size,
    securityGroups: [group.name],
    ami: ami.id,
    iamInstanceProfile: testSSMProfile,
    userData: `#!/bin/bash
    set -ex
    
    cd /tmp
    sudo yum install -y https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/linux_amd64/amazon-ssm-agent.rpm
    sudo systemctl enable amazon-ssm-agent
    sudo systemctl start amazon-ssm-agent
    `,
});

export const publicIp = server.publicIp;
export const publicHostName = server.publicDns;
export const ecsTaskUrl = listener.endpoint.hostname;
export const instanceID = server.id;