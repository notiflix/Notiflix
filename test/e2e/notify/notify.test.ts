import puppeteer from 'puppeteer-core';

import { config } from '@test/_config/config';
import { rgbToHex } from '@test/_helpers/utilities';

import { INotifyTestData } from '@test/e2e/notify/notify.interfaces';
import { notifyDevOptions, INotifyDevOptions } from '@test/e2e/notify/notify.options';

describe('Notiflix.Notify E2E Tests', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(async () => {
    browser = await puppeteer.launch(config.puppeteer.launchOptions);
    page = await browser.newPage();
    await page.goto(config.pagePaths.notify);
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Notiflix is exist in the page.', async () => {
    jest.setTimeout(100000);
    await page.waitForTimeout(500);
    const notiflix = await page.evaluate(() => {
      return window.Notiflix;
    });
    expect(notiflix).toBeInstanceOf(Object);
  });

  test('"Notify.success();" has been rendered as expected and removed.', async () => {
    jest.setTimeout(100000);

    // simulate a click
    await page.click('[data-pptr-selector=pptr-notify-success]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // get element data: begin
    const notifySuccesData: INotifyTestData = await page.evaluate((opt) => {
      const options: INotifyDevOptions = JSON.parse(opt);
      const getWrapper = window.document.getElementById(options.wrapID) as HTMLDivElement;
      const getElement = window.document.querySelector(`.${options.success?.childClassName}`) as HTMLDivElement;
      const getElementIcon = getElement.querySelector('.nx-message-icon') as SVGElement;
      const getElementMessage = getElement.querySelector('.nx-message') as HTMLSpanElement;

      const returnData: INotifyTestData = {
        wrapper: {
          tagName: getWrapper.tagName,
          width: window.getComputedStyle(getWrapper).width,
          zIndex: +(window.getComputedStyle(getWrapper).zIndex),
          opacity: +(window.getComputedStyle(getWrapper).opacity),
          left: window.getComputedStyle(getWrapper).left,
          top: window.getComputedStyle(getWrapper).top,
          right: window.getComputedStyle(getWrapper).right,
          bottom: window.getComputedStyle(getWrapper).bottom,
        },
        element: {
          tagName: getElement.tagName,
          className: [...Array.prototype.slice.call(getElement.classList)].join(' '),
          width: window.getComputedStyle(getElement).width,
          fontSize: window.getComputedStyle(getElement).fontSize,
          fontFamily: window.getComputedStyle(getElement).fontFamily,
          color: window.getComputedStyle(getElement).color,
          backgroundColor: window.getComputedStyle(getElement).backgroundColor,
          animationDuration: parseInt(getElement.style.animationDuration),
          borderRadius: window.getComputedStyle(getElement).borderRadius,
        },
        icon: {
          tagName: getElementIcon.tagName.toLocaleUpperCase('en'),
          className: [...Array.prototype.slice.call(getElementIcon.classList)].join(' '),
        },
        message: {
          tagName: getElementMessage.tagName,
          className: [...Array.prototype.slice.call(getElementMessage.classList)].join(' '),
          innerHTML: getElementMessage.innerHTML,
        },
      };
      return returnData;
    }, JSON.stringify(notifyDevOptions));
    // get element data: end

    // data: wrapper expectations: begin
    expect(notifySuccesData.wrapper.tagName).toBe('DIV');
    expect(notifySuccesData.wrapper.width).toBe(notifyDevOptions.width);
    expect(notifySuccesData.wrapper.zIndex).toBe(notifyDevOptions.zindex);
    expect(notifySuccesData.wrapper.opacity).toBe(notifyDevOptions.opacity);
    expect(notifySuccesData.wrapper.top).toBe(notifyDevOptions.distance);
    expect(notifySuccesData.wrapper.right).toBe(notifyDevOptions.distance);
    // data: wrapper expectations: end

    // data: element expectations: begin
    expect(notifySuccesData.element.tagName).toBe('DIV');
    expect(notifySuccesData.element.className).toContain(notifyDevOptions.success?.childClassName);
    expect(notifySuccesData.element.width).toBe(notifyDevOptions.width);
    expect(notifySuccesData.element.fontSize).toBe(notifyDevOptions.fontSize);
    expect(notifySuccesData.element.fontFamily).toContain(notifyDevOptions.fontFamily);
    expect(
      rgbToHex(notifySuccesData.element.color)
    ).toBe(notifyDevOptions.success?.textColor);
    expect(
      rgbToHex(notifySuccesData.element.backgroundColor)
    ).toBe(notifyDevOptions.success?.background);
    expect(notifySuccesData.element.animationDuration).toBe(notifyDevOptions.cssAnimationDuration);
    expect(notifySuccesData.element.borderRadius).toBe(notifyDevOptions.borderRadius);
    // data: element expectations: end

    // data: icon expectations: begin
    expect(notifySuccesData.icon.tagName).toBe('SVG');
    expect(notifySuccesData.icon.className).toBe('nx-message-icon');
    // data: icon expectations: end

    // data: message expectations: begin
    expect(notifySuccesData.message.tagName).toBe('SPAN');
    expect(notifySuccesData.message.className).toBe('nx-message nx-with-icon');
    expect(notifySuccesData.message.innerHTML).toBe(config.text.notify.defaultMessage);
    // data: message expectations: end

    // wait for element removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

    // try to get element data again
    const notifySuccesDataAgain: string | undefined = await page.evaluate((opt) => {
      const options: INotifyDevOptions = JSON.parse(opt);
      const getElementAgain = window.document.querySelector(`.${options.success?.childClassName}`);
      return getElementAgain?.tagName;
    }, JSON.stringify(notifyDevOptions));

    // expecting to be removed
    expect(notifySuccesDataAgain).toBeUndefined();
  });

  // TODO: "Notify.failure();" has been rendered as expected and removed.
  // TODO: "Notify.warning();" has been rendered as expected and removed.
  // TODO: "Notify.info();" has been rendered as expected and removed.

  test('"Notify.success();" callback function has been called successfully and Notify element has been removed.', async () => {
    jest.setTimeout(100000);

    const callbackElementInnerHTMLBefore = await page.$eval('[data-pptr-selector=pptr-notify-success-callback-element]', el => el.innerHTML);
    expect(callbackElementInnerHTMLBefore).toBe(config.text.notify.initMessage);

    await page.click('[data-pptr-selector=pptr-notify-success-callback]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    await page.waitForTimeout(notifyDevOptions.cssAnimationDuration as number);

    await page.click(`.${notifyDevOptions.success?.childClassName}`, { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    const callbackElementInnerHTMLAfter = await page.$eval('[data-pptr-selector=pptr-notify-success-callback-element]', el => el.innerHTML);
    expect(callbackElementInnerHTMLAfter).toBe(config.text.notify.defaultMessage);

    // wait for element removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

    // try to get element
    const getElement: string | undefined = await page.evaluate((opt) => {
      const options: INotifyDevOptions = JSON.parse(opt);
      const element = window.document.querySelector(`.${options.success?.childClassName}`);
      return element?.tagName;
    }, JSON.stringify(notifyDevOptions));

    // expecting to be removed
    expect(getElement).toBeUndefined();
  });

  test('"Notify.success();" has been called multiple times.', async () => {
    jest.setTimeout(100000);

    // simulate clicks
    const delay = 100;
    const clickCount = 10;
    for (let index = 0; index < clickCount; index++) {
      await page.click('[data-pptr-selector=pptr-notify-success]', { clickCount: 1 });
      await page.waitForTimeout(delay);
    }
    await page.click('body', { clickCount: 1 });

    // get elements count
    const elementsCount: number = await page.evaluate((opt) => {
      const options: INotifyDevOptions = JSON.parse(opt);
      const getElements: NodeListOf<HTMLDivElement> = window.document.querySelectorAll(`.${options.success?.childClassName}`);
      return getElements.length;
    }, JSON.stringify(notifyDevOptions));

    // expectation
    expect(elementsCount).toBe(clickCount);
  });

});
