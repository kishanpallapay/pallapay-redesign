import React from "react";
import { IconProps } from ".";

const Huc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2831)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FFC018" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.1875 9.0625H12.8125V6.25H14.6875V16.25H12.8125V10.9375H7.1875V13.75H5.3125V3.75H7.1875V9.0625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2831">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Huc;

