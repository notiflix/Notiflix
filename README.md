## Notiflix | a JavaScript library for client-side non-blocking notifications.
Notiflix is a pure JavaScript library for client-side non-blocking notifications that makes your web projects much better. (Don't need jQuery)

### Current Version
1.0.0

### Documentation
https://www.notiflix.com/documentation

#### Install

##### [npm](https://www.npmjs.com/package/notiflix)
```
npm install notiflix
```
##### [bower](https://bower.io/search/?q=notiflix)
```
bower install notiflix
```
##### [yarn](https://yarnpkg.com/en/package/notiflix)
```
yarn add notiflix
```

##### Demo
- **Notiflix Notify** -> https://www.notiflix.com/#Notify
- **Notiflix Report** -> https://www.notiflix.com/#Report
- **Notiflix Confirm** -> https://www.notiflix.com/#Confirm
- **Notiflix Loading** -> https://www.notiflix.com/#Loading

---------

##### Basic Usage
###### CSS and JS
1.1- `<link rel="stylesheet" href="notiflix-1.0.0.min.css" />`

1.2- `<script src="notiflix-1.0.0.min.js"></script>`

###### or only JS (Internal CSS)
1- `<script src="notiflix-aio-1.0.0.min.js"></script>`

--_--_--

2- Init

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
  ...
});
```

--_--_--

3.1- Use the Notify Module

```js
// You can type your text in String format.

Notiflix.Notify.Success('Success message text');

Notiflix.Notify.Failure('Failure message text');

Notiflix.Notify.Warning('Warning message text');

Notiflix.Notify.Info('Info message text');

// e.g. with a callback
Notiflix.Notify.Success('Click Me',function(){
  alert('Notiflix');
});
```

--_--_--

3.2- Use the Report Module

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
  alert('Notiflix');
});
```
--_--_--

3.3- Use the Confirm Module

```js
Notiflix.Confirm.Show('Title','Message','Ok Button Text');

// e.g. with a callback
Notiflix.Confirm.Show(
  'Title',
  'Message',
  'Ok Button Text',
  'Cancel Button Text',
function(){
  alert('Notiflix');
});
```

--_--_--

3.4- Use the Loading Module

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
  svgSize:'80px'
  ...
}); 

// Use the custom SVG Icon
Notiflix.Loading.Custom();

```

---------

#### Copyright
Copyright © 2019 Notiflix

#### License
MIT license - https://opensource.org/licenses/MIT
