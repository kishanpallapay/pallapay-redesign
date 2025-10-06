import React from "react";
import { IconProps } from ".";

const Nuls: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2450)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#82BD39" />
        <path d="M9.00187 12.1L10 13.415V16.25L6.25 14.5856V7.26188C6.25 7.15375 6.29812 7.05063 6.3825 6.97875L6.80938 6.61313C6.8505 6.57756 6.89848 6.55081 6.95035 6.53453C7.00222 6.51824 7.05688 6.51277 7.11095 6.51846C7.16502 6.52414 7.21735 6.54085 7.2647 6.56756C7.31205 6.59427 7.35342 6.63041 7.38625 6.67375L10.8019 11.1512L12.6888 12.305V6.13L11.0213 5.29813L10.94 9.17063L10.0575 8L10.0175 3.75L13.75 5.48688V12.7769L12.9019 13.4756L10.2306 11.9837L7.26562 8.09438L7.225 14.0031L8.99063 14.9075L9.00187 12.1Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2450">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Nuls;

