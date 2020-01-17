import React from 'react';
import { Header } from '../../components';

export default (WrappedComponent) => (props) => {
  return (
    <div className='test'>
      <Header {...props} />
      <WrappedComponent {...props} />
    </div>
  );
};
