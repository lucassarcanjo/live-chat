import { useLayoutEffect } from "react";

/**
 * Uses a layout effect to detect the real viewport size.
 */
export const useRealViewPort = () => {
  useLayoutEffect(() => {
    const resizeEvent = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    window.addEventListener("resize", resizeEvent);

    return () => {
      window.removeEventListener("resize", resizeEvent);
    };
  }, []);
};
