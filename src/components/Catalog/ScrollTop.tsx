import React from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import './Catalog.scss';

const ScrollTop: React.FC = (props: any) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (clickedEl: React.MouseEvent<HTMLElement>) => {
    const target = clickedEl.target as HTMLInputElement;
    const anchor = (target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className="scrollTop">
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
