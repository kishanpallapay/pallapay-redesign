"use client";

import React from "react";

interface OrDividerProps {
    text?: string; 
    className?: string; 
    lineColor?: string; 
    textColor?: string; 
    dotColor?: string; 
}

export const OrDivider: React.FC<OrDividerProps> = ({
    text = "or",
    className = "",
    lineColor = "bg-gray-100 dark:bg-gray-500",
    textColor = "text-primary",
    dotColor = "bg-gray-100 dark:bg-gray-500",
}) => {
    return (
        <div className={`flex items-center my-4 ${className}`}>
            {/* Left Line */}
            <span className={`flex-1 h-0.5 ${lineColor} relative rounded-full`}>
                <span
                    className={`absolute left-[-4.5px] top-1/2 -translate-y-1/2 w-2 h-2 ${dotColor} rounded-full`}
                ></span>
            </span>

            {/* Center Text */}
            <span className={`mx-[9px] text-sm ${textColor}`}>{text}</span>

            {/* Right Line */}
            <span className={`flex-1 h-0.5 ${lineColor} relative rounded-full`}>
                <span
                    className={`absolute right-[-4.5px] top-1/2 -translate-y-1/2 w-2 h-2 ${dotColor} rounded-full`}
                ></span>
            </span>
        </div>
    );
};
