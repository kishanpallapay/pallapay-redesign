import React from "react";
import { IconProps } from ".";

const Kda: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2726)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#EC008C" />
        <path d="M10.0002 19.3002C15.1364 19.3002 19.3002 15.1364 19.3002 10.0002C19.3002 4.86395 15.1364 0.700195 10.0002 0.700195C4.86395 0.700195 0.700195 4.86395 0.700195 10.0002C0.700195 15.1364 4.86395 19.3002 10.0002 19.3002Z" fill="#EC008C" />
        <path d="M11.6912 3.90918L7.49121 8.32736V12.0001L15.2639 3.90918H11.6912Z" fill="url(#paint0_linear_17_2726)" />
        <path d="M8.55469 10.891L12.0274 16.091H15.5274L10.5729 8.79102L8.55469 10.891Z" fill="url(#paint1_linear_17_2726)" />
        <path d="M7.49084 3.90918H4.47266V16.0819H7.49084V3.90918Z" fill="white" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_17_2726" x1="9.76823" y1="7.95463" x2="5.28647" y2="12.0001" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear_17_2726" x1="12.0411" y1="13.8095" x2="9.02111" y2="8.79102" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <clipPath id="clip0_17_2726">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Kda;

