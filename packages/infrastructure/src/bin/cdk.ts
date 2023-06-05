#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Infrastructure } from '../lib/stack';

const app = new cdk.App();
new Infrastructure(app, 'CdkAppStack', {
  //
});
