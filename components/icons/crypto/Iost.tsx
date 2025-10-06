import React from "react";
import { IconProps } from ".";

const Iost: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2786)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1C1C1C" />
        <path d="M15.3125 6.875V13.125L10 16.25L4.6875 13.125V6.875L10 3.75L15.3125 6.875ZM9.8325 10.2544L9.33875 10.5463L10.2612 11.085L10.7519 10.7956L12.0638 11.5675L10.1069 12.7175L6.0475 10.3513L6.03063 11.5031L10.1094 13.8719L14.0281 11.5675L11.7319 10.2163L12.1944 9.94313L11.2719 9.40438L10.8125 9.67562L10.1688 9.29688L10.7319 8.96375L9.80937 8.42438L9.24875 8.75562L8.1525 8.11063L10.1087 6.96L12.8138 8.54063L13.805 7.95438L10.1069 5.80562L6.18813 8.11063L8.26875 9.335L7.87625 9.56625L8.79875 10.1056L9.18813 9.87562L9.8325 10.2544Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2786">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>




  );
};

export default Iost;

