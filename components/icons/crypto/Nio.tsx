import React from "react";
import { IconProps } from ".";

const Nio: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2476)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#70C9C9" />
        <path d="M10 8.6025H6.98625L10 3.4375L13.0138 8.6025H10ZM10.4094 14.6875L11.9812 11.9944L13.4881 9.4125L16.5625 14.6875H10.4094ZM8.01875 11.9944L9.59063 14.6875H3.4375L6.51187 9.4125L8.01813 11.9944H8.01875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2476">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Nio;

