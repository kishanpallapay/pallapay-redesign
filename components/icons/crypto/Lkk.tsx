import React from "react";
import { IconProps } from ".";

const Lkk: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2678)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#9D01EB" />
        <path d="M6.25313 16.25V13.965L10 10.15L13.735 13.9656V16.25L10 12.4337L6.25313 16.25ZM3.125 8.52063H8.41813L10 10.15H4.70688L3.125 8.52063ZM16.875 8.52063L15.2931 10.1494H10V3.125L11.5819 4.74125V8.52063H16.875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2678">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Lkk;

