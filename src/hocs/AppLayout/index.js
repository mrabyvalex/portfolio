import React from 'react';
import { Header } from '../../components';
import { PContainer, PmakeStyles } from '../../atoms';

const useStyles = PmakeStyles((theme) => ({
  root: {
    marginTop: 64
  }
}));
export default (WrappedComponent) => (props) => {
  const classes = useStyles();
  return (
    <div className='test'>
      <Header {...props} />
      <PContainer className={classes.root} maxWidth='false'>
        <WrappedComponent {...props} />
      </PContainer>
    </div>
  );
};
