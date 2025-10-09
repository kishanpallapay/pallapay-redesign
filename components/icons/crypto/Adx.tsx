import React from "react";
import { IconProps } from ".";

const Adx: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3717)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1B75BC" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.24187 5.37625L10 8.255L12.6906 5.37625L14.375 7.1L11.6275 10L14.375 12.8769L12.6906 14.6225L10 11.745L7.24187 14.6225L5.625 12.925L8.35 9.98375L5.625 7.1L7.24187 5.37687V5.37625ZM7.46375 5.14125L9.98875 2.5L12.5137 5.14125L11.185 6.55688L9.98875 5.23562L8.7925 6.55688L7.46375 5.14125ZM7.46375 14.8588L8.7925 13.4431L9.98875 14.7644L11.185 13.4431L12.5137 14.8588L9.98875 17.5L7.46375 14.8588Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3717">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Adx;
