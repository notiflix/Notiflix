import puppeteer from 'puppeteer-core';

import { config } from '@test/_config/config';
import { rgbToHex, getENotifyByIndex } from '@test/_helpers/utilities';

import { ENotify } from '@test/e2e/notify/notify.enumerations';
import { INotifyTestDataMethods, INotifyTestDataInitMerge } from '@test/e2e/notify/notify.interfaces';
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
    await page.waitForTimeout(500);
    const Notiflix = await page.evaluate(() => {
      return window.Notiflix;
    });
    expect(Notiflix).toBeInstanceOf(Object);
  }, 5000);

  test('"Notify.*();" all methods have been rendered correctly and removed as expected.', async () => {
    for (let index = 0; index < Object.keys(ENotify).length; index++) {
      // get notify tyoe
      const notifyType: ENotify = getENotifyByIndex(index);

      // simulate clicks
      await page.click(`[data-pptr-selector=pptr-notify-${notifyType}]`, { clickCount: 1 });
      await page.click('body', { clickCount: 1 });

      // get element data: begin
      const testData: INotifyTestDataMethods = await page.evaluate(([opt, type]) => {
        const options = JSON.parse(opt) as INotifyDevOptions;
        const notifyType = type as ENotify;
        const elementSelector = options[notifyType]?.childClassName || 'x';

        const _wrapper = window.document.getElementById(options.wrapID) as HTMLDivElement;
        const _element = window.document.querySelector(`.${elementSelector}`) as HTMLDivElement;
        const _elementIcon = _element.querySelector('.nx-message-icon') as SVGElement;
        const _elementMessage = _element.querySelector('.nx-message') as HTMLSpanElement;

        const returnData: INotifyTestDataMethods = {
          wrapper: {
            tagName: _wrapper.tagName,
            width: window.getComputedStyle(_wrapper).width,
            zIndex: +(window.getComputedStyle(_wrapper).zIndex),
            opacity: +(window.getComputedStyle(_wrapper).opacity),
            left: window.getComputedStyle(_wrapper).left,
            top: window.getComputedStyle(_wrapper).top,
            right: window.getComputedStyle(_wrapper).right,
            bottom: window.getComputedStyle(_wrapper).bottom,
          },
          element: {
            tagName: _element.tagName,
            className: _element.getAttribute('class')?.trim() || '',
            width: window.getComputedStyle(_element).width,
            fontSize: window.getComputedStyle(_element).fontSize,
            fontFamily: window.getComputedStyle(_element).fontFamily,
            color: window.getComputedStyle(_element).color,
            backgroundColor: window.getComputedStyle(_element).backgroundColor,
            animationDuration: parseInt(_element.style.animationDuration),
            borderRadius: window.getComputedStyle(_element).borderRadius,
            padding: window.getComputedStyle(_element).padding,
          },
          icon: {
            tagName: _elementIcon.tagName.toLocaleUpperCase('en'),
            className: _elementIcon.getAttribute('class')?.trim() || '',
          },
          message: {
            tagName: _elementMessage.tagName,
            className: _elementMessage.getAttribute('class')?.trim() || '',
            innerHTML: _elementMessage.innerHTML,
          },
        };
        return returnData;
      }, [JSON.stringify(notifyDevOptions), notifyType]);
      // get element data: end

      // data: wrapper expectations: begin
      expect(testData.wrapper.tagName).toBe('DIV');
      expect(testData.wrapper.width).toBe(notifyDevOptions.width);
      expect(testData.wrapper.zIndex).toBe(notifyDevOptions.zindex);
      expect(testData.wrapper.opacity).toBe(notifyDevOptions.opacity);
      expect(testData.wrapper.top).toBe(notifyDevOptions.distance);
      expect(testData.wrapper.right).toBe(notifyDevOptions.distance);
      // data: wrapper expectations: end

      // data: element expectations: begin
      expect(testData.element.tagName).toBe('DIV');
      expect(testData.element.className).toContain(notifyDevOptions[notifyType]?.childClassName);
      expect(testData.element.width).toBe(notifyDevOptions.width);
      expect(testData.element.fontSize).toBe(notifyDevOptions.fontSize);
      expect(testData.element.fontFamily).toContain(notifyDevOptions.fontFamily);
      expect(
        rgbToHex(testData.element.color)
      ).toBe(notifyDevOptions[notifyType]?.textColor);
      expect(
        rgbToHex(testData.element.backgroundColor)
      ).toBe(notifyDevOptions[notifyType]?.background);
      expect(testData.element.animationDuration).toBe(notifyDevOptions.cssAnimationDuration);
      expect(testData.element.borderRadius).toBe(notifyDevOptions.borderRadius);
      expect(testData.element.padding).toBe('8px'); // css
      // data: element expectations: end

      // data: icon expectations: begin
      expect(testData.icon.tagName).toBe('SVG');
      expect(testData.icon.className).toBe('nx-message-icon');
      // data: icon expectations: end

      // data: message expectations: begin
      expect(testData.message.tagName).toBe('SPAN');
      expect(testData.message.className).toBe('nx-message nx-with-icon');
      expect(testData.message.innerHTML).toBe(config.text.notify[notifyType].defaultMessage);
      // data: message expectations: end

      // wait for element removal (by the options)
      await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

      // try to get element data again: begin
      const testDataAgain: string | undefined = await page.evaluate(([opt, type]) => {
        const options = JSON.parse(opt) as INotifyDevOptions;
        const notifyType = type as ENotify;
        const elementSelector = options[notifyType]?.childClassName || 'x';

        const _elementAgain = window.document.querySelector(`.${elementSelector}`);
        return _elementAgain?.tagName;
      }, [JSON.stringify(notifyDevOptions), notifyType]);
      // try to get element data again: end

      // expecting to be removed
      expect(testDataAgain).toBeUndefined();
    }
  }, 20000);

  test('"Notify.success();" callback function has been called successfully and Notify element has been removed.', async () => {
    // text element before
    const callbackElementInnerHTMLBefore = await page.$eval('[data-pptr-selector=pptr-notify-success-callback-element]', el => el.innerHTML);
    expect(callbackElementInnerHTMLBefore).toBe(config.text.notify.callbackInitMessage);

    // simulate clicks => on button
    await page.click('[data-pptr-selector=pptr-notify-success-callback]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // wait for the element
    await page.waitForTimeout(notifyDevOptions.cssAnimationDuration as number);

    // simuate clicks => on element
    const elementSelector = notifyDevOptions.success?.childClassName || 'x';
    await page.click(`.${elementSelector}`, { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // text element after
    const callbackElementInnerHTMLAfter = await page.$eval('[data-pptr-selector=pptr-notify-success-callback-element]', el => el.innerHTML);
    expect(callbackElementInnerHTMLAfter).toBe(config.text.notify.success.defaultMessage);

    // wait for element removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

    // try to get element again
    const elementTagName: string | undefined = await page.evaluate((opt) => {
      const options = JSON.parse(opt) as INotifyDevOptions;
      const selector = options.success?.childClassName || 'x';

      const _element = window.document.querySelector(`.${selector}`);
      return _element?.tagName;
    }, JSON.stringify(notifyDevOptions));

    // expecting to be removed
    expect(elementTagName).toBeUndefined();
  }, 5000);

  test('"Notify.success();" has been called multiple times.', async () => {
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
      const options = JSON.parse(opt) as INotifyDevOptions;
      const selector = options.success?.childClassName || 'x';

      const _elements = window.document.querySelectorAll(`.${selector}`);
      return _elements.length;
    }, JSON.stringify(notifyDevOptions));

    // expectation
    expect(elementsCount).toBe(clickCount);

    // wait for elements removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));
  }, 20000);

  test('"Notify.init();" and "Notify.merge();" sets/extends the options correctly.', async () => {
    // simulate reset and init-merge-get clicks
    await page.click('[data-pptr-selector=pptr-notify-reset]', { clickCount: 1 });
    await page.click('[data-pptr-selector=pptr-notify-init-merge-get]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // init: get element data: begin
    const initTestData: INotifyTestDataInitMerge = await page.evaluate((opt) => {
      const options = JSON.parse(opt) as INotifyDevOptions;
      const elementSelector = options.success?.childClassName || 'x';

      const _element = window.document.querySelector(`.${elementSelector}`) as HTMLDivElement;
      const _elementMessage = _element.querySelector('.nx-message') as HTMLSpanElement;
      const _elementIcon = _element.querySelector('.nx-message-icon') as SVGElement;

      const returnData: INotifyTestDataInitMerge = {
        elementTagName: _element.tagName,
        elementBackgrondColor: window.getComputedStyle(_element).backgroundColor,
        messageInnerHTML: _elementMessage.innerHTML,
        iconTagName: _elementIcon.tagName.toLocaleUpperCase('en'),
      };
      return returnData;
    }, JSON.stringify(notifyDevOptions));
    // init: get element data: end

    // init: expectations: begin
    expect(initTestData.elementTagName).toBe('DIV');
    expect(
      rgbToHex(initTestData.elementBackgrondColor)
    ).toBe(notifyDevOptions.success?.background);
    expect(initTestData.messageInnerHTML).toBe('Notiflix');
    expect(initTestData.iconTagName).toBe('SVG');
    // init: expectations: end

    // init: wait for element removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

    // init: simulate init-set and init-merge-get clicks
    await page.click('[data-pptr-selector=pptr-notify-init-set]', { clickCount: 1 });
    await page.click('[data-pptr-selector=pptr-notify-init-merge-get]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // init: get element data again: begin
    const initTestDataAgain: INotifyTestDataInitMerge = await page.evaluate((opt) => {
      const options = JSON.parse(opt) as INotifyDevOptions;
      const elementSelector = options.success?.childClassName || 'x';

      const _element = window.document.querySelector(`.${elementSelector}`) as HTMLDivElement;
      const _elementMessage = _element.querySelector('.nx-message') as HTMLSpanElement;
      const _elementIcon = _element.querySelector('.nx-message-icon');

      const returnData: INotifyTestDataInitMerge = {
        elementTagName: _element.tagName,
        elementBackgrondColor: window.getComputedStyle(_element).backgroundColor,
        messageInnerHTML: _elementMessage.innerHTML,
        iconTagName: _elementIcon?.tagName,
      };
      return returnData;
    }, JSON.stringify(notifyDevOptions));
    // init: get element again: end

    // init: expectations again: begin
    expect(initTestDataAgain.elementTagName).toBe('DIV');
    expect(
      rgbToHex(initTestDataAgain.elementBackgrondColor)
    ).toBe('#000000');
    expect(initTestDataAgain.messageInnerHTML).toBe('Notiflix');
    expect(initTestDataAgain.iconTagName).toBeUndefined();
    // init: expectations again: end

    // merge: wait for init element removal (by the options)
    await page.waitForTimeout((notifyDevOptions.timeout as number) + (notifyDevOptions.cssAnimationDuration as number));

    // merge: simulate merge-set and init-merge-get clicks
    await page.click('[data-pptr-selector=pptr-notify-merge-set]', { clickCount: 1 });
    await page.click('[data-pptr-selector=pptr-notify-init-merge-get]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

    // merge: get element data: begin
    const mergeTestData: INotifyTestDataInitMerge = await page.evaluate((opt) => {
      const options = JSON.parse(opt) as INotifyDevOptions;
      const elementSelector = options.success?.childClassName || 'x';

      const _element = window.document.querySelector(`.${elementSelector}`) as HTMLDivElement;
      const _elementMessage = _element.querySelector('.nx-message') as HTMLSpanElement;
      const _elementIcon = _element.querySelector('.nx-message-icon');

      const returnData: INotifyTestDataInitMerge = {
        elementTagName: _element.tagName,
        elementBackgrondColor: window.getComputedStyle(_element).backgroundColor,
        messageInnerHTML: _elementMessage.innerHTML,
        iconTagName: _elementIcon?.tagName,
      };
      return returnData;
    }, JSON.stringify(notifyDevOptions));
    // merge: get element data: end

    // merge: expectations: begin
    expect(mergeTestData.elementTagName).toBe('DIV');
    expect(
      rgbToHex(mergeTestData.elementBackgrondColor)
    ).toBe('#808080');
    expect(mergeTestData.messageInnerHTML).toBe('<b>Notiflix</b>');
    expect(mergeTestData.iconTagName).toBeUndefined();
    // merge: expectations: end

    // simulate reset click
    await page.click('[data-pptr-selector=pptr-notify-reset]', { clickCount: 1 });
    await page.click('body', { clickCount: 1 });

  }, 15000);

  // TODO: extend the options and check with the extended options
});
