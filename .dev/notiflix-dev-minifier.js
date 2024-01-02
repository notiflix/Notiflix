/*!
* Notiflix - Minifier
*
* Description: Minifies the Notiflix scripts and cleans the Notiflix styles for distribution. (Using "Babel Minify", and "Clean CSS")
*
* Version: 1.0.0
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2024 Notiflix Minifier, MIT License (https://opensource.org/licenses/MIT)
*/

'use-strict';

// Dev Dependencies
const { existsSync, unlinkSync, readFileSync, writeFileSync, readdirSync } = require('fs');
const { join } = require('path');
const Minify = require('babel-minify');
const CleanCSS = require('clean-css');
const Constants = require('./notiflix-dev-constants');


// Constants
const thisFilePath = '.dev/notiflix-dev-minifier.js';
const allInOneSuffix = 'AIO';


// Helpers: begin
const createMinFileNameWithVersion = (fileName) => fileName.replace('.', `-${Constants.version}.min.`);

const createComment = (moduleName) => `/* ${Constants.notiflix}${moduleName ? ` ${moduleName}` : ''} ${Constants.notiflixUrl} - Version: ${Constants.version} - Author: ${Constants.author} - Copyright ${Constants.year} ${Constants.notiflix}, ${Constants.license} */\n\n`;

const getCleanedCSSAsync = async (stylePath) => {
  if (existsSync(stylePath)) {
    try {
      const stylesAsText = readFileSync(stylePath, 'utf-8') || '';
      if (!stylesAsText) {
        throw new Error();
      }

      const cleanedStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(stylesAsText);
      if (typeof cleanedStyles !== 'object' || typeof cleanedStyles?.styles !== 'string') {
        throw new Error();
      }

      return cleanedStyles?.styles || '';

    } catch {
      Constants.terminalError(`Something went wrong that creating the cleaned CSS.`, thisFilePath);
      return false;
    }
  }
  else {
    Constants.terminalError(`The "${stylePath}" path does not exist in the root directory.`, thisFilePath);
    return false;
  }
};

const getMinifiedNotiflixJSAsync = (scriptPath) => {
  if (existsSync(scriptPath)) {
    try {
      const scriptsAsText = readFileSync(scriptPath, 'utf-8') || '';
      if (!scriptsAsText) {
        throw new Error();
      }

      const minifiedScript = Minify(scriptsAsText, Constants.minifyOptions, Constants.minifyOverrides);
      if (typeof minifiedScript !== 'object' || typeof minifiedScript?.code !== 'string') {
        throw new Error();
      }

      return minifiedScript?.code || '';

    } catch {
      Constants.terminalError(`Something went wrong that creating the minified JS file.`, thisFilePath);
      return false;
    }
  }
  else {
    Constants.terminalError(`The "${scriptPath}" path does not exist in the root directory.`, thisFilePath);
    return false;
  }
};
// Helpers: end


// Notiflix CSS File: begin
const createCleanedNotiflixCSSFileAsync = async () => {
  // notiflix_CSS: begin
  try {
    const notiflix_CSS = await getCleanedCSSAsync(join(Constants.directories.src, Constants.files.notiflix_CSS));
    if (!notiflix_CSS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_CSS)),
      (createComment(null) + notiflix_CSS),
    );
  } catch {
    Constants.terminalError(`Something went wrong that creating "notiflix_CSS" file.`, thisFilePath);
  }
  // notiflix_CSS: end
};
// Notiflix CSS File: end

// Notiflix JS Files: begin
const createMinifiedNotiflixJSFiles = () => {

  // notiflix_JS: begin
  try {
    const notiflix_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.src, Constants.files.notiflix_JS));
    if (!notiflix_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_JS)),
      (createComment(null) + notiflix_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_JS".`, thisFilePath);
  }
  // notiflix_JS: end

  // notiflix_AIO_JS: begin
  try {
    const notiflix_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_AIO_JS));
    if (!notiflix_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_AIO_JS)),
      (createComment(allInOneSuffix) + notiflix_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_AIO_JS".`, thisFilePath);
  }
  // notiflix_AIO_JS: end

  // notiflix_Notify_AIO_JS: begin
  try {
    const notiflix_Notify_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_Notify_AIO_JS));
    if (!notiflix_Notify_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_Notify_AIO_JS)),
      (createComment(`${Constants.modules.notify} ${allInOneSuffix}`) + notiflix_Notify_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_Notify_AIO_JS".`, thisFilePath);
  }
  // notiflix_Notify_AIO_JS: end

  // notiflix_Report_AIO_JS: begin
  try {
    const notiflix_Report_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_Report_AIO_JS));
    if (!notiflix_Report_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_Report_AIO_JS)),
      (createComment(`${Constants.modules.report} ${allInOneSuffix}`) + notiflix_Report_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_Report_AIO_JS".`, thisFilePath);
  }
  // notiflix_Report_AIO_JS: end

  // notiflix_Confirm_AIO_JS: begin
  try {
    const notiflix_Confirm_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_Confirm_AIO_JS));
    if (!notiflix_Confirm_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_Confirm_AIO_JS)),
      (createComment(`${Constants.modules.confirm} ${allInOneSuffix}`) + notiflix_Confirm_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_Confirm_AIO_JS".`, thisFilePath);
  }
  // notiflix_Confirm_AIO_JS: end

  // notiflix_Loading_AIO_JS: begin
  try {
    const notiflix_Loading_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_Loading_AIO_JS));
    if (!notiflix_Loading_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_Loading_AIO_JS)),
      (createComment(`${Constants.modules.loading} ${allInOneSuffix}`) + notiflix_Loading_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_Loading_AIO_JS".`, thisFilePath);
  }
  // notiflix_Loading_AIO_JS: end

  // notiflix_Block_AIO_JS: begin
  try {
    const notiflix_Block_AIO_JS = getMinifiedNotiflixJSAsync(join(Constants.directories.build, Constants.files.notiflix_Block_AIO_JS));
    if (!notiflix_Block_AIO_JS) {
      throw new Error();
    }
    writeFileSync(
      join(Constants.directories.dist, createMinFileNameWithVersion(Constants.files.notiflix_Block_AIO_JS)),
      (createComment(`${Constants.modules.block} ${allInOneSuffix}`) + notiflix_Block_AIO_JS),
    );
  } catch {
    Constants.terminalError(`Something went wrong: "notiflix_Block_AIO_JS".`, thisFilePath);
  }
  // notiflix_Block_AIO_JS: end

};
// Notiflix JS Files: end


// Minifier: begin
const notiflixMinifierAsync = async () => {
  try {
    const distPath = Constants.directories.dist;
    const allRemoved = readdirSync(distPath).every(file => {
      // check the version
      if ((file?.split('.min')[0] || '')?.split('-')?.pop() === Constants.version) {
        Constants.terminalError(`Version number is the same. It should be increased. Go to the "package.json" file to change it.`, `${thisFilePath}`);
        return false;
      }
      // remove the old files
      else {
        unlinkSync(join(distPath, file), err => {
          if (err) throw err;
        });
        return true;
      }
    });

    if (allRemoved) {
      await createCleanedNotiflixCSSFileAsync();
      createMinifiedNotiflixJSFiles();
      Constants.terminalSuccess('All done.');
    }
  } catch {
    Constants.terminalError(`Something went wrong on Notiflix Minifier.`, thisFilePath);
  }
};
notiflixMinifierAsync();
// Minifier: end
