import React from 'react';

import { PSnackbar, PMuiAlert } from '../../atoms';

function Alert(props) {
  return <PMuiAlert elevation={6} variant='filled' {...props} />;
}

export default (WrappedComponent) => (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
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
      <PSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          This is a success message!
        </Alert>
      </PSnackbar>
    </>
  );
};
