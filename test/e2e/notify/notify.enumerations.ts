enum ENotify {
  SUCCESS = 'success',
  FAILURE = 'failure',
  WARNING = 'warning',
  INFO = 'info',
}

const mapENotify = new Map<number, ENotify>([
  [0, ENotify.SUCCESS],
  [1, ENotify.FAILURE],
  [2, ENotify.WARNING],
  [3, ENotify.INFO],
]);

export {
  ENotify,
  mapENotify,
};
