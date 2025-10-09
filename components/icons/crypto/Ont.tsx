import React from "react";
import { IconProps } from ".";

const Ont: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2391)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#32A4BE" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.625 15.1357L6.23563 5.95065C7.27557 4.93615 8.67218 4.37037 10.125 4.37503C13.1625 4.37503 15.625 6.78378 15.625 9.75565V15.1357ZM4.375 4.8644L13.7644 14.0494C12.7244 15.0639 11.3278 15.6297 9.875 15.625C6.8375 15.625 4.375 13.2163 4.375 10.2444V4.8644Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2391">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Ont;

