import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-exo2-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-fit h-fit",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-black hover:text-black dark:text-white dark:hover:text-white shadow hover:opacity-90 hover:scale-105 active:scale-95 active:opacity-80",
        outline:
          "border-1 border-orange text-orange bg-transparent hover:text-black dark:text-white dark:hover:text-white dark:hover:text-black hover:bg-orange hover:scale-105 hover:shadow-md active:scale-95",
        ghost:
          "text-orange hover:opacity-80 hover:scale-105 active:scale-95 active:opacity-60 border-none",
        success:
          "bg-success-200 text-white hover:bg-success-400 shadow hover:scale-105 active:scale-95",
        error:
          "bg-error-200 text-white hover:bg-error-400 shadow hover:scale-105 active:scale-95",
        info: "bg-info-200 text-white hover:bg-info-400 shadow hover:scale-105 active:scale-95",
        alert:
          "bg-alert-200 text-black hover:bg-alert-300 shadow hover:scale-105 active:scale-95",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs: "text-xs rounded-sm px-3 py-1.5",
        sm: "rounded-lg py-3 px-4 text-sm",
        md: "rounded-lg py-3 px-6 text-md",
        lg: "rounded-md py-3 px-12 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        style={{
          transformOrigin: "center",
        }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
