import React from "react";
import { IconProps } from ".";

const Nmc: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2464)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#186C9D" />
        <path d="M12.0381 14.6875L12.0387 14.6862C12.1351 14.6881 12.2313 14.6776 12.325 14.655C12.8725 14.5269 13.3356 14.0487 13.4456 13.5325L15.625 5.3475L13.8925 5.33875L12.4637 10.6938L8.60125 5.32062L8.59875 5.32313L8.60063 5.31687L7.9625 5.3125V5.31313C7.86599 5.31164 7.76965 5.32192 7.67563 5.34375C7.12875 5.4725 6.66562 5.95062 6.555 6.46625L4.375 14.6531L6.10812 14.6606L7.53625 9.30562L11.3988 14.6794H11.4006L12.0381 14.6875ZM7.9175 7.87875L8.21938 6.7475L12.0825 12.1219L11.7806 13.2531L7.91812 7.87812L7.9175 7.87875Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2464">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Nmc;

