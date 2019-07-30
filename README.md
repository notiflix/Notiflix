<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/master/github-assets/welcome-to-notiflix.gif" width="480" height="auto" alt="Notiflix">
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/notiflix/Notiflix/master/github-assets/notiflix-logo.svg?sanitize=true" width="240" height="80" alt="Notiflix">
</p>

## Notiflix | a JavaScript library for client-side non-blocking notifications.
Notiflix is a JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more to that makes your web projects much better. (Don't need jQuery)


### Current Version
1.8.0 [*](https://github.com/notiflix/Notiflix/blob/master/ReleaseNotes.md)

### Website
https://www.notiflix.com

### Documentation
https://www.notiflix.com/documentation

#### Install

##### [npm](https://www.npmjs.com/package/notiflix)
```
npm i notiflix
```
##### [yarn](https://yarnpkg.com/en/package/notiflix)
```
yarn add notiflix
```

#### Demo
- **Notiflix Notify** -> https://www.notiflix.com/#Notify
- **Notiflix Report** -> https://www.notiflix.com/#Report
- **Notiflix Confirm** -> https://www.notiflix.com/#Confirm
- **Notiflix Loading** -> https://www.notiflix.com/#Loading

---------

#### Basic Usage
##### CSS and JS
1.1- 
```html
<link rel="stylesheet" href="notiflix-1.8.0.min.css" />
```

1.2- 
```html
<script src="notiflix-1.8.0.min.js"></script>
```

##### or only JS (Internal CSS)
1- 
```html
<script src="notiflix-aio-1.8.0.min.js"></script>
```

--_--_--

2- Initialize (Not required if used with default settings after v1.6.0 and the next versions.)

```js
// Notify
Notiflix.Notify.Init({});

// Report
Notiflix.Report.Init({});

// Confirm
Notiflix.Confirm.Init({});

// Loading
Notiflix.Loading.Init({});


// e.g. Init the Notify Module with some options
Notiflix.Notify.Init({
  width:'280px',
  position:'right-top',
  distance:'10px',
  opacity:1,
  // ...
});
```

--_--_--

3.1- Use: Notify Module

```js
// You can type your text in String format.

Notiflix.Notify.Success('Success message text');

Notiflix.Notify.Failure('Failure message text');

Notiflix.Notify.Warning('Warning message text');

Notiflix.Notify.Info('Info message text');

// e.g. with a callback
Notiflix.Notify.Success('Click Me', function(){
  // callback
});
```

--_--_--

3.2- Use: Report Module

```js
Notiflix.Report.Success('Title','Message','Button Text');

Notiflix.Report.Failure('Title','Message','Button Text');

Notiflix.Report.Warning('Title','Message','Button Text');

Notiflix.Report.Info('Title','Message','Button Text');

// e.g. with a callback
Notiflix.Report.Success(
  'Title',
  'Message',
  'Button Text',
  function(){
    // callback
  }
);
```
--_--_--

3.3- Use: Confirm Module

```js
Notiflix.Confirm.Show('Title','Message','Ok Button Text','Cancel Button Text');


// e.g. with callback
Notiflix.Confirm.Show(
  'Title',
  'Message',
  'Ok Button Text',
  'Cancel Button Text',

  // ok button callback
  function(){
    // codes...
  },

  // cancel button callback => v1.7.0 and the next versions
  function(){
    // codes...
  }
);
```

--_--_--

3.4- Use: Loading Module

```js
// Only Loader
Notiflix.Loading.Standard();
Notiflix.Loading.Hourglass();
Notiflix.Loading.Circle();
Notiflix.Loading.Arrows();
Notiflix.Loading.Dots();
Notiflix.Loading.Pulse();

// Loader with a message
Notiflix.Loading.Standard('Loading...');

// Remove immediately
Notiflix.Loading.Remove();

// Remove after delay - e.g. 600ms
Notiflix.Loading.Remove(600);


// Init a custom SVG Icon
Notiflix.Loading.Init({
  customSvgUrl:'https://www.notiflix.com/dir/icon.svg', 
  svgSize:'80px',
  // ...
}); 

// Use the custom SVG Icon
Notiflix.Loading.Custom();
```

---------
---------
---------

#### Notiflix Notify Module: Default Options

```js
Notiflix.Notify.Init({
  width: '280px',
  position: 'right-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' 
  distance: '10px',
  opacity: 1,
  borderRadius: '5px',
  rtl: false,
  timeout: 3000,
  messageMaxLength: 110,
  backOverlay: false,
  backOverlayColor: 'rgba(0,0,0,0.5)',

  ID: 'NotiflixNotify',
  className: 'notiflix-notify',
  zindex: 4001,
  useGoogleFont: true,
  fontFamily: 'Quicksand',
  fontSize: '13px',
  cssAnimation: true,
  cssAnimationDuration: 400,
  cssAnimationStyle: 'fade', // 'zoom' - 'fade' - 'from-right' - 'from-top' - 'from-bottom' - 'from-left'
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic', // 'shadow' - 'basic'
  fontAwesomeIconSize: '34px',

  plainText: true, // New Option: v1.3.0 and the next versions
  showOnlyTheLastOne: false, // New Option: v1.8.0 and the next versions

  success: {
    background: '#00b462',
    textColor: '#fff',
    childClassName: 'success',
    notiflixIconColor: 'rgba(0, 0, 0, 0.25)',
    fontAwesomeClassName: 'fas fa-check-circle',
    fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
  },

  failure: {
    background: '#f44336',
    textColor: '#fff',
    childClassName: 'failure',
    notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
    fontAwesomeClassName: 'fas fa-times-circle',
    fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
  },

  warning: {
    background: '#f2bd1d',
    textColor: '#fff',
    childClassName: 'warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
  },

  info: {
    background: '#00bcd4',
    textColor: '#fff',
    childClassName: 'info',
    notiflixIconColor: 'rgba(0, 0, 0, 0.2)',
    fontAwesomeClassName: 'fas fa-info-circle',
    fontAwesomeIconColor: 'rgba(0, 0, 0, 0.2)',
  },
});
```

---------

#### Notiflix Report Module: Default Options

```js
Notiflix.Report.Init({
  className: 'notiflix-report',
  width: '320px',
  backgroundColor: '#f8f8f8',
  borderRadius: '25px',
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: 'rgba(0, 0, 0, 0.5)',
  useGoogleFont: true,
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
    svgColor: '#00b462',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#00b462',
    buttonColor: '#fff',
  },

  failure: {
    svgColor: '#f44336',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#f44336',
    buttonColor: '#fff',
  },

  warning: {
    svgColor: '#f2bd1d',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#f2bd1d',
    buttonColor: '#fff',
  },

  info: {
    svgColor: '#00bcd4',
    titleColor: '#1e1e1e',
    messageColor: '#242424',
    buttonBackground: '#00bcd4',
    buttonColor: '#fff',
  },
});
```

---------

#### Notiflix Confirm Module: Default Options

```js
Notiflix.Confirm.Init({
  className: 'notiflix-confirm',
  width: '280px',
  zindex: 4003,
  position: 'center', // 'center' - 'center-top' -  'right-top' - 'right-bottom' - 'left-top' - 'left-bottom'
  distance: '10px',
  backgroundColor: '#f8f8f8',
  borderRadius: '25px',
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  rtl: false,
  useGoogleFont: true,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationStyle: 'fade', // 'zoom' - 'fade'
  cssAnimationDuration: 300,

  titleColor: '#00b462',
  titleFontSize: '16px',
  titleMaxLength: 34,

  messageColor: '#1e1e1e',
  messageFontSize: '14px',
  messageMaxLength: 110,

  buttonsFontSize: '15px',
  buttonsMaxLength: 34,
  okButtonColor: '#f8f8f8',
  okButtonBackground: '#00b462',
  cancelButtonColor: '#f8f8f8',
  cancelButtonBackground: '#a9a9a9',

  plainText: true, // New Option: v1.3.0 and the next versions

});
```

---------

#### Notiflix Loading Module: Default Options

```js
Notiflix.Loading.Init({
  className: 'notiflix-loading',
  zindex: 4000,
  backgroundColor: 'rgba(0,0,0,0.8)',
  rtl: false,
  useGoogleFont: true,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationDuration: 400,
  clickToClose: false,
  customSvgUrl: null,
  svgSize: '80px',
  svgColor: '#00b462',
  messageID: 'NotiflixLoadingMessage',
  messageFontSize: '15px',
  messageMaxLength: 34,
  messageColor: '#dcdcdc',
});
```

---------
---------
---------

#### Copyright
Copyright © 2019 Notiflix

#### License
MIT license - https://opensource.org/licenses/MIT
