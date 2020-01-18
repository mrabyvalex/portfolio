import React from 'react';
import { PuseScrollTrigger, PSlide } from '../../atoms';

const HideOnScroll = (props) => {
  const { children, window, direction } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = PuseScrollTrigger({ target: window ? window() : undefined });

  return (
    <PSlide appear={false} direction={direction} in={!trigger}>
      {children}
    </PSlide>
  );
};
HideOnScroll.defaultProps = {
  direction: 'down'
};

export default HideOnScroll;
