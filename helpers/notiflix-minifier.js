// Dev Dependencies
const { existsSync, readdirSync, unlinkSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const Minify = require("babel-minify");
const CleanCSS = require('clean-css');
const chalk = require('chalk');
const package = require('../package.json');

// Constants
const dirIn = 'src';
const dirOut = 'dist';
const fileScript = 'notiflix.js';
const fileScriptAIO = 'notiflix-aio.js';
const fileStyle = 'notiflix.css';
const version = (JSON.stringify((package || {}).version) || '').replace(/"/gm, '');
const author = (JSON.stringify((package || {}).author) || '').replace(/"/gm, '');
const notiflix = 'Notiflix';
const notiflixUrl = '(https://www.notiflix.com)';
const mitLicense = 'MIT Licence (https://opensource.org/licenses/MIT)';
const year = new Date().getFullYear() || '2020';

// Babel Minify Options: begin
const minifyOptions = {
  builtIns: false, // transform-minify-booleans
};

const minifyOverrides = {
  comments: false, // remove all comments
};
// Babel Minify Options: end

// CleanCSS Options: begin
const cleanCSSOptions = {
  level: {
    1: {
      specialComments: false, // remove all comments
    },
  },
};
// CleanCSS Options: end

// Console Error Message: begin
const consoleError = message => {
  const fileName = '"helpers/notiflix-minifier.js"';
  let info = chalk.hex('#26c0d3')('\nPlease look at the ' + fileName + ' for more information.\n\n');
  if (typeof message !== 'string') {
    message = 'An error has occurred on: ' + chalk.hex('#26c0d3')(fileName);
    info = '';
  }
  return console.error(chalk.hex('#ff5549').bold('Notiflix Minifier Error: ') + chalk.hex('#ff5549')(message) + info);
};
// Console Error Message: end

// Minified Code and Source Type: begin
const minifiedCodeBySourceType = (text, type) => {
  // if script
  if (type === 'script') {
    const script = Minify(text, minifyOptions, minifyOverrides);
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
    const style = new CleanCSS(cleanCSSOptions).minify(text);
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

// Clear The Out Directory: begin
const clearTheOutDir = () => {
  if (existsSync(dirOut)) { // if the directory exist clear all files
    readdirSync(dirOut).map(file => {
      unlinkSync(join(dirOut, file), err => {
        if (err) throw err;
      });
    });
  } else {
    consoleError('The "' + dirOut + '" directory does not exist on the root directory.');
  }
};
// Clear The Out Directory: end

// Create The File from by The Input Directory: begin
const createFileFromInputDir = (filePath, fileName, filePrefix, fileType) => {
  if (existsSync(filePath)) { // if file exist
    // file text
    const fileText = readFileSync(filePath, 'utf-8');
    // minified content by file
    const minifiedContent = minifiedCodeBySourceType(fileText, fileType);
    // create a file by minified content
    addFileToTheOutDir(minifiedContent, filePrefix, fileName);
  } else {
    consoleError('The "' + fileName + '" file does not exist on the "' + dirIn + '" directory.');
  }
}
// Create The File from by The Input Directory: end

// Add The File Into The Out Directory: begin
const addFileToTheOutDir = (minContent, fileName, filePath) => {
  if (existsSync(dirOut)) {
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
        const comment = `/* ${notiflix} ${notiflixUrl} - Version: ${version} - Author: ${author} - Copyright ${year} ${notiflix}, ${mitLicense} */\n\n`;
        // minified code with comment line
        const code = comment + minContent.code;
        // minified file name
        const minFileName = `${fileName}-${version}.min.${ext}`;
        // create a minified file into the out directory
        writeFileSync(join(dirOut, minFileName), code);
      }

    } else {
      consoleError('The "' + filePath + '" file is empty and/or something went wrong.');
    }
  } else {
    consoleError('The "' + dirOut + '" directory does not exist on the root directory.');
  }
};
// Add The File Into The Out Directory: end

// Minify Notiflix: begin
if (existsSync(dirIn)) { // if the input directory exist
  // empty the out directory
  clearTheOutDir();

  // Notiflix Script: begin
  const nxScript = join(dirIn, fileScript);
  createFileFromInputDir(nxScript, fileScript, 'notiflix', 'script');
  // Notiflix Script: end

  // Notiflix Style: begin
  const nxStyle = join(dirIn, fileStyle);
  createFileFromInputDir(nxStyle, fileStyle, 'notiflix', 'style');
  // Notiflix Style: end

  // Notiflix Script (All In One): begin
  const nxScriptAIO = join(dirIn, fileScriptAIO);
  createFileFromInputDir(nxScriptAIO, fileScriptAIO, 'notiflix-aio', 'script');
  // Notiflix Script (All In One): end
} else {
  consoleError('The "' + dirIn + '" directory does not exist on the root directory.');
}
// Minify Notiflix: end
