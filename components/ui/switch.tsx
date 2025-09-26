import React, { forwardRef } from "react";
import { Check, X, LucideIcon } from "lucide-react";

type SwitchVariant =
  | "primary"
  | "outline"
  | "filled"
  | "ghost"
  | "theme-filled"
  | "theme-outline";
type SwitchSize = "sm" | "default" | "lg";

interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  variant?: SwitchVariant;
  size?: SwitchSize;
  showIcons?: boolean;
  showText?: boolean;
  onText?: string;
  offText?: string;
  onIcon?: LucideIcon;
  offIcon?: LucideIcon;
}

const SIZE_CONFIG = {
  sizeClasses: {
    sm: "h-5 w-9",
    default: "h-6 w-11",
    lg: "w-[52px] h-[32px]",
  },
  thumbSizeClasses: {
    sm: "h-4 w-4",
    default: "h-5 w-5",
    lg: "h-6 w-6",
  },
  translateClasses: {
    sm: "translate-x-4",
    default: "translate-x-5",
    lg: "translate-x-5.5",
  },
  iconSizes: {
    sm: 12,
    default: 14,
    lg: 16,
  },
} as const;

const getSizeClasses = (size: SwitchSize): string =>
  SIZE_CONFIG.sizeClasses[size];
const getThumbSizeClasses = (size: SwitchSize): string =>
  SIZE_CONFIG.thumbSizeClasses[size];
const getTranslateClass = (size: SwitchSize): string =>
  SIZE_CONFIG.translateClasses[size];
const getIconSize = (size: SwitchSize): number => SIZE_CONFIG.iconSizes[size];

const VARIANT_CONFIG = {
  checkedStyles: {
    primary: "bg-orange border-orange dark:bg-orange dark:border-orange",
    "theme-filled": "bg-orange-100 border-orange-100 border-2",
    "theme-outline": "bg-orange-50 border-orange border-2",
    outline: "bg-transparent border-2 border-orange",
    filled: "bg-orange border-orange",
    ghost: "bg-gray-200 dark:bg-gray-200 border-none",
  },
  uncheckedStyles: {
    primary:
      "bg-gray-100 border-gray-100 dark:bg-gray-400 dark:border-gray-400",
    "theme-filled":
      "bg-gray-100 border-gray-100 dark:bg-gray dark:border-gray-400 border-2",
    "theme-outline": "bg-gray dark:border-gray-400 border-2",
    outline: "bg-transparent border-2 border-gray-200 dark:border-gray-600",
    filled: "bg-gray-100 border-gray-100 dark:bg-gray-400 dark:border-gray-400",
    ghost: "bg-gray-50 dark:bg-gray border-none",
  },
} as const;

const getVariantClasses = (
  variant: SwitchVariant,
  checked: boolean
): string => {
  return checked
    ? VARIANT_CONFIG.checkedStyles[variant]
    : VARIANT_CONFIG.uncheckedStyles[variant];
};

const getThumbColor = (variant: SwitchVariant, checked: boolean): string => {
  if (checked) {
    return variant === "theme-outline" || variant === "outline"
      ? "bg-orange"
      : variant === "ghost"
      ? "bg-gray-100 dark:bg-gray-300"
      : "bg-white";
  }
  return variant === "ghost"
    ? "bg-white dark:bg-gray-400"
    : variant === "outline"
    ? "shadow-lg"
    : "bg-white dark:bg-white";
};

const getIconClasses = (variant: SwitchVariant, checked: boolean): string => {
  if (checked) {
    return variant === "theme-outline" || variant === "outline"
      ? "text-white"
      : variant === "ghost"
      ? "text-white"
      : "text-yellow-500";
  }
  return variant === "ghost"
    ? "text-gray-300 dark:text-gray-100"
    : "text-gray-300 dark:text-gray-400";
};

const getThumbClasses = (
  variant: SwitchVariant,
  size: SwitchSize,
  checked: boolean
): string => {
  const baseThumb = `absolute rounded-full transition-all duration-200 ease-in-out flex items-center justify-center shadow-lg ${getThumbSizeClasses(
    size
  )}`;
  const thumbColor = getThumbColor(variant, checked);

  if (checked) {
    const translateClass =
      variant === "ghost" ? "translate-x-6" : getTranslateClass(size);
    return `${baseThumb} ${translateClass} ${thumbColor}`;
  }

  const translateClass =
    variant === "ghost" ? "translate-x-1" : "translate-x-0.5";
  return `${baseThumb} ${translateClass} ${thumbColor}`;
};

const getTextClasses = (_checked: boolean): string => {
  return "text-orange";
};

const handleSwitchClick = (
  checked: boolean,
  disabled: boolean,
  onCheckedChange?: (checked: boolean) => void
): void => {
  if (!disabled) {
    onCheckedChange?.(!checked);
  }
};

type IconRenderProps = {
  showIcons: boolean;
  checked: boolean;
  onIcon: LucideIcon;
  offIcon: LucideIcon;
  iconSize: number;
  iconClasses: string;
};

const renderIcon = ({
  showIcons,
  checked,
  onIcon,
  offIcon,
  iconSize,
  iconClasses,
}: IconRenderProps): React.ReactNode => {
  if (!showIcons) return null;

  const IconComponent = checked ? onIcon : offIcon;
  return <IconComponent size={iconSize} className={iconClasses} />;
};

type TextRenderProps = {
  showText: boolean;
  checked: boolean;
  onText: string;
  offText: string;
  textClasses: string;
};

const renderText = ({
  showText,
  checked,
  onText,
  offText,
  textClasses,
}: TextRenderProps): React.ReactNode => {
  if (!showText) return null;

  return (
    <span className={`font-medium ${textClasses}`}>
      {checked ? onText : offText}
    </span>
  );
};

const useSwitchStyles = (
  variant: SwitchVariant,
  size: SwitchSize,
  checked: boolean,
  className: string
) => {
  const baseClasses =
    "relative inline-flex items-center rounded-full transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border";

  return {
    switchClasses: `${baseClasses} ${getSizeClasses(size)} ${getVariantClasses(
      variant,
      checked
    )} ${className}`,
    thumbClasses: getThumbClasses(variant, size, checked),
    textClasses: getTextClasses(checked),
    iconClasses: getIconClasses(variant, checked),
    iconSize: getIconSize(size),
  };
};

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked = false,
      onCheckedChange,
      disabled = false,
      variant = "primary",
      size = "default",
      showIcons = false,
      showText = false,
      onText = "ON",
      offText = "OFF",
      onIcon: OnIcon = Check,
      offIcon: OffIcon = X,
      className = "",
      ...props
    },
    ref
  ) => {
    const styles = useSwitchStyles(variant, size, checked, className);

    const handleClick = (): void => {
      handleSwitchClick(checked, disabled, onCheckedChange);
    };

    return (
      <button
        ref={ref}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={handleClick}
        className={styles.switchClasses}
        {...props}
      >
        <div className={styles.thumbClasses}>
          {renderIcon({
            showIcons,
            checked,
            onIcon: OnIcon,
            offIcon: OffIcon,
            iconSize: styles.iconSize,
            iconClasses: styles.iconClasses,
          })}
          {renderText({
            showText,
            checked,
            onText,
            offText,
            textClasses: `${styles.textClasses} font-exo2-bold ${
              size === "lg" ? "text-xxs" : "text-[8px]"
            }`,
          })}
        </div>
      </button>
    );
  }
);

Switch.displayName = "Switch";
