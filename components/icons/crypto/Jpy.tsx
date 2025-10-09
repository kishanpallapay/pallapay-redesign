import React from "react";
import { IconProps } from ".";

const Jpy: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2743)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#EAC749" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9675 11.6944V12.8681H14.1319V14.2981H10.9675V15.9375H9.0325V14.2981H5.86812V12.8681H9.0325V11.6944H5.86812V10.2644H8.475L4.6875 4.6875H7.0325L10.0325 9.39625L13.0331 4.6875H15.3125L11.5087 10.2644H14.1319V11.6944H10.9675Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2743">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Jpy;

