import React from "react";
import { IconProps } from ".";

const Ppc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2301)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#3CB054" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.625 4.6875C13.1831 4.96687 16.0975 9.50375 14.6344 13.5519C14.22 14.6788 13.7794 15.2956 12.8531 15.9375C12.8906 15.775 12.9294 15.6125 12.9594 15.4456C13.5069 12.2875 12.4688 8.48688 7.38937 6.3875C11.4306 8.7925 13.0612 13.0719 11.1769 15.8344C7.96875 16.3387 5.625 13.5994 5.625 10.4431V4.6875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2301">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Ppc;

