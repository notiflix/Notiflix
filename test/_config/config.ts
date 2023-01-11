import { LaunchOptions, BrowserLaunchArgumentOptions, BrowserConnectOptions } from 'puppeteer-core';

// const executablePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
// const repositoryBase = 'file:///C:/Users/Developer/Desktop/Projects/Repositories/GitHub/+++Notiflix/Notiflix';
const executablePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const repositoryBase = 'file:///Users/furkan/Desktop/Projects/GitHub/Notiflix';

interface IConfig {
  puppeteer: {
    launchOptions: LaunchOptions | BrowserLaunchArgumentOptions | BrowserConnectOptions;
  };
  pagePaths: {
    notify: string;
  };
  text: {
    notify: {
      callbackInitMessage: string;
      success: {
        defaultMessage: string;
      };
      failure: {
        defaultMessage: string;
      };
      warning: {
        defaultMessage: string;
      };
      info: {
        defaultMessage: string;
      };
    };
  };
}

const config: IConfig = {
  puppeteer: {
    launchOptions: {
      headless: false, // TODO: will be true after dev
      slowMo: 0,
      defaultViewport: null,
      devtools: false,
      args: [
        '--disable-extensions',
        '--disable-canvas-aa',
        '--disable-2d-canvas-clip-aa',
        // '--disable-gl-drawing-for-tests', // TODO: to be activated after dev
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
      callbackInitMessage: 'This text will be changed.',
      success: {
        defaultMessage: 'Sol lucet omnibus',
      },
      failure: {
        defaultMessage: 'Qui timide rogat docet negare',
      },
      warning: {
        defaultMessage: 'Memento te hominem esse',
      },
      info: {
        defaultMessage: 'Cogito ergo sum',
      },
    },
  },
};

export {
  config,
};

export type {
  IConfig,
};
