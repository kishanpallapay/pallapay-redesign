import React from "react";
import { IconProps } from ".";

const Music: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2536)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white" />
        <path d="M11.6562 0.14125C11.109 0.0482834 10.555 0.00103686 10 0C4.475 0 0 4.475 0 10C0 12.1213 0.666875 14.0813 1.7875 15.7069C2.475 14.6969 4.06063 14 5.89875 14C7.16125 14 8.30313 14.3331 9.12125 14.8688L11.6562 0.14125ZM16.97 2.83812C18.6969 6.65688 17.1819 8.69687 17.1819 8.69687C16.01 5.17188 12.6163 4.65688 12.6163 4.65688C12.6163 4.65688 10.3837 16.6869 10.3837 16.8381C10.3837 18.1413 9 19.2425 7.12125 19.5756C8.05503 19.8566 9.02486 19.9996 10 20C15.525 20 20 15.525 20 10C20 7.19187 18.8381 4.65625 16.97 2.83812Z" fill="#FBBF02" />
      </g>
      <defs>
        <clipPath id="clip0_17_2536">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Music;

