import { ENotify, mapENotify } from '@test/e2e/notify/notify.enumerations';

const rgbToHex = (rgbAsString: string): string => {
  const numbers = String.prototype.match.call(rgbAsString, /\d+/g) || [];
  return `#${numbers.map(x => (+x).toString(16).padStart(2, '0')).join('')}`;
};

const hex3ToHex6LC = (hexAs3Digit: string): string => {
  if (hexAs3Digit.length === 4) {
    return (hexAs3Digit.split('').reduce((x, y) => x + y + y)).toLocaleLowerCase('en');
  }
  return hexAs3Digit.toLocaleLowerCase('en');
};

const getENotifyByIndex = (index: number): ENotify => mapENotify.get(index) || ENotify.SUCCESS;

const addSomeDelayAsync = (milliseconds?: number): Promise<number> => new Promise(resolve => setTimeout(() => { resolve(milliseconds || 1000); }, milliseconds || 1000));

export {
  rgbToHex,
  hex3ToHex6LC,
  getENotifyByIndex,
  addSomeDelayAsync,
};
