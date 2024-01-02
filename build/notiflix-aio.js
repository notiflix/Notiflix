/*
* Notiflix AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.7
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2024 Notiflix, MIT License (https://opensource.org/licenses/MIT)
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.Notiflix = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // COMMON: SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // COMMON: SSR check: end

  // COMMON: Variables: begin
  var notiflixNamespace = 'Notiflix';
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
  // COMMON: Variables: end

  // NOTIFY: Default Settings: begin
  var typesNotify = {
    Success: 'Success',
    Failure: 'Failure',
    Warning: 'Warning',
    Info: 'Info',
  };
  var newNotifySettings;
  var notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    overlayID: 'NotiflixNotifyOverlay', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
    distance: '10px',
    opacity: 1,
    borderRadius: '5px',
    rtl: false,
    timeout: 3000,
    messageMaxLength: 110,
    backOverlay: false,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    plainText: true,
    showOnlyTheLastOne: false,
    clickToClose: false,
    pauseOnHover: true,

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    fontFamily: 'Quicksand',
    fontSize: '13px',
    cssAnimation: true,
    cssAnimationDuration: 400,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
    closeButton: false,
    useIcon: true,
    useFontAwesome: false,
    fontAwesomeIconStyle: 'basic', // 'basic' - 'shadow'
    fontAwesomeIconSize: '34px',

    success: {
      background: '#32c682',
      textColor: '#fff',
      childClassName: 'notiflix-notify-success',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-check-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },

    failure: {
      background: '#ff5549',
      textColor: '#fff',
      childClassName: 'notiflix-notify-failure',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-times-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(255,85,73,0.2)',
    },

    warning: {
      background: '#eebf31',
      textColor: '#fff',
      childClassName: 'notiflix-notify-warning',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-exclamation-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(238,191,49,0.2)',
    },

    info: {
      background: '#26c0d3',
      textColor: '#fff',
      childClassName: 'notiflix-notify-info',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-info-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(38,192,211,0.2)',
    },
  };
  // NOTIFY: Default Settings: end

  // REPORT: Default Settings: begin
  var typesReport = {
    Success: 'Success',
    Failure: 'Failure',
    Warning: 'Warning',
    Info: 'Info',
  };
  var newReportSettings;
  var reportSettings = {
    ID: 'NotiflixReportWrap', // can not customizable
    className: 'notiflix-report',
    width: '320px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    rtl: false,
    zindex: 4002,
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    backOverlayClickToClose: false,
    fontFamily: 'Quicksand',
    svgSize: '110px',
    plainText: true,
    titleFontSize: '16px',
    titleMaxLength: 34,
    messageFontSize: '13px',
    messageMaxLength: 400,
    buttonFontSize: '14px',
    buttonMaxLength: 34,
    cssAnimation: true,
    cssAnimationDuration: 360,
    cssAnimationStyle: 'fade', // 'fade' - 'zoom'

    success: {
      svgColor: '#32c682',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#32c682',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(50,198,130,0.2)',
    },

    failure: {
      svgColor: '#ff5549',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#ff5549',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(255,85,73,0.2)',
    },

    warning: {
      svgColor: '#eebf31',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#eebf31',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(238,191,49,0.2)',
    },

    info: {
      svgColor: '#26c0d3',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#26c0d3',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(38,192,211,0.2)',
    },
  };
  // REPORT: Default Settings: end

  // CONFIRM: Default Settings: begin
  var typesConfirm = {
    Show: 'Show',
    Ask: 'Ask',
    Prompt: 'Prompt',
  };
  var newConfirmSettings;
  var confirmSettings = {
    ID: 'NotiflixConfirmWrap', // can not customizable
    className: 'notiflix-confirm',
    width: '300px',
    zindex: 4003,
    position: 'center', // 'center' - 'center-top' - 'center-bottom' - 'right-top' - 'right-center' - 'right-bottom' - 'left-top' - 'left-center' - 'left-bottom'
    distance: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    rtl: false,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 300,
    cssAnimationStyle: 'fade', // 'zoom' - 'fade'
    plainText: true,

    titleColor: '#32c682',
    titleFontSize: '16px',
    titleMaxLength: 34,

    messageColor: '#1e1e1e',
    messageFontSize: '14px',
    messageMaxLength: 110,

    buttonsFontSize: '15px',
    buttonsMaxLength: 34,
    okButtonColor: '#f8f8f8',
    okButtonBackground: '#32c682',
    cancelButtonColor: '#f8f8f8',
    cancelButtonBackground: '#a9a9a9',
  };
  // CONFIRM: Default Settings: end

  // LOADING: Default Settings: begin
  var typesLoading = {
    Standard: 'Standard',
    Hourglass: 'Hourglass',
    Circle: 'Circle',
    Arrows: 'Arrows',
    Dots: 'Dots',
    Pulse: 'Pulse',
    Custom: 'Custom',
    Notiflix: 'Notiflix',
  };
  var newLoadingSettings;
  var loadingSettings = {
    ID: 'NotiflixLoadingWrap', // can not customizable
    className: 'notiflix-loading',
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    rtl: false,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 400,
    clickToClose: false,
    customSvgUrl: null,
    customSvgCode: null,
    svgSize: '80px',
    svgColor: '#32c682',
    messageID: 'NotiflixLoadingMessage',
    messageFontSize: '15px',
    messageMaxLength: 34,
    messageColor: '#dcdcdc',
  };
  // LOADING: Default Settings: end

  // BLOCK: Default Settings: begin
  var typesBlock = {
    Standard: 'Standard',
    Hourglass: 'Hourglass',
    Circle: 'Circle',
    Arrows: 'Arrows',
    Dots: 'Dots',
    Pulse: 'Pulse',
  };
  var newBlockSettings;
  var blockSettings = {
    ID: 'NotiflixBlockWrap', // can not customizable
    querySelectorLimit: 200,
    className: 'notiflix-block',
    position: 'absolute',
    zindex: 1000,
    backgroundColor: 'rgba(255,255,255,0.9)',
    rtl: false,
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 300,
    svgSize: '45px',
    svgColor: '#383838',
    messageFontSize: '14px',
    messageMaxLength: 34,
    messageColor: '#383838',
  };
  // BLOCK: Default Settings: end

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Console Log: begin
  var commonConsoleLog = function (message) {
    return console.log('%c ' + notiflixNamespace + ' Info ', 'padding:2px;border-radius:20px;color:#fff;background:#26c0d3', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Log: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // COMMON: Check Head or Body: end

  // COMMON: Set Internal CSS Codes: begin
  var commonSetInternalCSSCodes = function (getInternalCSSCodes, styleElementId) {
    // check doc head
    if (!commonCheckHeadOrBody('head')) { return false; }

    // internal css
    if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = styleElementId;
      internalCSS.innerHTML = getInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // COMMON: Set Internal CSS Codes: end

  // COMMON: Extend Options: begin
  var commonExtendOptions = function () {
    // variables
    var extended = {};
    var deep = false;
    var i = 0;
    // check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    // merge the object into the extended object
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // if property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    // loop through each object and conduct a merge
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // COMMON: Extend Options: end

  // COMMON: Get Plaintext: begin
  var commonGetPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // COMMON: Get Plaintext: end

  // REPORT: SVG Icon Success: begin
  var reportSvgIconSuccess = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#32c682'; }
    var reportSvgSuccess = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgSuccess;
  };
  // REPORT: SVG Icon Success: end

  // REPORT: SVG Icon Failure: begin
  var reportSvgIconFailure = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#ff5549'; }
    var reportSvgFailure = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgFailure;
  };
  // REPORT: SVG Icon Failure: end

  // REPORT: SVG Icon Warning: begin
  var reportSvgIconWarning = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#eebf31'; }
    var reportSvgWarning = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgWarning;
  };
  // REPORT: SVG Icon Warning: end

  // REPORT: SVG Icon Info: begin
  var reportSvgIconInfo = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#26c0d3'; }
    var reportSvgInfo = '<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="' + width + '" height="' + width + '" fill="' + color + '" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>';
    return reportSvgInfo;
  };
  // REPORT: SVG Icon Info: end

  // LOADING && BLOCK: SVG Icon Standard: begin
  var loadingAndBlockSvgIconStandard = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var standard = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + color + '" width="' + width + '" height="' + width + '" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>';
    return standard;
  };
  // LOADING && BLOCK: SVG Icon Standard: end

  // LOADING && BLOCK: SVG Icon Hourglass: begin
  var loadingAndBlockSvgIconHourglass = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var hourglass = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>';
    return hourglass;
  };
  // LOADING && BLOCK: SVG Icon Hourglass: end

  // LOADING && BLOCK: SVG Icon Circle: begin
  var loadingAndBlockSvgIconCircle = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var circle = '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + width + '" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:' + width + ';-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:' + width + ';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="' + color + '" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>';
    return circle;
  };
  // LOADING && BLOCK: SVG Icon Circle: end

  // LOADING && BLOCK: SVG Icon Arrows: begin
  var loadingAndBlockSvgIconArrows = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var arrows = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>';
    return arrows;
  };
  // LOADING && BLOCK: SVG Icon Arrows: end

  // LOADING && BLOCK: SVG Icon Dots: begin
  var loadingAndBlockSvgIconDots = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var dots = '<svg xmlns="http://www.w3.org/2000/svg" fill="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>';
    return dots;
  };
  // LOADING && BLOCK: SVG Icon Dots: end

  // LOADING && BLOCK: SVG Icon Pulse: begin
  var loadingAndBlockSvgIconPulse = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var pulse = '<svg xmlns="http://www.w3.org/2000/svg" stroke="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>';
    return pulse;
  };
  // LOADING && BLOCK: SVG Icon Pulse: end

  // LOADING && BLOCK: SVG Icon Notiflix: begin
  var loadingAndBlockSvgIconNotiflix = function (width, white, green) {
    if (!width) { width = '60px'; }
    if (!white) { white = '#f8f8f8'; }
    if (!green) { green = '#32c682'; }
    var notiflixIcon = '<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="' + width + '" height="' + width + '" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:' + white + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="' + green + '" stroke="' + green + '" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>';
    return notiflixIcon;
  };
  // LOADING && BLOCK: SVG Icon Notiflix: end

  // NOTIFY: Get Internal CSS Codes: begin
  var notifyGetInternalCSSCodes = function () {
    var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
    return notifyCSS || null;
  };
  // NOTIFY: Get Internal CSS Codes: end

  // NOTIFY: Create: begin
  var notifyCreateCounter = 0;
  var notifyCreate = function (notifyType, message, callbackOrOptions, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newNotifySettings) {
      Notiflix.Notify.init({});
    }

    // create a backup for new settings
    var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {});

    // check callbackOrOptions and options: begin
    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof callbackOrOptions === 'object') {
        newOptions = callbackOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
    }
    // check callbackOrOptions and options: end

    // notify type
    var theType = newNotifySettings[notifyType.toLocaleLowerCase('en')];

    // notify counter
    notifyCreateCounter++;

    // check the message: begin
    if (typeof message !== 'string') {
      message = 'Notiflix ' + notifyType;
    }
    // check the message: end

    // if plainText is true => HTML tags not allowed: begin
    if (newNotifySettings.plainText) {
      message = commonGetPlaintext(message); // message plain text
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
    if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
      // extend settings for error massege
      newNotifySettings = commonExtendOptions(true, newNotifySettings, { closeButton: true, messageMaxLength: 150 });
      // error message
      message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
    }
    // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end

    // check message max length: begin
    if (message.length > newNotifySettings.messageMaxLength) {
      message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
    }
    // check message max length: end

    // font awesome icon style: begin
    if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
      theType.fontAwesomeIconColor = theType.background;
    }
    // font awesome icon style: end

    // if cssAnimaion is false => duration: begin
    if (!newNotifySettings.cssAnimation) {
      newNotifySettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // notify wrap: begin
    var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement('div');
    ntflxNotifyWrap.id = notifySettings.wrapID;
    ntflxNotifyWrap.style.width = newNotifySettings.width;
    ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
    ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;

    // wrap position: begin
    if (newNotifySettings.position === 'center-center') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.margin = 'auto';
      ntflxNotifyWrap.classList.add('nx-flex-center-center');
      ntflxNotifyWrap.style.maxHeight = 'calc((100vh - ' + newNotifySettings.distance + ') - ' + newNotifySettings.distance + ')';
      ntflxNotifyWrap.style.display = 'flex';
      ntflxNotifyWrap.style.flexWrap = 'wrap';
      ntflxNotifyWrap.style.flexDirection = 'column';
      ntflxNotifyWrap.style.justifyContent = 'center';
      ntflxNotifyWrap.style.alignItems = 'center';
      ntflxNotifyWrap.style.pointerEvents = 'none';
    } else if (newNotifySettings.position === 'center-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'center-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.margin = 'auto';
    } else if (newNotifySettings.position === 'right-bottom') {
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.left = 'auto';
    } else if (newNotifySettings.position === 'left-top') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.right = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    } else if (newNotifySettings.position === 'left-bottom') {
      ntflxNotifyWrap.style.left = newNotifySettings.distance;
      ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = 'auto';
      ntflxNotifyWrap.style.right = 'auto';
    } else { // 'right-top' or else
      ntflxNotifyWrap.style.right = newNotifySettings.distance;
      ntflxNotifyWrap.style.top = newNotifySettings.distance;
      ntflxNotifyWrap.style.left = 'auto';
      ntflxNotifyWrap.style.bottom = 'auto';
    }
    // wrap position: end

    // if background overlay is true: begin
    if (newNotifySettings.backOverlay) {
      var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement('div');
      ntflxNotifyOverlay.id = notifySettings.overlayID;
      ntflxNotifyOverlay.style.width = '100%';
      ntflxNotifyOverlay.style.height = '100%';
      ntflxNotifyOverlay.style.position = 'fixed';
      ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
      ntflxNotifyOverlay.style.left = 0;
      ntflxNotifyOverlay.style.top = 0;
      ntflxNotifyOverlay.style.right = 0;
      ntflxNotifyOverlay.style.bottom = 0;
      ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
      ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? 'nx-with-animation' : '';
      ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';

      if (!window.document.getElementById(notifySettings.overlayID)) {
        window.document.body.appendChild(ntflxNotifyOverlay);
      }
    }
    // if background overlay is true: end

    if (!window.document.getElementById(notifySettings.wrapID)) {
      window.document.body.appendChild(ntflxNotifyWrap);
    }
    // notify wrap: end

    // notify content: begin
    var ntflxNotify = window.document.createElement('div');
    ntflxNotify.id = newNotifySettings.ID + '-' + notifyCreateCounter;
    ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'nx-with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'nx-with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'nx-with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'nx-with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'nx-notify-click-to-close' : '');
    ntflxNotify.style.fontSize = newNotifySettings.fontSize;
    ntflxNotify.style.color = theType.textColor;
    ntflxNotify.style.background = theType.background;
    ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
    ntflxNotify.style.pointerEvents = 'all';

    // rtl: begin
    if (newNotifySettings.rtl) {
      ntflxNotify.setAttribute('dir', 'rtl');
      ntflxNotify.classList.add('nx-rtl-on');
    }
    // rtl: end

    // font-family: begin
    ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
    // font-family: end

    // use css animation: begin
    if (newNotifySettings.cssAnimation) {
      ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
    }
    // use css animation: end

    // close button element: begin
    var closeButtonHTML = '';
    if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
      closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
    }
    // close buttpon element: end

    // use icon: begin
    if (newNotifySettings.useIcon) {
      // use font awesome
      if (newNotifySettings.useFontAwesome) {
        ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'nx-message-icon-fa-shadow' : 'nx-message-icon-fa-basic') + '"></i><span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
      // use notiflix icon
      else {
        var svgIcon = '';
        if (notifyType === typesNotify.Success) {  // success
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
        } else if (notifyType === typesNotify.Failure) { // failure
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
        } else if (notifyType === typesNotify.Warning) { // warning
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
        } else if (notifyType === typesNotify.Info) { // info
          svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
        }
        ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
    }
    // without icon
    else {
      ntflxNotify.innerHTML = '<span class="nx-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    }
    // use icon: end
    // notify content: end

    // notify append or prepend: begin
    if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first
      var notifyWrap = window.document.getElementById(notifySettings.wrapID);
      notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
    } else {
      window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
    }
    // notify append or prepend: end

    // remove by timeout or click: begin
    var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
    if (eachNotifyElement) {
      // timeout variables
      var timeoutHide;
      var timeoutRemove;

      // hide notify elm and hide overlay: begin
      var hideNotifyElementsAndOverlay = function () {
        eachNotifyElement.classList.add('nx-remove');
        var removeOverlay = window.document.getElementById(notifySettings.overlayID);
        if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) {
          removeOverlay.classList.add('nx-remove');
        }
        clearTimeout(timeoutHide);
      };
      // hide notify elm and hide overlay: end

      // remove notify elm and wrapper: begin
      var removeNotifyElmentsAndWrapper = function () {
        if (eachNotifyElement && eachNotifyElement.parentNode !== null) {
          eachNotifyElement.parentNode.removeChild(eachNotifyElement);
        }
        if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) { // if childs count === 0 remove wrap
          ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
          var removeOverlay = window.document.getElementById(notifySettings.overlayID);
          if (removeOverlay && removeOverlay.parentNode !== null) {
            removeOverlay.parentNode.removeChild(removeOverlay);
          }
        }
        clearTimeout(timeoutRemove);
      };
      // remove notify elm and wrapper: end

      // if has close button and callbackOrOptions is not a function: begin
      if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector('span.nx-close-button');
        closeButtonElm.addEventListener('click', function () {
          hideNotifyElementsAndOverlay();
          var clickToCloseTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(clickToCloseTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if has close button and callbackOrOptions is not a function: end

      // if callbackOrOptions or click to close: begin
      if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) {
        eachNotifyElement.addEventListener('click', function () {
          if (typeof callbackOrOptions === 'function') {
            callbackOrOptions();
          }
          hideNotifyElementsAndOverlay();
          var callbackTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(callbackTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if callbackOrOptions or click to close: end

      // else auto remove: begin
      if (!newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        // auto remove: begin
        var autoRemove = function () {
          timeoutHide = setTimeout(function () {
            hideNotifyElementsAndOverlay();
          }, newNotifySettings.timeout);
          timeoutRemove = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
          }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
        };
        autoRemove();
        // auto remove: end

        // pause auto remove: begin
        if (newNotifySettings.pauseOnHover) {
          eachNotifyElement.addEventListener('mouseenter', function () {
            eachNotifyElement.classList.add('nx-paused');
            clearTimeout(timeoutHide);
            clearTimeout(timeoutRemove);
          });
          eachNotifyElement.addEventListener('mouseleave', function () {
            eachNotifyElement.classList.remove('nx-paused');
            autoRemove();
          });
        }
        // pause auto remove: end
      }
      // else auto remove: end
    }
    // remove by timeout or click: end

    // notify - show only the last one: begin
    if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
      var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyCreateCounter + '])');
      for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
        var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
        if (eachNotifyElmNotLastOne.parentNode !== null) {
          eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
        }
      }
    }
    // notify - show only the last one: end

    // extend new settings with the backup settings
    newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);

  };
  // NOTIFY: Create: end

  // REPORT: Get Internal CSS Codes: begin
  var reportGetInternalCSSCodes = function () {
    var reportCSS = '[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    return reportCSS || null;
  };
  // REPORT: Get Internal CSS Codes: end

  // REPORT: Create: begin
  var reportCreate = function (reportType, title, message, buttonText, callbackOrOptions, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newReportSettings) {
      Notiflix.Report.init({});
    }

    // create a backup for settings
    var newReportSettingsBackup = {};

    // check callbackOrOptions and options: begin
    if ((typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof callbackOrOptions === 'object') {
        newOptions = callbackOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend the backup settings with new settings
      newReportSettingsBackup = commonExtendOptions(true, newReportSettings, {});

      // extend new settings with the options
      newReportSettings = commonExtendOptions(true, newReportSettings, newOptions);
    }
    // check callbackOrOptions and callback: end

    // report type
    var theType = newReportSettings[reportType.toLocaleLowerCase('en')];

    // check the arguments: begin
    if (typeof title !== 'string') { title = 'Notiflix ' + reportType; }
    if (typeof message !== 'string') {
      if (reportType === typesReport.Success) {
        message = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein';
      }
      else if (reportType === typesReport.Failure) {
        message = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford';
      }
      else if (reportType === typesReport.Warning) {
        message = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk';
      }
      else if (reportType === typesReport.Info) {
        message = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung';
      }
    }
    if (typeof buttonText !== 'string') { buttonText = 'Okay'; }
    // check the arguments: end

    // if plainText is true => HTML tags not allowed: begin
    if (newReportSettings.plainText) {
      title = commonGetPlaintext(title);
      message = commonGetPlaintext(message);
      buttonText = commonGetPlaintext(buttonText);
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: begin
    if (!newReportSettings.plainText) {
      if (title.length > newReportSettings.titleMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.';
        buttonText = 'Okay';
      }
      if (message.length > newReportSettings.messageMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.';
        buttonText = 'Okay';
      }
      if (buttonText.length > newReportSettings.buttonMaxLength) {
        title = 'Possible HTML Tags Error';
        message = 'The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.';
        buttonText = 'Okay';
      }
    }
    // if plainText is false but the contents length more than ${title | message | buttonText}MaxLength => Possible HTML tags error: end

    // max length: begin
    if (title.length > newReportSettings.titleMaxLength) {
      title = title.substring(0, newReportSettings.titleMaxLength) + '...';
    }
    if (message.length > newReportSettings.messageMaxLength) {
      message = message.substring(0, newReportSettings.messageMaxLength) + '...';
    }
    if (buttonText.length > newReportSettings.buttonMaxLength) {
      buttonText = buttonText.substring(0, newReportSettings.buttonMaxLength) + '...';
    }
    // max length: end

    // if cssAnimaion is false => duration: begin
    if (!newReportSettings.cssAnimation) {
      newReportSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // report wrap: begin
    var ntflxReportWrap = window.document.createElement('div');
    ntflxReportWrap.id = reportSettings.ID;
    ntflxReportWrap.className = newReportSettings.className;
    ntflxReportWrap.style.zIndex = newReportSettings.zindex;
    ntflxReportWrap.style.borderRadius = newReportSettings.borderRadius;
    ntflxReportWrap.style.fontFamily = '"' + newReportSettings.fontFamily + '", ' + defaultFontFamily;

    // rtl: begin
    if (newReportSettings.rtl) {
      ntflxReportWrap.setAttribute('dir', 'rtl');
      ntflxReportWrap.classList.add('nx-rtl-on');
    }
    // rtl: end

    // position: begin
    ntflxReportWrap.style.display = 'flex';
    ntflxReportWrap.style.flexWrap = 'wrap';
    ntflxReportWrap.style.flexDirection = 'column';
    ntflxReportWrap.style.alignItems = 'center';
    ntflxReportWrap.style.justifyContent = 'center';
    // position: end

    // overlay: begin
    var reportOverlay = '';
    var reportOverlayClickToClose = newReportSettings.backOverlayClickToClose === true;
    if (newReportSettings.backOverlay) {
      reportOverlay = '<div class="' + newReportSettings.className + '-overlay' + (newReportSettings.cssAnimation ? ' nx-with-animation' : '') + (reportOverlayClickToClose ? ' nx-report-click-to-close' : '') + '" style="background:' + (theType.backOverlayColor || newReportSettings.backOverlayColor) + ';animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;"></div>';
    }
    // overlay: end

    // svg icon: begin
    var svgIcon = '';
    if (reportType === typesReport.Success) {
      svgIcon = reportSvgIconSuccess(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Failure) {
      svgIcon = reportSvgIconFailure(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Warning) {
      svgIcon = reportSvgIconWarning(newReportSettings.svgSize, theType.svgColor);
    } else if (reportType === typesReport.Info) {
      svgIcon = reportSvgIconInfo(newReportSettings.svgSize, theType.svgColor);
    }
    // svg icon: end

    ntflxReportWrap.innerHTML = reportOverlay + '<div class="' + newReportSettings.className + '-content' + (newReportSettings.cssAnimation ? ' nx-with-animation ' : '') + ' nx-' + newReportSettings.cssAnimationStyle + '" style="width:' + newReportSettings.width + '; background:' + newReportSettings.backgroundColor + '; animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;">' +
      '<div style="width:' + newReportSettings.svgSize + '; height:' + newReportSettings.svgSize + ';" class="' + newReportSettings.className + '-icon">' + svgIcon + '</div>' +
      '<h5 class="' + newReportSettings.className + '-title" style="font-weight:500; font-size:' + newReportSettings.titleFontSize + '; color:' + theType.titleColor + ';">' + title + '</h5>' +
      '<p class="' + newReportSettings.className + '-message" style="font-size:' + newReportSettings.messageFontSize + '; color:' + theType.messageColor + ';">' + message + '</p>' +
      '<a id="NXReportButton" class="' + newReportSettings.className + '-button" style="font-weight:500; font-size:' + newReportSettings.buttonFontSize + '; background:' + theType.buttonBackground + '; color:' + theType.buttonColor + ';">' + buttonText + '</a>' +
      '</div>';

    // if there is no report element
    if (!window.document.getElementById(ntflxReportWrap.id)) {
      // append
      window.document.body.appendChild(ntflxReportWrap);

      // report remove: begin
      var reportRemove = function () {
        var elementWrapper = window.document.getElementById(ntflxReportWrap.id);
        elementWrapper.classList.add('nx-remove');
        var timeout = setTimeout(function () {
          if (elementWrapper.parentNode !== null) {
            elementWrapper.parentNode.removeChild(elementWrapper);
          }
          clearTimeout(timeout);
        }, newReportSettings.cssAnimationDuration);
      };
      // report remove: end

      // callback: begin
      var elementButton = window.document.getElementById('NXReportButton');
      elementButton.addEventListener('click', function () {
        // if callback: begin
        if (typeof callbackOrOptions === 'function') {
          callbackOrOptions();
        }
        // if callback: end

        // remove report
        reportRemove();
      });
      // callback: end

      // overlay click to close: begin
      if (reportOverlay && reportOverlayClickToClose) {
        var elementOverlay = window.document.querySelector('.nx-report-click-to-close');
        elementOverlay.addEventListener('click', function () {
          reportRemove();
        });
      }
      // overlay click to close: end
    }
    // report wrap: end

    // extend new settings with the backup settings
    newReportSettings = commonExtendOptions(true, newReportSettings, newReportSettingsBackup);

  };
  // REPORT: Create: end

  // CONFIRM: Get Internal CSS Codes: begin
  var confirmGetInternalCSSCodes = function () {
    var confirmCSS = '[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}';
    return confirmCSS || null;
  };
  // CONFIRM: Get Internal CSS Codes: end

  // CONFIRM: Create: begin
  var confirmCreate = function (confirmType, title, messageOrQuestion, answer, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newConfirmSettings) {
      Notiflix.Confirm.init({});
    }

    // create a backup for new settings
    var newConfirmSettingsBackup = commonExtendOptions(true, newConfirmSettings, {});

    // check the "options": begin
    if (typeof options === 'object' && !Array.isArray(options)) {
      // extend new settings with the new options
      newConfirmSettings = commonExtendOptions(true, newConfirmSettings, options);
    }
    // check the "options": end

    // check the arguments: begin
    if (typeof title !== 'string') { title = 'Notiflix Confirm'; }
    if (typeof messageOrQuestion !== 'string') { messageOrQuestion = 'Do you agree with me?'; }
    if (typeof okButtonText !== 'string') { okButtonText = 'Yes'; }
    if (typeof cancelButtonText !== 'string') { cancelButtonText = 'No'; }
    if (typeof okButtonCallback !== 'function') { okButtonCallback = undefined; }
    if (typeof cancelButtonCallback !== 'function') { cancelButtonCallback = undefined; }
    // check the arguments: end

    // if plainText is true => HTML tags not allowed: begin
    if (newConfirmSettings.plainText) {
      title = commonGetPlaintext(title);
      messageOrQuestion = commonGetPlaintext(messageOrQuestion);
      okButtonText = commonGetPlaintext(okButtonText);
      cancelButtonText = commonGetPlaintext(cancelButtonText);
    }
    // if plainText is true => HTML tags not allowed: end

    // if plainText is false but the contents length more than ***MaxLength => Possible HTML tags error: begin
    if (!newConfirmSettings.plainText) {
      if (title.length > newConfirmSettings.titleMaxLength) {
        title = 'Possible HTML Tags Error';
        messageOrQuestion = 'The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.';
        okButtonText = 'Okay';
        cancelButtonText = '...';
      }
      if (messageOrQuestion.length > newConfirmSettings.messageMaxLength) {
        title = 'Possible HTML Tags Error';
        messageOrQuestion = 'The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.';
        okButtonText = 'Okay';
        cancelButtonText = '...';
      }
      if ((okButtonText.length || cancelButtonText.length) > newConfirmSettings.buttonsMaxLength) {
        title = 'Possible HTML Tags Error';
        messageOrQuestion = 'The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.';
        okButtonText = 'Okay';
        cancelButtonText = '...';
      }
    }
    // if plainText is false but the contents length more than ***MaxLength => Possible HTML tags error: end

    // max length: begin
    if (title.length > newConfirmSettings.titleMaxLength) {
      title = title.substring(0, newConfirmSettings.titleMaxLength) + '...';
    }
    if (messageOrQuestion.length > newConfirmSettings.messageMaxLength) {
      messageOrQuestion = messageOrQuestion.substring(0, newConfirmSettings.messageMaxLength) + '...';
    }
    if (okButtonText.length > newConfirmSettings.buttonsMaxLength) {
      okButtonText = okButtonText.substring(0, newConfirmSettings.buttonsMaxLength) + '...';
    }
    if (cancelButtonText.length > newConfirmSettings.buttonsMaxLength) {
      cancelButtonText = cancelButtonText.substring(0, newConfirmSettings.buttonsMaxLength) + '...';
    }
    // max length: end

    // if cssAnimaion is false => duration: begin
    if (!newConfirmSettings.cssAnimation) {
      newConfirmSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // confirm wrap: begin
    var ntflxConfirmWrap = window.document.createElement('div');
    ntflxConfirmWrap.id = confirmSettings.ID;
    ntflxConfirmWrap.className = newConfirmSettings.className + (newConfirmSettings.cssAnimation ? ' nx-with-animation nx-' + newConfirmSettings.cssAnimationStyle : '');
    ntflxConfirmWrap.style.zIndex = newConfirmSettings.zindex;
    ntflxConfirmWrap.style.padding = newConfirmSettings.distance;

    // rtl: begin
    if (newConfirmSettings.rtl) {
      ntflxConfirmWrap.setAttribute('dir', 'rtl');
      ntflxConfirmWrap.classList.add('nx-rtl-on');
    }
    // rtl: end

    // position: begin
    var confirmPosition = typeof newConfirmSettings.position === 'string' ? newConfirmSettings.position.trim() : 'center';
    ntflxConfirmWrap.classList.add('nx-position-' + confirmPosition);
    // position: end

    // font-family
    ntflxConfirmWrap.style.fontFamily = '"' + newConfirmSettings.fontFamily + '", ' + defaultFontFamily;

    // if background overlay is true: begin
    var confirmOverlay = '';
    if (newConfirmSettings.backOverlay) {
      confirmOverlay = '<div class="' + newConfirmSettings.className + '-overlay' + (newConfirmSettings.cssAnimation ? ' nx-with-animation' : '') + '" style="background:' + newConfirmSettings.backOverlayColor + ';animation-duration:' + newConfirmSettings.cssAnimationDuration + 'ms;"></div>';
    }
    // if background overlay is true: end

    // if have a callback => add cancel button: begin
    var cancelButtonHTML = '';
    if (typeof okButtonCallback === 'function') {
      cancelButtonHTML = '<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:' + newConfirmSettings.cancelButtonColor + ';background:' + newConfirmSettings.cancelButtonBackground + ';font-size:' + newConfirmSettings.buttonsFontSize + ';">' + cancelButtonText + '</a>';
    }
    // if have a callback => add cancel button: end

    // check the validation module: begin
    var setValidationInput = '';
    var theExpectedAnswer = null;
    var theClientAnswer = undefined;
    if (confirmType === typesConfirm.Ask || confirmType === typesConfirm.Prompt) {
      theExpectedAnswer = answer || '';
      var inputMaxLength = (confirmType === typesConfirm.Ask) ? Math.ceil(theExpectedAnswer.length * 1.5) : (theExpectedAnswer.length > 200 ? Math.ceil(theExpectedAnswer.length * 1.5) : 250);
      var inputDefaultValueAttr = confirmType === typesConfirm.Prompt ? ('value="' + theExpectedAnswer + '"') : '';
      setValidationInput = '<div><input id="NXConfirmValidationInput" type="text" ' + inputDefaultValueAttr + ' maxlength="' + inputMaxLength + '" style="font-size:' + newConfirmSettings.messageFontSize + ';border-radius: ' + newConfirmSettings.borderRadius + ';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>';
    }
    // check the validation module: end

    // confirm wrap content: begin
    ntflxConfirmWrap.innerHTML = confirmOverlay +
      '<div class="' + newConfirmSettings.className + '-content" style="width:' + newConfirmSettings.width + '; background:' + newConfirmSettings.backgroundColor + '; animation-duration:' + newConfirmSettings.cssAnimationDuration + 'ms; border-radius: ' + newConfirmSettings.borderRadius + ';">' +
      '<div class="' + newConfirmSettings.className + '-head">' +
      '<h5 style="color:' + newConfirmSettings.titleColor + ';font-size:' + newConfirmSettings.titleFontSize + ';">' + title + '</h5>' +
      '<div style="color:' + newConfirmSettings.messageColor + ';font-size:' + newConfirmSettings.messageFontSize + ';">' + messageOrQuestion + setValidationInput + '</div>' +
      '</div>' +
      '<div class="' + newConfirmSettings.className + '-buttons">' +
      '<a id="NXConfirmButtonOk" class="nx-confirm-button-ok' + (typeof okButtonCallback === 'function' ? '' : ' nx-full') + '" style="color:' + newConfirmSettings.okButtonColor + ';background:' + newConfirmSettings.okButtonBackground + ';font-size:' + newConfirmSettings.buttonsFontSize + ';">' + okButtonText + '</a>' +
      cancelButtonHTML +
      '</div>' +
      '</div>';
    // confirm wrap content: end
    // confirm wrap: end

    // if there is no confirm box: begin
    if (!window.document.getElementById(ntflxConfirmWrap.id)) {
      window.document.body.appendChild(ntflxConfirmWrap);

      // buttons && input listener: begin
      var confirmCloseWrap = window.document.getElementById(ntflxConfirmWrap.id);
      var okButton = window.document.getElementById('NXConfirmButtonOk');

      // validation input listener: begin
      var validationInput = window.document.getElementById('NXConfirmValidationInput');
      if (validationInput) {
        validationInput.focus();
        validationInput.setSelectionRange(0, (validationInput.value || '').length);
        validationInput.addEventListener('keyup', function (event) {
          var thisValue = event.target.value;
          if (
            (confirmType === typesConfirm.Ask) &&
            (thisValue !== theExpectedAnswer)
          ) {
            event.preventDefault();
            validationInput.classList.add('nx-validation-failure');
            validationInput.classList.remove('nx-validation-success');
          } else {
            if (confirmType === typesConfirm.Ask) {
              validationInput.classList.remove('nx-validation-failure');
              validationInput.classList.add('nx-validation-success');
            }
            var isEnter = (event.key || '').toLocaleLowerCase('en') === 'enter' || event.keyCode === 13;
            if (isEnter) {
              okButton.dispatchEvent(new Event('click'));
            }
          }
        });
      }
      // validation input listener: end

      // ok button listener: begin
      okButton.addEventListener('click', function (event) {
        // check the answer if the type is "Ask": begin
        if (confirmType === typesConfirm.Ask && theExpectedAnswer && validationInput) {
          var inputValue = (validationInput.value || '').toString();
          if (inputValue !== theExpectedAnswer) {
            validationInput.focus();
            validationInput.classList.add('nx-validation-failure');
            event.stopPropagation();
            event.preventDefault();
            event.returnValue = false;
            event.cancelBubble = true;
            return false;
          } else {
            validationInput.classList.remove('nx-validation-failure');
          }
        }
        // check the answer if the type is "Ask": end

        // if ok callback && if ok callback is a function
        if (typeof okButtonCallback === 'function') {
          if (confirmType === typesConfirm.Prompt && validationInput) {
            theClientAnswer = validationInput.value || '';
          }
          okButtonCallback(theClientAnswer);
        }
        confirmCloseWrap.classList.add('nx-remove');

        var timeout = setTimeout(function () {
          if (confirmCloseWrap.parentNode !== null) {
            confirmCloseWrap.parentNode.removeChild(confirmCloseWrap);
            clearTimeout(timeout);
          }
        }, newConfirmSettings.cssAnimationDuration);
      });
      // ok button listener: end

      // if ok callback && if ok callback a function => add Cancel Button listener: begin
      if (typeof okButtonCallback === 'function') {
        // cancel button listener: begin
        var cancelButton = window.document.getElementById('NXConfirmButtonCancel');
        cancelButton.addEventListener('click', function () {
          // if cancel callback && if cancel callback a function
          if (typeof cancelButtonCallback === 'function') {
            if (confirmType === typesConfirm.Prompt && validationInput) {
              theClientAnswer = validationInput.value || '';
            }
            cancelButtonCallback(theClientAnswer);
          }
          confirmCloseWrap.classList.add('nx-remove');

          var timeout = setTimeout(function () {
            if (confirmCloseWrap.parentNode !== null) {
              confirmCloseWrap.parentNode.removeChild(confirmCloseWrap);
              clearTimeout(timeout);
            }
          }, newConfirmSettings.cssAnimationDuration);
        });
        // cancel button listener: end
      }
      // if ok callback && if ok callback a function => add Cancel Button listener: end
      // buttons && input listener: end
    }
    // if there is no confirm box: end

    // extend new settings with the backup settings
    newConfirmSettings = commonExtendOptions(true, newConfirmSettings, newConfirmSettingsBackup);
  };
  // CONFIRM: Create: end

  // LOADING: Get Internal CSS Codes: begin
  var loadingGetInternalCSSCodes = function () {
    var loadingCSS = '[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}';
    return loadingCSS || null;
  };
  // LOADING: Get Internal CSS Codes: end

  // LOADING: Create: begin
  var loadingCreate = function (loadingType, messageOrOptions, options, display, delay) {
    // check doc body
    if (!commonCheckHeadOrBody('body')) { return false; }

    // if not initialized pretend like init
    if (!newLoadingSettings) {
      Notiflix.Loading.init({});
    }

    // create a backup for new settings
    var newLoadingSettingsBackup = commonExtendOptions(true, newLoadingSettings, {});

    // check "messageOrOptions" and "options": begin
    if ((typeof messageOrOptions === 'object' && !Array.isArray(messageOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof messageOrOptions === 'object') {
        newOptions = messageOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newLoadingSettings = commonExtendOptions(true, newLoadingSettings, newOptions);
    }
    // check "messageOrOptions" and "options": end

    // check the message
    var message = '';
    if (typeof messageOrOptions === 'string' && messageOrOptions.length > 0) {
      message = messageOrOptions;
    }

    // show loading
    if (display) {

      // if message settings: begin
      if (message.length > newLoadingSettings.messageMaxLength) {
        message = commonGetPlaintext(message).toString().substring(0, newLoadingSettings.messageMaxLength) + '...';
      } else {
        message = commonGetPlaintext(message).toString();
      }
      var messageHTML = '';
      if (message.length > 0) {
        messageHTML = '<p id="' + newLoadingSettings.messageID + '" class="nx-loading-message" style="color:' + newLoadingSettings.messageColor + ';font-size:' + newLoadingSettings.messageFontSize + ';">' + message + '</p>';
      }
      // if message settings: end

      // if cssAnimaion is false => duration: begin
      if (!newLoadingSettings.cssAnimation) {
        newLoadingSettings.cssAnimationDuration = 0;
      }
      // if cssAnimaion is false => duration: end

      // svgIcon: begin
      var svgIcon = '';
      if (loadingType === typesLoading.Standard) {
        svgIcon = loadingAndBlockSvgIconStandard(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Hourglass) {
        svgIcon = loadingAndBlockSvgIconHourglass(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Circle) {
        svgIcon = loadingAndBlockSvgIconCircle(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Arrows) {
        svgIcon = loadingAndBlockSvgIconArrows(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Dots) {
        svgIcon = loadingAndBlockSvgIconDots(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (loadingType === typesLoading.Pulse) {
        svgIcon = loadingAndBlockSvgIconPulse(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (
        loadingType === typesLoading.Custom &&
        newLoadingSettings.customSvgCode !== null &&
        newLoadingSettings.customSvgUrl === null
      ) {
        svgIcon = newLoadingSettings.customSvgCode || '';
      } else if (
        loadingType === typesLoading.Custom &&
        newLoadingSettings.customSvgUrl !== null &&
        newLoadingSettings.customSvgCode === null
      ) {
        svgIcon = '<img class="nx-custom-loading-icon" width="' + newLoadingSettings.svgSize + '" height="' + newLoadingSettings.svgSize + '" src="' + newLoadingSettings.customSvgUrl + '" alt="Notiflix">';
      } else if (
        loadingType === typesLoading.Custom &&
        (newLoadingSettings.customSvgUrl === null || newLoadingSettings.customSvgCode === null)
      ) {
        commonConsoleError('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.');
        return false;
      } else {
        svgIcon = loadingAndBlockSvgIconNotiflix(newLoadingSettings.svgSize, '#f8f8f8', '#32c682');
      }
      var svgSizeAsDigit = parseInt((newLoadingSettings.svgSize || '').replace(/[^0-9]/g, ''));
      var winWidth = window.innerWidth;
      var maxSvgWidthPx = svgSizeAsDigit >= winWidth ? (winWidth - 40) + 'px' : svgSizeAsDigit + 'px';
      var svgIconHTML = '<div style="width:' + maxSvgWidthPx + '; height:' + maxSvgWidthPx + ';" class="' + newLoadingSettings.className + '-icon' + (message.length > 0 ? ' nx-with-message' : '') + '">' + svgIcon + '</div>';
      // svgIcon: end

      // loading wrap: begin
      var ntflxLoadingWrap = window.document.createElement('div');
      ntflxLoadingWrap.id = loadingSettings.ID;
      ntflxLoadingWrap.className = newLoadingSettings.className + (newLoadingSettings.cssAnimation ? ' nx-with-animation' : '') + (newLoadingSettings.clickToClose ? ' nx-loading-click-to-close' : '');
      ntflxLoadingWrap.style.zIndex = newLoadingSettings.zindex;
      ntflxLoadingWrap.style.background = newLoadingSettings.backgroundColor;
      ntflxLoadingWrap.style.animationDuration = newLoadingSettings.cssAnimationDuration + 'ms';
      ntflxLoadingWrap.style.fontFamily = '"' + newLoadingSettings.fontFamily + '", ' + defaultFontFamily;
      ntflxLoadingWrap.style.display = 'flex';
      ntflxLoadingWrap.style.flexWrap = 'wrap';
      ntflxLoadingWrap.style.flexDirection = 'column';
      ntflxLoadingWrap.style.alignItems = 'center';
      ntflxLoadingWrap.style.justifyContent = 'center';

      // rtl: begin
      if (newLoadingSettings.rtl) {
        ntflxLoadingWrap.setAttribute('dir', 'rtl');
        ntflxLoadingWrap.classList.add('nx-rtl-on');
      }
      // rtl: end

      // append: begin
      ntflxLoadingWrap.innerHTML = svgIconHTML + messageHTML;

      // if there is no loading element
      if (!window.document.getElementById(ntflxLoadingWrap.id)) {
        // append
        window.document.body.appendChild(ntflxLoadingWrap);

        // if click to close
        if (newLoadingSettings.clickToClose) {
          var loadingWrapElm = window.document.getElementById(ntflxLoadingWrap.id);
          loadingWrapElm.addEventListener('click', function () {
            ntflxLoadingWrap.classList.add('nx-remove');
            var timeout = setTimeout(function () {
              if (ntflxLoadingWrap.parentNode !== null) {
                ntflxLoadingWrap.parentNode.removeChild(ntflxLoadingWrap);
                clearTimeout(timeout);
              }
            }, newLoadingSettings.cssAnimationDuration);
          });
        }
      }
      // append: end
    }
    // remove loading
    else {
      // if there is a loading element
      if (window.document.getElementById(loadingSettings.ID)) {
        var loadingElm = window.document.getElementById(loadingSettings.ID);
        var timeout = setTimeout(function () {
          loadingElm.classList.add('nx-remove');
          var timeout2 = setTimeout(function () {
            if (loadingElm.parentNode !== null) {
              loadingElm.parentNode.removeChild(loadingElm);
              clearTimeout(timeout2);
            }
          }, newLoadingSettings.cssAnimationDuration);
          clearTimeout(timeout);
        }, delay);
      }
    }

    // extend new settings with the backup settings
    newLoadingSettings = commonExtendOptions(true, newLoadingSettings, newLoadingSettingsBackup);
  };
  // LOADING: Create: end

  // LOADING: Change Message: begin
  var loadingChangeMessage = function (newMessage) {
    // check the new message
    if (typeof newMessage !== 'string') {
      newMessage = '';
    }
    // if has any loading
    var messageWrap = window.document.getElementById(loadingSettings.ID);
    if (messageWrap) {
      // if there is a new message
      if (newMessage.length > 0) {
        // max length: begin
        if (newMessage.length > newLoadingSettings.messageMaxLength) {
          newMessage = commonGetPlaintext(newMessage).substring(0, newLoadingSettings.messageMaxLength) + '...';
        } else {
          newMessage = commonGetPlaintext(newMessage);
        }
        // max length: end

        // there is a message element
        var oldMessageElm = messageWrap.getElementsByTagName('p')[0];
        if (oldMessageElm) {
          oldMessageElm.innerHTML = newMessage; // change the message
        }
        // there is no message element
        else {
          // create a new message element: begin
          var newMessageHTML = window.document.createElement('p');
          newMessageHTML.id = newLoadingSettings.messageID;
          newMessageHTML.className = 'nx-loading-message nx-loading-message-new';
          newMessageHTML.style.color = newLoadingSettings.messageColor;
          newMessageHTML.style.fontSize = newLoadingSettings.messageFontSize;
          newMessageHTML.innerHTML = newMessage;
          messageWrap.appendChild(newMessageHTML);
          // create a new message element: end
        }
      }
      // if no message
      else {
        commonConsoleError('Where is the new message?');
      }
    }
  };
  // LOADING: Change Message: end

  // BLOCK: Get Internal CSS Codes: begin
  var blockGetInternalCSSCodes = function () {
    var blockCSS = '[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}';
    return blockCSS || null;
  };
  // BLOCK: Get Internal CSS Codes: end

  // BLOCK: Create or Remove: begin
  var blockCreateOrRemoveCounter = 0;
  var blockCreateOrRemove = function (isCreate, blockType, selectorOrHTMLElements, messageOrOptions, options, delay) {
    var allHTMLElements;

    // if, check and set Array of HTMLElements
    if (Array.isArray(selectorOrHTMLElements)) {
      if (selectorOrHTMLElements.length < 1) {
        commonConsoleError('Array of HTMLElements should contains at least one HTMLElement.');
        return false;
      }
      allHTMLElements = selectorOrHTMLElements;
    }
    // else if, check and set NodeListOf<HTMLElement>
    else if (Object.prototype.isPrototypeOf.call(NodeList.prototype, selectorOrHTMLElements)) {
      if (selectorOrHTMLElements.length < 1) {
        commonConsoleError('NodeListOf<HTMLElement> should contains at least one HTMLElement.');
        return false;
      }
      allHTMLElements = Array.prototype.slice.call(selectorOrHTMLElements);
    }
    // else, check and set the selector
    else {
      // check selector is valid: begin
      var selectorIsNotValid = (typeof selectorOrHTMLElements !== 'string') || ((selectorOrHTMLElements || '').length < 1) || ((selectorOrHTMLElements || '').length === 1 && ((selectorOrHTMLElements || '')[0] === '#' || (selectorOrHTMLElements || '')[0] === '.'));
      if (selectorIsNotValid) {
        commonConsoleError('The selector parameter must be a string and matches a specified CSS selector(s).');
        return false;
      }
      // check selector is valid: end

      // check the selector: begin
      var nodeListOfHTMLElements = window.document.querySelectorAll(selectorOrHTMLElements);
      if (nodeListOfHTMLElements.length < 1) {
        commonConsoleError('You called the "Notiflix.Block..." function with "' + selectorOrHTMLElements + '" selector, but there is no such element(s) in the document.');
        return false;
      }
      // check the selector: end

      allHTMLElements = nodeListOfHTMLElements;
    }

    // if not initialized pretend like init: begin
    if (!newBlockSettings) {
      Notiflix.Block.init({});
    }
    // if not initialized pretend like init: end

    // create a backup for new settings
    var newBlockSettingsBackup = commonExtendOptions(true, newBlockSettings, {});

    // check "messageOrOptions" and "options": begin
    if ((typeof messageOrOptions === 'object' && !Array.isArray(messageOrOptions)) || (typeof options === 'object' && !Array.isArray(options))) {
      // new options
      var newOptions = {};
      if (typeof messageOrOptions === 'object') {
        newOptions = messageOrOptions;
      } else if (typeof options === 'object') {
        newOptions = options;
      }

      // extend new settings with the new options
      newBlockSettings = commonExtendOptions(true, newBlockSettings, newOptions);
    }
    // check "messageOrOptions" and "options": end

    // check the message: begin
    var message = '';
    if (typeof messageOrOptions === 'string' && messageOrOptions.length > 0) {
      message = messageOrOptions;
    }
    // check the message: end

    // if cssAnimaion is false => duration: begin
    if (!newBlockSettings.cssAnimation) {
      newBlockSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion is false => duration: end

    // check the class name: begin
    var blockClassName = blockSettings.className;
    if (typeof newBlockSettings.className === 'string') {
      blockClassName = newBlockSettings.className.trim();
    }
    // check the class name: end

    // check query limit: begin
    var getQueryLimit = typeof newBlockSettings.querySelectorLimit === 'number' ? newBlockSettings.querySelectorLimit : 200;
    var checkQueryLimit = (allHTMLElements || []).length >= getQueryLimit ? getQueryLimit : allHTMLElements.length;
    // check query limit: end

    // position class name for the non-static reference elements
    var positionClassForNonStaticRef = 'nx-block-temporary-position';

    // block
    if (isCreate) {
      // void and unavailable elements
      var voidAndUnavailableElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr', 'html', 'head', 'title', 'script', 'style', 'iframe'];

      // add element(s) and style: begin
      for (var queryIndex = 0; queryIndex < checkQueryLimit; queryIndex++) {
        var eachElement = allHTMLElements[queryIndex];
        if (eachElement) {
          if (voidAndUnavailableElements.indexOf(eachElement.tagName.toLocaleLowerCase('en')) > -1) {
            break;
          }

          // check block element exist: begin
          var eachBlockElement = eachElement.querySelectorAll('[id^=' + blockSettings.ID + ']');
          if (eachBlockElement.length < 1) {

            // check the icon: begin
            var icon = '';
            if (blockType) {
              if (blockType === typesBlock.Hourglass) {
                icon = loadingAndBlockSvgIconHourglass(newBlockSettings.svgSize, newBlockSettings.svgColor);
              } else if (blockType === typesBlock.Circle) {
                icon = loadingAndBlockSvgIconCircle(newBlockSettings.svgSize, newBlockSettings.svgColor);
              } else if (blockType === typesBlock.Arrows) {
                icon = loadingAndBlockSvgIconArrows(newBlockSettings.svgSize, newBlockSettings.svgColor);
              } else if (blockType === typesBlock.Dots) {
                icon = loadingAndBlockSvgIconDots(newBlockSettings.svgSize, newBlockSettings.svgColor);
              } else if (blockType === typesBlock.Pulse) {
                icon = loadingAndBlockSvgIconPulse(newBlockSettings.svgSize, newBlockSettings.svgColor);
              } else { // typesBlock.Standard, also fallback
                icon = loadingAndBlockSvgIconStandard(newBlockSettings.svgSize, newBlockSettings.svgColor);
              }
            }
            var iconElement = '<span class="' + blockClassName + '-icon" style="width:' + newBlockSettings.svgSize + ';height:' + newBlockSettings.svgSize + ';">' + icon + '</span>';
            // check the icon: end

            // check the message: begin
            var messageElement = '';
            if (message.length > 0) {
              if (message.length > newBlockSettings.messageMaxLength) {
                message = commonGetPlaintext(message).substring(0, newBlockSettings.messageMaxLength) + '...';
              } else {
                message = commonGetPlaintext(message);
              }
              messageElement = '<span style="font-size:' + newBlockSettings.messageFontSize + ';color:' + newBlockSettings.messageColor + ';" class="' + blockClassName + '-message">' + message + '</span>';
            }
            // check the message: end

            // block element: begin
            blockCreateOrRemoveCounter++;
            var notiflixBlockWrap = window.document.createElement('div');
            notiflixBlockWrap.id = blockSettings.ID + '-' + blockCreateOrRemoveCounter;
            notiflixBlockWrap.className = blockClassName + (newBlockSettings.cssAnimation ? ' nx-with-animation' : '');
            notiflixBlockWrap.style.position = newBlockSettings.position;
            notiflixBlockWrap.style.zIndex = newBlockSettings.zindex;
            notiflixBlockWrap.style.background = newBlockSettings.backgroundColor;
            notiflixBlockWrap.style.animationDuration = newBlockSettings.cssAnimationDuration + 'ms';
            notiflixBlockWrap.style.fontFamily = '"' + newBlockSettings.fontFamily + '", ' + defaultFontFamily;
            notiflixBlockWrap.style.display = 'flex';
            notiflixBlockWrap.style.flexWrap = 'wrap';
            notiflixBlockWrap.style.flexDirection = 'column';
            notiflixBlockWrap.style.alignItems = 'center';
            notiflixBlockWrap.style.justifyContent = 'center';
            // block element: end

            // block element rtl: begin
            if (newBlockSettings.rtl) {
              notiflixBlockWrap.setAttribute('dir', 'rtl');
              notiflixBlockWrap.classList.add('nx-rtl-on');
            }
            // block element rtl: end

            // block element data: begin
            notiflixBlockWrap.innerHTML = iconElement + messageElement;
            // block element data: end

            // append block element: begin
            var getEachElementPosition = window.getComputedStyle(eachElement).getPropertyValue('position');
            var eachElementPosition = typeof getEachElementPosition === 'string' ? getEachElementPosition.toLocaleLowerCase('en') : 'relative';

            var averageMinHeight = Math.round(parseInt(newBlockSettings.svgSize) * 1.25) + 40;
            var eachElementHeight = eachElement.offsetHeight || 0;
            var minHeightStyle = '';
            if (averageMinHeight > eachElementHeight) {
              minHeightStyle = 'min-height:' + averageMinHeight + 'px;';
            }

            // internal style: begin
            var eachElementIdOrClass = '';
            if (eachElement.getAttribute('id')) {
              eachElementIdOrClass = '#' + eachElement.getAttribute('id');
            } else if (eachElement.classList[0]) {
              eachElementIdOrClass = '.' + eachElement.classList[0];
            } else {
              eachElementIdOrClass = (eachElement.tagName || '').toLocaleLowerCase('en');
            }

            var positionStyle = '';
            var positions = ['absolute', 'relative', 'fixed', 'sticky'];
            var addPosition = positions.indexOf(eachElementPosition) <= -1;
            if (addPosition || minHeightStyle.length > 0) {
              // check doc head
              if (!commonCheckHeadOrBody('head')) { return false; }

              // check position style
              if (addPosition) {
                positionStyle = 'position:relative!important;';
              }

              // create and add internal style to the head
              var style = '<style id="Style-' + blockSettings.ID + '-' + blockCreateOrRemoveCounter + '">' +
                eachElementIdOrClass + '.' + positionClassForNonStaticRef + '{' + positionStyle + minHeightStyle + '}' +
                '</style>';
              var styleRange = window.document.createRange();
              styleRange.selectNode(window.document.head);
              var styleFragment = styleRange.createContextualFragment(style);
              window.document.head.appendChild(styleFragment);

              // add the "positionClassForNonStaticRef" to each element
              eachElement.classList.add(positionClassForNonStaticRef);
            }
            // internal style: end

            // append
            eachElement.appendChild(notiflixBlockWrap);
            // append block element: end
          }
          // check block element exist: end
        }
      }
      // add element(s) and style: end
    }
    // unblock/remove
    else {
      // Step 3 => Remove each block element: begin
      var removeBlockElements = function (eachOne) {
        var timeout = setTimeout(function () {
          // remove element
          if (eachOne.parentNode !== null) {
            eachOne.parentNode.removeChild(eachOne);
          }

          // remove element's internal style
          var eachOneId = eachOne.getAttribute('id');
          var eachOneStyle = window.document.getElementById('Style-' + eachOneId);
          if (eachOneStyle && eachOneStyle.parentNode !== null) {
            eachOneStyle.parentNode.removeChild(eachOneStyle);
          }

          // clear timeout
          clearTimeout(timeout);
        }, newBlockSettings.cssAnimationDuration);
      };
      // Step 3 => Remove each block element: end

      // Step 2A => Remove each block element: begin
      var removeClassBlockElements = function (eachBlockElement) {
        // if elements exist
        if (eachBlockElement && eachBlockElement.length > 0) {
          for (var i = 0; i < eachBlockElement.length; i++) {
            var eachOne = eachBlockElement[i];
            if (eachOne) {
              // add remove class
              eachOne.classList.add('nx-remove');
              // remove block elements
              removeBlockElements(eachOne);
            }
          }
        }
        // not exist
        else {
          if (typeof selectorOrHTMLElements === 'string') {
            commonConsoleLog('"Notiflix.Block.remove();" function called with "' + selectorOrHTMLElements + '" selector, but this selector does not have a "Block" element to remove.');
          } else {
            commonConsoleLog('"Notiflix.Block.remove();" function called with "' + selectorOrHTMLElements + '", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.');
          }
        }
      };
      // Step 2A => Remove each block element: end

      // Step 2B => Remove each element's class name: begin
      var removeEachElementClassName = function (eachElement) {
        var timeout = setTimeout(function () {
          // remove class name
          eachElement.classList.remove(positionClassForNonStaticRef);

          // clear timeout
          clearTimeout(timeout);
        }, newBlockSettings.cssAnimationDuration + 300);
      };
      // Step 2B => Remove each element's class name: end

      // Step 1 => Remove each element: begin
      var removeElementTimeout = setTimeout(function () {
        for (var i = 0; i < checkQueryLimit; i++) {
          var eachElement = allHTMLElements[i];
          if (eachElement) {
            // remove each element's class name
            removeEachElementClassName(eachElement);

            // remove each block element
            eachBlockElement = eachElement.querySelectorAll('[id^=' + blockSettings.ID + ']');
            removeClassBlockElements(eachBlockElement);
          }
        }
        // clear timeout
        clearTimeout(removeElementTimeout);
      }, delay);
      // Step 1 => Remove each element: end
    }

    // extend new settings with the backup settings
    newBlockSettings = commonExtendOptions(true, newBlockSettings, newBlockSettingsBackup);
  };
  // BLOCK: Create or Remove: end

  var Notiflix = {
    Notify: {
      // Init
      init: function (userNotifyOptions) {
        // extend options
        newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
        // internal css if exist
        commonSetInternalCSSCodes(notifyGetInternalCSSCodes, 'NotiflixNotifyInternalCSS');
      },
      // Merge First Init
      merge: function (userNotifyExtendOptions) {
        // if initialized already
        if (newNotifySettings) {
          newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Notify module before call Merge function.');
          return false;
        }
      },
      // Success
      success: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
      },
      // Failure
      failure: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
      },
      // Warning
      warning: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
      },
      // Info
      info: function (message, callbackOrOptions, options) {
        notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
      },
    },

    Report: {
      // Init
      init: function (userReportOptions) {
        // extend options
        newReportSettings = commonExtendOptions(true, reportSettings, userReportOptions);
        // internal css if exist
        commonSetInternalCSSCodes(reportGetInternalCSSCodes, 'NotiflixReportInternalCSS');
      },
      // Merge First Init
      merge: function (userReportExtendOptions) {
        // if initialized already
        if (newReportSettings) {
          newReportSettings = commonExtendOptions(true, newReportSettings, userReportExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Report module before call Merge function.');
          return false;
        }
      },
      // Success
      success: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Success, title, message, buttonText, callbackOrOptions, options);
      },
      // Failure
      failure: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Failure, title, message, buttonText, callbackOrOptions, options);
      },
      // Warning
      warning: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Warning, title, message, buttonText, callbackOrOptions, options);
      },
      // Info
      info: function (title, message, buttonText, callbackOrOptions, options) {
        reportCreate(typesReport.Info, title, message, buttonText, callbackOrOptions, options);
      },
    },

    Confirm: {
      // Init
      init: function (userConfirmOptions) {
        // extend options
        newConfirmSettings = commonExtendOptions(true, confirmSettings, userConfirmOptions);
        // internal css if exist
        commonSetInternalCSSCodes(confirmGetInternalCSSCodes, 'NotiflixConfirmInternalCSS');
      },
      // Merge First Init
      merge: function (userConfirmExtendOptions) {
        // if initialized already
        if (newConfirmSettings) {
          newConfirmSettings = commonExtendOptions(true, newConfirmSettings, userConfirmExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Confirm module before call Merge function.');
          return false;
        }
      },
      // Show
      show: function (title, message, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options) {
        confirmCreate(typesConfirm.Show, title, message, null, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options);
      },
      // Ask
      ask: function (title, question, answer, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options) {
        confirmCreate(typesConfirm.Ask, title, question, answer, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options);
      },
      // Prompt
      prompt: function (title, question, defaultAnswer, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options) {
        confirmCreate(typesConfirm.Prompt, title, question, defaultAnswer, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback, options);
      },
    },

    Loading: {
      // Init
      init: function (userLoadingOptions) {
        // extend options
        newLoadingSettings = commonExtendOptions(true, loadingSettings, userLoadingOptions);
        // internal css if exist
        commonSetInternalCSSCodes(loadingGetInternalCSSCodes, 'NotiflixLoadingInternalCSS');
      },
      // Merge First Init
      merge: function (userLoadingExtendOptions) {
        // if initialized already
        if (newLoadingSettings) {
          newLoadingSettings = commonExtendOptions(true, newLoadingSettings, userLoadingExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the Loading module before call Merge function.');
          return false;
        }
      },
      // Standard
      standard: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Standard, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Hourglass
      hourglass: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Hourglass, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Circle
      circle: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Circle, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Arrows
      arrows: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Arrows, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Dots
      dots: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Dots, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Pulse
      pulse: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Pulse, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Custom
      custom: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Custom, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Notiflix
      notiflix: function (messageOrOptions, options) {
        loadingCreate(typesLoading.Notiflix, messageOrOptions, options, true, 0); // true => show && 0 => delay
      },
      // Remove
      remove: function (delay) {
        if (typeof delay !== 'number') { delay = 0; }
        loadingCreate(null, null, null, false, delay); // false => hide/remove
      },
      // Change The Message
      change: function (newMessage) {
        loadingChangeMessage(newMessage);
      },
    },

    Block: {
      // Initialize
      init: function (userBlockOptions) {
        // extend options
        newBlockSettings = commonExtendOptions(true, blockSettings, userBlockOptions);
        // internal css if exist
        commonSetInternalCSSCodes(blockGetInternalCSSCodes, 'NotiflixBlockInternalCSS');
      },
      // Merge First Initialize
      merge: function (userBlockExtendOptions) {
        // if initialized already
        if (newBlockSettings) {
          newBlockSettings = commonExtendOptions(true, newBlockSettings, userBlockExtendOptions);
        }
        // initialize first
        else {
          commonConsoleError('You have to initialize the "Notiflix.Block" module before call Merge function.');
          return false;
        }
      },
      // Standard
      standard: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Standard, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Hourglass
      hourglass: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Hourglass, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Circle
      circle: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Circle, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Arrows
      arrows: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Arrows, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Dots
      dots: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Dots, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Pulse
      pulse: function (selectorOrHTMLElements, messageOrOptions, options) {
        blockCreateOrRemove(true, typesBlock.Pulse, selectorOrHTMLElements, messageOrOptions, options); // true => show
      },
      // Remove
      remove: function (selectorOrHTMLElements, delay) {
        if (typeof delay !== 'number') { delay = 0; }
        blockCreateOrRemove(false, null, selectorOrHTMLElements, null, null, delay); // false => hide/remove
      },
    },
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Notify: Notiflix.Notify, Report: Notiflix.Report, Confirm: Notiflix.Confirm, Loading: Notiflix.Loading, Block: Notiflix.Block });
  } else {
    return { Notify: Notiflix.Notify, Report: Notiflix.Report, Confirm: Notiflix.Confirm, Loading: Notiflix.Loading, Block: Notiflix.Block };
  }

});