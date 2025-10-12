import React from "react";
import { IconProps } from ".";

const Block: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3509)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#101341" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88891 4.375H13.2814L16.5627 10L13.2814 15.625H6.83203L10.057 10L6.88828 4.375H6.88891ZM10.2827 6.35375L12.377 10L10.2833 13.6462H12.1508L14.2433 10L12.1495 6.35375H10.2833H10.2827Z" fill="white" />
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M7.57062 6.89129L5.75688 10L7.55437 13.0813L6.405 15.0869L3.4375 10L6.43062 4.86816L7.57062 6.89129Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3509">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Block;

