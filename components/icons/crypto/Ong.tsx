import React from "react";
import { IconProps } from ".";

const Ong: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2395)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96438 16.4443C13.5519 16.4443 16.2694 14.0405 16.8331 10.8955H13.7725C13.315 12.5655 11.895 13.788 10.0006 13.788C8.12 13.788 6.68187 12.5568 6.205 10.8955H3.125C3.66813 14.0518 6.3625 16.4443 9.96438 16.4443Z" fill="white" />
        <path d="M9.98172 6.28375C10.854 6.28375 11.5611 5.57664 11.5611 4.70437C11.5611 3.83211 10.854 3.125 9.98172 3.125C9.10945 3.125 8.40234 3.83211 8.40234 4.70437C8.40234 5.57664 9.10945 6.28375 9.98172 6.28375Z" fill="white" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03418 10.8956V10.8644C6.03418 8.61877 7.64293 6.78564 9.9623 6.78564C12.2823 6.78564 13.9248 8.65002 13.9286 10.8956H6.03418Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2395">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Ong;

