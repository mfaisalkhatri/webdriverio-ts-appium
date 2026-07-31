import { join } from 'node:path';
import config from './wdio.shared.local.conf';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/ios.spec.ts',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone 17',
        'appium:platformVersion': '26.5',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/SauceLabs-Demo-App.Simulator.zip'),
        // @ts-ignore
        //'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;