import { LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions } from 'puppeteer-core';

const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const repositoryBase = 'file:///C:/Users/Developer/Desktop/Projects/Repositories/GitHub/+++Notiflix/Notiflix';

interface IConfig {
  puppeteer: {
    launchOptions: LaunchOptions | BrowserLaunchArgumentOptions | BrowserConnectOptions;
  };
  pagePaths: {
    notify: string;
  };
  text: {
    notify: {
      defaultMessage: string;
      initMessage: string;
    };
  };
}

const config: IConfig = {
  puppeteer: {
    launchOptions: {
      headless: false,
      slowMo: 0,
      defaultViewport: null,
      devtools: false,
      args: [
        '--disable-extensions',
        '--disable-canvas-aa',
        '--disable-2d-canvas-clip-aa',
        // '--disable-gl-drawing-for-tests',
        '--enable-webgl',
        '--hide-scrollbars',
        '--mute-audio',
        '--no-first-run',
        '--disable-infobars',
        '--disable-breakpad',
        '--no-sandbox',
        '--disable-setuid-sandbox',
      ],
      executablePath: executablePath,
    },
  },
  pagePaths: {
    notify: `${repositoryBase}/docs/test-e2e-notify.html`,
  },
  text: {
    notify: {
      initMessage: 'This text will be changed.',
      defaultMessage: 'Sol lucet omnibus',
    },
  },
};

export {
  config,
};

export type {
  IConfig,
};
