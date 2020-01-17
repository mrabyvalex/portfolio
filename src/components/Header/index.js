import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PAppBar, PTypography } from '../../atoms';
import { HideOnScroll } from '../../compounds';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
export default () => {
  const classes = useStyles();
  return (
    <HideOnScroll direction='down'>
      <PAppBar position='fixed' className={classes.root}>
        <PTypography variant='h6' className={classes.title}>
          test
        </PTypography>
      </PAppBar>
    </HideOnScroll>
  );
};
