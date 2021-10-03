/*
* Notiflix (https://notiflix.github.io)
* Version: 3.1.0
* Description: TypeScript Declaration.
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2021 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/

// Declaration: begin
declare namespace Notiflix {
  // Types: Common
  export type TNotiflixCallback = () => void;


  // Types and Interfaces: Notify Module: begin
  export interface INotifyOptionsSecondary {
    background?: string;
    textColor?: string;
    childClassName?: string;
    notiflixIconColor?: string;
    fontAwesomeClassName?: string;
    fontAwesomeIconColor?: string;
    backOverlayColor?: string;
  }

  export interface INotifyOptions {
    width?: string;
    position?: 'right-top' | 'right-bottom' | 'left-top' | 'left-bottom' | 'center-top' | 'center-bottom' | 'center-center';
    distance?: string;
    opacity?: number;
    borderRadius?: string;
    rtl?: boolean;
    timeout?: number;
    messageMaxLength?: number;
    backOverlay?: boolean;
    backOverlayColor?: string;
    plainText?: boolean;
    showOnlyTheLastOne?: boolean;
    clickToClose?: boolean;
    pauseOnHover?: boolean;
    ID?: string;
    className?: string;
    zindex?: number;
    fontFamily?: string;
    fontSize?: string;
    cssAnimation?: boolean;
    cssAnimationDuration?: number;
    cssAnimationStyle?: 'fade' | 'zoom' | 'from-right' | 'from-top' | 'from-bottom' | 'from-left';
    closeButton?: boolean;
    useIcon?: boolean;
    useFontAwesome?: boolean;
    fontAwesomeIconStyle?: 'basic' | 'shadow';
    fontAwesomeIconSize?: string;
    success?: INotifyOptionsSecondary;
    failure?: INotifyOptionsSecondary;
    warning?: INotifyOptionsSecondary;
    info?: INotifyOptionsSecondary;
  }

  export type TNotifyCallbackOrOptions = TNotiflixCallback | INotifyOptions;
  // Types and Interfaces: Notify Module: end


  // Types and Interfaces: Report Module: begin
  export interface IReportOptionsSecondary {
    svgColor?: string;
    titleColor?: string;
    messageColor?: string;
    buttonBackground?: string;
    buttonColor?: string;
    backOverlayColor?: string;
  }

  export interface IReportOptions {
    className?: string;
    width?: string;
    backgroundColor?: string;
    borderRadius?: string;
    rtl?: boolean;
    zindex?: number;
    backOverlay?: boolean;
    backOverlayColor?: string;
    fontFamily?: string;
    svgSize?: string;
    plainText?: boolean;
    titleFontSize?: string;
    titleMaxLength?: number;
    messageFontSize?: string;
    messageMaxLength?: number;
    buttonFontSize?: string;
    buttonMaxLength?: number;
    cssAnimation?: boolean;
    cssAnimationDuration?: number;
    cssAnimationStyle?: 'fade' | 'zoom';
    success?: IReportOptionsSecondary;
    failure?: IReportOptionsSecondary;
    warning?: IReportOptionsSecondary;
    info?: IReportOptionsSecondary;
  }

  export type TReportCallbackOrOptions = TNotiflixCallback | IReportOptions;
  // Types and Interfaces: Report Module: end


  // Interfaces: Confirm Module: begin
  export interface IConfirmOptions {
    className?: string;
    width?: string;
    zindex?: boolean;
    position?: 'center' | 'center-top' | 'center-bottom' | 'right-top' | 'right-center' | 'right-bottom' | 'left-top' | 'left-center' | 'left-bottom';
    distance?: string;
    backgroundColor?: string;
    borderRadius?: string;
    backOverlay?: boolean;
    backOverlayColor?: string;
    rtl?: boolean;
    fontFamily?: string;
    cssAnimation?: boolean;
    cssAnimationDuration?: number;
    cssAnimationStyle?: 'zoom' | 'fade';
    plainText?: boolean;
    titleColor?: string;
    titleFontSize?: string;
    titleMaxLength?: number;
    messageColor?: string;
    messageFontSize?: string;
    messageMaxLength?: number;
    buttonsFontSize?: string;
    buttonsMaxLength?: number;
    okButtonColor?: string;
    okButtonBackground?: string;
    cancelButtonColor?: string;
    cancelButtonBackground?: string;
  }
  // Interfaces: Confirm Module: end


  // Types and Interfaces: Loading Module: begin
  export interface ILoadingOptions {
    className?: string;
    zindex?: number;
    backgroundColor?: string;
    rtl?: boolean;
    fontFamily?: string;
    cssAnimation?: boolean;
    cssAnimationDuration?: number;
    clickToClose?: boolean;
    customSvgUrl?: string;
    svgSize?: string;
    svgColor?: string;
    messageID?: string;
    messageFontSize?: string;
    messageMaxLength?: number;
    messageColor?: string;
  }

  export type TLoadingMessageOrOptions = string | ILoadingOptions;
  // Types and Interfaces: Loading Module: end


  // Types and Interfaces: Block Module: begin
  export interface IBlockOptions {
    querySelectorLimit?: number;
    className?: string;
    position?: string;
    zindex?: number;
    backgroundColor?: string;
    rtl?: boolean;
    fontFamily?: string;
    cssAnimation?: boolean;
    cssAnimationDuration?: number;
    svgSize?: string;
    svgColor?: string;
    messageFontSize?: string;
    messageMaxLength?: number;
    messageColor?: string;
  }

  export type TBlockSelectorOrHTMLElements = string | HTMLElement[] | NodeListOf<HTMLElement>;
  export type TBlockMessageOrOptions = string | IBlockOptions;
  // Types and Interfaces: Block Module: end


  // Notify Module: begin
  export namespace Notify {
    function init(options: INotifyOptions): void;
    function merge(extendOptions: INotifyOptions): void;
    function success(message: string, callbackOrOptions?: TNotifyCallbackOrOptions, options?: INotifyOptions): void;
    function failure(message: string, callbackOrOptions?: TNotifyCallbackOrOptions, options?: INotifyOptions): void;
    function warning(message: string, callbackOrOptions?: TNotifyCallbackOrOptions, options?: INotifyOptions): void;
    function info(message: string, callbackOrOptions?: TNotifyCallbackOrOptions, options?: INotifyOptions): void;
  }
  // Notify Module: end

  // Report Module: begin
  export namespace Report {
    function init(options: IReportOptions): void;
    function merge(extendOptions: IReportOptions): void;
    function success(title: string, message: string, buttonText: string, callbackOrOptions?: TReportCallbackOrOptions, options?: IReportOptions): void;
    function failure(title: string, message: string, buttonText: string, callbackOrOptions?: TReportCallbackOrOptions, options?: IReportOptions): void;
    function warning(title: string, message: string, buttonText: string, callbackOrOptions?: TReportCallbackOrOptions, options?: IReportOptions): void;
    function info(title: string, message: string, buttonText: string, callbackOrOptions?: TReportCallbackOrOptions, options?: IReportOptions): void;
  }
  // Report Module: end

  // Confirm Module: begin
  export namespace Confirm {
    function init(options: IConfirmOptions): void;
    function merge(extendOptions: IConfirmOptions): void;
    function show(
      title: string,
      message: string,
      okButtonText: string,
      cancelButtonText?: string,
      okButtonCallback?: TNotiflixCallback,
      cancelButtonCallback?: TNotiflixCallback,
      options?: IConfirmOptions,
    ): void;
    function ask(
      title: string,
      question: string,
      answer: string,
      okButtonText: string,
      cancelButtonText?: string,
      okButtonCallback?: TNotiflixCallback,
      cancelButtonCallback?: TNotiflixCallback,
      options?: IConfirmOptions,
    ): void;
  }
  // Confirm Module: end

  // Loading Module: begin
  export namespace Loading {
    function init(options: ILoadingOptions): void;
    function merge(extendOptions: ILoadingOptions): void;
    function standard(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function hourglass(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function circle(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function arrows(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function dots(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function pulse(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function custom(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function notiflix(messageOrOptions?: TLoadingMessageOrOptions, options?: ILoadingOptions): void;
    function remove(delay?: number): void;
    function change(newMessage: string): void;
  }
  // Loading Module: end

  // Block Module: begin
  export namespace Block {
    function init(options: IBlockOptions): void;
    function merge(extendOptions: IBlockOptions): void;
    function standard(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function hourglass(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function circle(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function arrows(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function dots(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function pulse(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, messageOrOptions?: TBlockMessageOrOptions, options?: IBlockOptions): void;
    function remove(selectorOrHTMLElements: TBlockSelectorOrHTMLElements, delay?: number): void;
  }
  // Block Module: end
}
// Declaration: end

// Export: begin
export = Notiflix;
export as namespace Notiflix;
// Export: end
