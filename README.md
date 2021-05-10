<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/main/docs/notiflix-banner.gif" width="480" height="auto" alt="Notiflix">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/main/docs/notiflix-logo.svg?sanitize=true" width="240" height="80" alt="Notiflix">
</p>
<br />

[npm-version-badge]: https://img.shields.io/npm/v/notiflix.svg
[npm-version-url]: https://www.npmjs.com/package/notiflix
[dep-badge]: https://david-dm.org/notiflix/Notiflix.svg
[dep-url]: https://david-dm.org/notiflix/Notiflix.svg
[synk-badge]: https://snyk.io/test/github/notiflix/Notiflix/badge.svg?targetFile=package.json
[synk-url]: https://snyk.io/test/github/notiflix/Notiflix?targetFile=package.json
[downloads-image]: https://img.shields.io/npm/dm/notiflix.svg
[downloads-url]: https://npmjs.org/package/notiflix
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/notiflix/badge?style=rounded
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/notiflix
[size-badge]: https://img.badgesize.io/https://cdn.jsdelivr.net/npm/notiflix@3.0.1/dist/notiflix-aio-3.0.1.min.js?compression=gzip
[size-url]: https://cdn.jsdelivr.net/npm/notiflix@3.0.1/dist/notiflix-aio-3.0.1.min.js
[lic-badge]: https://img.shields.io/github/license/notiflix/Notiflix.svg
[lic-url]: https://github.com/notiflix/Notiflix/blob/main/LICENSE

[![npm version][npm-version-badge]][npm-version-url]
[![Dependencies][dep-badge]][dep-url]
[![Known Vulnerabilities][synk-badge]][synk-url]
[![Downloads][downloads-image]][downloads-url]
[![jsDelivr][jsdelivr-badge]][jsdelivr-url]
[![Size][size-badge]][size-url]
[![License][lic-badge]][lic-url]

## Notiflix | a JavaScript library for client-side non-blocking notifications.
Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.

#### Current Version
3.0.1 [*](https://github.com/notiflix/Notiflix/blob/main/CHANGELOG.md "CHANGELOG")

#### Website
https://www.notiflix.com

#### Documentation
https://www.notiflix.com/documentation

#### Modules (Demo)
- **Notiflix Notify** => https://www.notiflix.com/#Notify
- **Notiflix Report** => https://www.notiflix.com/#Report
- **Notiflix Confirm** => https://www.notiflix.com/#Confirm
- **Notiflix Loading** => https://www.notiflix.com/#Loading
- **Notiflix Block** => https://www.notiflix.com/#Block

---------

### (A) Install and Import

Install

[yarn](https://yarnpkg.com/en/package/notiflix)

```js
yarn add notiflix
```

[npm](https://www.npmjs.com/package/notiflix)

```js
npm i notiflix
```

Import

```jsx
// all modules
import Notiflix from "notiflix";

// one by one
import { Notify, Report, Confirm, Loading, Block } from "notiflix";
```

---------

### (B) Add an HTML

##### CSS and JS
```html
<link rel="stylesheet" href="dist/notiflix-3.0.1.min.css" />

<script src="dist/notiflix-3.0.1.min.js"></script>
```

##### or only JS (All in One - Internal CSS)
```html
<script src="dist/notiflix-aio-3.0.1.min.js"></script>
```

---------

### Usage

#### 1- Notify Module

```js
/*
* @param1 {string}: Required, message text in String format.
*
* @param2 {function | Object}: Optional, a callback function when the notification element has been clicked. Or, extend the initialize options with new options for each notification element.
*
* @param3 {Object}: Optional, extend the initialize options with new options for each notification element (if the second parameter is a callback function).
*/

// e.g. Only message
Notiflix.Notify.success('Success message text');

Notiflix.Notify.failure('Failure message text');

Notiflix.Notify.warning('Warning message text');

Notiflix.Notify.info('Info message text');

// e.g. Message with a callback
Notiflix.Notify.success(
  'Click Me',
  function(){
    // callback
  },
);

// e.g. Message with the new options
Notiflix.Notify.success(
  'Click Me',
  {
    timeout: 6000,
  },
);

// e.g. Message with callback, and the new options
Notiflix.Notify.success(
  'Click Me',
  function(){
    // callback
  },
  {
    timeout: 4000,
  },
);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 2- Report Module

```js
/*
* @param1 {string}: Required, title text in String format.
*
* @param2 {string}: Required, message text in String format.
*
* @param3 {string}: Required, button text in String format.
*
* @param4 {function | Object}: Optional, a callback function when the button element has been clicked. Or, extend the initialize options with new options for each element.
*
* @param5 {Object}: Optional, extend the initialize options with new options for each element. (if the second parameter is a callback function).
*/

// e.g. Only title, message, and button text
Notiflix.Report.success('Title', 'Message', 'Button Text');

Notiflix.Report.failure('Title', 'Message', 'Button Text');

Notiflix.Report.warning('Title', 'Message', 'Button Text');

Notiflix.Report.info('Title', 'Message', 'Button Text');

// e.g. With a callback
Notiflix.Report.success(
  'Title',
  'Message',
  'Button Text',
  function(){
    // callback
  },
);

// e.g. With the new options
Notiflix.Report.success(
  'Title',
  'Message',
  'Button Text',
  {
    width: '360px',
    svgSize: '120px',
  },
);

// e.g. With the new options, and callback
Notiflix.Report.success(
  'Title',
  'Message',
  'Button Text',
  function(){
    // callback
  },
  {
    width: '360px',
    svgSize: '120px',
  },
);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 3- Confirm Module

Show:

```js
/*
* @param1 {string}: Required, title text in String format.
* @param2 {string}: Required, message text in String format.
* @param3 {string}: Required, ok button text in String format.
* @param4 {string}: Optional, cancel button text in String format.
* @param5 {function}: Optional, callback function when the ok button element clicked.
* @param6 {function}: Optional, callback function when the cancel button element clicked.
* @param7 {Object}: Optional, extend the initialize options with new options for each confirm box.
*/

Notiflix.Confirm.show('Title', 'Message', 'Ok Button Text');

// e.g. with callback
Notiflix.Confirm.show(
  'Title',
  'Message',
  'Ok Button',
  'Cancel Button',

  // ok button callback
  function(){
    // codes...
  },

  // cancel button callback
  function(){
    // codes...
  },

  // extend the init options for this confirm box
  {
    width: '320px',
    borderRadius: '8px',
    // etc...
  },
);
```


Ask:

```js
/*
* @param1 {string}: Required, the title text in String format.
* @param2 {string}: Required, the question text in String format.
* @param3 {string}: Required, the answer text in String format.
* @param4 {string}: Required, the ok button text in String format.
* @param5 {string}: Optional, the cancel button text in String format.
* @param6 {function}: Optional, a callback function when the ok button element clicked after the correct answer.
* @param7 {function}: Optional, a callback function when the cancel button element clicked.
* @param8 {Object}: Optional, extend the initialize options with new options for each confirm box.
*/

Notiflix.Confirm.ask(
  'Where is Padmé?',
  'Is she safe? Is she all right?',
  'It seems, in your anger, you killed her.',
  'Answer',
  'Cancel',
  function(){
    alert('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!');
    // codes...
  },
  function(){
    // codes...
  },
  {
    // extend the init options for this confirm box
  },
);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 4- Loading Module

Show:

```js
/*
* @param1 {string | Object}: Optional, message text in String format. Or, extend the initialize options with new options for each loading indicator.
* @param2 {Object}: Optional, extend the initialize options with new options for each loading indicator (if the first parameter is a string message text).
*/

// Only Loading indicator
Notiflix.Loading.standard();
Notiflix.Loading.hourglass();
Notiflix.Loading.circle();
Notiflix.Loading.arrows();
Notiflix.Loading.dots();
Notiflix.Loading.pulse();

// Loading indicator with a message
Notiflix.Loading.standard('Loading...');


// Only Loading indicator with the new options
Notiflix.Loading.standard(
  {
    svgSize: '19px',
  },
);

// Loading indicator with a message, and the new options
Notiflix.Loading.standard(
  'Loading...',
  {
    svgSize: '23px',
  },
);
```

Change:

```js
/*
* @param1 {string}: Required, message text in String format.
*/

// Change the message text (if an indicator exists)
Notiflix.Loading.change('Loading %20');
```

Remove:

```js
/*
* @param1 {number}: Optional, number as millisecond.
*/

// Remove immediately
Notiflix.Loading.remove();

// Remove after delay - e.g. 600ms
Notiflix.Loading.remove(600);
```

Custom:

```js
// Initialize with a custom SVG Icon (default value is null)
Notiflix.Loading.init({
  customSvgUrl: 'https://www.notiflix.com/dir/icon.svg',
});

// Only Customized Loading indicator
Notiflix.Loading.custom();

// Customized Loading indicator with a message
Notiflix.Loading.custom('Loading...');

// And the other functionalities (Change, Remove...)
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 5- Block Module

Notiflix Block module can be used to block or unblock elements to prevents users actions during the process (AJAX etc.) without locking the browser or the other elements.

Block:

```js
/*
* @param1 {string}: Required, Select the element(s) to block. (ID or Class)
* @param2 {string | Object}: Optional, message text in String format. Or, extend the initialize options with new options for each block element.
* @param3 {Object}: Optional, extend the initialize options with new options for each block element (if the second parameter is a string message text).
*/

// Only indicator
Notiflix.Block.standard('.element');
Notiflix.Block.hourglass('.element');
Notiflix.Block.circle('.element');
Notiflix.Block.arrows('.element');
Notiflix.Block.dots('.element');
Notiflix.Block.pulse('.element');

// Indicator with a message
Notiflix.Block.standard('.selector', 'Loading...');


// Only indicator with the new options
Notiflix.Block.standard(
  '.selector',
  {
    svgSize: '18px',
  },
);

// Indicator with a message, and the new options
Notiflix.Block.standard(
  '.selector',
  'Loading...',
  {
    svgSize: '81px',
  },
);
```


Unblock:

```js
/*
* @param1 {string}: Required, Select the element(s) to unblock. (ID or Class)
* @param2 {number}: Optional, Unblock after a delay.
*/

// Unblock selected element(s) immediately
Notiflix.Block.remove('.selector');

// Unblock selected element(s) after a delay (e.g. 600 milliseconds)
Notiflix.Block.remove('.selector', 600);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


### Initialize (optional)

`Notiflix.*.init` function can be used if wanted to be used with custom settings.

```js
// Notify
Notiflix.Notify.init({});

// Report
Notiflix.Report.init({});

// Confirm
Notiflix.Confirm.init({});

// Loading
Notiflix.Loading.init({});

// Block
Notiflix.Block.init({});


// e.g. Initialize the Notify Module with some options
Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
  distance: '10px',
  opacity: 1,
  // ...
});
```

--_--_----_--_----_--_----_--_----_--_----_--_--


### Merge (optional)

`Notiflix.*.merge` function can be used to deeply extend the `init()` function for a specific page or event.

```js
// e.g. Merge the Notify Module initialize function with some new options
Notiflix.Notify.merge({
  width: '300px',
  // ...
});
```


---------
---------
---------


#### Notiflix Notify Module: Default Options

```js
Notiflix.Notify.init({
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
    childClassName: 'success',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(50,198,130,0.2)',
  },

  failure: {
    background: '#ff5549',
    textColor: '#fff',
    childClassName: 'failure',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(255,85,73,0.2)',
  },

  warning: {
    background: '#eebf31',
    textColor: '#fff',
    childClassName: 'warning',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },

  info: {
    background: '#26c0d3',
    textColor: '#fff',
    childClassName: 'info',
    notiflixIconColor: 'rgba(0,0,0,0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
    backOverlayColor: 'rgba(38,192,211,0.2)',
  },
});
```

---------

#### Notiflix Report Module: Default Options

```js
Notiflix.Report.init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#f8f8f8',
  borderRadius: '25px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
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
});
```

---------

#### Notiflix Confirm Module: Default Options

```js
Notiflix.Confirm.init({
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
});
```

---------

#### Notiflix Loading Module: Default Options

```js
Notiflix.Loading.init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
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
});
```


---------


#### Notiflix Block Module: Default Options

```js
Notiflix.Block.init({
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
});
```

---------
---------
---------

#### Copyright
Copyright &copy; 2019 - 2021 Notiflix

#### License
MIT license - https://opensource.org/licenses/MIT
