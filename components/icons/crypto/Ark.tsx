import React from "react";
import { IconProps } from ".";

const Ark: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3643)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F70000" />
        <path d="M9.96687 8.34188L3.125 15.5562L9.9975 4.375L16.875 15.625L9.96687 8.34188ZM10.9594 11.2075H8.82062L9.92063 9.9975L10.9594 11.2181V11.2075ZM6.83438 13.1931V13.1781L8.0475 11.9362V11.9306L11.7475 11.915L12.9963 13.1931H6.835H6.83438Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3643">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Ark;
