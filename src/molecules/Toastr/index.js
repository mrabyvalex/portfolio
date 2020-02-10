import React, { useState } from 'react';

import { PSnackbar, PMuiAlert } from '../../atoms';
import { DEFAULT_TOASTR_CONFIG } from '../../constants';
import UseCallBackState from '../UseCallBackState';

function Alert(props) {
  return <PMuiAlert elevation={6} variant='filled' {...props} />;
}

export default (WrappedComponent) => (props) => {
  const [open, setOpen] = useState(false);
  const [toastrConfig, updateToastrConfig] = UseCallBackState(DEFAULT_TOASTR_CONFIG);
  const handleClick = (configs = {}) => {
    updateToastrConfig(
      (currentConfig) => ({ ...currentConfig, ...configs }),
      () => {
        setOpen(true);
      }
    );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <WrappedComponent {...props} openToastr={handleClick} />
      <PSnackbar open={open} autoHideDuration={toastrConfig.timeout} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toastrConfig.severity}>
          {toastrConfig.message}
        </Alert>
      </PSnackbar>
    </>
  );
};
