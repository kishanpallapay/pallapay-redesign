import React from "react";
import { IconProps } from ".";

const Ela: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3133)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#3FBADF" />
        <path d="M6.875 13.8245L10 12.062V15.5839L6.875 13.8245ZM6.875 8.19951L10 6.43701V9.95889L6.875 8.19951Z" fill="white" fill-opacity="0.4" />
        <path d="M16.25 12.019L13.125 13.8228V10.269L16.25 12.019ZM16.25 6.39404L13.125 8.19779V4.64404L16.25 6.39404Z" fill="white" fill-opacity="0.7" />
        <path d="M6.875 13.8229V10.271L10 12.0647L6.875 13.8229ZM6.875 8.19787V4.646L10 6.43975L6.875 8.19787Z" fill="white" fill-opacity="0.8" />
        <path d="M13.125 13.8228L10 12.0653L13.125 10.269V13.8228ZM13.125 8.19779L10 6.44029L13.125 4.64404V8.19779Z" fill="white" />
        <path d="M13.125 13.8229L10 15.5842V12.0654L13.125 13.8229ZM13.125 8.19793L10 9.95918V6.44043L13.125 8.19793Z" fill="white" fill-opacity="0.6" />
        <path d="M6.875 10.271V13.8229L3.75 12.0197L6.875 10.271ZM6.875 4.646V8.19787L3.75 6.39475L6.875 4.646Z" fill="white" fill-opacity="0.5" />
      </g>
      <defs>
        <clipPath id="clip0_17_3133">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default Ela;

