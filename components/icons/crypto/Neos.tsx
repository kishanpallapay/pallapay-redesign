import React from "react";
import { IconProps } from ".";

const Neos: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2500)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#E5F300" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5625 5.84875L11.6519 8.9275V10.8631L8.08062 8.7175V16.25H6.5625V5.84875ZM13.4375 14.1512L8.34813 11.0725V9.1375L11.9194 11.2831V3.75H13.4375V14.1512Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2500">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Neos;

