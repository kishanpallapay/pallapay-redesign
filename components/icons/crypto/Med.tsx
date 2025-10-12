import React from "react";
import { IconProps } from ".";

const Med: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2610)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#00B0FF" />
        <path d="M15 7.53813V13.11L13.415 14.035V10.3163L10 12.36L6.585 10.3144V14.035L5 13.11V7.5375L10 10.5406L15 7.5375V7.53813ZM10.0188 14.4862L11.4813 13.6119L12.925 14.4862L10.0188 16.25L7.11375 14.4862L8.5575 13.6119L10.0194 14.4862H10.0188ZM12.9062 5.51375L11.4619 6.38812L10 5.51375L8.53813 6.38812L7.09437 5.51375L10 3.75L12.9062 5.51375Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2610">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Med;

