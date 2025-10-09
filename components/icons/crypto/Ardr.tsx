import React from "react";
import { IconProps } from ".";

const Ardr: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3653)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#3C87C7" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.92688 10.7438L11.0325 12.1888L7.8125 14.375L9.92688 10.7438ZM10 3.75L11.7044 6.54625L7.15937 14.375H3.75L10 3.75ZM10 9.90125L12.2725 8.22375L16.25 14.375H13.4094L10 9.90125Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3653">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Ardr;
