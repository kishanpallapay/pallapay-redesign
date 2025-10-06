import React from "react";
import { IconProps } from ".";

const Drgn: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3187)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#C91111" />
        <path opacity="0.6" d="M5.875 12.9873H7.63625L7.59125 8.40795L14.15 16.7348L14.1294 6.90232H12.3956L12.4406 11.528L5.8775 3.1792L5.875 12.9873Z" fill="white" />
        <path d="M5.875 6.22035L5.885 3.18848L14.1244 13.6585L14.1587 16.7472L5.875 6.22035Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3187">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>




  );
};

export default Drgn;

