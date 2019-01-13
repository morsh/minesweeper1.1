import * as React from 'react';
import { Snackbar } from 'react-md';
import { connect } from 'react-redux';
import { dismissToast } from 'src/actions/toasts';

const Toasts = ({ toasts, autohide, onDismissToast }: any) => {

  return (
    <Snackbar
      id="example-snackbar"
      toasts={toasts}
      autohide={autohide}
      onDismiss={onDismissToast}
    />
  );
};

const mapStateToProps = (state: IDispatchState) => ({
  toasts: state.toastsStore.toasts,
  autohide: state.toastsStore.autohide
});

const mapDispatchToProps = (dispatch: any) => ({
  onDismissToast: () => dispatch(dismissToast())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toasts);