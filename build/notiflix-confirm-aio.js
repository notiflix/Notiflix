/*
* Notiflix Confirm AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.8
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2025 Notiflix, MIT License (https://opensource.org/licenses/MIT)
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

  // COMMON: Console Error: begin
  var commonConsoleError = function (message) {
    return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
  };
  // COMMON: Console Error: end

  // COMMON: Check Head or Body: begin
  var commonCheckHeadOrBody = function (element) {
    if (!element) { element = 'head'; }
    if (window.document[element] === undefined) {
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

    // if cssAnimation is false => duration: begin
    if (!newConfirmSettings.cssAnimation) {
      newConfirmSettings.cssAnimationDuration = 0;
    }
    // if cssAnimation is false => duration: end

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

  var Notiflix = {
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
  };

  if (typeof window.Notiflix === 'object') {
    return commonExtendOptions(true, window.Notiflix, { Confirm: Notiflix.Confirm });
  } else {
    return { Confirm: Notiflix.Confirm };
  }

});