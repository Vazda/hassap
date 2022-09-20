import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { getStack } from "@pulumi/pulumi";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket", {
    // bucket: `bucket-${getStack()}`
    bucket: `bucket-vale-${getStack()}`
});

// Export the name of the bucket
export const bucketName = bucket.id;

const testSSMRole = new aws.iam.Role("pulumi-vale-role", {
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

const group = new aws.ec2.SecurityGroup("webserver-secgrp", {
  ingress: [{ protocol: "tcp", fromPort: 22, toPort: 22, cidrBlocks: ["0.0.0.0/0"] }],
  egress: [{ protocol: "-1", fromPort: 0, toPort: 0, cidrBlocks: ["0.0.0.0/0"] }],
});

const myCluster = new awsx.ecs.Cluster("Pulumi-cluster")

const listener = new awsx.lb.ApplicationListener("pulumi-ecs-primary", {
    external: true,
    port: 80
});

// const fargateService = new awsx.ecs.FargateService("pulumi-ecs",
//     {
//     cluster: myCluster,
//     desiredCount: 1,
//     healthCheckGracePeriodSeconds: 10,
// });


const server = new aws.ec2.Instance("webserver-www", {
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