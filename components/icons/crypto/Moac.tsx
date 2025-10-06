import React from "react";
import { IconProps } from ".";

const Moac: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2568)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path d="M9.87019 9.87L5.88957 5.88938L5.80332 5.75938L4.3877 4.375V15.3219H5.8152V7.75L8.8877 10.8656L9.8827 11.8606L10.8777 10.8656L13.9502 7.75V15.3219H15.3777V4.375L13.9502 5.75938L9.87019 9.87Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2568">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Moac;

