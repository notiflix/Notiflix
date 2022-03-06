/*
* Notiflix (https://notiflix.github.io)
* Version: 3.2.5
* Description: TypeScript Declaration.
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2022 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

/**
  * Notiflix is a pure JavaScript library for client-side non-blocking notifications, popup boxes, loading indicators, and more that makes your web projects much better.
  * @namespace Notiflix
  * @memberof Global
  */
declare namespace Notiflix {

  /**
   * @interface INotifyOptionsSecondary
   * @memberof Notiflix
   */
  export interface INotifyOptionsSecondary {
    /**
     * @property {string} - Changes the background color.
     * @defaultValue `INotifyOptions.success` => `#32c682`
     * @defaultValue `INotifyOptions.failure` => `#ff5549`
     * @defaultValue `INotifyOptions.warning` => `#eebf31`
     * @defaultValue `INotifyOptions.info` => `#26c0d3`
     */
    background?: string;

    /**
     * @property {string} - Changes the text color.
     * @defaultValue `INotifyOptions.success` => `#fff`
     * @defaultValue `INotifyOptions.failure` => `#fff`
     * @defaultValue `INotifyOptions.warning` => `#fff`
     * @defaultValue `INotifyOptions.info` => `#fff`
     */
    textColor?: string;

    /**
     * @property {string} - Changes the class name.
     * @defaultValue `INotifyOptions.success` => `notiflix-notify-success`
     * @defaultValue `INotifyOptions.failure` => `notiflix-notify-failure`
     * @defaultValue `INotifyOptions.warning` => `notiflix-notify-warning`
     * @defaultValue `INotifyOptions.info` => `notiflix-notify-info`
     */
    childClassName?: string;

    /**
     * @property {string} - Changes the built-in SVG icon color.
     * @defaultValue `INotifyOptions.success` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.failure` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.warning` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.info` => `rgba(0,0,0,0.2)`
     */
    notiflixIconColor?: string;

    /**
     * @property {string} - Changes the FontAwesome icon class name. (FontAwesome has to be added to the project separately.)
     * @defaultValue `INotifyOptions.success` => `fas fa-check-circle`
     * @defaultValue `INotifyOptions.failure` => `fas fa-times-circle`
     * @defaultValue `INotifyOptions.warning` => `fas fa-exclamation-circle`
     * @defaultValue `INotifyOptions.info` => `fas fa-info-circle`
     */
    fontAwesomeClassName?: string;

    /**
     * @property {string} - Changes the FontAwesome icon color.
     * @defaultValue `INotifyOptions.success` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.failure` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.warning` => `rgba(0,0,0,0.2)`
     * @defaultValue `INotifyOptions.info` => `rgba(0,0,0,0.2)`
     */
    fontAwesomeIconColor?: string;

    /**
     * @property {string} - Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this notification type. Can be set as an empty string to use the common one.)
     * @defaultValue `INotifyOptions.success` => `rgba(50,198,130,0.2)`
     * @defaultValue `INotifyOptions.failure` => `rgba(255,85,73,0.2)`
     * @defaultValue `INotifyOptions.warning` => `rgba(238,191,49,0.2)`
     * @defaultValue `INotifyOptions.info` => `rgba(38,192,211,0.2)`
     */
    backOverlayColor?: string;
  }

  /**
   * @interface INotifyOptions
   * @memberof Notiflix
   */
  export interface INotifyOptions {
    /**
     * @property {string} - Changes the width of the notifications.
     * @defaultValue `280px`
     */
    width?: string;

    /**
     * @property {string} - 7 types of positions can be used: `right-top` `right-bottom` `left-top` `left-bottom` `center-top` `center-bottom` `center-center`
     * @defaultValue `right-top`
     */
    position?: 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom' | 'center-top' | 'center-bottom' | 'center-center';

    /**
     * @property {string} - The distance between positioned notifications and the `body` element.
     * @defaultValue `10px`
     */
    distance?: string;

    /**
     * @property {number} - Changes the opacity. (Between 0 and 1)
     * @defaultValue `1`
     */
    opacity?: number;

    /**
     * @property {string} - Changes the radius of the notifications corners.
     * @defaultValue `5px`
     */
    borderRadius?: string;

    /**
     * @property {boolean} - Specifies the text direction to "right-to-left".
     * @defaultValue `false`
     */
    rtl?: boolean;

    /**
     * @property {number} - The delay in milliseconds to hide and remove the notifications.
     * @defaultValue `3000`
     */
    timeout?: number;

    /**
     * @property {number} - The maximum length of the notifications message text.
     * @defaultValue `110`
     */
    messageMaxLength?: number;

    /**
     * @property {boolean} - Adds a background overlay to the notifications.
     * @defaultValue `false`
     */
    backOverlay?: boolean;

    /**
     * @property {string} - Changes the color of the background overlay. (Only if the notification type-based "backOverlayColor" option is empty string.)
     * @defaultValue `rgba(0,0,0,0.5)`
     */
    backOverlayColor?: string;

    /**
     * @property {boolean} - Strips all HTML tags.
     * @defaultValue `true`
     */
    plainText?: boolean;

    /**
     * @property {boolean} - Auto-removes all the notifications except for the last one.
     * @defaultValue `false`
     */
    showOnlyTheLastOne?: boolean;

    /**
     * @property {boolean} - Removes the notification when it has been clicked without waiting for the delay.
     * @defaultValue `false`
     */
    clickToClose?: boolean;

    /**
     * @property {boolean} - Auto-remove functionality will be paused for each notification element when the pointer(mouse) enters on it.
     * @defaultValue `true`
     */
    pauseOnHover?: boolean;

    /**
     * @property {string} - Changes the ID (attribute) of the notifications.
     * @defaultValue `NotiflixNotify`
     */
    ID?: string;

    /**
     * @property {string} - Changes the class name (attribute) of the notifications.
     * @defaultValue `notiflix-notify`
     */
    className?: string;

    /**
     * @property {number} - Changes the z-index of the notifications.
     * @defaultValue `4001`
     */
    zindex?: number;

    /**
     * @property {string} - Changes the font-family of the notifications message text.
     * @defaultValue `Quicksand`
     */
    fontFamily?: string;

    /**
     * @property {string} - Changes the font-size of the notifications message text.
     * @defaultValue `13px`
     */
    fontSize?: string;

    /**
     * @property {boolean} - Enables/disables CSS animations to show/hide the notifications.
     * @defaultValue `true`
     */
    cssAnimation?: boolean;

    /**
     * @property {number} - Changes the CSS animations duration as milliseconds.
     * @defaultValue `400`
     */
    cssAnimationDuration?: number;

    /**
     * @property {string} - 6 types of styles can be used: `fade` `zoom` `from-right` `from-top` `from-bottom` `from-left`
     * @defaultValue `fade`
     */
    cssAnimationStyle?: 'fade' | 'zoom' | 'from-right' | 'from-top' | 'from-bottom' | 'from-left';

    /**
     * @property {boolean} - Adds a close button/icon to the notifications. (Notifications with a close button won't disappear until they were clicked.)
     * @defaultValue `false`
     */
    closeButton?: boolean;

    /**
     * @property {boolean} - Allows using built-in SVG or external FontAwesome icons in the notifications. (By default, built-in SVG icons have been defined.)
     * @defaultValue `true`
     */
    useIcon?: boolean;

    /**
     * @property {boolean} - Ignores built-in SVG icons and allows to use of external FontAwesome icons.
     * @defaultValue `false`
     */
    useFontAwesome?: boolean;

    /**
     * @property {string} - 2 types of styles can be used: `basic` `shadow`
     * @defaultValue `basic`
     */
    fontAwesomeIconStyle?: 'basic' | 'shadow';

    /**
     * @property {string} - Changes the font-size of the FontAwesome icons.
     * @defaultValue `34px`
     */
    fontAwesomeIconSize?: string;

    /**
     * @property {Object} - The options of the `success` type notifications.
     * - `Notiflix.INotifyOptionsSecondary`
     */
    success?: INotifyOptionsSecondary;

    /**
     * @property {Object} - The options of the `failure` type notifications.
     * - `Notiflix.INotifyOptionsSecondary`
     */
    failure?: INotifyOptionsSecondary;

    /**
     * @property {Object} - The options of the `warning` type notifications.
     * - `Notiflix.INotifyOptionsSecondary`
     */
    warning?: INotifyOptionsSecondary;

    /**
     * @property {Object} - The options of the `info` type notifications.
     * - `Notiflix.INotifyOptionsSecondary`
     */
    info?: INotifyOptionsSecondary;
  }


  /**
   * @interface IReportOptionsSecondary
   * @memberof Notiflix
   */
  export interface IReportOptionsSecondary {
    /**
     * @property {string} - Changes the built-in SVG icon color.
     * @defaultValue `IReportOptions.success` => `#32c682`
     * @defaultValue `IReportOptions.failure` => `#ff5549`
     * @defaultValue `IReportOptions.warning` => `#eebf31`
     * @defaultValue `IReportOptions.info` => `#26c0d3`
     */
    svgColor?: string;

    /**
     * @property {string} - Changes the title text color.
     * @defaultValue `IReportOptions.success` => `#1e1e1e`
     * @defaultValue `IReportOptions.failure` => `#1e1e1e`
     * @defaultValue `IReportOptions.warning` => `#1e1e1e`
     * @defaultValue `IReportOptions.info` => `#1e1e1e`
     */
    titleColor?: string;

    /**
     * @property {string} - Changes the message text color.
     * @defaultValue `IReportOptions.success` => `#242424`
     * @defaultValue `IReportOptions.failure` => `#242424`
     * @defaultValue `IReportOptions.warning` => `#242424`
     * @defaultValue `IReportOptions.info` => `#242424`
     */
    messageColor?: string;

    /**
     * @property {string} - Changes the button background color.
     * @defaultValue `IReportOptions.success` => `#32c682`
     * @defaultValue `IReportOptions.failure` => `#ff5549`
     * @defaultValue `IReportOptions.warning` => `#eebf31`
     * @defaultValue `IReportOptions.info` => `#26c0d3`
     */
    buttonBackground?: string;

    /**
     * @property {string} - Changes the button text color.
     * @defaultValue `IReportOptions.success` => `#fff`
     * @defaultValue `IReportOptions.failure` => `#fff`
     * @defaultValue `IReportOptions.warning` => `#fff`
     * @defaultValue `IReportOptions.info` => `#fff`
     */
    buttonColor?: string;

    /**
     * @property {string} - Changes the color of the background overlay. (Overrides the common "backOverlayColor" option for this report type. Can be set as an empty string to use the common one.)
     * @defaultValue `IReportOptions.success` => `rgba(50,198,130,0.2)`
     * @defaultValue `IReportOptions.failure` => `rgba(255,85,73,0.2)`
     * @defaultValue `IReportOptions.warning` => `rgba(238,191,49,0.2)`
     * @defaultValue `IReportOptions.info` => `rgba(38,192,211,0.2)`
     */
    backOverlayColor?: string;
  }

  /**
   * @interface IReportOptions
   * @memberof Notiflix
   */
  export interface IReportOptions {
    /**
     * @property {string} - Changes the class name (attribute).
     * @defaultValue `notiflix-report`
     */
    className?: string;

    /**
     * @property {string} - Changes the width.
     * @defaultValue `320px`
     */
    width?: string;

    /**
     * @property {string} - Changes the background color.
     * @defaultValue `#f8f8f8`
     */
    backgroundColor?: string;

    /**
     * @property {string} - Changes the radius of the corners.
     * @defaultValue `25px`
     */
    borderRadius?: string;

    /**
     * @property {boolean} - Specifies the text direction to "right-to-left".
     * @defaultValue `false`
     */
    rtl?: boolean;

    /**
     * @property {number} - Changes the z-index.
     * @defaultValue `4002`
     */
    zindex?: number;

    /**
     * @property {boolean} - Adds a background overlay.
     * @defaultValue `true`
     */
    backOverlay?: boolean;

    /**
     * @property {string} - Changes the color of the background overlay. (Only if the report type-based "backOverlayColor" option is empty string.)
     * @defaultValue `rgba(0,0,0,0.5)`
     */
    backOverlayColor?: string;

    /**
     * @property {boolean} - Removes the Report Notification when the background overlay element has been clicked. The "backOverlay" option has to be "true" as well.
     * @defaultValue `false`
     */
    backOverlayClickToClose?: boolean;

    /**
     * @property {string} - Changes the font-family.
     * @defaultValue `Quicksand`
     */
    fontFamily?: string;

    /**
     * @property {string} - Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
     * @defaultValue `110px`
     */
    svgSize?: string;

    /**
     * @property {boolean} - Strips all HTML tags.
     * @defaultValue `true`
     */
    plainText?: boolean;

    /**
     * @property {string} - Changes the font-size of the title text.
     * @defaultValue `16px`
     */
    titleFontSize?: string;

    /**
     * @property {number} - The maximum length of the title text.
     * @defaultValue `34`
     */
    titleMaxLength?: number;

    /**
     * @property {string} - Changes the font-size of the message text.
     * @defaultValue `13px`
     */
    messageFontSize?: string;

    /**
     * @property {number} - The maximum length of the message text.
     * @defaultValue `400`
     */
    messageMaxLength?: number;

    /**
     * @property {string} - Changes the font-size of the button text.
     * @defaultValue `14px`
     */
    buttonFontSize?: string;

    /**
     * @property {number} - The maximum length of the button text.
     * @defaultValue `34`
     */
    buttonMaxLength?: number;

    /**
     * @property {boolean} - Enables/disables CSS animations to show/hide.
     * @defaultValue `true`
     */
    cssAnimation?: boolean;

    /**
     * @property {number} - Changes the CSS animations duration as milliseconds.
     * @defaultValue `360`
     */
    cssAnimationDuration?: number;

    /**
     * @property {string} - 2 types of styles can be used: `fade` `zoom`
     * @defaultValue `fade`
     */
    cssAnimationStyle?: 'fade' | 'zoom';

    /**
     * @property {Object} - The options of the `success` type.
     * - `Notiflix.IReportOptionsSecondary`
     */
    success?: IReportOptionsSecondary;

    /**
     * @property {Object} - The options of the `failure` type.
     * - `Notiflix.IReportOptionsSecondary`
     */
    failure?: IReportOptionsSecondary;

    /**
     * @property {Object} - The options of the `warning` type.
     * - `Notiflix.IReportOptionsSecondary`
     */
    warning?: IReportOptionsSecondary;

    /**
     * @property {Object} - The options of the `info` type.
     * - `Notiflix.IReportOptionsSecondary`
     */
    info?: IReportOptionsSecondary;
  }


  /**
   * @interface IConfirmOptions
   * @memberof Notiflix
   */
  export interface IConfirmOptions {
    /**
     * @property {string} - Changes the class name (attribute).
     * @defaultValue `notiflix-confirm`
     */
    className?: string;

    /**
     * @property {string} - Changes the width.
     * @defaultValue `300px`
     */
    width?: string;

    /**
     * @property {number} - Changes the z-index.
     * @defaultValue `4003`
     */
    zindex?: number;

    /**
     * @property {string} - 9 types of positions can be used: `center` `center-top` `center-bottom` `right-top` `right-center` `right-bottom` `left-top` `left-center` `left-bottom`
     * @defaultValue `center`
     */
    position?: 'center' | 'center-top' | 'center-bottom' | 'right-top' | 'right-center' | 'right-bottom' | 'left-top' | 'left-center' | 'left-bottom';

    /**
     * @property {string} - The distance between positioned confirm boxes and the `body` element.
     * @defaultValue `10px`
     */
    distance?: string;

    /**
     * @property {string} - Changes the background color.
     * @defaultValue `#f8f8f8`
     */
    backgroundColor?: string;

    /**
     * @property {string} - Changes the radius of the corners.
     * @defaultValue `25px`
     */
    borderRadius?: string;

    /**
     * @property {boolean} - Adds a background overlay.
     * @defaultValue `true`
     */
    backOverlay?: boolean;

    /**
     * @property {string} - Changes the color of the background overlay.
     * @defaultValue `rgba(0,0,0,0.5)`
     */
    backOverlayColor?: string;

    /**
     * @property {boolean} - Specifies the text direction to "right-to-left".
     * @defaultValue `false`
     */
    rtl?: boolean;

    /**
     * @property {string} - Changes the font-family.
     * @defaultValue `Quicksand`
     */
    fontFamily?: string;

    /**
     * @property {boolean} - Enables/disables CSS animations to show/hide.
     * @defaultValue `true`
     */
    cssAnimation?: boolean;

    /**
     * @property {number} - Changes the CSS animations duration as milliseconds.
     * @defaultValue `300`
     */
    cssAnimationDuration?: number;

    /**
     * @property {string} - 2 types of styles can be used: `fade` `zoom`
     * @defaultValue `fade`
     */
    cssAnimationStyle?: 'zoom' | 'fade';

    /**
     * @property {boolean} - Strips all HTML tags.
     * @defaultValue `true`
     */
    plainText?: boolean;

    /**
     * @property {string} - Changes the color of the title text.
     * @defaultValue `#32c682`
     */
    titleColor?: string;

    /**
     * @property {string} - Changes the font-size of the title text.
     * @defaultValue `16px`
     */
    titleFontSize?: string;

    /**
     * @property {number} - The maximum length of the title text.
     * @defaultValue `34`
     */
    titleMaxLength?: number;

    /**
     * @property {string} - Changes the color of the message text.
     * @defaultValue `#1e1e1e`
     */
    messageColor?: string;

    /**
     * @property {string} - Changes the font-size of the message text.
     * @defaultValue `14px`
     */
    messageFontSize?: string;

    /**
     * @property {number} - The maximum length of the message text.
     * @defaultValue `110`
     */
    messageMaxLength?: number;

    /**
     * @property {string} - Changes the font-size of the buttons text.
     * @defaultValue `15px`
     */
    buttonsFontSize?: string;

    /**
     * @property {number} - The maximum length of the buttons text.
     * @defaultValue `34`
     */
    buttonsMaxLength?: number;

    /**
     * @property {string} - Changes the color of the OK button text.
     * @defaultValue `#f8f8f8`
     */
    okButtonColor?: string;

    /**
     * @property {string} - Changes the background color of the OK button.
     * @defaultValue `#32c682`
     */
    okButtonBackground?: string;

    /**
     * @property {string} - Changes the color of the Cancel button text.
     * @defaultValue `#f8f8f8`
     */
    cancelButtonColor?: string;

    /**
     * @property {string} - Changes the background color of the Cancel button.
     * @defaultValue `#a9a9a9`
     */
    cancelButtonBackground?: string;
  }


  /**
   * @interface ILoadingOptions
   * @memberof Notiflix
   */
  export interface ILoadingOptions {
    /**
     * @property {string} - Changes the class name (attribute).
     * @defaultValue `notiflix-loading`
     */
    className?: string;

    /**
     * @property {number} - Changes the z-index.
     * @defaultValue `4000`
     */
    zindex?: number;

    /**
     * @property {string} - Changes the background color.
     * @defaultValue `rgba(0,0,0,0.8)`
     */
    backgroundColor?: string;

    /**
     * @property {boolean} - Specifies the text direction to "right-to-left".
     * @defaultValue `false`
     */
    rtl?: boolean;

    /**
     * @property {string} - Changes the font-family.
     * @defaultValue `Quicksand`
     */
    fontFamily?: string;

    /**
     * @property {boolean} - Enables/disables CSS animations to show/hide.
     * @defaultValue `true`
     */
    cssAnimation?: boolean;

    /**
     * @property {number} - Changes the CSS animations duration as milliseconds.
     * @defaultValue `400`
     */
    cssAnimationDuration?: number;

    /**
     * @property {boolean} - Removes the loading indicator when it has been clicked.
     * @defaultValue `false`
     */
    clickToClose?: boolean;

    /**
     * @property {string} - An external SVG icon URL can be set.
     * @defaultValue `null`
     * - Usage: `Notiflix.Loading.custom();`
     */
    customSvgUrl?: string | null;

    /**
     * @property {string} - A text-based `string` SVG icon can be set. Single quotation marks should be avoided.
     * @defaultValue `null`
     * - Usage: `Notiflix.Loading.custom();`
     */
    customSvgCode?: string | null;

    /**
     * @property {string} - Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
     * @defaultValue `80px`
     */
    svgSize?: string;

    /**
     * @property {string} - Changes the built-in SVG icons color.
     * @defaultValue `#32c682`
     */
    svgColor?: string;

    /**
     * @property {string} - Changes the ID (attribute) of the loading message element.
     * @defaultValue `NotiflixLoadingMessage`
     */
    messageID?: string;

    /**
     * @property {string} - Changes the font-size of the loading message text.
     * @defaultValue `15px`
     */
    messageFontSize?: string;

    /**
     * @property {number} - The maximum length of the loading message text.
     * @defaultValue `34`
     */
    messageMaxLength?: number;

    /**
     * @property {string} - Changes the color of the loading message text.
     * @defaultValue `#dcdcdc`
     */
    messageColor?: string;
  }


  /**
   * @interface IBlockOptions
   * @memberof Notiflix
   */
  export interface IBlockOptions {
    /**
     * @property {number} - Limit of the CSS selector(s) or "`Array<HTMLElement>`" or "`NodeListOf<HTMLElement>`" length.
     * @defaultValue `200`
     */
    querySelectorLimit?: number;

    /**
     * @property {string} - Changes the class name (attribute) of the block indicator/message elements wrapper.
     * @defaultValue `notiflix-block`
     */
    className?: string;

    /**
     * @property {string} - Changes the position of the block indicator/message elements wrapper.
     * @defaultValue `absolute`
     */
    position?: string;

    /**
     * @property {number} - Changes the z-index of the block indicator/message elements wrapper.
     * @defaultValue `1000`
     */
    zindex?: number;

    /**
     * @property {string} - Changes the background color the block indicator/message elements wrapper.
     * @defaultValue `rgba(255,255,255,0.9)`
     */
    backgroundColor?: string;

    /**
     * @property {boolean} - Specifies the text direction to "right-to-left".
     * @defaultValue `false`
     */
    rtl?: boolean;

    /**
     * @property {string} - Changes the font-family.
     * @defaultValue `Quicksand`
     */
    fontFamily?: string;

    /**
     * @property {boolean} - Enables/disables CSS animations to show/hide.
     * @defaultValue `true`
     */
    cssAnimation?: boolean;

    /**
     * @property {number} - Changes the CSS animations duration as milliseconds.
     * @defaultValue `300`
     */
    cssAnimationDuration?: number;

    /**
     * @property {string} - Changes the built-in SVG icons width and height. (Notiflix uses square scaled icons.)
     * @defaultValue `45px`
     */
    svgSize?: string;

    /**
     * @property {string} - Changes the built-in SVG icons color.
     * @defaultValue `#383838`
     */
    svgColor?: string;

    /**
     * @property {string} - Changes the font-size of the block message text.
     * @defaultValue `14px`
     */
    messageFontSize?: string;

    /**
     * @property {number} - The maximum length of the block message text.
     * @defaultValue `34`
     */
    messageMaxLength?: number;

    /**
     * @property {string} - Changes the color of the block message text.
     * @defaultValue `#383838`
     */
    messageColor?: string;
  }


  /**
   * Notify is a namespace in Notiflix (Notiflix.Notify)
   * @namespace Notify
   * @memberof Notiflix
   */
  export namespace Notify {
    /**
     * This method can be used to set custom options globally for the Notify module.
     * @function init
     * @memberof Notiflix.Notify
     * @param {Object} options - Optional, `Notiflix.INotifyOptions`.
     */
    function init(options: INotifyOptions): void;

    /**
     * This method can be used to deeply extend the `Notify.init()` options for a specific page or event globally.
     * @function merge
     * @memberof Notiflix.Notify
     * @param {Object} extendOptions - Optional, `Notiflix.INotifyOptions`.
     */
    function merge(extendOptions: INotifyOptions): void;

    /**
     * This method can be used to send the `success` type notifications.
     * @function success
     * @memberof Notiflix.Notify
     * @param {string} message - Required, a text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
     */
    function success(
      message: string,
      callbackOrOptions?: (() => void) | INotifyOptions,
      options?: INotifyOptions,
    ): void;

    /**
     * This method can be used to send the `failure` type notifications.
     * @function failure
     * @memberof Notiflix.Notify
     * @param {string} message - Required, a text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
     */
    function failure(
      message: string,
      callbackOrOptions?: (() => void) | INotifyOptions,
      options?: INotifyOptions,
    ): void;

    /**
     * This method can be used to send the `warning` type notifications.
     * @function warning
     * @memberof Notiflix.Notify
     * @param {string} message - Required, a text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
     */
    function warning(
      message: string,
      callbackOrOptions?: (() => void) | INotifyOptions,
      options?: INotifyOptions,
    ): void;

    /**
     * This method can be used to send the `info` type notifications.
     * @function info
     * @memberof Notiflix.Notify
     * @param {string} message - Required, a text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the notification element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the second parameter has been already used for a callback function.)
     */
    function info(
      message: string,
      callbackOrOptions?: (() => void) | INotifyOptions,
      options?: INotifyOptions,
    ): void;
  }


  /**
   * Report is a namespace in Notiflix (Notiflix.Report)
   * @namespace Report
   * @memberof Notiflix
   */
  export namespace Report {
    /**
     * This method can be used to set custom options globally for the Report module.
     * @function init
     * @memberof Notiflix.Report
     * @param {Object} options - Optional, `Notiflix.IReportOptions`.
     */
    function init(options: IReportOptions): void;

    /**
     * This method can be used to deeply extend the `Report.init()` options for a specific page or event globally.
     * @function merge
     * @memberof Notiflix.Report
     * @param {Object} extendOptions - Optional, `Notiflix.IReportOptions`.
     */
    function merge(extendOptions: IReportOptions): void;

    /**
     * This method can be used to send the `success` type extended notifications that contain a title, description, and button(with a callback function).
     * @function success
     * @memberof Notiflix.Report
     * @param {string} title - Required, title text in string format.
     * @param {string} message - Required, message text in string format.
     * @param {string} buttonText - Required, button text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)
     */
    function success(
      title: string,
      message: string,
      buttonText: string,
      callbackOrOptions?: (() => void) | IReportOptions,
      options?: IReportOptions,
    ): void;

    /**
     * This method can be used to send the `failure` type extended notifications that contain a title, description, and button(with a callback function).
     * @function failure
     * @memberof Notiflix.Report
     * @param {string} title - Required, title text in string format.
     * @param {string} message - Required, message text in string format.
     * @param {string} buttonText - Required, button text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)
     */
    function failure(
      title: string,
      message: string,
      buttonText: string,
      callbackOrOptions?: (() => void) | IReportOptions,
      options?: IReportOptions,
    ): void;

    /**
     * This method can be used to send the `warning` type extended notifications that contain a title, description, and button(with a callback function).
     * @function warning
     * @memberof Notiflix.Report
     * @param {string} title - Required, title text in string format.
     * @param {string} message - Required, message text in string format.
     * @param {string} buttonText - Required, button text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)
     */
    function warning(
      title: string,
      message: string,
      buttonText: string,
      callbackOrOptions?: (() => void) | IReportOptions,
      options?: IReportOptions,
    ): void;

    /**
     * This method can be used to send the `info` type extended notifications that contain a title, description, and button(with a callback function).
     * @function info
     * @memberof Notiflix.Report
     * @param {string} title - Required, title text in string format.
     * @param {string} message - Required, message text in string format.
     * @param {string} buttonText - Required, button text in string format.
     * @param {function | Object} callbackOrOptions - Optional, a callback function that will be called when the button element has been clicked. Or, extending the initialize options with the new options for each notification element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each notification element. (If the fourth parameter has been already used for a callback function.)
     */
    function info(
      title: string,
      message: string,
      buttonText: string,
      callbackOrOptions?: (() => void) | IReportOptions,
      options?: IReportOptions,
    ): void;
  }


  /**
   * Confirm is a namespace in Notiflix (Notiflix.Confirm)
   * @namespace Confirm
   * @memberof Notiflix
   */
  export namespace Confirm {
    /**
     * This method can be used to set custom options globally for the Confirm module.
     * @function init
     * @memberof Notiflix.Confirm
     * @param {Object} options - Optional, `Notiflix.IConfirmOptions`.
     */
    function init(options: IConfirmOptions): void;

    /**
     * This method can be used to deeply extend the `Confirm.init()` options for a specific page or event globally.
     * @function merge
     * @memberof Notiflix.Confirm
     * @param {Object} extendOptions - Optional, `Notiflix.IConfirmOptions`.
     */
    function merge(extendOptions: IConfirmOptions): void;

    /**
     * This method can be used to show a confirm box with info, and take the custom actions via the callback functions.
     * @function show
     * @memberof Notiflix.Confirm
     * @param {string} title - Required, title text in string format.
     * @param {string} message - Required, message/question in string format.
     * @param {string} okButtonText - Required, OK button text in string format.
     * @param {string} cancelButtonText - Optional, Cancel button text in string format.
     * @param {function} okButtonCallback - Optional, a callback function that will be called when the OK button element has been clicked.
     * @param {function} cancelButtonCallback - Optional, a callback function that will be called when the Cancel button element has been clicked.
     * @param {Object} options - Optional, extending the initialize options with new the options for each confirm box.
     */
    function show(
      title: string,
      message: string,
      okButtonText: string,
      cancelButtonText?: string,
      okButtonCallback?: () => void,
      cancelButtonCallback?: () => void,
      options?: IConfirmOptions,
    ): void;

    /**
     * This method can be used to ask a question within a confirm box. The confirm box doesn't remove till the client gives the correct answer. Or, the client can click on the cancel button to close/remove the confirm box as well.
     * @function ask
     * @memberof Notiflix.Confirm
     * @param {string} title - Required, title text in string format.
     * @param {string} question - Required, question text in string format.
     * @param {string} answer - Required, answer text in string format.
     * @param {string} okButtonText - Required, OK button text in string format.
     * @param {string} cancelButtonText - Optional, Cancel button text in string format.
     * @param {function} okButtonCallback - Optional, a callback function that will be called when the OK button element has been clicked.
     * @param {function} cancelButtonCallback - Optional, a callback function that will be called when the Cancel button element has been clicked.
     * @param {Object} options - Optional, extending the initialize options with new the options for each confirm box.
     */
    function ask(
      title: string,
      question: string,
      answer: string,
      okButtonText: string,
      cancelButtonText?: string,
      okButtonCallback?: () => void,
      cancelButtonCallback?: () => void,
      options?: IConfirmOptions,
    ): void;

    /**
     * This method works similarly as `window.prompt()`. The client doesn't have to type a correct answer to the input element to proceed unlike the `Confirm.ask();` method. The client answer passes to the callback functions as a parameter and this parameter is always a `string`.
     * @function prompt
     * @memberof Notiflix.Confirm
     * @param {string} title - Required, title text in string format.
     * @param {string} question - Required, question text in string format.
     * @param {string} defaultAnswer - Required, default answer text in string format. An empty string can be used as well.
     * @param {string} okButtonText - Optional, Cancel button text in string format.
     * @param {function} cancelButtonText - Optional, a callback function that will be called when the OK button element has been clicked.
     * @param {function} cancelButtonCallback - Optional, a callback function that will be called when the Cancel button element has been clicked.
     * @param {Object} options - Optional, extending the initialize options with new the options for each confirm box.
     */
    function prompt(
      title: string,
      question: string,
      defaultAnswer: string,
      okButtonText: string,
      cancelButtonText?: string,
      okButtonCallback?: (clientAnswer: string) => void,
      cancelButtonCallback?: (clientAnswer: string) => void,
      options?: IConfirmOptions,
    ): void;
  }


  /**
   * Loading is a namespace in Notiflix (Notiflix.Loading)
   * @namespace Loading
   * @memberof Notiflix
   */
  export namespace Loading {
    /**
     * This method can be used to set custom options globally for the Loading module.
     * @function init
     * @memberof Notiflix.Loading
     * @param {Object} options - Optional, `Notiflix.ILoadingOptions`.
     */
    function init(options: ILoadingOptions): void;

    /**
     * This method can be used to deeply extend the `Loading.init()` options for a specific page or event globally.
     * @function merge
     * @memberof Notiflix.Loading
     * @param {Object} extendOptions - Optional, `Notiflix.ILoadingOptions`.
     */
    function merge(extendOptions: ILoadingOptions): void;

    /**
     * This method can be used to show the `standard` type loading indicator.
     * @function standard
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function standard(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `hourglass` type loading indicator.
     * @function hourglass
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function hourglass(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `circle` type loading indicator.
     * @function circle
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function circle(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `arrows` type loading indicator.
     * @function arrows
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function arrows(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `dots` type loading indicator.
     * @function dots
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function dots(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `pulse` type loading indicator.
     * @function pulse
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function pulse(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `custom` type loading indicator.
     * - `customSvgUrl` or `customSvgCode` options are required.
     * @function custom
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function custom(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to show the `notiflix` type loading indicator.
     * @function notiflix
     * @memberof Notiflix.Loading
     * @param {string | Object} messageOrOptions - Optional, a message in string format. Or, extending the initialize options with the new options for each loading indicator.
     * @param {Object} options - Optional, extending the initialize options with new the options for each loading indicator. (If the first parameter has been already used for a message.)
     */
    function notiflix(
      messageOrOptions?: string | ILoadingOptions,
      options?: ILoadingOptions,
    ): void;

    /**
     * This method can be used to remove the existing loading indicator. (Type of the existing loading indicator does not matter.)
     * @function remove
     * @memberof Notiflix.Loading
     * @param {number} delay - Optional, milliseconds for delaying in number format.
     */
    function remove(delay?: number): void;

    /**
     * This method can be used to change the existing loading indicator message text if exist. (Type of the existing loading indicator does not matter.)
     * @function change
     * @memberof Notiflix.Loading
     * @param {string} newMessage - Required, new message in string format.
     */
    function change(newMessage: string): void;
  }


  /**
   * Block is a namespace in Notiflix (Notiflix.Block)
   * @namespace Block
   * @memberof Notiflix
   */
  export namespace Block {
    /**
     * This method can be used to set custom options globally for the Block module.
     * @function init
     * @memberof Notiflix.Block
     * @param {Object} options - Optional, `Notiflix.IBlockOptions`.
     */
    function init(options: IBlockOptions): void;

    /**
     * This method can be used to deeply extend the `Block.init()` options for a specific page or event globally.
     * @function merge
     * @memberof Notiflix.Block
     * @param {Object} extendOptions - Optional, `Notiflix.IBlockOptions`.
     */
    function merge(extendOptions: IBlockOptions): void;

    /**
     * This method can be used to block the selected element(s) using a `standard` type loading indicator.
     * @function standard
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function standard(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to block the selected element(s) using a `hourglass` type loading indicator.
     * @function hourglass
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function hourglass(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to block the selected element(s) using a `circle` type loading indicator.
     * @function circle
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function circle(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to block the selected element(s) using a `arrows` type loading indicator.
     * @function arrows
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function arrows(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to block the selected element(s) using a `dots` type loading indicator.
     * @function dots
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function dots(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to block the selected element(s) using a `pulse` type loading indicator.
     * @function pulse
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to block.
     * @param {string | Object} messageOrOptions - Optional, a blocking message in string format. Or, extending the initialize options with the new options for each block element.
     * @param {Object} options - Optional, extending the initialize options with new the options for each block element. (If the second parameter has been already used for a blocking message.)
     */
    function pulse(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      messageOrOptions?: string | IBlockOptions,
      options?: IBlockOptions,
    ): void;

    /**
     * This method can be used to unblock the selected element(s). (Type of the existing loading indicator does not matter.)
     * @function remove
     * @memberof Notiflix.Block
     * @param {string | Array<HTMLElement> | NodeListOf<HTMLElement>} selectorOrHTMLElements - Required, CSS selector(s) that matches the element(s) or "Array of HTMLElments" or "NodeListOf HTMLElments" to unblock.
     * @param {number} delay - Optional, milliseconds for delaying in number format.
     */
    function remove(
      selectorOrHTMLElements: string | HTMLElement[] | NodeListOf<HTMLElement>,
      delay?: number,
    ): void;
  }

}

export = Notiflix;
export as namespace Notiflix;
