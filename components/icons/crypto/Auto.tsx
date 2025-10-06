import React from "react";
import { IconProps } from ".";

const Auto: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3598)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#FAB431" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3125 12.0419L12.6969 10.4725L12.9969 9.22937L14.1138 9.88875V7.61875L10.5262 5.48V10.4175L9.67313 10.8894L14.3844 13.6831L10 16.25L4.6875 13.1388V6.91688L10 3.75L15.3125 6.91688V12.0419ZM5.88625 7.61875V11.6675L9.335 9.6675V5.5625L5.88625 7.61812V7.61875ZM8.44688 11.5838L6.48562 12.7831L10 14.8406L11.9844 13.6781L8.44688 11.5831V11.5838Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3598">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Auto;
