import React from "react";
import { IconProps } from ".";

const Gbx: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2957)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#1666AF" />
        <path d="M9.81188 6.87875V8.16625H6.87437C6.49312 8.16625 6.02375 8.3 5.67438 8.5475C5.24125 8.855 4.99938 9.31563 4.99938 10.0019C4.99938 10.6881 5.24125 11.1487 5.67438 11.4563C6.02375 11.7038 6.49312 11.8375 6.87437 11.8375H8.12437V13.125H6.87437C6.19154 13.1183 5.5265 12.9064 4.96563 12.5169C4.19813 11.9719 3.75 11.1181 3.75 10.0019C3.75 8.88563 4.19813 8.03188 4.96563 7.48688C5.52631 7.09744 6.19112 6.88556 6.87375 6.87875H9.81188ZM6.68688 10.7425V9.455H9.81188V13.125H8.5625V10.7425H6.68688ZM11.875 8.1625V6.875H16.25V13.125H10.6237V8.16688H11.8737V11.8369H15V8.16312L11.875 8.1625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2957">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Gbx;

