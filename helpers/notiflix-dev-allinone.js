/*!
* Notiflix - All In One
*
* Description: Create "notiflix-aio.js" file from "notiflix.js" and "notiflix.css" files for the development.
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 Notiflix - All In One, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const CleanCSS = require('clean-css');
const Constants = require('./notiflix-dev-constants');

// Constants
const thisFilePath = 'helpers/notiflix-dev-allinone.js';

// Get File content as text: begin
const getFileContentAsTextByType = (filePath, fileType, clean) => {
  // if file is exist
  if (existsSync(filePath)) {
    // file as text
    const fileAsText = readFileSync(filePath, 'utf-8');
    // if file contains text
    if (typeof fileAsText === 'string' && fileAsText.length > 0) {
      let code = fileAsText;
      if (fileType === 'style' && clean) {
        const styleClean = new CleanCSS(Constants.cleanCSSOptions).minify(fileAsText);
        code = (styleClean || {}).styles;
      }
      return code || false;
    } else {
      Constants.terminalError(`"${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 34`);
      return false;
    }
  }
  // else throw error
  else {
    Constants.terminalError(`"${filePath}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 40`);
    return false;
  }
};
// Get File content as text: end

// Create "notiflix-aio.js" file from "notiflix.js" and "notiflix.css" files: begin
const createNotiflixAIOfileFromJsAndCss = () => {
  // notiflix style as minified
  const stylePath = join(Constants.dirInputDev, Constants.fileStyle);
  const nxStyleAsMinified = getFileContentAsTextByType(stylePath, 'style', true);

  // notiflix script
  const scriptPath = join(Constants.dirInputDev, Constants.fileScript);
  const nxScript = getFileContentAsTextByType(scriptPath, 'script', false);

  // if style and script are exist
  if (nxStyleAsMinified && nxScript) {
    // if output directory is exist
    if (existsSync(Constants.dirOutputDev)) {
      var internalCSS = `var css = '';`;
      // replace internal css codes if exist
      if (nxScript.indexOf(internalCSS) > -1) {
        // replace
        const nxScriptAIO = nxScript.replace(internalCSS, `var css = '${nxStyleAsMinified}';`);
        // create "notiflix-aio.js" file
        writeFileSync(join(Constants.dirOutputDev, Constants.fileScriptAIO), nxScriptAIO);
      } else {
        Constants.terminalError(`"${internalCSS}" does not exist in the "${Constants.fileScript}" file.`, `${thisFilePath} => Line: 68`);
        return false;
      }
    }
    // else throw error
    else {
      Constants.terminalError(`"${Constants.dirOutputDev}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 74`);
      return false;
    }
  } else {
    Constants.terminalError(`Something went wrong on ${!nxStyleAsMinified ? '"getNxStyleAsMinifiedFromInputDir();"' : '"getNxScriptFromInputDir();"'}.`, `${thisFilePath} => Line: 78`);
    return false;
  }
};
createNotiflixAIOfileFromJsAndCss();
// Create "notiflix-aio.js" file from "notiflix.js" and "notiflix.css" files: end
