import React from "react";
import { IconProps } from ".";

const Htr: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2835)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="black" />
        <circle cx="9.95428" cy="10.091" r="8.68182" fill="#FEFEFE" />
        <circle cx="9.95461" cy="10.0908" r="7.47121" fill="black" />
        <path d="M7.84447 11.198H6.87598V12.2011H9.95439V11.198H9.05508C9.05508 10.7507 9.07856 10.2806 9.37776 9.91823C9.98064 9.18803 11.2329 9.22241 11.7364 10.0566C12.0033 10.4988 11.9605 11.0499 11.9605 11.5439V14.2418H13.1366V11.3364C13.1366 10.6316 13.1591 9.9108 12.7525 9.29563C12.0268 8.19778 9.65966 7.85642 9.08967 9.33022H9.05508V5.9751H7.84447V11.198Z" fill="white" />
        <path d="M6.87598 13.2388V14.2418H9.95439V13.2388H6.87598Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2835">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Htr;

