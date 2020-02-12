import React from 'react';
import { PmakeStyles } from '../../atoms';

const UseStyles = PmakeStyles({
  container: {
    display: 'flex'
  },
  menu: {
    width: '30%'
  },
  layout: {
    width: '70%'
  }
});

export default () => {
  const classes = UseStyles();
  return (
    <div className={classes.container}>
      <div className={classes.menu}>components</div>
      <div className={classes.layout}>layout</div>
    </div>
  );
};
