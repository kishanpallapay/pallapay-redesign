import React from "react";
import { IconProps } from ".";

const Lend: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2694)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#0FA9C9" />
        <path d="M10.7169 12.7787L7.31062 16.25L6.33937 15.1844L8.7 12.7781L6.25 10.2825L7.29563 9.21625L10.7169 12.7787ZM12.7044 10.7844L13.75 9.71812L11.3 7.22125L13.6606 4.81562L12.6894 3.75L9.26813 7.22125L12.7044 10.7844ZM7.72937 8.805L11.1656 12.3675L12.2113 11.3019L8.775 7.8L7.72937 8.805Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2694">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Lend;

