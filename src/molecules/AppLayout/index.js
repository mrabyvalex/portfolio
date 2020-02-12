import React from 'react';
import { Header, MobileHeader } from '../../components';
import { PContainer, PmakeStyles } from '../../atoms';

const useStyles = PmakeStyles((theme) => ({
  root: {
    marginTop: 80,
    minHeight: '200vh',
    padding: 0
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
      <MobileHeader {...props} />
    </div>
  );
};
