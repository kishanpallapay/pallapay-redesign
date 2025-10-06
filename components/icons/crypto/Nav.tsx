import React from "react";
import { IconProps } from ".";

const Nav: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2520)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#7D59B5" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.325 13.75H10.3275L7.95375 9.37187L6.12313 13.75H3.125L6.26125 6.25H9.25937L11.725 10.7975L13.8769 6.25H16.875L13.325 13.75Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2520">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Nav;

