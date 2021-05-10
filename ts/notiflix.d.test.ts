import Notiflix = require('../index');

// Notify
Notiflix.Notify.init({
  cssAnimation: false,
});
Notiflix.Notify.merge({
  cssAnimation: true,
});
Notiflix.Notify.success('Notify Sucess', () => {
  console.log('Notify Sucess');
}, {
  closeButton: true,
});
Notiflix.Notify.failure('Notify Failure');
Notiflix.Notify.warning('Notify Warning');
Notiflix.Notify.info('Notify Info');

// Report
Notiflix.Report.init({
  cssAnimation: false,
});
Notiflix.Report.merge({
  cssAnimation: false,
});
Notiflix.Report.success('Title', 'Message', 'Okay', () => {
  console.log('Report Sucess');
}, {
  success: {
    titleColor: '#1e1e1e',
  },
});
Notiflix.Report.failure('Title', 'Message', 'Okay');
Notiflix.Report.warning('Title', 'Message', 'Okay');
Notiflix.Report.info('Title', 'Message', 'Okay');

// Confirm
Notiflix.Confirm.init({
  cssAnimation: false,
});
Notiflix.Confirm.merge({
  cssAnimation: true,
});
Notiflix.Confirm.show('Title', 'Message', 'Okay', 'Cancel', () => {
  console.log('Confirm Okay');
}, () => {
  console.log('Confirm Cancel');

}, {
  cssAnimation: false,
});
Notiflix.Confirm.ask('Title', 'Question', 'Answer', 'Okay', 'Cancel', () => {
  console.log('Confirm Okay');
}, () => {
  console.log('Confirm Cancel');

}, {
  cssAnimation: true,
});

// Loading
Notiflix.Loading.init({
  cssAnimation: false,
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
Notiflix.Loading.custom('Loading Custom', {
  customSvgUrl: 'https://www.notiflix.com/content/media/icon/notiflix-loading-notiflix.svg',
});
Notiflix.Loading.notiflix('Loading Notilix');
Notiflix.Loading.remove();
Notiflix.Loading.remove(1923);
Notiflix.Loading.change('Change message...');

// Block
Notiflix.Block.init({
  cssAnimation: false,
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
