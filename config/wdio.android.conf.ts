import { join } from 'path';
import config from '../config/wdio.shared.local.conf';

// ============
// Specs
// ============
config.specs = [
    '../tests/specs/*.ts',
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        'appium:deviceName': 'Pixel_XL_API_33',
        'appium:platformVersion': '13.0',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/Android-NativeDemoApp-0.4.0.apk'),
        // @ts-ignore
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
    },
];

exports.config= config;