import React from "react";
import { IconProps } from ".";

const Dai: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3289)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#F4B731" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.79813 5H9.89313C12.3837 5 14.2719 6.3225 14.9744 8.24625H16.25V9.40938H15.2431C15.2625 9.59313 15.2725 9.78062 15.2725 9.97062V9.99937C15.2725 10.2131 15.26 10.4244 15.235 10.6306H16.25V11.7931H14.95C14.2294 13.6906 12.3562 15 9.89375 15H5.79813V11.7931H4.375V10.6306H5.79813V9.40938H4.375V8.24687H5.79813V5ZM6.9425 11.7931V13.9569H9.8925C11.7137 13.9569 13.0662 13.09 13.6956 11.7931H6.9425ZM14.0463 10.6306H6.9425V9.40938H14.0487C14.0744 9.60125 14.0881 9.79812 14.0881 9.99937V10.0275C14.0881 10.2331 14.0738 10.4337 14.0463 10.63V10.6306ZM9.89375 6.04062C11.7225 6.04062 13.0794 6.93062 13.705 8.24563H6.9425V6.04125H9.8925L9.89375 6.04062Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3289">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Dai;

