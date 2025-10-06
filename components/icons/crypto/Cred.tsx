import React from "react";
import { IconProps } from ".";

const Cred: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3324)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#37E8A3" />
        <path d="M7.585 9.97875L9.76125 12.1619L15.4675 6.4175L16.25 7.21125L9.76125 13.75L6.80188 10.7731L7.585 9.97875ZM8.90375 9.785L12.415 6.25L13.1981 7.04375L9.6875 10.5813L8.90375 9.785ZM7.48125 12.8038L6.70875 13.5825L3.75 10.6062L4.53187 9.8125L7.48125 12.8038Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3324">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Cred;

