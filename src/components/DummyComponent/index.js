import React from 'react';
import { PmakeStyles } from '../../atoms';

const UseStyles = PmakeStyles({
  container: {
    width: '100px',
    height: '100px',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default ({ title = 'test' }) => {
  const classes = UseStyles();
  return <div className={classes.container}>{title}</div>;
};
