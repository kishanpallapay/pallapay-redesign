import React from "react";
import { IconProps } from ".";

const Maid: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2638)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#5592D7" />
        <path d="M12.6536 7.91713V16.0253L5.80609 12.0834C3.78109 10.8978 3.90984 10.1603 3.90984 8.55838L10.9492 12.6284V8.91025L12.653 7.9165L12.6536 7.91713Z" fill="white" />
        <path opacity="0.6" d="M10.9495 12.6282L3.91016 8.5576L10.7564 4.61572C12.7814 3.46134 13.3602 3.94259 14.7745 4.74384L7.73516 8.81447L10.9495 10.6732V12.6282Z" fill="white" />
        <path opacity="0.2" d="M7.73598 8.81428L14.7754 4.74365V12.628C14.7754 14.968 14.0685 15.2243 12.6541 16.0255V7.91678L9.4066 9.7749L7.73535 8.81365L7.73598 8.81428Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2638">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Maid;

