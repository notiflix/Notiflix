/*!
* Notiflix ("https://www.notiflix.com")
* Version: 2.4.0
* Author: Furkan MT ("https://github.com/furcan")
* Copyright 2020 Notiflix, MIT Licence ("https://opensource.org/licenses/MIT")
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

  // SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return false;
  }
  // SSR check: end

  // Notiflix: Variables: begin
  var newNotifySettings;
  var newReportSettings;
  var newConfirmSettings;
  var newLoadingSettings;
  var newBlockSettings;
  var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://www.notiflix.com/documentation';
  var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
  // Notiflix: Variables: end

  // Notiflix: Notify Default Settings: begin
  var notifySettings = {
    wrapID: 'NotiflixNotifyWrap', // can not customizable
    width: '280px',
    position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' && v2.2.0 and the next versions => 'center-top' - 'center-bottom' - 'center-center'
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

    ID: 'NotiflixNotify',
    className: 'notiflix-notify',
    zindex: 4001,
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
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
      childClassName: 'success',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-check-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(50,198,130,0.2)', // v2.2.0 and the next versions
    },

    failure: {
      background: '#ff5549',
      textColor: '#fff',
      childClassName: 'failure',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-times-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(255,85,73,0.2)', // v2.2.0 and the next versions
    },

    warning: {
      background: '#eebf31',
      textColor: '#fff',
      childClassName: 'warning',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-exclamation-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(238,191,49,0.2)', // v2.2.0 and the next versions
    },

    info: {
      background: '#26c0d3',
      textColor: '#fff',
      childClassName: 'info',
      notiflixIconColor: 'rgba(0,0,0,0.2)',
      fontAwesomeClassName: 'fas fa-info-circle',
      fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
      backOverlayColor: 'rgba(38,192,211,0.2)', // v2.2.0 and the next versions
    },
  };
  // Notiflix: Notify Default Settings: end

  // Notiflix: Report Default Settings: begin
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
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
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
      backOverlayColor: 'rgba(50,198,130,0.2)', // v2.2.0 and the next versions
    },

    failure: {
      svgColor: '#ff5549',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#ff5549',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(255,85,73,0.2)', // v2.2.0 and the next versions
    },

    warning: {
      svgColor: '#eebf31',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#eebf31',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(238,191,49,0.2)', // v2.2.0 and the next versions
    },

    info: {
      svgColor: '#26c0d3',
      titleColor: '#1e1e1e',
      messageColor: '#242424',
      buttonBackground: '#26c0d3',
      buttonColor: '#fff',
      backOverlayColor: 'rgba(38,192,211,0.2)', // v2.2.0 and the next versions
    },
  };
  // Notiflix: Report Default Settings: end

  // Notiflix: Confirm Default Settings: begin
  var confirmSettings = {
    ID: 'NotiflixConfirmWrap', // can not customizable
    className: 'notiflix-confirm',
    width: '300px',
    zindex: 4003,
    position: 'center', // 'center' - 'center-top' -  'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
    distance: '10px',
    backgroundColor: '#f8f8f8',
    borderRadius: '25px',
    backOverlay: true,
    backOverlayColor: 'rgba(0,0,0,0.5)',
    rtl: false,
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationStyle: 'fade', // 'zoom' - 'fade'
    cssAnimationDuration: 300,
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
  // Notiflix: Confirm Default Settings: end

  // Notiflix: Loading Default Settings: begin
  var loadingSettings = {
    ID: 'NotiflixLoadingWrap', // can not customizable
    className: 'notiflix-loading',
    zindex: 4000,
    backgroundColor: 'rgba(0,0,0,0.8)',
    rtl: false,
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 400,
    clickToClose: false,
    customSvgUrl: null,
    svgSize: '80px',
    svgColor: '#32c682',
    messageID: 'NotiflixLoadingMessage',
    messageFontSize: '15px',
    messageMaxLength: 34,
    messageColor: '#dcdcdc',
  };
  // Notiflix: Loading Default Settings: end

  // Notiflix: Block Default Settings: begin
  var blockSettings = {
    ID: 'NotiflixBlockWrap', // can not customizable
    querySelectorLimit: 200,
    className: 'notiflix-block',
    position: 'absolute',
    zindex: 1000,
    backgroundColor: 'rgba(255,255,255,0.9)',
    rtl: false,
    useGoogleFont: false, // v2.2.0 and the next versions => has been changed as "false"
    fontFamily: 'Quicksand',
    cssAnimation: true,
    cssAnimationDuration: 300,
    svgSize: '45px',
    svgColor: '#383838',
    messageFontSize: '14px',
    messageMaxLength: 34,
    messageColor: '#383838',
  };
  // Notiflix: Block Default Settings: end

  // Notiflix: Console Error: begin
  var notiflixConsoleError = function (title, message) {
    return console.error('%c ' + title + ' ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // Notiflix: Console Error: end

  // Notiflix: Console Log: begin
  var notiflixConsoleLog = function (title, message) {
    return console.log('%c ' + title + ' ', 'padding:2px;border-radius:20px;color:#fff;background:#26c0d3', '\n' + message + notiflixConsoleDocs);
  };
  // Notiflix: Console Log: end

  // Notiflix: Check Head or Body: begin
  var notiflixHeadOrBodyCheck = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === null) {
      notiflixConsoleError('Notiflix', '\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
      return false;
    }
    return true;
  };
  // Notiflix: Check Head or Body: begin

  // Notiflix: Internal CSS Codes: begin
  var notiflixInternalCSSCodes = function () {
    var css = '';
    return css || null;
  };
  // Notiflix: Internal CSS Codes: end

  // Notiflix: Internal CSS: begin
  var notiflixInternalCSS = function () {
    if (notiflixInternalCSSCodes() !== null && !window.document.getElementById('NotiflixInternalCSS')) {
      // check doc head
      if (!notiflixHeadOrBodyCheck('head')) { return false; }

      // internal css
      var internalCSS = window.document.createElement('style');
      internalCSS.id = 'NotiflixInternalCSS';
      internalCSS.innerHTML = notiflixInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // Notiflix: Internal CSS: end

  // Notiflix: Extend: begin
  var extendNotiflix = function () {
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
            extended[prop] = extendNotiflix(extended[prop], obj[prop]);
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
  // Notiflix: Extend: end

  // Notiflix: Plaintext: begin
  var notiflixPlaintext = function (html) {
    var htmlPool = window.document.createElement('div');
    htmlPool.innerHTML = html;
    return htmlPool.textContent || htmlPool.innerText || '';
  };
  // Notiflix: Plaintext: end

  // Notiflix: GoogleFont: begin
  var notiflixGoogleFont = function (use, family) {
    if (!window.document.getElementById('NotiflixQuicksand') && use && (typeof family === 'string' && family.toLocaleLowerCase('en') === 'quicksand')) {
      // check doc head
      if (!notiflixHeadOrBodyCheck('head')) { return false; }

      // google fonts dns prefetch: begin
      var dns = '<link id="NotiflixGoogleDNS" rel="dns-prefetch" href="//fonts.googleapis.com" />';
      var dnsRange = window.document.createRange();
      dnsRange.selectNode(window.document.head);
      var dnsFragment = dnsRange.createContextualFragment(dns);
      window.document.head.appendChild(dnsFragment);
      // google fonts dns prefetch: end

      // google fonts style: begin
      var font = '<link id="NotiflixQuicksand" href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700&amp;subset=latin-ext" rel="stylesheet" />';
      var fontRange = window.document.createRange();
      fontRange.selectNode(window.document.head);
      var fontFragment = fontRange.createContextualFragment(font);
      window.document.head.appendChild(fontFragment);
      // google fonts style: end
    }
  };
  // Notiflix: GoogleFont: end

  // Notiflix: Report SVG Success: begin
  var notiflixReportSvgSuccess = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#32c682'; }
    var reportSvgSuccess = '<svg id="NXReportSuccess" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@keyframes NXReportSuccess5-animation{0%{-webkit-transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.5, 0.5) translate(-60px, -57.7px);}50%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}60%{-webkit-transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(0.95, 0.95) translate(-60px, -57.7px);}100%{-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);}}@-webkit-keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportSuccess4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportSuccess3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportSuccess *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportSuccess4{fill: inherit;-webkit-animation-name: NXReportSuccess4-animation;animation-name: NXReportSuccess4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportSuccess6{fill: inherit;-webkit-animation-name: NXReportSuccess6-animation;animation-name: NXReportSuccess6-animation;opacity: 1;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess3{-webkit-animation-name: NXReportSuccess3-animation;animation-name: NXReportSuccess3-animation;-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}#NXReportSuccess5{-webkit-animation-name: NXReportSuccess5-animation;animation-name: NXReportSuccess5-animation;-webkit-transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);transform: translate(60px, 57.7px) scale(1, 1) translate(-60px, -57.7px);-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);}</style><g id="NXReportSuccess1"><g id="NXReportSuccess2"><g id="NXReportSuccess3" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportSuccess4"/></g><g id="NXReportSuccess5" data-animator-group="true" data-animator-type="2"><path d="M88.27 35.39l-35.47 39.9 -21.37 -17.09c-0.98,-0.81 -2.44,-0.63 -3.24,0.36 -0.79,0.99 -0.63,2.44 0.36,3.24l23.08 18.46c0.43,0.34 0.93,0.51 1.44,0.51 0.64,0 1.27,-0.26 1.74,-0.78l36.91 -41.53c0.86,-0.96 0.76,-2.42 -0.19,-3.26 -0.95,-0.86 -2.41,-0.77 -3.26,0.19z" id="NXReportSuccess6"/></g></g></g></svg>';
    return reportSvgSuccess;
  };
  // Notiflix: Report SVG Success: end

  // Notiflix: Report SVG Failure: begin
  var notiflixReportSvgFailure = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#ff5549'; }
    var reportSvgFailure = '<svg id="NXReportFailure" fill=" ' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure4-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure3-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportFailure5-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportFailure6-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportFailure *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportFailure6{fill:inherit;-webkit-animation-name: NXReportFailure6-animation;animation-name: NXReportFailure6-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportFailure5{-webkit-animation-name: NXReportFailure5-animation;animation-name: NXReportFailure5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure3{-webkit-animation-name: NXReportFailure3-animation;animation-name: NXReportFailure3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportFailure4{fill:inherit;-webkit-animation-name: NXReportFailure4-animation;animation-name: NXReportFailure4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}</style><g id="NXReportFailure1"><g id="NXReportFailure2"><g id="NXReportFailure3" data-animator-group="true" data-animator-type="2"><path d="M4.35 34.95c0,-16.82 13.78,-30.6 30.6,-30.6l50.1 0c16.82,0 30.6,13.78 30.6,30.6l0 50.1c0,16.82 -13.78,30.6 -30.6,30.6l-50.1 0c-16.82,0 -30.6,-13.78 -30.6,-30.6l0 -50.1zm30.6 85.05l50.1 0c19.22,0 34.95,-15.73 34.95,-34.95l0 -50.1c0,-19.22 -15.73,-34.95 -34.95,-34.95l-50.1 0c-19.22,0 -34.95,15.73 -34.95,34.95l0 50.1c0,19.22 15.73,34.95 34.95,34.95z" id="NXReportFailure4"/></g><g id="NXReportFailure5" data-animator-group="true" data-animator-type="2"><path d="M82.4 37.6c-0.9,-0.9 -2.37,-0.9 -3.27,0l-19.13 19.13 -19.14 -19.13c-0.9,-0.9 -2.36,-0.9 -3.26,0 -0.9,0.9 -0.9,2.35 0,3.26l19.13 19.14 -19.13 19.13c-0.9,0.9 -0.9,2.37 0,3.27 0.45,0.45 1.04,0.68 1.63,0.68 0.59,0 1.18,-0.23 1.63,-0.68l19.14 -19.14 19.13 19.14c0.45,0.45 1.05,0.68 1.64,0.68 0.58,0 1.18,-0.23 1.63,-0.68 0.9,-0.9 0.9,-2.37 0,-3.27l-19.14 -19.13 19.14 -19.14c0.9,-0.91 0.9,-2.36 0,-3.26z" id="NXReportFailure6"/></g></g></g></svg>';
    return reportSvgFailure;
  };
  // Notiflix: Report SVG Failure: end

  // Notiflix: Report SVG Warning: begin
  var notiflixReportSvgWarning = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#eebf31'; }
    var reportSvgWarning = '<svg id="NXReportWarning" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportWarning2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@keyframes NXReportWarning4-animation{0%{-webkit-transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.5, 0.5) translate(-60px, -66.6px);}50%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}60%{-webkit-transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(0.95, 0.95) translate(-60px, -66.6px);}100%{-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}}@-webkit-keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportWarning5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}#NXReportWarning *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportWarning3{fill: inherit;-webkit-animation-name: NXReportWarning3-animation;animation-name: NXReportWarning3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning5{fill: inherit;-webkit-animation-name: NXReportWarning5-animation;animation-name: NXReportWarning5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportWarning4{-webkit-animation-name: NXReportWarning4-animation;animation-name: NXReportWarning4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);transform: translate(60px, 66.6px) scale(1, 1) translate(-60px, -66.6px);}#NXReportWarning2{-webkit-animation-name: NXReportWarning2-animation;animation-name: NXReportWarning2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportWarning1"><g id="NXReportWarning2" data-animator-group="true" data-animator-type="2"><path d="M115.46 106.15l-54.04 -93.8c-0.61,-1.06 -2.23,-1.06 -2.84,0l-54.04 93.8c-0.62,1.07 0.21,2.29 1.42,2.29l108.08 0c1.21,0 2.04,-1.22 1.42,-2.29zm-50.29 -95.95l54.04 93.8c2.28,3.96 -0.65,8.78 -5.17,8.78l-108.08 0c-4.52,0 -7.45,-4.82 -5.17,-8.78l54.04 -93.8c2.28,-3.95 8.03,-4 10.34,0z" id="NXReportWarning3"/></g><g id="NXReportWarning4" data-animator-group="true" data-animator-type="2"><path d="M57.83 94.01c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -3.2c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 3.2zm0 -14.15c0,1.2 0.97,2.17 2.17,2.17 1.2,0 2.17,-0.97 2.17,-2.17l0 -40.65c0,-1.2 -0.97,-2.17 -2.17,-2.17 -1.2,0 -2.17,0.97 -2.17,2.17l0 40.65z" id="NXReportWarning5"/></g></g></svg>';
    return reportSvgWarning;
  };
  // Notiflix: Report SVG Warning: end

  // Notiflix: Report SVG Info: begin
  var notiflixReportSvgInfo = function (width, color) {
    if (!width) { width = '110px'; }
    if (!color) { color = '#26c0d3'; }
    var reportSvgInfo = '<svg id="NXReportInfo" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 120 120" xmlns:xlink="http://www.w3.org/1999/xlink"><style>@-webkit-keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo5-animation{0%{opacity: 0;}50%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo4-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}50%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@-webkit-keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@keyframes NXReportInfo3-animation{0%{opacity: 0;}40%{opacity: 1;}100%{opacity: 1;}}@-webkit-keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}@keyframes NXReportInfo2-animation{0%{-webkit-transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.5, 0.5) translate(-60px, -60px);}40%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}60%{-webkit-transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);transform: translate(60px, 60px) scale(0.95, 0.95) translate(-60px, -60px);}100%{-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}}#NXReportInfo *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXReportInfo3{fill:inherit;-webkit-animation-name: NXReportInfo3-animation;animation-name: NXReportInfo3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo5{fill:inherit;-webkit-animation-name: NXReportInfo5-animation;animation-name: NXReportInfo5-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);opacity: 1;}#NXReportInfo2{-webkit-animation-name: NXReportInfo2-animation;animation-name: NXReportInfo2-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}#NXReportInfo4{-webkit-animation-name: NXReportInfo4-animation;animation-name: NXReportInfo4-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);transform: translate(60px, 60px) scale(1, 1) translate(-60px, -60px);}</style><g id="NXReportInfo1"><g id="NXReportInfo2" data-animator-group="true" data-animator-type="2"><path d="M60 115.38c-30.54,0 -55.38,-24.84 -55.38,-55.38 0,-30.54 24.84,-55.38 55.38,-55.38 30.54,0 55.38,24.84 55.38,55.38 0,30.54 -24.84,55.38 -55.38,55.38zm0 -115.38c-33.08,0 -60,26.92 -60,60 0,33.08 26.92,60 60,60 33.08,0 60,-26.92 60,-60 0,-33.08 -26.92,-60 -60,-60z" id="NXReportInfo3"/></g><g id="NXReportInfo4" data-animator-group="true" data-animator-type="2"><path d="M57.75 43.85c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 48.18c0,1.24 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1.01 -2.25,-2.25l0 -48.18zm0 -15.88c0,-1.24 1.01,-2.25 2.25,-2.25 1.24,0 2.25,1.01 2.25,2.25l0 3.32c0,1.25 -1.01,2.25 -2.25,2.25 -1.24,0 -2.25,-1 -2.25,-2.25l0 -3.32z" id="NXReportInfo5"/></g></g></svg>';
    return reportSvgInfo;
  };
  // Notiflix: Report SVG Info: end

  // Notiflix: Indicator SVG standard: begin
  var notiflixIndicatorSvgStandard = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var standard = '<svg stroke="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 38 38" style="transform:scale(0.8);" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"/></path></g></g></svg>';
    return standard;
  };
  // Notiflix: Indicator SVG standard: end

  // Notiflix: Indicator SVG hourglass: begin
  var notiflixIndicatorSvgHourglass = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var hourglass = '<svg id="NXLoadingHourglass" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@keyframes NXhourglass5-animation{0%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}16.67%{-webkit-transform: scale(1, 0.8);transform: scale(1, 0.8);}33.33%{-webkit-transform: scale(0.88, 0.6);transform: scale(0.88, 0.6);}37.50%{-webkit-transform: scale(0.85, 0.55);transform: scale(0.85, 0.55);}41.67%{-webkit-transform: scale(0.8, 0.5);transform: scale(0.8, 0.5);}45.83%{-webkit-transform: scale(0.75, 0.45);transform: scale(0.75, 0.45);}50%{-webkit-transform: scale(0.7, 0.4);transform: scale(0.7, 0.4);}54.17%{-webkit-transform: scale(0.6, 0.35);transform: scale(0.6, 0.35);}58.33%{-webkit-transform: scale(0.5, 0.3);transform: scale(0.5, 0.3);}83.33%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}100%{-webkit-transform: scale(0.2, 0);transform: scale(0.2, 0);}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@keyframes NXhourglass3-animation{0%{-webkit-transform: scale(1, 0.02);transform: scale(1, 0.02);}79.17%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}100%{-webkit-transform: scale(1, 1);transform: scale(1, 1);}}@-webkit-keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}@keyframes NXhourglass1-animation{0%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}83.33%{-webkit-transform: rotate(0deg);transform: rotate(0deg);}100%{-webkit-transform: rotate(180deg);transform: rotate(180deg);}}#NXLoadingHourglass *{-webkit-animation-duration: 1.2s;animation-duration: 1.2s;-webkit-animation-iteration-count: infinite;animation-iteration-count: infinite;-webkit-animation-timing-function: cubic-bezier(0, 0, 1, 1);animation-timing-function: cubic-bezier(0, 0, 1, 1);}#NXhourglass7{fill: inherit;}#NXhourglass1{-webkit-animation-name: NXhourglass1-animation;animation-name: NXhourglass1-animation;-webkit-transform-origin: 50% 50%;transform-origin: 50% 50%;transform-box: fill-box;}#NXhourglass3{-webkit-animation-name: NXhourglass3-animation;animation-name: NXhourglass3-animation;-webkit-animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}#NXhourglass5{-webkit-animation-name: NXhourglass5-animation;animation-name: NXhourglass5-animation;-webkit-transform-origin: 50% 100%;transform-origin: 50% 100%;transform-box: fill-box;}g#NXhourglass5,#NXhourglass3{fill: inherit;opacity: .4;}</style><g id="NXhourglass1" data-animator-group="true" data-animator-type="1"><g id="NXhourglass2"><g id="NXhourglass3" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,132.08 65.62,163.22 134.38,163.22 134.38,132.08 " id="NXhourglass4"/></g><g id="NXhourglass5" data-animator-group="true" data-animator-type="2"><polygon points="100,100 65.62,67.92 65.62,36.78 134.38,36.78 134.38,67.92" id="NXhourglass6"/></g> <path d="M51.14 38.89l8.33 0 0 14.93c0,15.1 8.29,28.99 23.34,39.1 1.88,1.25 3.04,3.97 3.04,7.08 0,3.11 -1.16,5.83 -3.04,7.09 -15.05,10.1 -23.34,23.99 -23.34,39.09l0 14.93 -8.33 0c-2.68,0 -4.86,2.18 -4.86,4.86 0,2.69 2.18,4.86 4.86,4.86l97.72 0c2.68,0 4.86,-2.17 4.86,-4.86 0,-2.68 -2.18,-4.86 -4.86,-4.86l-8.33 0 0 -14.93c0,-15.1 -8.29,-28.99 -23.34,-39.09 -1.88,-1.26 -3.04,-3.98 -3.04,-7.09 0,-3.11 1.16,-5.83 3.04,-7.08 15.05,-10.11 23.34,-24 23.34,-39.1l0 -14.93 8.33 0c2.68,0 4.86,-2.18 4.86,-4.86 0,-2.69 -2.18,-4.86 -4.86,-4.86l-97.72 0c-2.68,0 -4.86,2.17 -4.86,4.86 0,2.68 2.18,4.86 4.86,4.86zm79.67 14.93c0,15.87 -11.93,26.25 -19.04,31.03 -4.6,3.08 -7.34,8.75 -7.34,15.15 0,6.41 2.74,12.07 7.34,15.15 7.11,4.78 19.04,15.16 19.04,31.03l0 14.93 -61.62 0 0 -14.93c0,-15.87 11.93,-26.25 19.04,-31.02 4.6,-3.09 7.34,-8.75 7.34,-15.16 0,-6.4 -2.74,-12.07 -7.34,-15.15 -7.11,-4.78 -19.04,-15.16 -19.04,-31.03l0 -14.93 61.62 0 0 14.93z" id="NXhourglass7"/></g></g></svg>';
    return hourglass;
  };
  // Notiflix: Indicator SVG hourglass: end

  // Notiflix: Indicator SVG circle: begin
  var notiflixIndicatorSvgCircle = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var circle = '<svg id="NXLoadingCircle" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50" xml:space="preserve" version="1.1"><style>#NXLoadingCircle{-webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: ' + width + '; -webkit-transform-origin: center center; -ms-transform-origin: center center; transform-origin: center center; width: ' + width + '; position: absolute; top: 0; left: 0; margin: auto;}.notiflix-loader-circle-path{stroke-dasharray: 150,200; stroke-dashoffset: -10; -webkit-animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite, color 1.5s ease-in-out infinite; stroke-linecap: round;}@-webkit-keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@keyframes rotate{100%{-webkit-transform: rotate(360deg); transform: rotate(360deg);}}@-webkit-keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}@keyframes dash{0%{stroke-dasharray: 1,200; stroke-dashoffset: 0;}50%{stroke-dasharray: 89,200; stroke-dashoffset: -35;}100%{stroke-dasharray: 89,200; stroke-dashoffset: -124;}}</style><circle class="notiflix-loader-circle-path" cx="50" cy="50" r="20" fill="none" stroke="' + color + '" stroke-width="2"/></svg>';
    return circle;
  };
  // Notiflix: Indicator SVG circle: end

  // Notiflix: Indicator SVG arrows: begin
  var notiflixIndicatorSvgArrows = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var arrows = '<svg id="NXLoadingArrows" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="inherit" fill-opacity="1" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1.5s" repeatCount="indefinite"></animateTransform></g></svg>';
    return arrows;
  };
  // Notiflix: Indicator SVG arrows: end

  // Notiflix: Indicator SVG dots: begin
  var notiflixIndicatorSvgDots = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var dots = '<svg id="NXLoadingDots" fill="' + color + '" width="' + width + '" height="' + width + '" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><g transform="translate(25 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.239 0.239)"><animateTransform attributeName="transform" type="scale" begin="-0.266s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(50 50)"> <circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.00152 0.00152)"><animateTransform attributeName="transform" type="scale" begin="-0.133s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g><g transform="translate(75 50)"><circle cx="0" cy="0" r="9" fill="inherit" transform="scale(0.299 0.299)"><animateTransform attributeName="transform" type="scale" begin="0s" calcMode="spline" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" values="0;1;0" keyTimes="0;0.5;1" dur="0.8s" repeatCount="indefinite"/></circle></g></svg>';
    return dots;
  };
  // Notiflix: Indicator SVG dots: end

  // Notiflix: Indicator SVG pulse: begin
  var notiflixIndicatorSvgPulse = function (width, color) {
    if (!width) { width = '60px'; }
    if (!color) { color = '#32c682'; }
    var pulse = '<svg stroke="' + color + '" width="' + width + '" height="' + width + '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"/></circle></g></svg>';
    return pulse;
  };
  // Notiflix: Indicator SVG pulse: end

  // Notiflix: Indicator SVG notiflix: begin
  var notiflixIndicatorSvgNotiflix = function (width, white, green) {
    if (!width) { width = '60px'; }
    if (!white) { white = '#f8f8f8'; }
    if (!green) { green = '#32c682'; }
    var notiflixIcon = '<svg id="NXLoadingNotiflixLib" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="' + width + '" height="' + width + '" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.line{stroke:' + white + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.line{fill:none;}.dot{fill:' + green + ';stroke:' + green + ';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;}.n{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-n;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:0s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-n{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.x2,.x1{stroke-dasharray: 500;stroke-dashoffset: 0;animation-name: notiflix-x;animation-timing-function: linear;animation-duration: 2.5s;animation-delay:.2s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-x{0%{stroke-dashoffset: 1000;}100%{stroke-dashoffset: 0;}}.dot{animation-name: notiflix-dot;animation-timing-function: ease-in-out;animation-duration: 1.25s;animation-iteration-count: infinite;animation-direction: normal;}@keyframes notiflix-dot{0%{stroke-width: 0;}50%{stroke-width: 12;}100%{stroke-width: 0;}}</style></defs><g><path class="dot" d="M47.97 135.05c3.59,0 6.5,2.91 6.5,6.5 0,3.59 -2.91,6.5 -6.5,6.5 -3.59,0 -6.5,-2.91 -6.5,-6.5 0,-3.59 2.91,-6.5 6.5,-6.5z"/><path class="line n" d="M10.14 144.76l0 -0.22 0 -0.96 0 -56.03c0,-5.68 -4.54,-41.36 37.83,-41.36 42.36,0 37.82,35.68 37.82,41.36l0 57.21"/><path class="line x1" d="M115.06 144.49c24.98,-32.68 49.96,-65.35 74.94,-98.03"/><path class="line x2" d="M114.89 46.6c25.09,32.58 50.19,65.17 75.29,97.75"/></g></svg>';
    return notiflixIcon;
  };
  // Notiflix: Indicator SVG notiflix: end

  // Notiflix: Notify Single: begin
  var notifyElmCount = 0;
  var notifyElmCountOnlyCallback = 0;
  var NotiflixNotify = function (message, callbackOrOptions, options, staticType) {
    // check doc body
    if (!notiflixHeadOrBodyCheck('body')) { return false; }

    // if not initialized pretend like init
    if (!newNotifySettings) {
      Notiflix.Notify.Init({});
    }

    // create a backup for new settings
    var newNotifySettingsBackup = extendNotiflix(true, newNotifySettings, {});

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
      newNotifySettings = extendNotiflix(true, newNotifySettings, newOptions);
    }
    // check callbackOrOptions and options: end

    // notify type
    var theType = newNotifySettings[staticType.toLocaleLowerCase('en')];

    // notify counter: begin
    notifyElmCount++;
    if (typeof callbackOrOptions === 'function') {
      notifyElmCountOnlyCallback++;
    }
    // notify counter: end

    // if no message: begin
    if (typeof message !== 'string') {
      message = 'Notiflix ' + staticType;
    }
    // if no message: end

    // if plainText true = HTML tags not allowed: begin
    if (newNotifySettings.plainText) {
      message = notiflixPlaintext(message); // message plain text
    }
    // if plainText true = HTML tags not allowed: end

    // if plainText false but the message length more than messageMaxLength = HTML tags error: begin
    if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
      // extend settings for error massege
      newNotifySettings = extendNotiflix(true, newNotifySettings, { closeButton: true, messageMaxLength: 100 });
      message = 'HTML Tags Error: Your content length is more than "messageMaxLength" option.'; // message html error
    }
    // if plainText false but the message length more than messageMaxLength = HTML tags error: end

    // message max length substring: begin
    if (message.length > newNotifySettings.messageMaxLength) {
      message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
    }
    // message max length substring: end

    // font awesome icon style: begin
    if (newNotifySettings.fontAwesomeIconStyle === 'shadow') {
      theType.fontAwesomeIconColor = theType.background;
    }
    // font awesome icon style: end

    // if cssAnimaion false -> duration: begin
    if (!newNotifySettings.cssAnimation) {
      newNotifySettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false -> duration: end

    // notify wrap: begin
    var ntflxNotifyWrap = window.document.createElement('div');
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

    // if background overlay true: begin
    var notifyOverlay;
    if (newNotifySettings.backOverlay) {
      notifyOverlay = window.document.createElement('div');
      notifyOverlay.id = newNotifySettings.ID + 'Overlay';
      notifyOverlay.style.width = '100%';
      notifyOverlay.style.height = '100%';
      notifyOverlay.style.position = 'fixed';
      notifyOverlay.style.zIndex = newNotifySettings.zindex;
      notifyOverlay.style.left = 0;
      notifyOverlay.style.top = 0;
      notifyOverlay.style.right = 0;
      notifyOverlay.style.bottom = 0;
      notifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
      notifyOverlay.className = newNotifySettings.cssAnimation ? 'with-animation' : '';
      notifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';
      // if there is not an backoverlay element create a new one
      if (!window.document.getElementById(notifyOverlay.id)) {
        window.document.body.appendChild(notifyOverlay);
      }
      // if there is a backoverlay element and also if there is not a notify element with a callback, change backoverlay color by each type
      else if (notifyElmCountOnlyCallback === 0) {
        window.document.getElementById(notifyOverlay.id).style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
      }
    }
    // if background overlay true: end

    if (!window.document.getElementById(ntflxNotifyWrap.id)) {
      window.document.body.appendChild(ntflxNotifyWrap);
    }
    // notify wrap: end

    // notify content: begin
    var ntflxNotify = window.document.createElement('div');
    ntflxNotify.id = newNotifySettings.ID + '-' + notifyElmCount;
    ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'click-to-close' : '');
    ntflxNotify.style.fontSize = newNotifySettings.fontSize;
    ntflxNotify.style.color = theType.textColor;
    ntflxNotify.style.background = theType.background;
    ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
    ntflxNotify.style.pointerEvents = 'all';

    // rtl: begin
    if (newNotifySettings.rtl) {
      ntflxNotify.setAttribute('dir', 'rtl');
      ntflxNotify.classList.add('rtl-on');
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
      closeButtonHTML = '<span class="notify-close-button"><svg class="clck2cls" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="20px" height="20px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 20 20"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">.click2close{fill:' + theType.notiflixIconColor + '}</style></defs><g><path class="click2close" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
    }
    // close buttpon element: end

    // use icon: begin
    if (newNotifySettings.useIcon) {
      // use font awesome
      if (newNotifySettings.useFontAwesome) {
        ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nmi wfa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'shadow' : 'basic') + '"></i><span class="the-message with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
      // use notiflix icon
      else {
        var svgIcon;
        if (staticType === 'Success') {  // success
          svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Success{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Success" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
        } else if (staticType === 'Failure') { // failure
          svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Failure{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Failure" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
        } else if (staticType === 'Warning') { // warning
          svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Warning{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Warning" class="fil0" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
        } else if (staticType === 'Info') { // info
          svgIcon = '<svg class="nmi" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="40px" height="40px" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd"viewBox="0 0 40 40"xmlns:xlink="http://www.w3.org/1999/xlink"><defs><style type="text/css">#Notiflix-Icon-Info{fill:' + theType.notiflixIconColor + '}</style></defs><g><path id="Notiflix-Icon-Info" class="fil0" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
        } else {
          svgIcon = '';
        }
        ntflxNotify.innerHTML = svgIcon + '<span class="the-message with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
      }
    }
    // without icon
    else {
      ntflxNotify.innerHTML = '<span class="the-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
    }
    // use icon: end
    // notify content: end

    // notify append or prepend: begin
    if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') { // the new one will be first
      var notifyWrap = window.document.getElementById(ntflxNotifyWrap.id);
      notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
    } else {
      window.document.getElementById(ntflxNotifyWrap.id).appendChild(ntflxNotify);
    }

    if (newNotifySettings.useIcon) { // if useIcon, dynamically vertical align the contents
      var messageIcon = window.document.getElementById(ntflxNotify.id).querySelectorAll('.nmi')[0];
      var messageIconH = 40;
      // if font awesome
      if (newNotifySettings.useFontAwesome) {
        messageIconH = Math.round(parseInt(messageIcon.offsetHeight));
      }
      // if notiflix SVG
      else {
        var SvgBBox = messageIcon.getBBox();
        messageIconH = Math.round(parseInt(SvgBBox.width));
      }
      var messageText = window.document.getElementById(ntflxNotify.id).querySelectorAll('span')[0];
      var messageTextH = Math.round(messageText.offsetHeight);
      if (messageTextH <= messageIconH) {
        messageText.style.paddingTop = (messageIconH - messageTextH) / 2 + 'px';
        messageText.style.paddingBottom = (messageIconH - messageTextH) / 2 + 'px';
      }
    }
    // notify append or prepend: end

    // remove by timeout or click: begin
    if (window.document.getElementById(ntflxNotify.id)) {
      // set elements: begin
      var removeDiv = window.document.getElementById(ntflxNotify.id);
      var removeWrap = window.document.getElementById(ntflxNotifyWrap.id);
      var removeOverlay;
      if (newNotifySettings.backOverlay) {
        removeOverlay = window.document.getElementById(notifyOverlay.id);
      }
      // set elements: end

      // timeout vars: begin
      var timeoutHide;
      var timeoutRemove;
      // timeout vars: end

      // hide notify elm and hide overlay: begin
      var hideNotifyElementsAndOverlay = function () {
        removeDiv.classList.add('remove');
        if (newNotifySettings.backOverlay && removeWrap.childElementCount <= 0) {
          removeOverlay.classList.add('remove');
        }
        clearTimeout(timeoutHide);
      };
      // hide notify elm and hide overlay: end

      // remove notify elm and wrapper: begin
      var removeNotifyElmentsAndWrapper = function () {
        var notifyExist = window.document.getElementById(ntflxNotify.id);
        if (notifyExist && removeDiv.parentNode !== null) {
          removeDiv.parentNode.removeChild(removeDiv);
        }
        if (removeWrap.childElementCount <= 0 && removeWrap.parentNode !== null) { // if childs count === 0 remove wrap
          removeWrap.parentNode.removeChild(removeWrap);
          if (newNotifySettings.backOverlay && removeOverlay.parentNode !== null) {
            removeOverlay.parentNode.removeChild(removeOverlay);
          }
        }
        clearTimeout(timeoutRemove);
      };
      // remove notify elm and wrapper: end

      // if close button and callbackOrOptions is not a function: begin
      if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
        var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelectorAll('span.notify-close-button')[0];
        closeButtonElm.addEventListener('click', function () {
          hideNotifyElementsAndOverlay();
          var clickToCloseTimeout = setTimeout(function () {
            removeNotifyElmentsAndWrapper();
            clearTimeout(clickToCloseTimeout);
          }, newNotifySettings.cssAnimationDuration);
        });
      }
      // if close button and callbackOrOptions is not a function: end

      // if callbackOrOptions or click to close: begin
      if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) {
        removeDiv.addEventListener('click', function () {
          if (typeof callbackOrOptions === 'function') {
            notifyElmCountOnlyCallback--;
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
        timeoutHide = setTimeout(function () {
          hideNotifyElementsAndOverlay();
        }, newNotifySettings.timeout);
        timeoutRemove = setTimeout(function () {
          removeNotifyElmentsAndWrapper();
        }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
      }
      // else auto remove: end
    }
    // remove by timeout or click: end

    // notify - show only the last one: begin
    if (newNotifySettings.showOnlyTheLastOne && notifyElmCount > 0) {
      var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyElmCount + '])');
      for (var i = 0; i < allNotifyElmNotTheLastOne.length; i++) {
        var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
        if (eachNotifyElmNotLastOne.parentNode !== null) {
          eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
        }
      }
    }
    // notify - show only the last one: end

    // extend new settings with the backup settings
    newNotifySettings = extendNotiflix(true, newNotifySettings, newNotifySettingsBackup);

  };
  // Notiflix: Notify Single: end

  // Notiflix: Report Single: begin
  var NotiflixReport = function (title, message, buttonText, callbackOrOptions, options, staticType) {
    // check doc body
    if (!notiflixHeadOrBodyCheck('body')) { return false; }

    // if not initialized pretend like init
    if (!newReportSettings) {
      Notiflix.Report.Init({});
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
      newReportSettingsBackup = extendNotiflix(true, newReportSettings, {});

      // extend new settings with the options
      newReportSettings = extendNotiflix(true, newReportSettings, newOptions);
    }
    // check callbackOrOptions and callback: end

    // report type
    var theType = newReportSettings[staticType.toLocaleLowerCase('en')];

    // check the arguments: begin
    if (typeof title !== 'string') { title = 'Notiflix ' + staticType; }
    if (typeof message !== 'string') {
      if (staticType === 'Success') {
        message = '"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein';
      }
      else if (staticType === 'Failure') {
        message = '"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford';
      }
      else if (staticType === 'Warning') {
        message = '"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk';
      }
      else if (staticType === 'Info') {
        message = '"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung';
      }
    }
    if (typeof buttonText !== 'string') { buttonText = 'Okay'; }
    // check the arguments: end

    // if plainText true = HTML tags not allowed: begin
    if (newReportSettings.plainText) {
      title = notiflixPlaintext(title);
      message = notiflixPlaintext(message);
      buttonText = notiflixPlaintext(buttonText);
    }
    // if plainText true = HTML tags not allowed: end

    // if plainText false but the contents length more than *MaxLength = HTML tags error: begin
    if (!newReportSettings.plainText) {
      if (title.length > newReportSettings.titleMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Title content length is more than "titleMaxLength" option.'; // message html error
        buttonText = 'Okay'; // button html error
      }
      if (message.length > newReportSettings.messageMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Message content length is more than "messageMaxLength" option.'; // message html error
        buttonText = 'Okay'; // button html error
      }
      if (buttonText.length > newReportSettings.buttonMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Button content length is more than "buttonMaxLength" option.'; // message html error
        buttonText = 'Okay'; // button html error
      }
    }
    // if plainText false but the contents length more than *MaxLength = HTML tags error: end

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

    // if cssAnimaion false -> duration: begin
    if (!newReportSettings.cssAnimation) {
      newReportSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false -> duration: end

    // report wrap: begin
    var ntflxReportWrap = window.document.createElement('div');
    ntflxReportWrap.id = reportSettings.ID;
    ntflxReportWrap.className = newReportSettings.className;
    ntflxReportWrap.style.width = newReportSettings.width;
    ntflxReportWrap.style.zIndex = newReportSettings.zindex;
    ntflxReportWrap.style.borderRadius = newReportSettings.borderRadius;
    ntflxReportWrap.style.fontFamily = '"' + newReportSettings.fontFamily + '", ' + defaultFontFamily;

    // rtl: begin
    if (newReportSettings.rtl) {
      ntflxReportWrap.setAttribute('dir', 'rtl');
      ntflxReportWrap.classList.add('rtl-on');
    }
    // rtl: end

    // overlay: begin
    var reportOverlay = '';
    if (newReportSettings.backOverlay) {
      reportOverlay = '<div class="' + newReportSettings.className + '-overlay' + (newReportSettings.cssAnimation ? ' with-animation' : '') + '" style="background:' + (theType.backOverlayColor || newReportSettings.backOverlayColor) + ';animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;"></div>';
    }
    // overlay: end

    // svg icon: begin
    var svgIcon = '';
    if (staticType === 'Success') {
      svgIcon = notiflixReportSvgSuccess(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'Failure') {
      svgIcon = notiflixReportSvgFailure(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'Warning') {
      svgIcon = notiflixReportSvgWarning(newReportSettings.svgSize, theType.svgColor);
    } else if (staticType === 'Info') {
      svgIcon = notiflixReportSvgInfo(newReportSettings.svgSize, theType.svgColor);
    }
    // svg icon: end

    ntflxReportWrap.innerHTML = reportOverlay + '<div class="' + newReportSettings.className + '-content' + (newReportSettings.cssAnimation ? ' with-animation ' : '') + ' nx-' + newReportSettings.cssAnimationStyle + '" style="background:' + newReportSettings.backgroundColor + '; animation-duration:' + newReportSettings.cssAnimationDuration + 'ms;">' +
      '<div style="width:' + newReportSettings.svgSize + '; height:' + newReportSettings.svgSize + ';" class="' + newReportSettings.className + '-icon">' + svgIcon + '</div>' +
      '<h5 class="' + newReportSettings.className + '-title" style="font-weight:500; font-size:' + newReportSettings.titleFontSize + '; color:' + theType.titleColor + ';">' + title + '</h5>' +
      '<p class="' + newReportSettings.className + '-message" style="font-size:' + newReportSettings.messageFontSize + '; color:' + theType.messageColor + ';">' + message + '</p>' +
      '<a id="NXReportButton" class="' + newReportSettings.className + '-button" style="font-weight:500; font-size:' + newReportSettings.buttonFontSize + '; background:' + theType.buttonBackground + '; color:' + theType.buttonColor + ';">' + buttonText + '</a>' +
      '</div>';

    // if there is no report element
    if (!window.document.getElementById(ntflxReportWrap.id)) {
      // append
      window.document.body.appendChild(ntflxReportWrap);

      // vertical align: begin
      var windowH = Math.round(window.innerHeight);
      var reportH = Math.round(window.document.getElementById(ntflxReportWrap.id).offsetHeight);
      ntflxReportWrap.style.top = (windowH - reportH) / 2 + 'px';
      // vertical align: end

      // callback: begin
      var getReportWrap = window.document.getElementById(ntflxReportWrap.id);
      var reportButton = window.document.getElementById('NXReportButton');
      reportButton.addEventListener('click', function () {
        // if callback: begin
        if (typeof callbackOrOptions === 'function') {
          callbackOrOptions();
        }
        // if callback: end

        // remove element: begin
        getReportWrap.classList.add('remove');
        var timeout = setTimeout(function () {
          if (getReportWrap.parentNode !== null) {
            getReportWrap.parentNode.removeChild(getReportWrap);
          }
          clearTimeout(timeout);
        }, newReportSettings.cssAnimationDuration);
        // remove element: end
      });
      // callback: end

    }
    // report wrap: end

    // extend new settings with the backup settings
    newReportSettings = extendNotiflix(true, newReportSettings, newReportSettingsBackup);

  };
  // Notiflix: Report Single: end

  // Notiflix: Confirm Single: begin
  var NotiflixConfirm = function (title, message, okButtonText, cancelButtonText, okButtonCallback, cancelButtonCallback) {
    // check doc body
    if (!notiflixHeadOrBodyCheck('body')) { return false; }

    // if not initialized pretend like init
    if (!newConfirmSettings) {
      Notiflix.Confirm.Init({});
    }

    // check the arguments: begin
    if (typeof title !== 'string') { title = 'Notiflix Confirm'; }
    if (typeof message !== 'string') { message = 'Do you agree with me?'; }
    if (typeof okButtonText !== 'string') { okButtonText = 'Yes'; }
    if (typeof cancelButtonText !== 'string') { cancelButtonText = 'No'; }
    if (typeof okButtonCallback !== 'function') { okButtonCallback = undefined; }
    if (typeof cancelButtonCallback !== 'function') { cancelButtonCallback = undefined; }
    // check the arguments: end

    // if plainText true => HTML tags not allowed: begin
    if (newConfirmSettings.plainText) {
      title = notiflixPlaintext(title);
      message = notiflixPlaintext(message);
      okButtonText = notiflixPlaintext(okButtonText);
      cancelButtonText = notiflixPlaintext(cancelButtonText);
    }
    // if plainText true => HTML tags not allowed: end

    // if plainText false but the contents length more than *MaxLength = HTML tags error: begin
    if (!newConfirmSettings.plainText) {
      if (title.length > newConfirmSettings.titleMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Title content length is more than "titleMaxLength" option.'; // message html error
        okButtonText = 'Okay'; // button html error
        cancelButtonText = '...'; // button html error
      }
      if (message.length > newConfirmSettings.messageMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Message content length is more than "messageMaxLength" option.'; // message html error
        okButtonText = 'Okay'; // button html error
        cancelButtonText = '...'; // button html error
      }
      if ((okButtonText.length || cancelButtonText.length) > newConfirmSettings.buttonsMaxLength) {
        title = 'HTML Tags Error'; // title html error
        message = 'Your Buttons contents length is more than "buttonsMaxLength" option.'; // message html error
        okButtonText = 'Okay'; // button html error
        cancelButtonText = '...'; // button html error
      }
    }
    // if plainText false but the contents length more than *MaxLength = HTML tags error: end

    // max length: begin
    if (title.length > newConfirmSettings.titleMaxLength) {
      title = title.substring(0, newConfirmSettings.titleMaxLength) + '...';
    }
    if (message.length > newConfirmSettings.messageMaxLength) {
      message = message.substring(0, newConfirmSettings.messageMaxLength) + '...';
    }
    if (okButtonText.length > newConfirmSettings.buttonsMaxLength) {
      okButtonText = okButtonText.substring(0, newConfirmSettings.buttonsMaxLength) + '...';
    }
    if (cancelButtonText.length > newConfirmSettings.buttonsMaxLength) {
      cancelButtonText = cancelButtonText.substring(0, newConfirmSettings.buttonsMaxLength) + '...';
    }
    // max length: end

    // if cssAnimaion false -> duration: begin
    if (!newConfirmSettings.cssAnimation) {
      newConfirmSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false -> duration: end

    // confirm wrap: begin
    var ntflxConfirmWrap = window.document.createElement('div');
    ntflxConfirmWrap.id = confirmSettings.ID;
    ntflxConfirmWrap.className = newConfirmSettings.className + (newConfirmSettings.cssAnimation ? ' with-animation nx-' + newConfirmSettings.cssAnimationStyle : '');
    ntflxConfirmWrap.style.width = newConfirmSettings.width;
    ntflxConfirmWrap.style.zIndex = newConfirmSettings.zindex;

    // rtl: begin
    if (newConfirmSettings.rtl) {
      ntflxConfirmWrap.setAttribute('dir', 'rtl');
      ntflxConfirmWrap.classList.add('rtl-on');
    }
    // rtl: end

    // font-family: begin
    ntflxConfirmWrap.style.fontFamily = '"' + newConfirmSettings.fontFamily + '", ' + defaultFontFamily;
    // font-family: end

    // if background overlay true: begin
    var confirmOverlay = '';
    if (newConfirmSettings.backOverlay) {
      confirmOverlay = '<div class="' + newConfirmSettings.className + '-overlay' + (newConfirmSettings.cssAnimation ? ' with-animation' : '') + '" style="background:' + newConfirmSettings.backOverlayColor + ';animation-duration:' + newConfirmSettings.cssAnimationDuration + 'ms;"></div>';
    }
    // if background overlay true: end

    // if have a callback => add cancel button: begin
    var cancelButtonHTML = '';
    if (typeof okButtonCallback === 'function') {
      cancelButtonHTML = '<a id="NXConfirmButtonCancel" class="confirm-button-cancel" style="color:' + newConfirmSettings.cancelButtonColor + ';background:' + newConfirmSettings.cancelButtonBackground + ';font-size:' + newConfirmSettings.buttonsFontSize + ';">' + cancelButtonText + '</a>';
    }
    // if have a callback => add cancel button: end

    ntflxConfirmWrap.innerHTML = confirmOverlay +
      '<div class="' + newConfirmSettings.className + '-content" style="background:' + newConfirmSettings.backgroundColor + '; animation-duration:' + newConfirmSettings.cssAnimationDuration + 'ms; border-radius: ' + newConfirmSettings.borderRadius + ';">' +
      '<div class="' + newConfirmSettings.className + '-head">' +
      '<h5 style="color:' + newConfirmSettings.titleColor + ';font-size:' + newConfirmSettings.titleFontSize + ';">' + title + '</h5>' +
      '<div style="color:' + newConfirmSettings.messageColor + ';font-size:' + newConfirmSettings.messageFontSize + ';">' + message + '</div>' +
      '</div>' +
      '<div class="' + newConfirmSettings.className + '-buttons">' +
      '<a id="NXConfirmButtonOk" class="confirm-button-ok' + (typeof okButtonCallback === 'function' ? '' : ' full') + '" style="color:' + newConfirmSettings.okButtonColor + ';background:' + newConfirmSettings.okButtonBackground + ';font-size:' + newConfirmSettings.buttonsFontSize + ';">' + okButtonText + '</a>' +
      cancelButtonHTML +
      '</div>' +
      '</div>';
    // confirm wrap: end

    // if there is no confirm box: begin
    if (!window.document.getElementById(ntflxConfirmWrap.id)) {
      window.document.body.appendChild(ntflxConfirmWrap);

      // position: begin
      if (newConfirmSettings.position === 'center') { // if center-center
        var windowH = Math.round(window.innerHeight);
        var confirmH = Math.round(window.document.getElementById(ntflxConfirmWrap.id).offsetHeight);
        ntflxConfirmWrap.style.top = (windowH - confirmH) / 2 + 'px';
        ntflxConfirmWrap.style.left = newConfirmSettings.distance;
        ntflxConfirmWrap.style.right = newConfirmSettings.distance;
        ntflxConfirmWrap.style.bottom = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      } else if (newConfirmSettings.position === 'right-top') { // if right-top
        ntflxConfirmWrap.style.right = newConfirmSettings.distance;
        ntflxConfirmWrap.style.top = newConfirmSettings.distance;
        ntflxConfirmWrap.style.bottom = 'auto';
        ntflxConfirmWrap.style.left = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      } else if (newConfirmSettings.position === 'right-bottom') { // if right-bottom
        ntflxConfirmWrap.style.right = newConfirmSettings.distance;
        ntflxConfirmWrap.style.bottom = newConfirmSettings.distance;
        ntflxConfirmWrap.style.top = 'auto';
        ntflxConfirmWrap.style.left = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      } else if (newConfirmSettings.position === 'left-top') { // if left-top
        ntflxConfirmWrap.style.left = newConfirmSettings.distance;
        ntflxConfirmWrap.style.top = newConfirmSettings.distance;
        ntflxConfirmWrap.style.right = 'auto';
        ntflxConfirmWrap.style.bottom = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      } else if (newConfirmSettings.position === 'left-bottom') { // if left-bottom
        ntflxConfirmWrap.style.left = newConfirmSettings.distance;
        ntflxConfirmWrap.style.bottom = newConfirmSettings.distance;
        ntflxConfirmWrap.style.top = 'auto';
        ntflxConfirmWrap.style.right = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      } else { // if center-top
        ntflxConfirmWrap.style.top = newConfirmSettings.distance;
        ntflxConfirmWrap.style.left = 0;
        ntflxConfirmWrap.style.right = 0;
        ntflxConfirmWrap.style.bottom = 'auto';
        ntflxConfirmWrap.style.margin = 'auto';
      }
      // position: end

      // buttons listener: begin
      var confirmCloseWrap = window.document.getElementById(ntflxConfirmWrap.id);
      var okButton = window.document.getElementById('NXConfirmButtonOk');

      // ok button listener: begin
      okButton.addEventListener('click', function () {
        // if ok callback && if ok callback is a function
        if (typeof okButtonCallback === 'function') {
          okButtonCallback();
        }
        confirmCloseWrap.classList.add('remove');

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
            cancelButtonCallback();
          }
          confirmCloseWrap.classList.add('remove');

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
      // buttons listener: end
    }
    // if there is no confirm box: end
  };
  // Notiflix: Confirm Single: end

  // Notiflix: Loading Single: begin
  var NotiflixLoading = function (messageOrOptions, options, iconType, display, delay) {
    // check doc body
    if (!notiflixHeadOrBodyCheck('body')) { return false; }

    // if not initialized pretend like init
    if (!newLoadingSettings) {
      Notiflix.Loading.Init({});
    }

    // create a backup for new settings
    var newLoadingSettingsBackup = extendNotiflix(true, newLoadingSettings, {});

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
      newLoadingSettings = extendNotiflix(true, newLoadingSettings, newOptions);
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
      if (message.toString().length > newLoadingSettings.messageMaxLength) {
        message = notiflixPlaintext(message).toString().substring(0, newLoadingSettings.messageMaxLength) + '...';
      } else {
        message = notiflixPlaintext(message).toString();
      }
      var messageHTML = '';
      if (message.length > 0) {
        messageHTML = '<p id="' + newLoadingSettings.messageID + '" class="loading-message" style="color:' + newLoadingSettings.messageColor + ';font-size:' + newLoadingSettings.messageFontSize + ';">' + message + '</p>';
      }
      // if message settings: end

      // if cssAnimaion false -> duration: begin
      if (!newLoadingSettings.cssAnimation) {
        newLoadingSettings.cssAnimationDuration = 0;
      }
      // if cssAnimaion false -> duration: end

      // svgIcon: begin
      var svgIcon = '';
      if (iconType === 'standard') {
        svgIcon = notiflixIndicatorSvgStandard(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'hourglass') {
        svgIcon = notiflixIndicatorSvgHourglass(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'circle') {
        svgIcon = notiflixIndicatorSvgCircle(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'arrows') {
        svgIcon = notiflixIndicatorSvgArrows(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'dots') {
        svgIcon = notiflixIndicatorSvgDots(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'pulse') {
        svgIcon = notiflixIndicatorSvgPulse(newLoadingSettings.svgSize, newLoadingSettings.svgColor);
      } else if (iconType === 'custom' && newLoadingSettings.customSvgUrl !== null) {
        svgIcon = '<img class="custom-loading-icon" width="' + newLoadingSettings.svgSize + '" height="' + newLoadingSettings.svgSize + '" src="' + newLoadingSettings.customSvgUrl + '" alt="Notiflix">';
      } else if (iconType === 'custom' && newLoadingSettings.customSvgUrl == null) {
        notiflixConsoleError('Notiflix Error', 'You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.');
        return false;
      } else if (iconType === 'notiflix') {
        svgIcon = notiflixIndicatorSvgNotiflix(newLoadingSettings.svgSize, '#f8f8f8', '#32c682');
      }
      var svgSizeAsDigit = parseInt((newLoadingSettings.svgSize || '').replace(/[^0-9]/g, ''));
      var winWidth = window.innerWidth;
      var maxSvgWidthPx = svgSizeAsDigit >= winWidth ? (winWidth - 40) + 'px' : svgSizeAsDigit + 'px';
      var svgIconHTML = '<div style="width:' + maxSvgWidthPx + '; height:' + maxSvgWidthPx + ';" class="' + newLoadingSettings.className + '-icon' + (message.length > 0 ? ' with-message' : '') + '">' + svgIcon + '</div>';
      // svgIcon: end

      // loading wrap: begin
      var ntflxLoadingWrap = window.document.createElement('div');
      ntflxLoadingWrap.id = loadingSettings.ID;
      ntflxLoadingWrap.className = newLoadingSettings.className + (newLoadingSettings.cssAnimation ? ' with-animation' : '') + (newLoadingSettings.clickToClose ? ' click-to-close' : '');
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
        ntflxLoadingWrap.classList.add('rtl-on');
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
            ntflxLoadingWrap.classList.add('remove');
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
          loadingElm.classList.add('remove');
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
    newLoadingSettings = extendNotiflix(true, newLoadingSettings, newLoadingSettingsBackup);
  };
  // Notiflix: Loading Single: end

  // Notiflix: Loading Change Message: begin
  var NotiflixLoadingChange = function (newMessage) {
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
          newMessage = notiflixPlaintext(newMessage).substring(0, newLoadingSettings.messageMaxLength) + '...';
        } else {
          newMessage = notiflixPlaintext(newMessage);
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
          newMessageHTML.className = 'loading-message new-loading-message';
          newMessageHTML.style.color = newLoadingSettings.messageColor;
          newMessageHTML.style.fontSize = newLoadingSettings.messageFontSize;
          newMessageHTML.innerHTML = newMessage;
          messageWrap.appendChild(newMessageHTML);
          // create a new message element: end
        }
      }
      // if no message
      else {
        notiflixConsoleError('Notiflix Error', 'Where is the new message?');
      }
    }
  };
  // Notiflix: Loading Change Message: end

  // Notiflix: Block or Unblock Element: begin
  var blockElmCount = 0;
  var NotiflixBlockUnblockElement = function (block, selector, iconType, messageOrOptions, options, delay) {
    // check typeof selector: begin
    if (typeof selector !== 'string') {
      notiflixConsoleError('Notiflix Error', 'The selector parameter must be a String and matches a specified CSS selector(s).');
      return false;
    }
    // check typeof selector: end

    // check the selector: begin
    var getSelector = window.document.querySelectorAll(selector);
    if (getSelector.length < 1) {
      notiflixConsoleError('Notiflix Error', 'You called the "Notiflix.Block..." function with "' + selector + '" selector, but there is no such element(s) in the document.');
      return false;
    }
    // check the selector: end

    // if not initialized pretend like init: begin
    if (!newBlockSettings) {
      Notiflix.Block.Init({});
    }
    // if not initialized pretend like init: end

    // create a backup for new settings
    var newBlockSettingsBackup = extendNotiflix(true, newBlockSettings, {});

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
      newBlockSettings = extendNotiflix(true, newBlockSettings, newOptions);
    }
    // check "messageOrOptions" and "options": end

    // check the message: begin
    var message = '';
    if (typeof messageOrOptions === 'string' && messageOrOptions.length > 0) {
      message = messageOrOptions;
    }
    // check the message: end

    // if cssAnimaion false => duration: begin
    if (!newBlockSettings.cssAnimation) {
      newBlockSettings.cssAnimationDuration = 0;
    }
    // if cssAnimaion false => duration: end

    // check the class name: begin
    var blockClassName = 'notiflix-block';
    if (typeof newBlockSettings.className === 'string') {
      blockClassName = newBlockSettings.className.trim();
    }
    // check the class name: end

    // check query limit: begin
    var getQueryLimit = typeof newBlockSettings.querySelectorLimit === 'number' ? newBlockSettings.querySelectorLimit : 200;
    var checkQueryLimit = getSelector.length >= getQueryLimit ? getQueryLimit : getSelector.length;
    // check query limit: end

    // block
    if (block) {
      // add element(s) and style: begin
      for (var i = 0; i < checkQueryLimit; i++) {
        var eachSelector = getSelector[i];

        // check block element exist: begin
        var eachBlockElement = eachSelector.querySelectorAll('[id^=' + blockSettings.ID + ']');
        if (eachBlockElement.length < 1) {

          // check the icon: begin
          var icon = '';
          if (iconType) {
            if (iconType === 'hourglass') {
              icon = notiflixIndicatorSvgHourglass(newBlockSettings.svgSize, newBlockSettings.svgColor);
            } else if (iconType === 'circle') {
              icon = notiflixIndicatorSvgCircle(newBlockSettings.svgSize, newBlockSettings.svgColor);
            } else if (iconType === 'arrows') {
              icon = notiflixIndicatorSvgArrows(newBlockSettings.svgSize, newBlockSettings.svgColor);
            } else if (iconType === 'dots') {
              icon = notiflixIndicatorSvgDots(newBlockSettings.svgSize, newBlockSettings.svgColor);
            } else if (iconType === 'pulse') {
              icon = notiflixIndicatorSvgPulse(newBlockSettings.svgSize, newBlockSettings.svgColor);
            } else {
              icon = notiflixIndicatorSvgStandard(newBlockSettings.svgSize, newBlockSettings.svgColor);
            }
          }
          var iconElement = '<span class="' + blockClassName + '-icon" style="width:' + newBlockSettings.svgSize + ';height:' + newBlockSettings.svgSize + ';">' + icon + '</span>';
          // check the icon: end

          // check the message: begin
          var messageElement = '';
          if (message.length > 0) {
            if (message.length > newBlockSettings.messageMaxLength) {
              message = notiflixPlaintext(message).substring(0, newBlockSettings.messageMaxLength) + '...';
            } else {
              message = notiflixPlaintext(message);
            }
            messageElement = '<span style="font-size:' + newBlockSettings.messageFontSize + ';color:' + newBlockSettings.messageColor + ';" class="' + blockClassName + '-message">' + message + '</span>';
          }
          // check the message: end

          // block element: begin
          blockElmCount++;
          var notiflixBlockWrap = window.document.createElement('div');
          notiflixBlockWrap.id = blockSettings.ID + '-' + blockElmCount;
          notiflixBlockWrap.className = blockClassName + '-wrap' + (newBlockSettings.cssAnimation ? ' with-animation' : '');
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
            notiflixBlockWrap.classList.add('rtl-on');
          }
          // block element rtl: end

          // block element data: begin
          notiflixBlockWrap.innerHTML = iconElement + messageElement;
          // block element data: end

          // append block element: begin
          var eachSelectorPos = window.getComputedStyle(eachSelector).getPropertyValue('position');
          var selectorPos = typeof eachSelectorPos === 'string' ? eachSelectorPos.toLocaleLowerCase('en') : 'relative';

          var averageMinHeight = Math.round(parseInt(newBlockSettings.svgSize) * 1.25) + 40;
          var eachSelectorHeight = eachSelector.offsetHeight || 0;
          var minHeightStyle = '';
          if (averageMinHeight > eachSelectorHeight) {
            minHeightStyle = 'min-height:' + averageMinHeight + 'px;';
          }

          // selector internal style: begin
          var eachSelectorIdOrClass = '';
          if (eachSelector.getAttribute('id')) {
            eachSelectorIdOrClass = '#' + eachSelector.getAttribute('id');
          } else if (eachSelector.classList[0]) {
            eachSelectorIdOrClass = '.' + eachSelector.classList[0];
          } else {
            eachSelectorIdOrClass = (eachSelector.tagName || '').toLocaleLowerCase('en');
          }

          var positionStyle = '';
          var positions = ['absolute', 'relative', 'fixed', 'sticky'];
          var addPosition = positions.indexOf(selectorPos) <= -1;
          if (addPosition || minHeightStyle.length > 0) {
            // check doc head
            if (!notiflixHeadOrBodyCheck('head')) { return false; }

            // check position style
            if (addPosition) {
              positionStyle = 'position:relative!important;';
            }

            // create and add internal style to the head
            var style = '<style id="Style-' + blockSettings.ID + '-' + blockElmCount + '">' +
              eachSelectorIdOrClass + '.' + blockClassName + '-position{' + positionStyle + minHeightStyle + '}' +
              '</style>';
            var styleRange = window.document.createRange();
            styleRange.selectNode(window.document.head);
            var styleFragment = styleRange.createContextualFragment(style);
            window.document.head.appendChild(styleFragment);

            // add the "blockClassName" to each selector
            eachSelector.classList.add(blockClassName + '-position');
          }
          // selector internal style: end

          // append
          eachSelector.appendChild(notiflixBlockWrap);
          // append block element: end
        }
        // check block element exist: end
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

          // remove this selector internal style
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
              eachOne.classList.add('remove');
              // remove block elements
              removeBlockElements(eachOne);
            }
          }
        }
        // not exist
        else {
          notiflixConsoleLog('Notiflix Info', '"Notiflix.Block.Remove();" function called with "' + selector + '" selector, but this selector does not have a "Notiflix.Block..." element to remove.');
        }
      };
      // Step 2A => Remove each block element: begin

      // Step 2B => Remove each selector class name: begin
      var removeEachSelectorClassName = function (eachSelector) {
        var timeout = setTimeout(function () {
          // remove class name
          var positionClass = blockClassName + '-position';
          eachSelector.classList.remove(positionClass);

          // clear timeout
          clearTimeout(timeout);
        }, newBlockSettings.cssAnimationDuration + 300);
      };
      // Step 2B => Remove each selector class name: end

      // Step 1 => Remove selector class name: begin
      var selectorTimeout = setTimeout(function () {
        for (var i = 0; i < checkQueryLimit; i++) {
          var eachSelector = getSelector[i];

          // remove each selector class name
          removeEachSelectorClassName(eachSelector);

          // remove each block element
          eachBlockElement = eachSelector.querySelectorAll('[id^=' + blockSettings.ID + ']');
          removeClassBlockElements(eachBlockElement);
        }
        // clear timeout
        clearTimeout(selectorTimeout);
      }, delay);
      // Step 1 => Remove selector class name: end
    }

    // extend new settings with the backup settings
    newBlockSettings = extendNotiflix(true, newBlockSettings, newBlockSettingsBackup);
  };
  // Notiflix: Block or Unblock Element: end

  // Notiflix: Main: begin
  var Notiflix = {
    // Notify: begin
    Notify: {
      // Init
      Init: function (userNotifyOpt) {
        // extend options
        newNotifySettings = extendNotiflix(true, notifySettings, userNotifyOpt);
        // use GoogleFonts if "Quicksand"
        notiflixGoogleFont(newNotifySettings.useGoogleFont, newNotifySettings.fontFamily);
        // internal css if exist
        notiflixInternalCSS();
      },
      // Merge First Init
      Merge: function (userNotifyExtend) {
        // if initialized already
        if (newNotifySettings) {
          newNotifySettings = extendNotiflix(true, newNotifySettings, userNotifyExtend);
        }
        // initialize first
        else {
          notiflixConsoleError('Notiflix Error', 'You have to initialize the Notify module before call Merge function.');
          return false;
        }
      },
      // Display Notification: Success
      Success: function (message, callbackOrOptions, options) {
        NotiflixNotify(message, callbackOrOptions, options, 'Success');
      },
      // Display Notification: Failure
      Failure: function (message, callbackOrOptions, options) {
        NotiflixNotify(message, callbackOrOptions, options, 'Failure');
      },
      // Display Notification: Warning
      Warning: function (message, callbackOrOptions, options) {
        NotiflixNotify(message, callbackOrOptions, options, 'Warning');
      },
      // Display Notification: Info
      Info: function (message, callbackOrOptions, options) {
        NotiflixNotify(message, callbackOrOptions, options, 'Info');
      },
    },
    // Notify: end

    // Report: begin
    Report: {
      // Init
      Init: function (userReportOpt) {
        // extend options
        newReportSettings = extendNotiflix(true, reportSettings, userReportOpt);
        // use GoogleFonts if "Quicksand"
        notiflixGoogleFont(newReportSettings.useGoogleFont, newReportSettings.fontFamily);
        // internal css if exist
        notiflixInternalCSS();
      },
      // Merge First Init
      Merge: function (userReportExtend) {
        // if initialized already
        if (newReportSettings) {
          newReportSettings = extendNotiflix(true, newReportSettings, userReportExtend);
        }
        // initialize first
        else {
          notiflixConsoleError('Notiflix Error', 'You have to initialize the Report module before call Merge function.');
          return false;
        }
      },
      // Display Report: Success
      Success: function (title, message, buttonText, callbackOrOptions, options) {
        NotiflixReport(title, message, buttonText, callbackOrOptions, options, 'Success');
      },
      // Display Report: Failure
      Failure: function (title, message, buttonText, callbackOrOptions, options) {
        NotiflixReport(title, message, buttonText, callbackOrOptions, options, 'Failure');
      },
      // Display Report: Warning
      Warning: function (title, message, buttonText, callbackOrOptions, options) {
        NotiflixReport(title, message, buttonText, callbackOrOptions, options, 'Warning');
      },
      // Display Report: Info
      Info: function (title, message, buttonText, callbackOrOptions, options) {
        NotiflixReport(title, message, buttonText, callbackOrOptions, options, 'Info');
      },
    },
    // Report: end

    // Confirm: begin
    Confirm: {
      // Init
      Init: function (userConfirmOpt) {
        // extend options
        newConfirmSettings = extendNotiflix(true, confirmSettings, userConfirmOpt);
        // use GoogleFonts if "Quicksand"
        notiflixGoogleFont(newConfirmSettings.useGoogleFont, newConfirmSettings.fontFamily);
        // internal css if exist
        notiflixInternalCSS();
      },
      // Merge First Init
      Merge: function (userConfirmExtend) {
        // if initialized already
        if (newConfirmSettings) {
          newConfirmSettings = extendNotiflix(true, newConfirmSettings, userConfirmExtend);
        }
        // initialize first
        else {
          notiflixConsoleError('Notiflix Error', 'You have to initialize the Confirm module before call Merge function.');
          return false;
        }
      },
      // Display Confirm: Show
      Show: function (title, message, okText, cancelText, okCallback, cancelCallback) {
        NotiflixConfirm(title, message, okText, cancelText, okCallback, cancelCallback);
      },
    },
    // Confirm: end

    // Loading: begin
    Loading: {
      // Init
      Init: function (userLoadingOpt) {
        // extend options
        newLoadingSettings = extendNotiflix(true, loadingSettings, userLoadingOpt);
        // use GoogleFonts if "Quicksand"
        notiflixGoogleFont(newLoadingSettings.useGoogleFont, newLoadingSettings.fontFamily);
        // internal css if exist
        notiflixInternalCSS();
      },
      // Merge First Init
      Merge: function (userLoadingExtend) {
        // if initialized already
        if (newLoadingSettings) {
          newLoadingSettings = extendNotiflix(true, newLoadingSettings, userLoadingExtend);
        }
        // initialize first
        else {
          notiflixConsoleError('Notiflix Error', 'You have to initialize the Loading module before call Merge function.');
          return false;
        }
      },
      // Display Loading: Standard
      Standard: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'standard', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Hourglass
      Hourglass: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'hourglass', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Circle
      Circle: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'circle', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Arrows
      Arrows: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'arrows', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Dots
      Dots: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'dots', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Pulse
      Pulse: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'pulse', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Custom
      Custom: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'custom', true, 0); // true => show && 0 => delay
      },
      // Display Loading: Notiflix
      Notiflix: function (messageOrOptions, options) {
        NotiflixLoading(messageOrOptions, options, 'notiflix', true, 0); // true => show && 0 => delay
      },
      // Remove Loading
      Remove: function (delay) {
        if (typeof delay !== 'number') { delay = 0; }
        NotiflixLoading(false, false, false, false, delay); // false => hide/remove
      },
      // Change The Message
      Change: function (newMessage) {
        NotiflixLoadingChange(newMessage);
      },
    },
    // Loading: end

    // Block: begin
    Block: {
      // Initialize
      Init: function (userBlockOpt) {
        // extend options
        newBlockSettings = extendNotiflix(true, blockSettings, userBlockOpt);
        // use GoogleFonts if "Quicksand"
        notiflixGoogleFont(newBlockSettings.useGoogleFont, newBlockSettings.fontFamily);
        // internal css if exist
        notiflixInternalCSS();
      },
      // Merge First Initialize
      Merge: function (userBlockExtend) {
        // if initialized already
        if (newBlockSettings) {
          newBlockSettings = extendNotiflix(true, newBlockSettings, userBlockExtend);
        }
        // initialize first
        else {
          notiflixConsoleError('Notiflix Error', 'You have to initialize the "Notiflix.Block" module before call Merge function.');
          return false;
        }
      },
      // Display Block: Standard
      Standard: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'standard', messageOrOptions, options); // true => show
      },
      // Display Block: Hourglass
      Hourglass: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'hourglass', messageOrOptions, options); // true => show
      },
      // Display Block: Circle
      Circle: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'circle', messageOrOptions, options); // true => show
      },
      // Display Block: Arrows
      Arrows: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'arrows', messageOrOptions, options); // true => show
      },
      // Display Block: Dots
      Dots: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'dots', messageOrOptions, options); // true => show
      },
      // Display Block: Pulse
      Pulse: function (selector, messageOrOptions, options) {
        NotiflixBlockUnblockElement(true, selector, 'pulse', messageOrOptions, options); // true => show
      },
      // Remove Block
      Remove: function (selector, delay) {
        if (typeof delay !== 'number') { delay = 0; }
        NotiflixBlockUnblockElement(false, selector, false, false, false, delay); // false => hide/remove
      },
      // Check if the specified element is being blocked
      isBlocked: function (selector) {
        return document.querySelector(`${selectors} [id^="${blockSettings.ID}"]`)? true:false;
      },
    },
    // Block: end
  };
  // Notiflix: Main: begin

  // Notiflix: Return: begin
  return {
    Notify: Notiflix.Notify,
    Report: Notiflix.Report,
    Confirm: Notiflix.Confirm,
    Loading: Notiflix.Loading,
    Block: Notiflix.Block,
  };
  // Notiflix: Return: end
});
