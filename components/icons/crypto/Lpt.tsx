import React from "react";
import { IconProps } from ".";

const Lpt: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2667)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89062 14.6769H11.0831V16.8694H8.89062V14.6769ZM8.89062 5H11.0831V7.1925H8.89062V5ZM14.0575 5H16.25V7.1925H14.0575V5ZM3.75 5H5.9425V7.1925H3.75V5ZM11.4738 9.83875H13.6662V12.0312H11.4738V9.83875ZM6.30188 9.83875H8.49437V12.0312H6.30188V9.83875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2667">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Lpt;

