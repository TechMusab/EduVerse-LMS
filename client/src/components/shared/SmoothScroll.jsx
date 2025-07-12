import React from 'react';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// Smooth scroll link component
export const SmoothLink = ({ to, children, className, duration = 500, smooth = true, spy = true, offset = -80, ...props }) => {
  return (
    <Link
      to={to}
      spy={spy}
      smooth={smooth}
      duration={duration}
      offset={offset}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
};

// Smooth scroll to top component
export const ScrollToTop = ({ children, className, duration = 500, smooth = true, ...props }) => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration,
      smooth,
    });
  };

  return (
    <button onClick={scrollToTop} className={className} {...props}>
      {children}
    </button>
  );
};

// Smooth scroll to element component
export const ScrollToElement = ({ to, children, className, duration = 500, smooth = true, offset = -80, ...props }) => {
  const scrollToElement = () => {
    scroller.scrollTo(to, {
      duration,
      smooth,
      offset,
    });
  };

  return (
    <button onClick={scrollToElement} className={className} {...props}>
      {children}
    </button>
  );
};

// Initialize react-scroll
export const initSmoothScroll = () => {
  Events.scrollEvent.register('begin', function () {
    console.log('begin', arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log('end', arguments);
  });

  scrollSpy.update();
};

// Cleanup react-scroll
export const cleanupSmoothScroll = () => {
  Events.scrollEvent.remove('begin');
  Events.scrollEvent.remove('end');
}; 