import React from "react";
import { IconProps } from ".";

const Band: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3574)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#516AFF" />
        <path d="M11.4287 7.79938L12.8037 8.585V4.65625L10.0538 3.28125L5.78125 5.6875V14.2319L10.0538 16.6875L14.2769 14.1831V9.96L10.2006 7.50437L8.82562 8.19188L12.9019 10.5981L12.9506 13.4956L10.0538 15.1163L7.10688 13.4462V6.375L10.0538 4.75437L11.4287 5.49125V7.79938Z" fill="white" />
        <path d="M9.90582 10.1562L10.8389 9.66494L11.8702 10.3037L8.8252 12.0224V8.48682L9.90582 9.12494" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3574">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Band;
