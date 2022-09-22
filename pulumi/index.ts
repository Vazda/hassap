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
const DOMAIN = config.require('domain');
const PORT_RAW = parseInt(config.require('apiPort'), 10);

const PORT = isNaN(PORT_RAW) ? 8080 : PORT_RAW;

const dbPassword = config.requireSecret('dbPassword');
const dbUser = config.require('dbUser');
const dbName = `${appEnvironment}${appName}db`;

// fargate cluster
const cluster = new awsx.ecs.Cluster(`${appName}-cluster`);

// const img = awsx.ecs.Image.fromDockerBuild(`${appName}-app-img`, {
//   context: '../../',
//   dockerfile: '../../Dockerfile',
//   args: {
//     ENV_NAME: appEnvironment,
//   },
//   env: {
//     DOCKER_DEFAULT_PLATFORM: 'linux/amd64',
//   },
//   extraOptions: ['--platform', 'linux/amd64'],
// });

// RDS database creation
const defaultInstance = new aws.rds.Instance(`${dbName}`, {
  engine: "mariadb",
  instanceClass: "db.t3.micro",
  allocatedStorage: 10,
  name: dbName,
  username: dbUser,
  password: dbPassword,
  // parameterGroupName: "default.mysql5.7",
  skipFinalSnapshot: true,
});

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", {
    bucket: `${appName}-${getStack()}`
});

// Export the name of the bucket
export const bucketName = bucket.id;

/**
 * Define the Networking for our service.
 */
 const alb = new awsx.lb.ApplicationLoadBalancer('net-lb', {
  external: true,
  securityGroups: cluster.securityGroups,
  name: `lb-${appEnvironment}-${appName}`,
});

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
})


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