import { ToastAction } from 'src/@types/enums';

const initialState: IToastsState = {
  toasts: [],
  autohide: true
};

const toastsStore = (state: IToastsState = initialState, action: IToastAction): IToastsState => {
  switch (action.type) {
    case ToastAction.Show: {
      const toasts = state.toasts.slice();
      toasts.push({ text: action.text, action: action.action });
      return { toasts, autohide: action.autoHide };
    }
      
    case ToastAction.Dismiss: {
      const [, ...toasts] = state.toasts;
      return { toasts, autohide: true };
    }

    default:
      return state;
  }
};

export default toastsStore;
