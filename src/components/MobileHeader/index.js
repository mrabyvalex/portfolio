import React, { useState } from 'react';
import get from 'lodash.get';
import { PSpeedDial, PIcons, PSpeedDialAction, PmakeStyles, PuseScrollTrigger } from '../../atoms';

const useStyles = PmakeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 50,
    right: 50,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));
export default ({ headerData, window, history }) => {
  const classes = useStyles();
  const [open, toggleOpen] = useState(false);
  const toggleSpeedial = () => toggleOpen((value) => !value);
  const trigger = PuseScrollTrigger({ target: window ? window() : undefined });
  const onMenuItemClick = (url) => () => history.push(url);
  return (
    <PSpeedDial className={classes.root} ariaLabel='SpeedDial example' hidden={trigger} icon={<PIcons.Menu openIcon={<PIcons.Close />} />} onClose={toggleSpeedial} onOpen={toggleSpeedial} open={open} direction='up'>
      {get(headerData, 'entry', []).map((key) => {
        const RenderIcon = PIcons[headerData.renderMap[key].icon] || PIcons.Menu;
        return <PSpeedDialAction key={headerData.renderMap[key].label} tooltipOpen icon={<RenderIcon color='secondary' />} tooltipTitle={headerData.renderMap[key].label} onClick={onMenuItemClick(headerData.renderMap[key].value)} />;
      })}
    </PSpeedDial>
  );
};
