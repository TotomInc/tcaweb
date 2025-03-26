import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP_BREAKPOINT = 1024;
// Only update if width changes by more than 10px
const WIDTH_THRESHOLD = 32;
const DEBOUNCE_TIMEOUT = 250;

export function useIsDesktop() {
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const rafRef = useRef<number | undefined>(undefined);
  const lastWidthRef = useRef<number>(0);

  const [isDesktop, setIsDesktop] = useState(false);

  const checkIsDesktop = useCallback(() => {
    const currentWidth = window.innerWidth;
    const widthDiff = Math.abs(currentWidth - lastWidthRef.current);

    if (widthDiff >= WIDTH_THRESHOLD) {
      const newIsDesktop = currentWidth >= DESKTOP_BREAKPOINT;
      setIsDesktop(newIsDesktop);
      lastWidthRef.current = currentWidth;
    }
  }, []);

  useEffect(() => {
    checkIsDesktop();

    const handleResize = () => {
      // Cancel any pending RAF
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Cancel any pending timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Schedule the check on the next animation frame
      timeoutRef.current = setTimeout(() => {
        rafRef.current = requestAnimationFrame(checkIsDesktop);
      }, DEBOUNCE_TIMEOUT);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [checkIsDesktop]);

  return isDesktop;
}
