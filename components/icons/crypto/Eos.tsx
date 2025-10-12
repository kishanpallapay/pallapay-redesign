import React from "react";
import { IconProps } from ".";

const Eos: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3077)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path d="M6.80406 7.25639L10.0003 17.292L5.25781 14.3208L6.80406 7.25639L10.0003 2.89014V5.95264L5.25781 14.3208H14.7472L10.0047 5.95264V2.89014L13.2003 7.25639L14.7472 14.3208L10.0047 17.292L13.2003 7.25639" stroke="white" stroke-width="0.64" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_17_3077">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Eos
;

