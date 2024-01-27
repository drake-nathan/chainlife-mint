import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    windowHeight: 0,
    windowWidth: 0,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};
