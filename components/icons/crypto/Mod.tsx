import React from "react";
import { IconProps } from ".";

const Mod: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2562)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#09547D" />
        <path opacity="0.5" d="M14.3659 13.1292V5.0498L10.4209 9.08043L14.3659 13.1292Z" fill="white" />
        <path d="M5.625 4.375L5.815 4.57L11.1069 9.99188L5.625 15.6156V4.375Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2562">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Mod;

