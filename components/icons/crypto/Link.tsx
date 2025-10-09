import React from "react";
import { IconProps } from ".";

const Link: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2682)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#2A5ADA" />
        <path d="M10 3.75L8.87563 4.40937L5.8125 6.21562L4.6875 6.875V13.125L5.81187 13.7844L8.90375 15.5906L10.0281 16.25L11.1525 15.5906L14.1881 13.7844L15.3125 13.125V6.875L14.1881 6.21562L11.1244 4.40937L10 3.75ZM6.93625 11.8062V8.19375L10 6.3875L13.0638 8.19375V11.8062L10 13.6125L6.93625 11.8062Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2682">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Link;

