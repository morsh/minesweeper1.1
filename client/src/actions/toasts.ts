import { ToastAction } from 'src/@types/enums';

export const showToast = (text: string) => ({
  type: ToastAction.Show,
  text
});

export const dismissToast = () => ({
  type: ToastAction.Dismiss
});