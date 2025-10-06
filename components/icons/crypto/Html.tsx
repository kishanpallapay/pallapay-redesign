import React from "react";
import { IconProps } from ".";

const Html: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2843)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#CFA967" />
        <path d="M10.0125 10.5906V15.5863L13.7294 14.585L14.6025 4.96625H10.0125V9.04875L10.2025 8.45687H10.7L10.0125 10.5906ZM5.3975 15.2931L4.375 4.0625H15.625L14.6025 15.2931L9.9875 16.5625L5.3975 15.2931ZM8.62437 11.0475V10.5844L7.08125 9.96938L8.625 9.35063V8.88688L6.42062 9.7825V10.1525L8.62437 11.0475ZM13.5825 10.1525L11.3781 11.0475V10.5844L12.9219 9.9675L11.3781 9.35063V8.88688L13.5825 9.7825V10.1525ZM10.0125 10.59V9.04875L9.18937 11.6156H9.68188L10.0125 10.59Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2843">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Html;

