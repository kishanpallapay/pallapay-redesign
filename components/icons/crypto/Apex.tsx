import React from "react";
import { IconProps } from ".";

const Apex: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3661)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1F4C9F" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 12.0312L10 4.0625L16.25 12.0312V14.6875L10 6.71875L3.75 14.6875V12.0312ZM10.3125 12.8125C9.8981 12.8125 9.50067 12.6479 9.20765 12.3549C8.91462 12.0618 8.75 11.6644 8.75 11.25C8.75 10.8356 8.91462 10.4382 9.20765 10.1451C9.50067 9.85212 9.8981 9.6875 10.3125 9.6875C10.7269 9.6875 11.1243 9.85212 11.4174 10.1451C11.7104 10.4382 11.875 10.8356 11.875 11.25C11.875 11.6644 11.7104 12.0618 11.4174 12.3549C11.1243 12.6479 10.7269 12.8125 10.3125 12.8125Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3661">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>




  );
};

export default Apex;
