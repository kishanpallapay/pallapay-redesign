"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import type React from "react";
import { Switch } from "./ui/switch";

function applyTheme(next: "light" | "dark") {
  const root = document.documentElement;
  if (next === "dark") {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setMode(isDark ? "dark" : "light");
  }, []);

  const onToggle = () => {
    const next = mode === "dark" ? "light" : "dark";
    setMode(next);
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
    applyTheme(next);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Switch
        checked={mode === "light"}
        onCheckedChange={onToggle}
        showIcons={true}
        offIcon={Moon}
        variant="theme-filled"
        onIcon={Sun}
        size="lg"
      />
    </div>
  );
}
