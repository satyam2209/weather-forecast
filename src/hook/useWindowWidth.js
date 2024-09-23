import { useState, useEffect } from 'react';

function useWindowWidth() {
  const windowSize = 700;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth < windowSize;
  const isDesktop = windowWidth >= windowSize;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile, isDesktop, windowWidth };
}

export default useWindowWidth;
