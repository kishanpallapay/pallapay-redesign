import React from "react";
import { IconProps } from ".";

const Mth: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2544)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#104FCA" />
        <path d="M4.375 5.97998L7.02125 10.4194V15C5.56 15 4.375 13.8525 4.375 12.4369V5.97998Z" fill="white" fill-opacity="0.5" />
        <path d="M12.9785 10.4144L15.6235 5.97754H15.6248V12.4375C15.6254 13.8525 14.4404 15 12.9785 15V10.4144Z" fill="white" fill-opacity="0.6" />
        <path d="M9.99813 10.2864L8.675 12.5064C8.40063 12.4377 8.10562 12.1714 7.79 11.7083L4.375 5.98017C5.64062 5.27205 7.25938 5.69267 7.99 6.91767L9.99813 10.2864Z" fill="white" fill-opacity="0.8" />
        <path d="M12.0098 6.91255C12.7404 5.6863 14.3592 5.2663 15.6248 5.97442L12.2098 11.7025C11.9631 12.0601 11.6329 12.352 11.2477 12.5529C10.8626 12.7537 10.4342 12.8575 9.9998 12.855C9.58845 12.8559 9.18233 12.7629 8.8123 12.5832L8.6748 12.5063L12.0098 6.91255Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2544">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Mth;

