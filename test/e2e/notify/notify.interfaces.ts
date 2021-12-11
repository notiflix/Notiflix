interface INotifyTestDataMethodsWrapper {
  tagName: string;
  width: string;
  zIndex: number;
  opacity: number;
  left: string;
  top: string;
  right: string;
  bottom: string;
}

interface INotifyTestDataMethodsElement {
  tagName: string;
  className: string;
  width: string;
  fontSize: string;
  fontFamily: string;
  color: string;
  backgroundColor: string;
  animationDuration: number;
  borderRadius: string;
  padding: string;
}

interface INotifyTestDataMethodsIcon {
  tagName: string;
  className: string;
}

interface INotifyTestDataMethodsMessage {
  tagName: string;
  className: string;
  innerHTML: string;
}

interface INotifyTestDataMethods {
  wrapper: INotifyTestDataMethodsWrapper;
  element: INotifyTestDataMethodsElement;
  icon: INotifyTestDataMethodsIcon;
  message: INotifyTestDataMethodsMessage;
}

interface INotifyTestDataInitMerge {
  elementTagName: string;
  elementBackgrondColor: string;
  messageInnerHTML: string;
  iconTagName?: string;
}

export type {
  INotifyTestDataMethodsWrapper,
  INotifyTestDataMethodsElement,
  INotifyTestDataMethodsIcon,
  INotifyTestDataMethodsMessage,
  INotifyTestDataMethods,
  INotifyTestDataInitMerge,
};
