import React from "react";
import { IconProps } from ".";

const Icn: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2823)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#4C6F8C" />
        <path d="M13.0206 4.375H14.6875V15.625H13.0206V4.375ZM10.2431 10H11.91V15.625H10.2431V10ZM7.465 7.1875H9.13188V15.625H7.465V7.1875ZM4.6875 12.8125H6.35437V15.625H4.6875V12.8125Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2823">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Icn;

