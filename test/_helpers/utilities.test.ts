import { ENotify } from '@test/e2e/notify/notify.enumerations';
import { rgbToHex, hex3ToHex6LC, getENotifyByIndex, addSomeDelayAsync } from '@test/_helpers/utilities';

describe('Utilities', () => {

  test('rgbToHex() function should return a HEX', () => {
    const black = rgbToHex('rgb(0,0,0)');
    expect(black).toBe('#000000');

    const white = rgbToHex('rgb(255,255,255)');
    expect(white).toBe('#ffffff');

    const green = rgbToHex('rgb(50,198, 130)');
    expect(green).toBe('#32c682');

    const red = rgbToHex('rgb(255, 85, 73)');
    expect(red).toBe('#ff5549');

    const yellow = rgbToHex('rgb(238,191,49)');
    expect(yellow).toBe('#eebf31');

    const blue = rgbToHex('rgb(38,192,211)');
    expect(blue).toBe('#26c0d3');
  });

  test('hex3ToHex6LC() function should return a 6-digit HEX + lowercased', () => {
    const black = hex3ToHex6LC('#000');
    expect(black).toBe('#000000');

    const white = hex3ToHex6LC('#fff');
    expect(white).toBe('#ffffff');

    const green = hex3ToHex6LC('#32c682');
    expect(green).toBe('#32c682');

    const yellow = hex3ToHex6LC('#FC0');
    expect(yellow).toBe('#ffcc00');

    const red = hex3ToHex6LC('#F00');
    expect(red).toBe('#ff0000');
  });

  test('getENotifyByIndex() function should return an ENotify', () => {
    const success = getENotifyByIndex(0);
    expect(success).toBe(ENotify.SUCCESS);

    const failure = getENotifyByIndex(1);
    expect(failure).toBe(ENotify.FAILURE);

    const warning = getENotifyByIndex(2);
    expect(warning).toBe(ENotify.WARNING);

    const info = getENotifyByIndex(3);
    expect(info).toBe(ENotify.INFO);

    const _any = getENotifyByIndex(1923);
    expect(_any).toBe(ENotify.SUCCESS);
  });

  test('addSomeDelayAsync() function should resolve the parameter after delay', async () => {
    await expect(addSomeDelayAsync(360)).resolves.toBe(360);
  });

});
