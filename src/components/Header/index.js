import React from 'react';
import get from 'lodash.get';
import { PAppBar, PTypography, PButton, PToolbar, PmakeStyles } from '../../atoms';
import { HideOnScroll } from '../../molecules';

const useStyles = PmakeStyles((theme) => ({
  root: {
    padding: 0,
    backgroundColor: (props) => props.backgroundColor
  },
  title: {
    flexGrow: 1
  },
  menu: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
export default ({ headerData, history }) => {
  const onMenuClick = (url) => history.push(url);

  const classes = useStyles();
  return (
    <HideOnScroll direction='down'>
      <PAppBar position='fixed' className={classes.root}>
        <PToolbar>
          <PTypography variant='h6' className={classes.title}>
            {headerData.title}
          </PTypography>
          <div className={classes.menu}>
            {get(headerData, 'entry', []).map((key) => (
              <PButton key={headerData.renderMap[key].value} color='inherit' onClick={() => onMenuClick(headerData.renderMap[key].value)}>
                {headerData.renderMap[key].label}
              </PButton>
            ))}
          </div>
        </PToolbar>
      </PAppBar>
    </HideOnScroll>
  );
};
