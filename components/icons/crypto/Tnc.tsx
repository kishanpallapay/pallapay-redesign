import React from "react";
import { IconProps } from ".";

const Tnc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_1943)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FF439B" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3912 8.6275L14.9119 14.6875H5.15312L6.3225 12.7481L11.58 12.7494L10.2475 10.5744L11.3912 8.6275ZM7.7975 10.0375L11.3769 4.0875L16.25 12.2919H13.91L11.335 7.81687L10.0844 10.0381L7.7975 10.0375ZM10.8506 12.2994L3.75 12.2656L8.62937 4.0625L9.79187 6.02875L7.1025 10.3525H9.70687L10.8506 12.2994Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_1943">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Tnc;

