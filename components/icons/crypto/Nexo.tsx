import React from "react";
import { IconProps } from ".";

const Nexo: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2484)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1A4199" />
        <path opacity="0.7" d="M6.6725 4.45314L13.38 8.32251V12.2719L3.125 6.34939L6.41563 4.45314C6.45553 4.4301 6.5008 4.41797 6.54688 4.41797C6.59295 4.41797 6.63822 4.4301 6.67813 4.45314" fill="white" />
        <path opacity="0.9" d="M13.3798 4.375L9.96289 6.35L13.3798 8.3225V4.375Z" fill="white" />
        <path d="M13.3799 4.375L16.6699 6.2725C16.7113 6.2949 16.7458 6.32801 16.77 6.36836C16.7942 6.40872 16.8071 6.45483 16.8074 6.50187V14.245L13.3799 12.2719V4.375Z" fill="white" />
        <path opacity="0.9" d="M16.801 14.245L13.511 16.1406C13.4707 16.1625 13.4256 16.174 13.3798 16.174C13.3339 16.174 13.2888 16.1625 13.2485 16.1406L6.54102 12.2719V8.31689L16.801 14.245Z" fill="white" />
        <path opacity="0.6" d="M3.125 6.3501V14.092C3.12515 14.1391 3.138 14.1854 3.16219 14.2258C3.18639 14.2663 3.22104 14.2995 3.2625 14.322L6.55312 16.2195V8.31697L3.125 6.3501Z" fill="white" />
        <path opacity="0.7" d="M6.54785 16.2188L9.96348 14.2451L6.54785 12.272V16.2188Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2484">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Nexo;

