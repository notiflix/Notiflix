/*!
* Notiflix - All In One Files Generator
*
* Description: Creates "notiflix-aio.js" and "notiflix-${module}-aio.js" files automatically that using "notiflix.js", and "notiflix.css" files.
*
* Version: 1.0.0
* Author: Furkan (https://github.com/furcan)
* Copyright 2019 - 2024 Notiflix - All In One, MIT License (https://opensource.org/licenses/MIT)
*/

'use-strict';

// Dev Dependencies
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const CleanCSS = require('clean-css');
const Constants = require('./notiflix-dev-constants');


// Constants
const thisFilePath = '.dev/notiflix-dev-builder.js';
const spaceCharacters = `  `;
const allInOneSuffix = 'AIO';

// Helpers: begin
const addSpaceToAllStarts = (input) => `${spaceCharacters}${input.replace(/\n/g, `\n${spaceCharacters}`)}`;

const createUMDPattern = (moduleName, content, module, returnModule) => {
  const umdStart = (`
/*
* ${Constants.notiflix}${moduleName ? ` ${moduleName}` : ''} ${allInOneSuffix} ${Constants.notiflixUrl}
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: ${Constants.version}
* Author: ${Constants.author}
* Copyright ${Constants.year} ${Constants.notiflix}, ${Constants.license}
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.${Constants.notiflix} = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {
`).trim();

  const umdContent = `${spaceCharacters}'use strict';\n\n${(addSpaceToAllStarts(content)).replace(/\s\s\n/gm, '\n').replace(/\n\s\n/gm, '\n\n')}`;
  const umdMain = `${spaceCharacters}var ${Constants.notiflix} = {\n${spaceCharacters}${spaceCharacters}${addSpaceToAllStarts(module).replace(/\s\s\n/gm, '\n').replace(/\n\s\n/gm, '\n\n').trim()}\n${spaceCharacters}};`;
  const returnData = (`
if (typeof window.${Constants.notiflix} === 'object') {
  return commonExtendOptions(true, window.${Constants.notiflix}, { ${returnModule} });
} else {
  return { ${returnModule} };
}
`).trim();
  const umdReturn = `${addSpaceToAllStarts(returnData)}`;
  const umdEnd = '});';

  return [umdStart, umdContent, umdMain, umdReturn, umdEnd].join('\n\n');
};

const extractTheCodes = (input, start, end, isNoComment) => `${(isNoComment ? '' : start)}\n${(((input || '').split(start)[1] || '').split(end)[0] || '').replace(/\n {2}/g, '\n').trim()}\n${isNoComment ? '' : end}`;

const extractAllScripts = () => {
  const scriptPath = join(Constants.directories.src, Constants.files.notiflix_JS);
  if (existsSync(scriptPath)) {
    const scriptsAsText = readFileSync(scriptPath, 'utf-8');

    const commonSSRCheck = extractTheCodes(scriptsAsText, '// COMMON: SSR check: begin', '// COMMON: SSR check: end');
    const commonVariables = extractTheCodes(scriptsAsText, '// COMMON: Variables: begin', '// COMMON: Variables: end');

    const notifySettings = extractTheCodes(scriptsAsText, '// NOTIFY: Default Settings: begin', '// NOTIFY: Default Settings: end');
    const reportSettings = extractTheCodes(scriptsAsText, '// REPORT: Default Settings: begin', '// REPORT: Default Settings: end');
    const confirmSettings = extractTheCodes(scriptsAsText, '// CONFIRM: Default Settings: begin', '// CONFIRM: Default Settings: end');
    const loadingSettings = extractTheCodes(scriptsAsText, '// LOADING: Default Settings: begin', '// LOADING: Default Settings: end');
    const blockSettings = extractTheCodes(scriptsAsText, '// BLOCK: Default Settings: begin', '// BLOCK: Default Settings: end');

    const commonConsoleError = extractTheCodes(scriptsAsText, '// COMMON: Console Error: begin', '// COMMON: Console Error: end');
    const commonConsoleLog = extractTheCodes(scriptsAsText, '// COMMON: Console Log: begin', '// COMMON: Console Log: end');
    const commonCheckHeadOrBody = extractTheCodes(scriptsAsText, '// COMMON: Check Head or Body: begin', '// COMMON: Check Head or Body: end');
    const commonSetInternalCSSCodes = extractTheCodes(scriptsAsText, '// COMMON: Set Internal CSS Codes: begin', '// COMMON: Set Internal CSS Codes: end');
    const commonExtendOptions = extractTheCodes(scriptsAsText, '// COMMON: Extend Options: begin', '// COMMON: Extend Options: end');
    const commonGetPlaintext = extractTheCodes(scriptsAsText, '// COMMON: Get Plaintext: begin', '// COMMON: Get Plaintext: end');

    const reportSvgIconSuccess = extractTheCodes(scriptsAsText, '// REPORT: SVG Icon Success: begin', '// REPORT: SVG Icon Success: end');
    const reportSvgIconFailure = extractTheCodes(scriptsAsText, '// REPORT: SVG Icon Failure: begin', '// REPORT: SVG Icon Failure: end');
    const reportSvgIconWarning = extractTheCodes(scriptsAsText, '// REPORT: SVG Icon Warning: begin', '// REPORT: SVG Icon Warning: end');
    const reportSvgIconInfo = extractTheCodes(scriptsAsText, '// REPORT: SVG Icon Info: begin', '// REPORT: SVG Icon Info: end');

    const loadingAndBlockSvgIconStandard = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Standard: begin', '// LOADING && BLOCK: SVG Icon Standard: end');
    const loadingAndBlockSvgIconHourglass = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Hourglass: begin', '// LOADING && BLOCK: SVG Icon Hourglass: end');
    const loadingAndBlockSvgIconCircle = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Circle: begin', '// LOADING && BLOCK: SVG Icon Circle: end');
    const loadingAndBlockSvgIconArrows = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Arrows: begin', '// LOADING && BLOCK: SVG Icon Arrows: end');
    const loadingAndBlockSvgIconDots = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Dots: begin', '// LOADING && BLOCK: SVG Icon Dots: end');
    const loadingAndBlockSvgIconPulse = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Pulse: begin', '// LOADING && BLOCK: SVG Icon Pulse: end');
    const loadingAndBlockSvgIconNotiflix = extractTheCodes(scriptsAsText, '// LOADING && BLOCK: SVG Icon Notiflix: begin', '// LOADING && BLOCK: SVG Icon Notiflix: end');


    const notifyGetInternalCSSCodes = extractTheCodes(scriptsAsText, '// NOTIFY: Get Internal CSS Codes: begin', '// NOTIFY: Get Internal CSS Codes: end');
    const notifyCreate = extractTheCodes(scriptsAsText, '// NOTIFY: Create: begin', '// NOTIFY: Create: end');

    const reportGetInternalCSSCodes = extractTheCodes(scriptsAsText, '// REPORT: Get Internal CSS Codes: begin', '// REPORT: Get Internal CSS Codes: end');
    const reportCreate = extractTheCodes(scriptsAsText, '// REPORT: Create: begin', '// REPORT: Create: end');

    const confirmGetInternalCSSCodes = extractTheCodes(scriptsAsText, '// CONFIRM: Get Internal CSS Codes: begin', '// CONFIRM: Get Internal CSS Codes: end');
    const confirmCreate = extractTheCodes(scriptsAsText, '// CONFIRM: Create: begin', '// CONFIRM: Create: end');

    const loadingGetInternalCSSCodes = extractTheCodes(scriptsAsText, '// LOADING: Get Internal CSS Codes: begin', '// LOADING: Get Internal CSS Codes: end');
    const loadingCreate = extractTheCodes(scriptsAsText, '// LOADING: Create: begin', '// LOADING: Create: end');
    const loadingChangeMessage = extractTheCodes(scriptsAsText, '// LOADING: Change Message: begin', '// LOADING: Change Message: end');

    const blockGetInternalCSSCodes = extractTheCodes(scriptsAsText, '// BLOCK: Get Internal CSS Codes: begin', '// BLOCK: Get Internal CSS Codes: end');
    const blockCreateOrRemove = extractTheCodes(scriptsAsText, '// BLOCK: Create or Remove: begin', '// BLOCK: Create or Remove: end');

    const notiflixNotify = extractTheCodes(scriptsAsText, '// NOTIFLIX.NOTIFY: begin', '// NOTIFLIX.NOTIFY: end', true);
    const notiflixReport = extractTheCodes(scriptsAsText, '// NOTIFLIX.REPORT: begin', '// NOTIFLIX.REPORT: end', true);
    const notiflixConfirm = extractTheCodes(scriptsAsText, '// NOTIFLIX.CONFIRM: begin', '// NOTIFLIX.CONFIRM: end', true);
    const notiflixLoading = extractTheCodes(scriptsAsText, '// NOTIFLIX.LOADING: begin', '// NOTIFLIX.LOADING: end', true);
    const notiflixBlock = extractTheCodes(scriptsAsText, '// NOTIFLIX.BLOCK: begin', '// NOTIFLIX.BLOCK: end', true);

    return {
      commonSSRCheck,
      commonVariables,
      notifySettings,
      reportSettings,
      confirmSettings,
      loadingSettings,
      blockSettings,
      commonConsoleError,
      commonConsoleLog,
      commonCheckHeadOrBody,
      commonSetInternalCSSCodes,
      commonExtendOptions,
      commonGetPlaintext,
      reportSvgIconSuccess,
      reportSvgIconFailure,
      reportSvgIconWarning,
      reportSvgIconInfo,
      loadingAndBlockSvgIconStandard,
      loadingAndBlockSvgIconHourglass,
      loadingAndBlockSvgIconCircle,
      loadingAndBlockSvgIconArrows,
      loadingAndBlockSvgIconDots,
      loadingAndBlockSvgIconPulse,
      loadingAndBlockSvgIconNotiflix,
      notifyGetInternalCSSCodes,
      notifyCreate,
      reportGetInternalCSSCodes,
      reportCreate,
      confirmGetInternalCSSCodes,
      confirmCreate,
      loadingGetInternalCSSCodes,
      loadingCreate,
      loadingChangeMessage,
      blockGetInternalCSSCodes,
      blockCreateOrRemove,
      notiflixNotify,
      notiflixReport,
      notiflixConfirm,
      notiflixLoading,
      notiflixBlock,
    };
  } else {
    Constants.terminalError(`"${scriptPath}" file does not exist in the root directory.`, thisFilePath);
  }
};

const extractAllStylesAndCleanAsync = async () => {
  const stylePath = join(Constants.directories.src, Constants.files.notiflix_CSS);
  if (existsSync(stylePath)) {
    const stylesAsText = readFileSync(stylePath, 'utf-8');

    // Notify: begin
    let notifyStyles;
    const extractNotifyStyles = extractTheCodes(stylesAsText, '/* NOTIFLIX.NOTIFY: begin */', '/* NOTIFLIX.NOTIFY: end */', true);
    try {
      const cleanNotifyStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(extractNotifyStyles);
      if (typeof cleanNotifyStyles === 'object') {
        notifyStyles = cleanNotifyStyles?.styles || '';
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that extracting the Notify module styles.`, thisFilePath);
      return { error: true };
    }
    // Notify: end

    // Report: begin
    let reportStyles;
    const extractReportStyles = extractTheCodes(stylesAsText, '/* NOTIFLIX.REPORT: begin */', '/* NOTIFLIX.REPORT: end */', true);
    try {
      const cleanReportStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(extractReportStyles);
      if (typeof cleanReportStyles === 'object') {
        reportStyles = cleanReportStyles?.styles || '';
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that extracting the Report module styles.`, thisFilePath);
      return { error: true };
    }
    // Report: end

    // Confirm: begin
    let confirmStyles;
    const extractConfirmStyles = extractTheCodes(stylesAsText, '/* NOTIFLIX.CONFIRM: begin */', '/* NOTIFLIX.CONFIRM: end */', true);
    try {
      const cleanConfirmStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(extractConfirmStyles);
      if (typeof cleanConfirmStyles === 'object') {
        confirmStyles = cleanConfirmStyles?.styles || '';
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that extracting the Confirm module styles.`, thisFilePath);
      return { error: true };
    }
    // Confirm: end

    // Loading: begin
    let loadingStyles;
    const extractLoadingStyles = extractTheCodes(stylesAsText, '/* NOTIFLIX.LOADING: begin */', '/* NOTIFLIX.LOADING: end */', true);
    try {
      const cleanLoadingStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(extractLoadingStyles);
      if (typeof cleanLoadingStyles === 'object') {
        loadingStyles = cleanLoadingStyles?.styles || '';
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that extracting the Loading module styles.`, thisFilePath);
      return { error: true };
    }
    // Loading: end

    // Block: begin
    let blockStyles;
    const extractBlockStyles = extractTheCodes(stylesAsText, '/* NOTIFLIX.BLOCK: begin */', '/* NOTIFLIX.BLOCK: end */', true);
    try {
      const cleanBlockStyles = await new CleanCSS(Constants.cleanCSSOptions).minify(extractBlockStyles);
      if (typeof cleanBlockStyles === 'object') {
        blockStyles = cleanBlockStyles?.styles || '';
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that extracting the Block module styles.`, thisFilePath);
      return { error: true };
    }
    // Block: end

    return {
      error: false,
      notifyStyles,
      reportStyles,
      confirmStyles,
      loadingStyles,
      blockStyles,
    };
  }
  else {
    Constants.terminalError(`"${stylePath}" file does not exist in the root directory.`, thisFilePath);
  }
};

const writeNotiflixModuleFileAsync = async (writeDirectory, fileName, getFileContentAsync) => {
  if (existsSync(writeDirectory)) {
    try {
      const fileContent = await getFileContentAsync();
      if (fileContent) {
        writeFileSync(join(writeDirectory, fileName), fileContent);
      } else {
        throw new Error();
      }
    } catch {
      Constants.terminalError(`Something went wrong that creating the "${fileName}" file.`, thisFilePath);
    }
  } else {
    Constants.terminalError(`"${writeDirectory}" directory does not exist in the root directory.`, thisFilePath);
  }
};
// Helpers: end


// Notiflix Notify: begin
const createNotiflixNotifyFileContentAsync = async () => {
  try {
    const notifyStyles = (await extractAllStylesAndCleanAsync()).notifyStyles;
    if (!notifyStyles) {
      throw new Error();
    }

    const notifyGetInternalCSSCodes = (extractAllScripts().notifyGetInternalCSSCodes || '').replace(
      `var notifyCSS = '';`,
      `var notifyCSS = '${notifyStyles}';`,
    );

    const notifyCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().notifySettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      notifyGetInternalCSSCodes,
      extractAllScripts().notifyCreate,
    ].join('\n\n');

    return createUMDPattern(
      Constants.modules.notify,
      notifyCodes,
      extractAllScripts().notiflixNotify,
      `${Constants.modules.notify}: ${Constants.notiflix}.${Constants.modules.notify}`,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_Notify_AIO_JS,
  createNotiflixNotifyFileContentAsync,
);
// Notiflix Notify: end

// Notiflix Report: begin
const createNotiflixReportFileContentAsync = async () => {
  try {
    const reportStyles = (await extractAllStylesAndCleanAsync()).reportStyles;
    if (!reportStyles) {
      throw new Error();
    }

    const reportGetInternalCSSCodes = (extractAllScripts().reportGetInternalCSSCodes || '').replace(
      `var reportCSS = '';`,
      `var reportCSS = '${reportStyles}';`,
    );

    const reportCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().reportSettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      extractAllScripts().reportSvgIconSuccess,
      extractAllScripts().reportSvgIconFailure,
      extractAllScripts().reportSvgIconWarning,
      extractAllScripts().reportSvgIconInfo,
      reportGetInternalCSSCodes,
      extractAllScripts().reportCreate,
    ].join('\n\n');

    return createUMDPattern(
      Constants.modules.report,
      reportCodes,
      extractAllScripts().notiflixReport,
      `${Constants.modules.report}: ${Constants.notiflix}.${Constants.modules.report}`,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_Report_AIO_JS,
  createNotiflixReportFileContentAsync,
);
// Notiflix Report: end

// Notiflix Confirm: begin
const createNotiflixConfirmFileContentAsync = async () => {
  try {
    const confirmStyles = (await extractAllStylesAndCleanAsync()).confirmStyles;
    if (!confirmStyles) {
      throw new Error();
    }

    const confirmGetInternalCSSCodes = (extractAllScripts().confirmGetInternalCSSCodes || '').replace(
      `var confirmCSS = '';`,
      `var confirmCSS = '${confirmStyles}';`,
    );

    const confirmCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().confirmSettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      confirmGetInternalCSSCodes,
      extractAllScripts().confirmCreate,
    ].join('\n\n');

    return createUMDPattern(
      Constants.modules.confirm,
      confirmCodes,
      extractAllScripts().notiflixConfirm,
      `${Constants.modules.confirm}: ${Constants.notiflix}.${Constants.modules.confirm}`,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_Confirm_AIO_JS,
  createNotiflixConfirmFileContentAsync,
);
// Notiflix Confirm: end

// Notiflix Loading: begin
const createNotiflixLoadingFileContentAsync = async () => {
  try {
    const loadingStyles = (await extractAllStylesAndCleanAsync()).loadingStyles;
    if (!loadingStyles) {
      throw new Error();
    }

    const loadingGetInternalCSSCodes = (extractAllScripts().loadingGetInternalCSSCodes || '').replace(
      `var loadingCSS = '';`,
      `var loadingCSS = '${loadingStyles}';`,
    );

    const loadingCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().loadingSettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      extractAllScripts().loadingAndBlockSvgIconStandard,
      extractAllScripts().loadingAndBlockSvgIconHourglass,
      extractAllScripts().loadingAndBlockSvgIconCircle,
      extractAllScripts().loadingAndBlockSvgIconArrows,
      extractAllScripts().loadingAndBlockSvgIconDots,
      extractAllScripts().loadingAndBlockSvgIconPulse,
      extractAllScripts().loadingAndBlockSvgIconNotiflix,
      loadingGetInternalCSSCodes,
      extractAllScripts().loadingCreate,
      extractAllScripts().loadingChangeMessage,
    ].join('\n\n');

    return createUMDPattern(
      Constants.modules.loading,
      loadingCodes,
      extractAllScripts().notiflixLoading,
      `${Constants.modules.loading}: ${Constants.notiflix}.${Constants.modules.loading}`,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_Loading_AIO_JS,
  createNotiflixLoadingFileContentAsync,
);
// Notiflix Loading: end

// Notiflix Block: begin
const createNotiflixBlockFileContentAsync = async () => {
  try {
    const blockStyles = (await extractAllStylesAndCleanAsync()).blockStyles;
    if (!blockStyles) {
      throw new Error();
    }

    const blockGetInternalCSSCodes = (extractAllScripts().blockGetInternalCSSCodes || '').replace(
      `var blockCSS = '';`,
      `var blockCSS = '${blockStyles}';`,
    );

    const blockCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().blockSettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonConsoleLog,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      extractAllScripts().loadingAndBlockSvgIconStandard,
      extractAllScripts().loadingAndBlockSvgIconHourglass,
      extractAllScripts().loadingAndBlockSvgIconCircle,
      extractAllScripts().loadingAndBlockSvgIconArrows,
      extractAllScripts().loadingAndBlockSvgIconDots,
      extractAllScripts().loadingAndBlockSvgIconPulse,
      blockGetInternalCSSCodes,
      extractAllScripts().blockCreateOrRemove,
    ].join('\n\n');

    return createUMDPattern(
      Constants.modules.block,
      blockCodes,
      extractAllScripts().notiflixBlock,
      `${Constants.modules.block}: ${Constants.notiflix}.${Constants.modules.block}`,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_Block_AIO_JS,
  createNotiflixBlockFileContentAsync,
);
// Notiflix Block: end


// Notiflix All In One: begin
const createNotiflixAllInOneFileContentAsync = async () => {
  try {
    // Notify Style: begin
    const notifyStyles = (await extractAllStylesAndCleanAsync()).notifyStyles;
    if (!notifyStyles) {
      throw new Error();
    }
    const notifyGetInternalCSSCodes = (extractAllScripts().notifyGetInternalCSSCodes || '').replace(
      `var notifyCSS = '';`,
      `var notifyCSS = '${notifyStyles}';`,
    );
    // Notify Style: begin

    // Report Style: begin
    const reportStyles = (await extractAllStylesAndCleanAsync()).reportStyles;
    if (!reportStyles) {
      throw new Error();
    }
    const reportGetInternalCSSCodes = (extractAllScripts().reportGetInternalCSSCodes || '').replace(
      `var reportCSS = '';`,
      `var reportCSS = '${reportStyles}';`,
    );
    // Report Style: begin

    // Confirm Style: begin
    const confirmStyles = (await extractAllStylesAndCleanAsync()).confirmStyles;
    if (!confirmStyles) {
      throw new Error();
    }
    const confirmGetInternalCSSCodes = (extractAllScripts().confirmGetInternalCSSCodes || '').replace(
      `var confirmCSS = '';`,
      `var confirmCSS = '${confirmStyles}';`,
    );
    // Confirm Style: begin

    // Loading Style: begin
    const loadingStyles = (await extractAllStylesAndCleanAsync()).loadingStyles;
    if (!loadingStyles) {
      throw new Error();
    }
    const loadingGetInternalCSSCodes = (extractAllScripts().loadingGetInternalCSSCodes || '').replace(
      `var loadingCSS = '';`,
      `var loadingCSS = '${loadingStyles}';`,
    );
    // Loading Style: begin

    // Block Style: begin
    const blockStyles = (await extractAllStylesAndCleanAsync()).blockStyles;
    if (!blockStyles) {
      throw new Error();
    }
    const blockGetInternalCSSCodes = (extractAllScripts().blockGetInternalCSSCodes || '').replace(
      `var blockCSS = '';`,
      `var blockCSS = '${blockStyles}';`,
    );
    // Block Style: begin


    // All In One Codes: begin
    const allInOneCodes = [
      extractAllScripts().commonSSRCheck,
      extractAllScripts().commonVariables,
      extractAllScripts().notifySettings,
      extractAllScripts().reportSettings,
      extractAllScripts().confirmSettings,
      extractAllScripts().loadingSettings,
      extractAllScripts().blockSettings,
      extractAllScripts().commonConsoleError,
      extractAllScripts().commonConsoleLog,
      extractAllScripts().commonCheckHeadOrBody,
      extractAllScripts().commonSetInternalCSSCodes,
      extractAllScripts().commonExtendOptions,
      extractAllScripts().commonGetPlaintext,
      extractAllScripts().reportSvgIconSuccess,
      extractAllScripts().reportSvgIconFailure,
      extractAllScripts().reportSvgIconWarning,
      extractAllScripts().reportSvgIconInfo,
      extractAllScripts().loadingAndBlockSvgIconStandard,
      extractAllScripts().loadingAndBlockSvgIconHourglass,
      extractAllScripts().loadingAndBlockSvgIconCircle,
      extractAllScripts().loadingAndBlockSvgIconArrows,
      extractAllScripts().loadingAndBlockSvgIconDots,
      extractAllScripts().loadingAndBlockSvgIconPulse,
      extractAllScripts().loadingAndBlockSvgIconNotiflix,
      notifyGetInternalCSSCodes,
      extractAllScripts().notifyCreate,
      reportGetInternalCSSCodes,
      extractAllScripts().reportCreate,
      confirmGetInternalCSSCodes,
      extractAllScripts().confirmCreate,
      loadingGetInternalCSSCodes,
      extractAllScripts().loadingCreate,
      extractAllScripts().loadingChangeMessage,
      blockGetInternalCSSCodes,
      extractAllScripts().blockCreateOrRemove,
    ].join('\n\n');
    // All In One Codes: end

    // All In One Main: begin
    const allInOneMain = [
      extractAllScripts().notiflixNotify,
      extractAllScripts().notiflixReport,
      extractAllScripts().notiflixConfirm,
      extractAllScripts().notiflixLoading,
      extractAllScripts().notiflixBlock,
    ].map(x => x.trim()).join(`\n\n${spaceCharacters}`);
    // All In One Main: end

    // All In One Return: begin
    const allInOneReturn = [
      `${Constants.modules.notify}: ${Constants.notiflix}.${Constants.modules.notify}`,
      `${Constants.modules.report}: ${Constants.notiflix}.${Constants.modules.report}`,
      `${Constants.modules.confirm}: ${Constants.notiflix}.${Constants.modules.confirm}`,
      `${Constants.modules.loading}: ${Constants.notiflix}.${Constants.modules.loading}`,
      `${Constants.modules.block}: ${Constants.notiflix}.${Constants.modules.block}`,
    ].join(', ');
    // All In One Return: end

    return createUMDPattern(
      '',
      allInOneCodes,
      allInOneMain,
      allInOneReturn,
    );
  } catch {
    return false;
  }
};

writeNotiflixModuleFileAsync(
  Constants.directories.build,
  Constants.files.notiflix_AIO_JS,
  createNotiflixAllInOneFileContentAsync,
);
// Notiflix All In One: end
