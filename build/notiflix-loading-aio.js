/*
* Notiflix Loading AIO (https://notiflix.github.io)
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

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

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

  var Notiflix = {
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
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Loading: Notiflix.Loading });
  } else {
    return { Loading: Notiflix.Loading };
  }

});