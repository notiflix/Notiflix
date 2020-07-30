/*!
* Notiflix Minifier
*
* Description: Minify the Notiflix scripts, and clean the Notiflix styles to the distribution. (Used "Babel Minify", and "Clean CSS")
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 Notiflix Minifier, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const { existsSync, readdirSync, unlinkSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const Minify = require('babel-minify');
const CleanCSS = require('clean-css');
const Constants = require('./notiflix-dev-constants');

// Constants
const thisFilePath = 'helpers/notiflix-dev-minifier.js';

// Minified Code and Source Type: begin
const minifiedCodeBySourceType = (text, type) => {
  // if script
  if (type === 'script') {
    const script = Minify(text, Constants.minifyOptions, Constants.minifyOverrides);
    if (typeof script === 'object' && typeof script.code === 'string' && typeof script.sourceType === 'string') {
      return {
        code: script.code,
        type: script.sourceType,
      };
    } else {
      return false;
    }
  }
  // else if style
  else if (type === 'style') {
    const style = new CleanCSS(Constants.cleanCSSOptions).minify(text);
    if (typeof style === 'object' && typeof style.styles === 'string') {
      return {
        code: style.styles,
        type: type,
      };
    } else {
      return false;
    }
  }
  // else
  return false;
};
// Minified Code and Source Type: end

// Clear The Output Directory: begin
const clearTheOutDir = path => {
  if (!path) { path = Constants.dirOutputDist; }
  if (existsSync(path)) { // if the directory exist clear all files
    readdirSync(path).map(file => {
      // check the version
      if (file.indexOf(Constants.version) > -1) {
        Constants.terminalError(`The version number is the same. It should be increased. Go to the "package.json" file to change it.`, `${thisFilePath} => Line: 58`);
        return false;
      }
      // remove the old files
      unlinkSync(join(path, file), err => {
        if (err) throw err;
      });
    });
  } else {
    Constants.terminalError(`The "${path}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 67`);
    return false;
  }
};
// Clear The Output Directory: end

// Write The File Into The Output Directory: begin
const writeFileToTheOutDir = (minContent, fileName, filePath) => {
  if (existsSync(Constants.dirOutputDist)) {
    // create "notiflix.min.*" file by minified content
    if (typeof minContent === 'object' && (typeof minContent.type === 'string' && (typeof minContent.code === 'string' && minContent.code.length > 0))) {
      // file extention
      let ext = null;
      if (minContent.type === 'script') {
        ext = 'js';
      } else if (minContent.type === 'style') {
        ext = 'css';
      }

      // if ext exist create a file
      if (typeof ext === 'string') {
        // comment line
        const comment = `/* ${Constants.notiflix} ${Constants.notiflixUrl} - Version: ${Constants.version} - Author: ${Constants.author} - Copyright ${Constants.year} ${Constants.notiflix}, ${Constants.license} */\n\n`;
        // minified code with comment line
        const code = comment + minContent.code;
        // minified file name
        const minFileName = `${fileName}-${Constants.version}.min.${ext}`;
        // create a minified file into the output directory
        writeFileSync(join(Constants.dirOutputDist, minFileName), code);
      }

    } else {
      Constants.terminalError(`The "${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 99`);
      return false;
    }
  } else {
    Constants.terminalError(`The "${Constants.dirOutputDist}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 103`);
    return false;
  }
};
// Write The File Into The Output Directory: end

// Create The File from by The Input Directory: begin
const createFileFromInputDir = (filePath, fileName, filePrefix, fileType) => {
  if (existsSync(filePath)) { // if file exist
    // file text
    const fileText = readFileSync(filePath, 'utf-8');
    // if file text exist
    if (typeof fileText === 'string' && fileText.length > 0) {
      // minified content by file
      const minifiedContent = minifiedCodeBySourceType(fileText, fileType);
      // create a file by minified content
      writeFileToTheOutDir(minifiedContent, filePrefix, fileName);
    }
    // else throw error
    else {
      Constants.terminalError(`The "${filePath}" file is empty and/or something went wrong.`, `${thisFilePath} => Line: 123`);
      return false;
    }
  } else {
    Constants.terminalError(`The "${fileName}" file does not exist in the "${Constants.dirInputDev}" directory.`, `${thisFilePath} => Line: 127`);
    return false;
  }
};
// Create The File from by The Input Directory: end

// Minify Notiflix: begin
if (existsSync(Constants.dirInputDev) && existsSync(Constants.dirOutputDev)) { // if the input directory exist
  // empty the output directory
  clearTheOutDir(Constants.dirOutputDist);

  // Notiflix Script: begin
  const nxScriptPath = join(Constants.dirInputDev, Constants.fileScript);
  createFileFromInputDir(nxScriptPath, Constants.fileScript, 'notiflix', 'script');
  // Notiflix Script: end

  // Notiflix Style: begin
  const nxStylePath = join(Constants.dirInputDev, Constants.fileStyle);
  createFileFromInputDir(nxStylePath, Constants.fileStyle, 'notiflix', 'style');
  // Notiflix Style: end

  // Notiflix Script (All In One): begin
  const nxScriptAIOPath = join(Constants.dirOutputDev, Constants.fileScriptAIO);
  createFileFromInputDir(nxScriptAIOPath, Constants.fileScriptAIO, 'notiflix-aio', 'script');
  // Notiflix Script (All In One): end
} else {
  Constants.terminalError(`The "${!existsSync(Constants.dirInputDev) ? Constants.dirInputDev : Constants.dirOutputDev}" directory does not exist in the root directory.`, `${thisFilePath} => Line: 153`);
  return false;
}
// Minify Notiflix: end
