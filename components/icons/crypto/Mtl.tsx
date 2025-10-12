import React from "react";
import { IconProps } from ".";

const Mtl: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2540)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1E1F25" />
        <path d="M5 5.625H5.625V14.375H5V5.625ZM8.125 7.5H8.75V13.125H8.125V7.5ZM11.25 8.75H11.875V11.875H11.25V8.75ZM14.375 5.625H15V14.375H14.375V5.625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2540">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Mtl;

