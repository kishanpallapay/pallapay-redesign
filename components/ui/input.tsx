import React, { useState, forwardRef } from "react";
import { AlertCircle, Check, CheckCircle, CheckCircle2, X } from "lucide-react";

// Type definitions
type InputState = "default" | "filled";

interface StateClasses {
  container: string;
  input: string;
  label: string;
  icon: string;
  helper: string;
}

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  className?: string;
  type?: string;
  icon?: React.ComponentType<{ className?: string }>;
  state?: InputState;
  label?: string;
  placeholder?: string;
  helperText?: string;
  successMessage?: string;
  errorMessage?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  variant?: "default" | "filled";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      type = "text",
      icon: IconComponent,
      label = "Username",
      placeholder = "Type your username",
      helperText = "",
      successMessage = "",
      errorMessage = "",
      value = "",
      onChange = () => {},
      onFocus,
      onBlur,
      variant = "default",
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const getVariantClass = (variant: string) => {
      switch (variant) {
        case "default":
          return {
            fieldset:
              "border border-gray-200 focus-within:border-2 focus-within:border-gray-500",
            input: "text-gray-900 dark:text-gray-100",
            legend:
              "text-gray-400 group-focus-within:text-gray-500 dark:text-gray-200 dark:group-focus-within:text-gray-400",
            icon: "text-gray-400",
          };
        default:
          return {
            fieldset:
              "border border-gray-200 focus-within:border-2 focus-within:border-gray-500",
            input: "text-gray-900 dark:text-gray-100",
            legend:
              "text-gray-400 group-focus-within:text-gray-500 dark:text-gray-200 dark:group-focus-within:text-gray-400",
            icon: "text-gray-400",
          };
      }
    };

    const variantClass = getVariantClass(variant);
    const hasValue: boolean = Boolean(value && value.length > 0);
    const isLabelFloating: boolean = isFocused || hasValue;

    const renderLeftIcon = (): React.ReactNode => {
      if (IconComponent) {
        return <IconComponent className={`w-4 h-4 ${variantClass?.icon}`} />;
      }
      return null;
    };

    const getHelperText = (): string => {
      return helperText;
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const hasLeftIcon = !!renderLeftIcon();
    const hasRightIcon = errorMessage || successMessage;

    const renderRightIcon = (): React.ReactNode => {
      if (successMessage) {
        return (
          <CheckCircle2 className="w-4 h-4 text-success-500 dark:text-success-200" />
        );
      }
      if (errorMessage) {
        return (
          <AlertCircle className="w-4 h-4 text-error-500 dark:text-error-200" />
        );
      }
      return null;
    };

    // Determine border color based on state
    const getBorderClass = () => {
      if (errorMessage) {
        return "border-error-500 focus-within:border-error-500 dark:border-error-200";
      }
      if (successMessage) {
        return "border-success-500 focus-within:border-success-500 dark:border-success-200";
      }
      if (disabled) {
        return "border-gray-50 dark:border-gray-500";
      }
      return (
        variantClass?.fieldset ||
        "border-gray-200 focus-within:border-2 focus-within:border-gray-500"
      );
    };

    return (
      <div
        className={`w-full max-w-sm ${disabled ? "cursor-not-allowed" : ""}`}
      >
        <div className="group relative">
          {/* Fieldset for border */}
          <fieldset
            className={`
              relative rounded-md transition-all duration-200
              ${getBorderClass()}
              disabled:cursor-not-allowed
              ${isFocused ? "border-2" : "border"}
              ${disabled ? "bg-gray-50 dark:bg-gray-500" : "bg-transparent"}
            `}
          >
            {/* Legend - always present but with dynamic content */}
            <legend
              className={`
                ml-2 px-1 font-medium font-exo2-regular transition-all duration-200 ease-in-out
                ${
                  isLabelFloating
                    ? "text-xs opacity-100 scale-100"
                    : "text-xs opacity-0 scale-95 pointer-events-none"
                }
                ${variantClass?.legend}
                ${errorMessage ? "text-error-500 dark:text-error-200" : ""}
                ${
                  successMessage ? "text-success-500 dark:text-success-200" : ""
                }
                ${disabled ? "text-gray-100 dark:text-gray-400" : ""}
              `}
            >
              <span className="transition-all duration-200 text-transparent bg-transparent">
                {label}
              </span>
            </legend>

            <div className="relative">
              {/* Input */}
              <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={isLabelFloating ? placeholder : ""}
                disabled={disabled}
                className={`
                  w-full h-12 bg-transparent border-none outline-none text-md font-exo2-regular
                  transition-all duration-200
                  ${hasLeftIcon ? "pl-9" : "pl-3"}
                  ${hasRightIcon ? "pr-9" : "pr-3"}
                  ${variantClass?.input}
                  disabled:cursor-not-allowed disabled:text-gray-100 
                  dark:disabled:text-gray-400
                  ${className}
                `}
                {...props}
              />

              {/* Placeholder Label (positioned inside input when not floating) */}
              <label
                className={`
                  absolute font-exo2-regular pointer-events-none z-20
                  transition-all duration-200 ease-in-out origin-left
                  ${hasLeftIcon ? "left-9" : "left-3"}
                  ${
                    isLabelFloating
                      ? "top-0 -translate-y-1/2 left-3 text-xs opacity-0 scale-95"
                      : "top-1/2 -translate-y-1/2 text-md opacity-100 scale-100"
                  }
                  ${variantClass?.legend}
                  ${errorMessage ? "text-error-500 dark:text-error-200" : ""}
                  ${
                    successMessage
                      ? "text-success-500 dark:text-success-200"
                      : ""
                  }
                  ${disabled ? "text-gray-100 dark:text-gray-400" : ""}
                `}
              >
                {label}
              </label>

              {/* Left Icon */}
              {hasLeftIcon && (
                <div
                  className={`
                    absolute left-3 top-1/2 transform -translate-y-1/2 z-10
                    ${disabled ? "text-gray-300 dark:text-gray-400" : ""}
                  `}
                >
                  {renderLeftIcon()}
                </div>
              )}

              {/* Right Icon */}
              {hasRightIcon && (
                <div
                  className={`
                    absolute right-3 top-1/2 transform -translate-y-1/2 z-10
                    ${disabled ? "text-gray-300 dark:text-gray-400" : ""}
                  `}
                >
                  {renderRightIcon()}
                </div>
              )}
            </div>
          </fieldset>
        </div>

        {/* Helper Text */}
        {helperText && (
          <p
            className={`
              mt-1 text-xs font-exo2-regular
              ${errorMessage ? "text-error-500 dark:text-error-200" : ""}
              ${successMessage ? "text-success-500 dark:text-success-200" : ""}
              ${
                disabled
                  ? "text-gray-300 dark:text-gray-400"
                  : "text-gray-500 dark:text-gray-300"
              }
            `}
          >
            {getHelperText()}
          </p>
        )}

        {/* Error Message */}
        {errorMessage && (
          <p className="mt-1 text-xs font-exo2-regular text-error-500 dark:text-error-200">
            {errorMessage}
          </p>
        )}

        {/* Success Message */}
        {successMessage && (
          <p className="mt-1 text-xs font-exo2-regular text-success-500 dark:text-success-200">
            {successMessage}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
