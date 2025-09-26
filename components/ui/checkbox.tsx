"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  size?: "sm" | "md" | "lg";
}

const checkboxSizes = {
  sm: {
    checkbox: "size-5", // 20px
    icon: "size-3", // 12px
  },
  md: {
    checkbox: "size-6", // 24px
    icon: "size-3.5", // 14px
  },
  lg: {
    checkbox: "size-7", // 28px
    icon: "size-4", // 16px
  },
};

function Checkbox({ className, size = "md", ...props }: CheckboxProps) {
  const sizeClasses = checkboxSizes[size];

  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer shrink-0 rounded-[6px] border-2 border-gray-200 dark:border-gray-300 shadow-xs transition-shadow outline-none",
        "bg-white dark:bg-gray",
        "data-[state=checked]:bg-orange data-[state=checked]:border-orange dark:data-[state=checked]:bg-orange dark:data-[state=checked]:border-orange",
        "data-[state=checked]:text-black",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses.checkbox,
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className={cn("stroke-[2.5]", sizeClasses.icon)} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
