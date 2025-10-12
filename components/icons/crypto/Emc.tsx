import React from "react";
import { IconProps } from ".";

const Emc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3106)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#B49FFC" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 5V7H9V9H5V11H11V7H13V13H5V15H15V5H5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3106">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Emc;

