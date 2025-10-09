import React from "react";
import { IconProps } from ".";

const Ella: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3110)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#396A28" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2956 8.2575L10 6.9625L8.69563 8.26625L7.34312 6.91375L10 3.125L12.675 6.87813L11.2956 8.2575ZM8.24375 8.71875L6.9625 10L8.2575 11.2956L6.91 12.6431L3.125 10L6.86875 7.34375L8.24375 8.71875ZM11.7338 11.3044L13.0375 10L11.7475 8.71L13.1388 7.31875L16.875 10L13.0975 12.6681L11.7338 11.3044ZM8.71 11.7481L10 13.0375L11.2812 11.7562L12.645 13.1206L10 16.875L7.3725 13.085L8.71 11.7481ZM10 7.82938L12.17 10L10 12.17L7.83 10L10 7.82938Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3110">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Ella;

