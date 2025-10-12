import React from "react";
import { IconProps } from ".";

const Btcd: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3458)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FF6600" />
        <path d="M10.6737 12.0975C13.8487 11.1181 12.7156 7.82625 10.6737 7.70125C11.1925 7.70125 11.6163 6.21562 11.6163 4.375C16.6012 4.72937 18.9431 12.9444 11.4663 15.5144C11.5144 14.8475 11.2413 12.9863 10.6744 12.0975H10.6737ZM3.75 11.125V7.70813H3.75625C5.55938 7.70125 7.01375 6.20813 7.0075 4.38188H10.4825C10.4831 8.11063 7.47187 11.125 3.75 11.125ZM8.30437 10.5062C10.3669 12.2012 10.4831 15.0556 10.4831 15.625H7.0075C7.0075 13.7362 5.77813 12.2081 4.25563 12.2081C6.83687 11.7919 7.3625 11.3544 8.30437 10.5069V10.5062Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3458">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Btcd;

