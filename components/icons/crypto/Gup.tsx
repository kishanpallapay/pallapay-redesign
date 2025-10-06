import React from "react";
import { IconProps } from ".";

const Gup: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2895)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#37DCD8" />
        <path d="M9.99381 7.92438L8.25381 6.17188C8.77583 5.32293 9.35949 4.51346 10.0001 3.75C10.6396 4.51019 11.2224 5.31631 11.7438 6.16188L9.99381 7.92438ZM13.5676 9.68062C14.0588 11.0569 14.7794 12.4331 14.0926 13.7544C13.6555 14.5879 12.9778 15.2706 12.1476 15.7137C9.88569 16.9137 7.08569 16.0325 5.89444 13.7544C5.20069 12.4331 6.00881 10.9481 6.50069 9.5725C6.95131 8.55813 7.40694 7.62312 7.92444 6.72437L9.99319 8.80813L12.0738 6.71313C12.6207 7.65938 13.0932 8.63312 13.5676 9.68125V9.68062Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2895">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Gup;

