import React from "react";
import { IconProps } from ".";

const Neu: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2494)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#B3BA00" />
        <path d="M8.20625 6.665L8.125 6.71438L11.875 12.5V6.70937L10.0025 5.625L8.20625 6.665ZM8.125 13.2281L10.085 14.375L11.875 13.33L8.125 7.5V13.2281ZM6.25 7.7225V12.2775L7.5 13.125V6.875L6.25 7.7225ZM12.5 13.125L13.75 12.2581V7.74188L12.5 6.875V13.125Z" fill="white" />
        <path d="M10 2.5C5.85938 2.5 2.5 5.85938 2.5 10C2.5 14.1406 5.85938 17.5 10 17.5C14.1406 17.5 17.5 14.1406 17.5 10C17.5 5.85938 14.1406 2.5 10 2.5ZM9.96875 14.7625L5.92125 12.3625V7.57L9.96938 5.17625L14.0169 7.57V12.3631L9.96938 14.7619L9.96875 14.7625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2494">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Neu;

