import React from "react";
import { IconProps } from ".";

const Elec: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3126)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FF9900" />
        <path d="M6.72461 17.2421L14.6409 8.92773H9.84961L6.72461 17.2421Z" fill="white" />
        <path d="M5 11.419H9.79125L14.6413 8.92773H9.85L5 11.419Z" fill="white" />
        <path d="M12.1938 2.5L5 11.4188H9.79125L12.1938 2.5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3126">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default Elec;

