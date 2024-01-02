/*!
* Notiflix - Constants
*
* Description: Notiflix constants for the development.
* Version: 1.0.0
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2024 Notiflix - Constants, MIT License (https://opensource.org/licenses/MIT)
*/

// Dev Dependencies
const chalk = require('chalk');
const packageJson = require('../package.json');

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

// - Terminal Success Message: begin
const terminalSuccess = (message) => {
  const colorGreen = '#32c682';
  return console.log(chalk.hex(colorGreen).bold('Notiflix Development Success: ') + chalk.hex(colorGreen)(message));
};
// - Terminal Success Message: end

// - Exports: begin
module.exports = {
  notiflix: 'Notiflix',
  notiflixUrl: '(https://notiflix.github.io)',
  version: (JSON.stringify((packageJson || {}).version) || '').replace(/"/gm, ''),
  author: (JSON.stringify((packageJson || {}).author) || '').replace(/"/gm, ''),
  license: 'MIT License (https://opensource.org/licenses/MIT)',
  year: '2019 - ' + (new Date().getFullYear() || '2024'),
  directories: {
    dist: 'dist',
    build: 'build',
    src: 'src',
  },
  files: {
    notiflix_JS: 'notiflix.js',
    notiflix_CSS: 'notiflix.css',
    notiflix_AIO_JS: 'notiflix-aio.js',
    notiflix_Notify_AIO_JS: 'notiflix-notify-aio.js',
    notiflix_Report_AIO_JS: 'notiflix-report-aio.js',
    notiflix_Confirm_AIO_JS: 'notiflix-confirm-aio.js',
    notiflix_Loading_AIO_JS: 'notiflix-loading-aio.js',
    notiflix_Block_AIO_JS: 'notiflix-block-aio.js',
  },
  modules: {
    notify: 'Notify',
    report: 'Report',
    confirm: 'Confirm',
    loading: 'Loading',
    block: 'Block',
  },
  cleanCSSOptions,
  minifyOptions,
  minifyOverrides,
  terminalError,
  terminalSuccess,
};
// - Exports: end
// Notiflix Constants: end
