"use client";

import { useEffect, useState } from "react";

type ThemeVariant = "light" | "dark";

function readThemeFromDocument(): ThemeVariant {
  if (typeof document === "undefined") return "light";
  const root = document.documentElement;
  return root.classList.contains("dark") ? "dark" : "light";
}

export function useThemeVariant(): ThemeVariant {
  const [variant, setVariant] = useState<ThemeVariant>(() =>
    readThemeFromDocument()
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    const updateVariant = () => setVariant(readThemeFromDocument());

    updateVariant();

    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateVariant();
          break;
        }
      }
    });

    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return variant;
}
