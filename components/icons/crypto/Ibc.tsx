import React from "react";
import { IconProps } from ".";

const Ibc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2698)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#006149" />
        <path d="M15.1098 10.7403L14.6117 10.6159L14.763 10.0096L16.3161 10.3978L15.9286 11.9509L15.3217 11.7996L15.4561 11.2609L9.91109 14.694L3.76172 11.6215V9.27652L10.1517 5.28027L16.0111 8.1384V9.1034L9.91172 12.8928L5.38234 10.6471L5.65984 10.0871L9.87797 12.1784L15.3861 8.7559V8.52902L10.1892 5.99402L4.38734 9.62277V11.2353L9.87922 13.979L15.1098 10.7403Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2698">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Ibc;

