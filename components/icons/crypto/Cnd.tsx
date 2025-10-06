import React from "react";
import { IconProps } from ".";

const Cnd: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3348)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#383939" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1706 7.17438L13.8375 6.7925L14.4831 5.72937L13.8456 4.68375L13.0294 4.12L11.3525 3.75L10.3181 4.33313L8.66313 4.03812L6.39063 5.6125L6.21375 7.45125L5.24938 7.85375L5.36062 9.55937L4.6875 10.0956L5.36 12.0156L5.46125 12.2169L6.1725 14.1937L7.63438 14.7113L8.71813 15.8138L9.96438 16.25L10.5281 16.0875L11.4225 15.9844L12.7338 15.6088L14.6875 14.5056L14.1762 12.4856L13.1925 12.0981L12.7025 12.6587L11.3244 12.9975L9.32 12.68L8.67312 11.9319L8.89813 11.2L7.95062 9.70062L8.7475 8.72813L8.8325 7.075L9.97375 6.42L10.7562 6.1075L11.8187 6.29938L12.1706 7.17438Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3348">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Cnd;

