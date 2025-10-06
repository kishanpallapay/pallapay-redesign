import React from "react";
import { IconProps } from ".";

const Etc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3061)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#328332" />
        <path d="M9.99312 10.3456L5.7925 9.985L9.9925 7.60875V10.3456H9.99312ZM9.99312 13.1331V17.4706C8.5325 15.1969 6.9225 12.6944 5.625 10.6687C7.15625 11.5312 8.755 12.4331 9.99312 13.1337V13.1331ZM9.99312 6.84062L5.625 9.27813L9.99312 2.5V6.84062Z" fill="white" />
        <path d="M14.1938 9.985L9.99316 10.3456V7.60875L14.1932 9.985H14.1938ZM9.99316 13.1337C11.2307 12.4338 12.8288 11.5312 14.3607 10.6687C13.0632 12.695 11.4532 15.1975 9.99316 17.47V13.1337ZM9.99316 6.84062V2.5L14.3607 9.27813L9.99316 6.84062Z" fill="white" fill-opacity="0.601" />
        <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M9.99316 10.3455L14.1932 9.98486L9.99316 12.3442V10.3455Z" fill="white" />
        <path opacity="0.603" fill-rule="evenodd" clip-rule="evenodd" d="M9.99262 10.3455L5.79199 9.98486L9.99262 12.3442V10.3455Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3061">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Etc
;

