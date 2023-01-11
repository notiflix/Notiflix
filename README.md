<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/main/docs/notiflix-banner.gif" width="480" height="auto" alt="Notiflix">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/main/docs/notiflix-logo.svg?sanitize=true" width="240" height="80" alt="Notiflix">
</p>
<br />

[npm-version-badge]: https://img.shields.io/npm/v/notiflix.svg
[npm-version-url]: https://www.npmjs.com/package/notiflix
[synk-badge]: https://snyk.io/test/github/notiflix/Notiflix/badge.svg?targetFile=package.json
[synk-url]: https://snyk.io/test/github/notiflix/Notiflix?targetFile=package.json
[typescript-badge]: https://badgen.net/badge/icon/Typed?icon=typescript&label&labelColor=3178c6&color=555
[typescript-url]: https://github.com/notiflix/Notiflix/blob/main/index.d.ts
[downloads-image]: https://img.shields.io/npm/dm/notiflix.svg
[downloads-url]: https://npmjs.org/package/notiflix
[jsdelivr-badge]: https://data.jsdelivr.com/v1/package/npm/notiflix/badge?style=rounded
[jsdelivr-url]: https://www.jsdelivr.com/package/npm/notiflix
[size-badge]: https://img.badgesize.io/https://cdn.jsdelivr.net/npm/notiflix@3.2.6/dist/notiflix-aio-3.2.6.min.js?compression=gzip
[size-url]: https://cdn.jsdelivr.net/npm/notiflix@3.2.6/dist/notiflix-aio-3.2.6.min.js
[lic-badge]: https://img.shields.io/github/license/notiflix/Notiflix.svg
[lic-url]: https://github.com/notiflix/Notiflix/blob/main/LICENSE
[openbase-badge]: https://badges.openbase.com/js/rating/notiflix.svg?token=etJpTk0XCPP8Fb4hZ0FONgCAqdcH8gpxG7R0hQU4S6w%3D
[openbase-url]: https://openbase.com/js/notiflix?utm_source=embedded&utm_medium=badge&utm_campaign=rating-badge&utm_term=js/notiflix

[![NPM Version][npm-version-badge]][npm-version-url]
[![Known Vulnerabilities][synk-badge]][synk-url]
[![TypeScript][typescript-badge]][typescript-url]
[![Downloads][downloads-image]][downloads-url]
[![jsDelivr][jsdelivr-badge]][jsdelivr-url]
[![Size][size-badge]][size-url]
[![License][lic-badge]][lic-url]
[![Rate this package][openbase-badge]][openbase-url]

# Notiflix

Notiflix is a pure JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.

### Current Version

3.2.6 [*](https://github.com/notiflix/Notiflix/blob/main/CHANGELOG.md "CHANGELOG")

### Browser Compatibility

`Chrome` || `Firefox` || `Safari` || `Edge` || `Opera` || `* Edge Legacy` || `* IE 10+`

<sub>* SVG animations are not supported.</sub>

---------

### Documentation

https://notiflix.github.io/documentation

### Modules (Demo/Playground)

- **Notiflix Notify** => https://notiflix.github.io/notify
- **Notiflix Report** => https://notiflix.github.io/report
- **Notiflix Confirm** => https://notiflix.github.io/confirm
- **Notiflix Loading** => https://notiflix.github.io/loading
- **Notiflix Block** => https://notiflix.github.io/block

---------

### (A) Install and Import

Install

[yarn](https://yarnpkg.com/package/notiflix)

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
import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

```

---------

### (B) Add to an HTML page (Global)

#### CSS and JS
```html
<link rel="stylesheet" href="dist/notiflix-3.2.6.min.css" />

<script src="dist/notiflix-3.2.6.min.js"></script>
```

#### or only JS (All in One - Internal CSS)
```html
<script src="dist/notiflix-aio-3.2.6.min.js"></script>
```

#### or only Modules JS (All in One - Internal CSS)
```html
<script src="dist/notiflix-notify-aio-3.2.6.min.js"></script>

<script src="dist/notiflix-report-aio-3.2.6.min.js"></script>

<script src="dist/notiflix-confirm-aio-3.2.6.min.js"></script>

<script src="dist/notiflix-loading-aio-3.2.6.min.js"></script>

<script src="dist/notiflix-block-aio-3.2.6.min.js"></script>
```

---------

### Usage

#### 1- Notify Module

Notiflix Notify module can be used to send non-blocking alerts/notifications. This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".

```js
/*
* @param1 {string}: Required, a text in string format.
* @param2 {function | Object}: Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
* @param3 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
*/

// e.g. Only message
Notiflix.Notify.success('Sol lucet omnibus');

Notiflix.Notify.failure('Qui timide rogat docet negare');

Notiflix.Notify.warning('Memento te hominem esse');

Notiflix.Notify.info('Cogito ergo sum');

// e.g. Message with a callback
Notiflix.Notify.success(
  'Click Me',
  function cb() {
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
  function cb() {
    // callback
  },
  {
    timeout: 4000,
  },
);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 2- Report Module

Notiflix Report module can be used to show extended notifications that contain a title, description, and button(with a callback function). This module includes 4 types of notifications: "Success", "Failure", "Warning", and "Info".

```js
/*
* @param1 {string}: Required, title text in string format.
* @param2 {string}: Required, message text in string format.
* @param3 {string}: Required, button text in string format.
* @param4 {function | Object}: Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element.
* @param5 {Object}: Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)
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
  function cb() {
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

// e.g. With a callback, and the new options
Notiflix.Report.success(
  'Title',
  'Message',
  'Button Text',
  function cb() {
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

Notiflix Confirm module can be used to show non-blocking confirm/prompt boxes. This module includes 3 types of prompts: "Show", "Ask", and "Prompt". An additional question can be asked within the prompt box if using the "Ask" and/or "Prompt" ones unlike the "Show" one.

##### Show:
This method can be used to show a confirm box with info, and take the custom actions via the callback functions.

```js
/*
* @param1 {string}: Required, title text in string format.
* @param2 {string}: Required, message/question in string format.
* @param3 {string}: Required, OK button text in string format.
* @param4 {string}: Optional, Cancel button text in string format.
* @param5 {function}: Optional, a callback function that will be called when the OK button element has been clicked.
* @param6 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked.
* @param7 {Object}: Optional, extending the initialize options with new the options for each confirm box.
*/

Notiflix.Confirm.show(
  'Notiflix Confirm',
  'Do you agree with me?',
  'Yes',
  'No',
  function okCb() {
    alert('Thank you.');
  },
  function cancelCb() {
    alert('If you say so...');
  },
  {
    width: '320px',
    borderRadius: '8px',
    // etc...
  },
);
```

##### Ask:
This method can be used to ask a question within a confirm box. The confirm box doesn't remove till the client gives the correct answer. Or, the client can click on the cancel button to close/remove the confirm box as well.

```js
/*
* @param1 {string}: Required, title text in string format.
* @param2 {string}: Required, question text in string format.
* @param3 {string}: Required, answer text in string format.
* @param4 {string}: Required, OK button text in string format.
* @param5 {string}: Optional, Cancel button text in string format.
* @param6 {function}: Optional, a callback function that will be called when the OK button element has been clicked.
* @param7 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked.
* @param8 {Object}: Optional, extending the initialize options with new the options for each confirm box.
*/

Notiflix.Confirm.ask(
  'Where is Padmé?',
  'Is she safe? Is she all right?',
  'It seems, in your anger, you killed her.',
  'Answer',
  'Cancel',
  function okCb() {
    alert('😡 NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!');
  },
  function cancelCb() {
    alert('😪 ...');
  },
  {
    // Custom options
  },
);
```

##### Prompt:
This method works similarly as `window.prompt()`. The client doesn't have to type a correct answer to the input element to proceed unlike the `Notiflix.Confirm.ask();` method. The client answer passes to the callback functions as a parameter and this parameter is always a `string`.

```js
/*
* @param1 {string}: Required, title text in string format.
* @param2 {string}: Required, question text in string format.
* @param3 {string}: Required, default answer text in string format. An empty string can be used as well.
* @param4 {string}: Required, OK button text in string format.
* @param5 {string}: Optional, Cancel button text in string format.
* @param6 {function}: Optional, a callback function that will be called when the OK button element has been clicked.
* @param7 {function}: Optional, a callback function that will be called when the Cancel button element has been clicked.
* @param8 {Object}: Optional, extending the initialize options with new the options for each confirm box.
*/

Notiflix.Confirm.prompt(
  'Hello',
  'How are you feeling?',
  'Awesome!',
  'Answer',
  'Cancel',
  function okCb(clientAnswer) {
    console.log('Client answer is: ' + clientAnswer);
  },
  function cancelCb(clientAnswer) {
    console.log('Client answer was: ' + clientAnswer);
  },
  {
    // Custom options
  },
);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 4- Loading Module
Notiflix Loading module can be used to show a loading indicator during a process (Fetch/XHR). Includes 6 types of animated SVG icons: "Standard", "Hourglass", "Circle", "Arrows", "Dots", and "Pulse". An additional type is "Custom", and it can be used with a custom SVG icon.

Show:

```js
/*
* @param1 {string | Object}: Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
* @param2 {Object}: Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
*/

// Only loading indicators
Notiflix.Loading.standard();
Notiflix.Loading.hourglass();
Notiflix.Loading.circle();
Notiflix.Loading.arrows();
Notiflix.Loading.dots();
Notiflix.Loading.pulse();

// Loading indicator with a message
Notiflix.Loading.standard('Loading...');

// Only loading indicator with the new options
Notiflix.Loading.standard({
  clickToClose: true,
  svgSize: '19px',
});

// Loading indicator with a message, and the new options
Notiflix.Loading.standard('Loading...', {
  backgroundColor: 'rgba(0,0,0,0.8)',
});
```

Change:

```js
/*
* @param1 {string}: Required, new message in string format.
*/

Notiflix.Loading.change('Loading %20');
```

Remove:

```js
/*
* @param1 {number}: Optional, milliseconds for delaying in number format.
*/

// Remove immediately
Notiflix.Loading.remove();

// Remove after delay => e.g. 1923ms
Notiflix.Loading.remove(1923);
```

Custom:

```js
// Only custom loading indicator
Notiflix.Loading.custom({
  customSvgUrl: 'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
});

// Custom loading indicator with a message
Notiflix.Loading.custom('Loading...', {
  customSvgUrl: 'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
});


// Only custom loading indicator (A text-based SVG code)
Notiflix.Loading.custom({
  customSvgCode: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
});

// Custom loading indicator (A text-based SVG code) with a message
Notiflix.Loading.custom('Loading...', {
  customSvgCode: '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">...</svg>',
});
```

--_--_----_--_----_--_----_--_----_--_----_--_--


#### 5- Block Module

Notiflix Block module can be used to block/unblock the elements during a process (Fetch/XHR), without locking the browser or the other elements/components to prevent the user’s interactions on the blocked elements.

Block:

```js
/*
* @param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}: Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to block.
* @param2 {string | Object}: Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
* @param3 {Object}: Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
*/

// Only indicators
Notiflix.Block.standard('.js-element');
Notiflix.Block.hourglass('.js-element');
Notiflix.Block.circle('.js-element');
Notiflix.Block.arrows('.js-element');
Notiflix.Block.dots('.js-element');
Notiflix.Block.pulse('.js-element');

// Indicator with a blocking message
Notiflix.Block.standard('.js-element', 'Please wait...');

// Only indicator with the new options
Notiflix.Block.standard('.js-element', {
  cssAnimationDuration: 1881,
  svgSize: '19px',
});

// Indicator with a blocking message, and the new options
Notiflix.Block.standard('.js-element', 'Please wait...', {
  backgroundColor: 'rgba(0,0,0,0.8)',
});
```


Unblock:

```js
/*
* @param1 {string | Array<HTMLElement> | NodeListOf<HTMLElement>}: Required, CSS selector(s) that matches the element(s) | Array of HTMLElments | NodeListOf HTMLElments to unblock.
* @param2 {number}: Optional, milliseconds for delaying in number format.
*/

// Unblock immediately
Notiflix.Block.remove('.js-element');

// Unblock after delay => e.g. 1923ms
Notiflix.Block.remove('.js-element', 1923);
```

--_--_----_--_----_--_----_--_----_--_----_--_--


### Initialize (optional)

`Notiflix.*.init` function can be used to set custom options as globally.

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

`Notiflix.*.merge` function can be used to deeply extend the `init()` options for a specific page or event globally.

```js
// e.g. Merge the Notify Module's initialize options with some new options.
Notiflix.Notify.merge({
  width: '300px',
  // ...
});
```

---------
---------
---------

### Options

The default options of all modules.

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
  customSvgCode: null,
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

### Copyright
Copyright &copy; 2019 - 2023 Notiflix

### License
MIT license - https://opensource.org/licenses/MIT
