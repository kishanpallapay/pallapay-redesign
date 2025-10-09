import React from "react";
import { IconProps } from ".";

const Algo: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3681)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path d="M6.40625 14.3225L7.84563 11.8313L9.28375 9.34875L10.7137 6.8575L10.9512 6.4625L11.0556 6.8575L11.4944 8.4975L11.0031 9.34875L9.565 11.8313L8.135 14.3225H9.85375L11.2925 11.8313L12.0381 10.5419L12.3894 11.8313L13.0556 14.3225H14.5994L13.9331 11.8313L13.2662 9.34875L13.0912 8.70812L14.1613 6.8575H12.6L12.5469 6.67313L12.0031 4.63813L11.9331 4.375H10.4331L10.3981 4.4275L8.99437 6.8575L7.55562 9.34875L6.12625 11.8313L4.6875 14.3225H6.40625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3681">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Algo;
