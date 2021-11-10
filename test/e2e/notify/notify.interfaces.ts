interface INotifyTestData {
  wrapper: {
    tagName: string;
    width: string;
    zIndex: number;
    opacity: number;
    left: string;
    top: string;
    right: string;
    bottom: string;
  };
  element: {
    tagName: string;
    className: string;
    width: string;
    fontSize: string;
    fontFamily: string;
    color: string;
    backgroundColor: string;
    animationDuration: number;
    borderRadius: string;
  };
  icon: {
    tagName: string;
    className: string;
  };
  message: {
    tagName: string;
    className: string;
    innerHTML: string;
  };
}

export type {
  INotifyTestData,
};
