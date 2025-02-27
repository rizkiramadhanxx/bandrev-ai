"use client";

import { useState, useEffect } from "react";

export default function useWindow(): { width: number; height: number } {
  const [windowSize, setWindowSize] = useState({
    width: 0, // Default to 0 or some sensible fallback
    height: 0,
  });

  useEffect(() => {
    // Check if the code is running on the client
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      // Initialize size
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return windowSize;
}
