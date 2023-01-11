/*
* Notiflix Block AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.6
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2023 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
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
    return commonExtendOptions(true, window.Notiflix, { Block: Notiflix.Block });
  } else {
    return { Block: Notiflix.Block };
  }

});