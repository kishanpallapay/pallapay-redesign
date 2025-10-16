"use client";

import { useCallback, useEffect, useState } from "react";
import type { ComponentProps } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

type ThemeMode = "light" | "dark";

function applyTheme(next: ThemeMode) {
  const root = document.documentElement;
  if (next === "dark") {
    root.classList.add("dark");
    root.style.colorScheme = "dark";
  } else {
    root.classList.remove("dark");
    root.style.colorScheme = "light";
  }
}

const getInitialMode = (): ThemeMode => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export function useThemeMode() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  useEffect(() => {
    setMode(getInitialMode());
  }, []);

  const persistTheme = useCallback((next: ThemeMode) => {
    try {
      localStorage.setItem("theme", next);
    } catch (_) {}
    applyTheme(next);
  }, []);

  const toggleTheme = useCallback(() => {
    setMode(previous => {
      const next = previous === "dark" ? "light" : "dark";
      persistTheme(next);
      return next;
    });
  }, [persistTheme]);

  const setTheme = useCallback(
    (next: ThemeMode) => {
      setMode(next);
      persistTheme(next);
    },
    [persistTheme]
  );

  return { mode, setTheme, toggleTheme };
}

type SwitchProps = ComponentProps<typeof Switch>;

type ThemeToggleSwitchProps = {
  label?: string;
  showLabel?: boolean;
  containerClassName?: string;
} & Pick<SwitchProps, "className" | "size" | "variant">;

export function ThemeToggleSwitch({
  label = "Dark mode",
  showLabel = false,
  containerClassName,
  className,
  size = "lg",
  variant = "theme-filled",
}: ThemeToggleSwitchProps) {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <div className={cn("flex items-center gap-3", containerClassName)}>
      {showLabel ? (
        <span className="text-sm font-exo2-medium text-gray-500 dark:text-gray-200">
          {label}
        </span>
      ) : null}
      <Switch
        checked={mode === "light"}
        onCheckedChange={toggleTheme}
        showIcons={true}
        offIcon={Moon}
        onIcon={Sun}
        size={size}
        variant={variant}
        className={className ?? ""}
      />
    </div>
  );
}

export default function ThemeToggle() {
  return (
    <div className="fixed right-4 top-4 z-50">
      <ThemeToggleSwitch />
    </div>
  );
}
