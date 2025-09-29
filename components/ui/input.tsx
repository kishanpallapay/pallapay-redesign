import React, { useState, forwardRef } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Type definitions
type InputState = "default" | "filled";

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
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const hasValue: boolean = Boolean(value && value.length > 0);
    const isLabelFloating: boolean = isFocused || hasValue;

    const renderLeftIcon = (): React.ReactNode => {
      if (IconComponent) {
        return (
          <IconComponent
            className={`w-4 h-4 text-gray-400 dark:text-gray-200 group-focus:text-black dark:group-focus:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-200 ${
              isLabelFloating || isFocused ? "text-black dark:text-white" : ""
            }`}
          />
        );
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
        return "border-gray-100 dark:border-gray-400";
      }
      return "border-gray-200  dark:focus-within:border-gray-100 focus-within:border-gray";
    };

    return (
      <div
        className={`w-full max-w-sm ${disabled ? "cursor-not-allowed" : ""}`}
      >
        <div className="group relative">
          {/* Fieldset for border */}
          <fieldset
            className={`
              relative rounded-md h-14 transition-all duration-200
              ${getBorderClass()}
              disabled:cursor-not-allowed
              ${isFocused || isLabelFloating ? "border-2" : "border"}
              ${disabled ? "bg-gray-50 dark:bg-gray-500" : "bg-transparent"}
              ${errorMessage ? "!bg-error-50 dark:!bg-error-600" : ""}
              ${successMessage ? "!bg-success-50 dark:!bg-success-600" : ""}
            `}
          >
            {/* Legend - always present but with dynamic content */}
            <legend
              className={`
                ml-2 px-1 font-medium font-exo2-regular transition-all duration-200 ease-in-out
                ${
                  isLabelFloating
                    ? "text-xs opacity-100 scale-100"
                    : "text-xs opacity-0 scale-95 !w-0 !m-0 !p-0 pointer-events-none"
                }
                text-gray-400 group-focus-within:text-gray-500 dark:text-gray-200 dark:group-focus-within:text-gray-400
                ${errorMessage ? "text-error-500 dark:text-error-200" : ""}
                ${
                  successMessage ? "text-success-500 dark:text-success-200" : ""
                }
                ${disabled ? "text-gray-100 dark:text-gray-400" : ""}
              `}
            >
              <span className=" text-transparent bg-transparent">{label}</span>
            </legend>

            <div className="relative">
              {/* Input */}
              <input
                ref={ref}
                type={type}
                value={value}
                placeholder={isLabelFloating ? placeholder : ""}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={disabled}
                className={`
                  w-full h-10 bg-transparent border-none outline-none text-md text-gray-500 dark:text-white font-exo2-regular
                  transition-all duration-200
                  ${hasLeftIcon ? "pl-9" : "pl-3"}
                  ${hasRightIcon ? "pr-9" : "pr-3"}
                  text-gray-900 dark:text-gray-100
                  disabled:cursor-not-allowed disabled:text-gray-100 
                  dark:disabled:text-gray-400 placeholder:text-gray-200 dark:placeholder:text-gray-400 pb-4
                  ${className}
                `}
                {...props}
              />

              {/* Placeholder Label (positioned inside input when not floating) */}
              <label
                className={`
                  absolute font-exo2-regular group-hover:text-black dark:group-hover:text-white pointer-events-none z-20
                  transition-all duration-200 ease-in-out origin-left
                  ${hasLeftIcon ? "left-9" : "left-3"}
                  ${
                    isLabelFloating
                      ? "-top-5 !left-3.5 text-xs scale-95"
                      : "top-0 text-md left-5  scale-100"
                  }
                   group-focus-within:text-gray-500 dark:text-gray-200 dark:group-focus-within:text-gray-400
                  ${errorMessage ? "!text-error-500 dark:!text-error-200" : ""}
                  ${
                    successMessage
                      ? "!text-success-500 dark:!text-success-200"
                      : ""
                  }
                  
                  ${disabled ? "text-gray-200 dark:text-gray-300" : ""}
                  ${
                    isFocused || isLabelFloating
                      ? "text-black dark:text-white"
                      : "text-gray-400/*  */"
                  }
                `}
              >
                {label}
              </label>

              {/* Left Icon */}
              {hasLeftIcon && (
                <div
                  className={`
                    absolute left-3 top-1 z-10 group-focus-within:text-black
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
                    absolute right-3 top-1 z-10
                    ${disabled ? "text-gray-200 dark:text-gray-300" : ""}
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
              text-gray-300"
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
