import React from "react";
import { IconProps } from ".";

const Bat: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3570)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FF5000" />
        <path d="M3.75 14.6875L10.0319 4.0625L16.25 14.6731L3.75 14.6875ZM10.0169 8.3625L7.44937 12.6038H12.5962L10.0169 8.3625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3570">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Bat;
