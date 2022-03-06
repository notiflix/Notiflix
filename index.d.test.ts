import Notiflix from 'index.d';

// Notify
Notiflix.Notify.init({
  width: '280px',
  position: 'right-top',
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
  cssAnimationStyle: 'fade',
  closeButton: false,
  useIcon: true,
  useFontAwesome: false,
  fontAwesomeIconStyle: 'basic',
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

Notiflix.Notify.merge({
  cssAnimation: true,
});

Notiflix.Notify.success('Notify Sucess',
  () => {
    console.log('Notify Sucess');
  },
  {
    closeButton: true,
  },
);

Notiflix.Notify.success('Notify Sucess',
  {
    width: '280px',
  }
);

Notiflix.Notify.failure('Notify Failure');

Notiflix.Notify.warning('Notify Warning');

Notiflix.Notify.info('Notify Info');


// Report
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
  cssAnimationStyle: 'fade',
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

Notiflix.Report.merge({
  cssAnimation: false,
});

Notiflix.Report.success('Title', 'Message', 'Okay',
  () => {
    console.log('Report Sucess');
  },
  {
    success: {
      titleColor: '#1e1e1e',
    },
  },
);

Notiflix.Report.success('Title', 'Message', 'Okay',
  {
    width: '480px',
  },
);

Notiflix.Report.failure('Title', 'Message', 'Okay');

Notiflix.Report.warning('Title', 'Message', 'Okay');

Notiflix.Report.info('Title', 'Message', 'Okay');


// Confirm
Notiflix.Confirm.init({
  className: 'notiflix-confirm',
  width: '300px',
  zindex: 4003,
  position: 'center',
  distance: '10px',
  backgroundColor: '#f8f8f8',
  borderRadius: '25px',
  backOverlay: true,
  backOverlayColor: 'rgba(0,0,0,0.5)',
  rtl: false,
  fontFamily: 'Quicksand',
  cssAnimation: true,
  cssAnimationDuration: 300,
  cssAnimationStyle: 'fade',
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

Notiflix.Confirm.merge({
  cssAnimation: true,
});

Notiflix.Confirm.show(
  'Title',
  'Message',
  'Okay',
  'Cancel',
  () => {
    console.log('Confirm Okay');
  },
  () => {
    console.log('Confirm Cancel');
  },
  {
    cssAnimation: false,
  },
);

Notiflix.Confirm.ask(
  'Title',
  'Question',
  'Answer',
  'Okay',
  'Cancel',
  () => {
    console.log('Confirm Okay');
  },
  () => {
    console.log('Confirm Cancel');
  },
  {
    cssAnimation: true,
  },
);

Notiflix.Confirm.prompt(
  'Title',
  'Question',
  'Default Answer',
  'Okay',
  'Cancel',
  (clientAnswer) => { // ok callback
    console.log(`Client answer is: ${clientAnswer}`);
  },
  (clientAnswer) => { // cancel callback
    console.log(`Client answer was: ${clientAnswer}`);
  },
  {
    position: 'center-top',
  },
);


// Loading
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

Notiflix.Loading.merge({
  cssAnimation: true,
});

Notiflix.Loading.standard('Loading', {
  messageColor: '#1e1e1e',
});

Notiflix.Loading.hourglass();

Notiflix.Loading.circle('Loading Circle');

Notiflix.Loading.arrows('Loading Arrows');

Notiflix.Loading.dots('Loading Dots');

Notiflix.Loading.pulse('Loading Pulse');

Notiflix.Loading.custom('Loading Custom => as a URL', {
  customSvgUrl: 'https://notiflix.github.io/content/media/loading/notiflix-loading-nx-light.svg',
});

Notiflix.Loading.custom('Loading Custom => as a text-based SVG', {
  customSvgCode: '<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}}@keyframes notiflix-dot{0%{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:#f8f8f8;stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="#32c682" stroke="#32c682" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03m-75.11.14c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>',
});

Notiflix.Loading.notiflix('Loading Notilix');

Notiflix.Loading.remove();

Notiflix.Loading.remove(1923);

Notiflix.Loading.change('Change message...');


// Block
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

Notiflix.Block.merge({
  cssAnimation: true,
});

Notiflix.Block.standard('.js-selector', 'Loading...', {
  messageColor: '#1e1e1e',
});

Notiflix.Block.hourglass('.js-selector');

Notiflix.Block.circle('.js-selector');

Notiflix.Block.arrows('.js-selector');

Notiflix.Block.dots('.js-selector');

Notiflix.Block.pulse('.js-selector');

Notiflix.Block.remove('.js-selector');

Notiflix.Block.remove('.js-selector', 1923);

const boxes: NodeListOf<HTMLDivElement> = window.document.querySelectorAll('.js-boxes');
Notiflix.Block.standard(boxes, 'Please wait...');

const createABox = window.document.createElement('div');
createABox.innerHTML = 'Out of the box';
Notiflix.Block.standard([createABox], {
  backgroundColor: '#1e1e1e',
});
