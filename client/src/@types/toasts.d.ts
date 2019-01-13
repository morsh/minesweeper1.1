
declare type IToastActionType = 'SHOW_TOAST' | 'DISMISS_TOAST';

declare interface IToast {
  text: string,
  action: string
}

declare interface IToastsState {
  toasts: IToast[],
  autohide: boolean
}

declare type IToastAction =
| {
  type: 'SHOW_TOAST';
  text: string;
  action: string;
  autoHide: boolean;
}| {
  type: 'DISMISS_TOAST';
};