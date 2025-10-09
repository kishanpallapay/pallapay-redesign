import React from "react";
import { IconProps } from ".";

const Neo: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2504)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#58BF00" />
        <path d="M15.625 14.1125L11.2563 12.0763V7.56375L15.625 6.01438V14.1125ZM9.26437 16.25L5 14.2631V6.22375L9.26437 8.21125V16.25ZM15.5206 5.72312L15.45 5.74812L11.2563 7.23625L11.1512 7.27375L9.37437 7.90375L5.16813 5.94375L11.1512 3.82125L11.2038 3.8025L11.3144 3.76312L11.3531 3.75L15.5594 5.71L15.52 5.72312H15.5206Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2504">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Neo;

