/*!
* Notiflix - Constants
*
* Description: Notiflix constants for the development.
* Version: 1.0.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2020 Notiflix - Constants, MIT Licence ('https://opensource.org/licenses/MIT')
*/

// Dev Dependencies
const chalk = require('chalk');
const package = require('../package.json');

// Notiflix Constants: begin
// - CleanCSS Options: begin
const cleanCSSOptions = {
  level: {
    1: {
      optimizeBackground: false, // controls `background` property optimizations; defaults to `true`
      optimizeBorderRadius: false, // controls `border-radius` property optimizations; defaults to `true`
      optimizeFilter: false, // controls `filter` property optimizations; defaults to `true`
      optimizeFont: false, // controls `font` property optimizations; defaults to `true`
      optimizeFontWeight: false, // controls `font-weight` property optimizations; defaults to `true`
      optimizeOutline: false, // controls `outline` property optimizations; defaults to `true`
      specialComments: false, // remove all comments
      removeQuotes: false, // controls removing quotes when unnecessary; defaults to `true`
      semicolonAfterLastProperty: true, // controls removing trailing semicolons in rule; defaults to `false` - means remove
    },
  },
};
// - CleanCSS Options: end

// - Babel Minify Options: begin
const minifyOptions = {
  builtIns: false, // transform-minify-booleans
};

const minifyOverrides = {
  comments: false, // remove all comments
};
// - Babel Minify Options: end

// - Terminal Error Message: begin
const terminalError = (message, fileOrPath) => {
  const colorRed = '#ff5549';
  const colorBlue = '#26c0d3';
  if (typeof fileOrPath !== 'string') { fileOrPath = '???'; }
  let info = chalk.hex(colorBlue)('\nPlease look at the "' + fileOrPath + '" for more information.\n\n');
  if (typeof message !== 'string') {
    message = 'An error has occurred on: "' + chalk.hex(colorBlue)(fileOrPath) + '"';
    info = '';
  }
  return console.error(chalk.hex(colorRed).bold('Notiflix Development Error: ') + chalk.hex(colorRed)(message) + info);
};
// - Terminal Error Message: end

// - Exports: begin
module.exports = {
  dirInputDev: 'src',
  dirOutputDev: 'src/all-in-one',
  dirOutputDist: 'dist',
  fileScript: 'notiflix.js',
  fileStyle: 'notiflix.css',
  fileScriptAIO: 'notiflix-aio.js',
  version: (JSON.stringify((package || {}).version) || '').replace(/"/gm, ''),
  author: (JSON.stringify((package || {}).author) || '').replace(/"/gm, ''),
  notiflix: 'Notiflix',
  notiflixUrl: '(https://www.notiflix.com)',
  license: 'MIT Licence (https://opensource.org/licenses/MIT)',
  year: new Date().getFullYear() || '2020',
  cleanCSSOptions,
  minifyOptions,
  minifyOverrides,
  terminalError,
};
// - Exports: end
// Notiflix Constants: end
