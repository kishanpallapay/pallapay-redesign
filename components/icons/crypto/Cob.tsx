import React from "react";
import { IconProps } from ".";

const Cob: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3340)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#13BF99" />
        <path d="M10 15.625H7.165L8.585 13.1519H11.415L12.835 15.625H10ZM8.58563 6.8475H8.585L7.165 4.375H12.835L11.415 6.8475H8.585H8.58563ZM14.835 12.8094H14.8337H14.835L13.4144 15.2831L11.9994 12.81H12L13.4144 10.3363H16.25L14.835 12.8094ZM5.165 7.185L6.585 4.71188L8 7.185L6.585 9.6575H3.75L5.165 7.185ZM7.99937 12.81H8L6.585 15.2831L5.165 12.81L3.75 10.3356H6.585L8 12.8088L7.99937 12.81ZM14.835 7.185L16.25 9.65812H13.415L11.9994 7.185L13.4144 4.71188L14.835 7.185Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3340">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Cob;

