import React from "react";
import { IconProps } from ".";

const Filled: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3003)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#2B61D1" />
        <path d="M15.5716 9.67364L12.518 7.93555L9.48828 9.70341L9.50614 13.2153L12.5597 14.9534L15.5895 13.1856L15.5716 9.67364Z" fill="white" />
        <path d="M8.00591 11.1736L6.22019 10.1558L4.44043 11.1915L4.45233 13.251L6.23805 14.2689L8.01186 13.2272L8.00591 11.1736Z" fill="white" />
        <path d="M6.20829 8.68517L8.15472 9.79827L8.14876 8.94113L12.5119 6.39351L15.5595 8.1316L15.5535 6.76851L9.9821 3.58398L4.44043 6.82208L4.45233 9.71494L6.20829 8.68517Z" fill="white" />
        <path d="M7.5293 14.9834L10.0472 16.4238L11.2257 15.7334L8.70787 14.2988L7.5293 14.9834Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3003">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Filled
;

