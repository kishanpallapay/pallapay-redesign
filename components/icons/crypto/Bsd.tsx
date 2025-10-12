import React from "react";
import { IconProps } from ".";

const Bsd
: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3469)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <path d="M17.5 9.45437H2.5L11.2275 6.52313L12.4544 2.5L17.5 9.45437ZM2.56875 10.4094H17.4312L8.70438 13.2725L7.4775 17.4319L2.56813 10.4094H2.56875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3469">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Bsd
;

