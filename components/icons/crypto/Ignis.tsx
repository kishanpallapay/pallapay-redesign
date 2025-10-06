import React from "react";
import { IconProps } from ".";

const Ignis: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2815)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F9C011" />
        <path d="M9.2575 3.75C10.2063 4.30437 11.0987 4.94625 12.0387 5.51562L8.57375 11.56C8.11375 10.7531 7.6825 9.93 7.22812 9.11875C7.8825 7.32188 8.63 5.55625 9.2575 3.75ZM6.25 16.25C8.21187 12.6819 10.25 9.15312 12.19 5.57562C12.7087 6.48625 13.2281 7.39625 13.75 8.30688C12.2463 10.9519 10.7312 13.5906 9.23938 16.2413C8.2425 16.2413 7.24688 16.2288 6.25 16.25ZM9.42625 16.2356C10.2575 14.8137 11.0406 13.3669 11.8825 11.9513C12.3844 12.5931 12.8938 13.2312 13.3919 13.8762C12.0747 14.6706 10.7528 15.4571 9.42625 16.2356Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2815">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Ignis;

