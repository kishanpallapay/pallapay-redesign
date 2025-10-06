import React from "react";
import { IconProps } from ".";

const Pivx: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2333)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#5E4778" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5625 7.65063H10.4081V8.435H6.5625V7.65063ZM14.0625 8.01938C14.0625 9.87813 12.7438 11.0787 10.92 11.0787H8.39375V15H7.39375V10.1919H10.7844C12.1437 10.1919 13.0312 9.38438 13.0312 8.01938C13.0312 6.67063 12.1438 5.88625 10.8 5.88625H9.745L7.21812 5.89437V5H10.9119C12.7431 5 14.0619 6.16063 14.0619 8.01938H14.0625Z" fill="white" stroke="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2333">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Pivx;

