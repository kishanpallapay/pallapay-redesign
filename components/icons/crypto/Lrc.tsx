import React from "react";
import { IconProps } from ".";

const Lrc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2663)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#2AB6F6" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.75L15.625 11.5831L10 16.25L4.375 11.5831L10 3.75ZM9.26625 7.91687L6.82063 11.25L9.26625 13.25V7.91687ZM10.7337 7.91687V13.25L13.1794 11.25L10.7337 7.91687Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2663">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Lrc;

