import React from 'react';
import get from 'lodash.get';
import { PAppBar, PTypography, PButton, PToolbar, PmakeStyles } from '../../atoms';
import { HideOnScroll } from '../../molecules';

const useStyles = PmakeStyles((theme) => ({
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
          {get(headerData, 'entry', []).map((key) => (
            <PButton key={headerData.renderMap[key].value} color='inherit' onClick={() => onMenuClick(headerData.renderMap[key].value)}>
              {headerData.renderMap[key].label}
            </PButton>
          ))}
        </PToolbar>
      </PAppBar>
    </HideOnScroll>
  );
};
