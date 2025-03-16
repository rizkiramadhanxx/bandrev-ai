"use client";

import { useState, useEffect } from "react";
import Script from "next/script";

export default function ProviderRender({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAssetsLoaded = () => {
      const images = document.querySelectorAll("img");
      let loadedImages = 0;

      images.forEach((img) => {
        if (img.complete) {
          loadedImages++;
        } else {
          img.addEventListener("load", () => {
            loadedImages++;
            if (loadedImages === images.length) setIsLoading(false);
          });
        }
      });

      if (loadedImages === images.length) setIsLoading(false);
    };

    if (document.readyState === "complete") {
      checkAssetsLoaded();
    } else {
      window.addEventListener("load", checkAssetsLoaded);
    }

    return () => window.removeEventListener("load", checkAssetsLoaded);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex h-screen items-center justify-center">
          <p className="text-2xl font-semibold">Loading assets...</p>
        </div>
      ) : (
        children
      )}
    </>
  );
}
