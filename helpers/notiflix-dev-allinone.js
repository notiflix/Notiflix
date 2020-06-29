/*!
* Notiflix - All In One Generator
*
* Description: Creates "notiflix-aio.js" file automatically from "notiflix.js" and "notiflix.css" files.
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
      const commentVersion = `* Version:`;
      const commentDescAndVersion = `* Description: Notiflix All In One contains the Notiflix CSS codes as internal to use the Notiflix as one file. This file has been created automatically from using the "notiflix.js", and "notiflix.css" files.\n${commentVersion}`;
      const internalCSS = `var css = '';`;
      // add a description comment before the version && replace internal css codes => if they exist
      if (nxScript.indexOf(commentVersion) > -1 && nxScript.indexOf(internalCSS) > -1) {
        // add the description above the version as comment
        let nxScriptAIO = nxScript.replace(commentVersion, commentDescAndVersion);
        // replace internal css
        nxScriptAIO = nxScriptAIO.replace(internalCSS, `var css = '${nxStyleAsMinified}';`);
        // create "notiflix-aio.js" file
        writeFileSync(join(Constants.dirOutputDev, Constants.fileScriptAIO), nxScriptAIO);
      } else {
        Constants.terminalError(`"${nxScript.indexOf(commentVersion) === -1 ? commentVersion : internalCSS}" does not exist in the "${Constants.fileScript}" file.`, `${thisFilePath} => Line: 72`);
        return false;
      }
    }
    // else throw error
    else {
      Constants.terminalError(`"${Constants.dirOutputDev}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 78`);
      return false;
    }
  } else {
    Constants.terminalError(`Something went wrong on ${!nxStyleAsMinified ? '"getNxStyleAsMinifiedFromInputDir();"' : '"getNxScriptFromInputDir();"'}.`, `${thisFilePath} => Line: 82`);
    return false;
  }
};
createNotiflixAIOfileFromJsAndCss();
// Create "notiflix-aio.js" file from "notiflix.js" and "notiflix.css" files: end
