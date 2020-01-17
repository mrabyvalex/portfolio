import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { PAppBar, PTypography, PButton, PToolbar } from '../../atoms';
import { HideOnScroll } from '../../compounds';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  },
  title: {
    flexGrow: 1
  }
}));
export default ({ headerData, history }) => {
  const classes = useStyles();
  const onMenuClick = (url) => history.push(url);
  return (
    <HideOnScroll direction='down'>
      <PAppBar position='fixed' className={classes.root}>
        <PToolbar>
          <PTypography variant='h6' className={classes.title}>
            {headerData.title}
          </PTypography>
          {headerData.menu.map((item) => (
            <PButton color='inherit' onClick={() => onMenuClick(item.value)}>
              {item.label}
            </PButton>
          ))}
        </PToolbar>
      </PAppBar>
    </HideOnScroll>
  );
};
