"use client";

import { memo } from "react";
import { cn } from "@/lib/utils";

type SwitchButton = {
  label: string;
  value: string;
};

export interface AuthSwitchProps {
  leftButton: SwitchButton;
  rightButton: SwitchButton;
  activeValue: string;
  onLeftClick?: (value: string) => void;
  onRightClick?: (value: string) => void;
  className?: string;
}

function AuthSwitchComponent({
  leftButton,
  rightButton,
  activeValue,
  onLeftClick,
  onRightClick,
  className,
}: AuthSwitchProps) {
  const isLeftActive = activeValue === leftButton.value;
  const isRightActive = activeValue === rightButton.value;

  return (
    <div
      className={cn(
        "inline-flex w-full max-w-xs items-center rounded-[12px] border border-border bg-background/40 p-2 text-sm",
        "shadow-sm backdrop-blur-sm md:max-w-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={() => onLeftClick?.(leftButton.value)}
        className={cn(
          "flex-1 rounded-[8px] px-4 py-3 font-semibold transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          isLeftActive
            ? "shadow-sm bg-gray-50 dark:bg-gray-600 text-black dark:text-white "
            : "text-gray-500"
        )}
      >
        {leftButton.label}
      </button>
      <button
        type="button"
        onClick={() => onRightClick?.(rightButton.value)}
        className={cn(
          "flex-1 rounded-[8px] px-4 py-3 font-semibold transition-colors duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          isRightActive
            ? "shadow-sm bg-gray-50 dark:bg-gray-600 text-black dark:text-white "
            : "text-gray-500"
        )}
      >
        {rightButton.label}
      </button>
    </div>
  );
}

export const AuthSwitch = memo(AuthSwitchComponent);
