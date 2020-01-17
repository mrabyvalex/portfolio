import React, { useState } from 'react';

import { PSpeedDial, PIcons, PSpeedDialAction, PmakeStyles, PuseScrollTrigger } from '../../atoms';

const useStyles = PmakeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: 50,
    right: 50
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
      {headerData.menu.map((action) => {
        const RenderIcon = PIcons[action.icon] || PIcons.Menu;
        return <PSpeedDialAction key={action.label} tooltipOpen icon={<RenderIcon />} tooltipTitle={action.label} onClick={onMenuItemClick(action.value)} />;
      })}
    </PSpeedDial>
  );
};
