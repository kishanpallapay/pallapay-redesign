import React from "react";
import { IconProps } from ".";

const Chain: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3382)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#00ACED" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 6.07129V8.61879L9.93438 12.1907L13.9469 9.86879V11.9407L16.1069 13.2144V6.07129L9.92875 9.64316L3.75 6.07129Z" fill="white" />
        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M9.92875 2.5L3.75 6.07125V13.2144L9.92875 16.7856L16.0894 13.2144L13.905 11.9406L9.92875 14.2381L5.935 11.9406V7.345L9.92875 5.0475L13.905 7.345L16.0894 6.07125L9.92875 2.5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3382">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Chain;

