import React from "react";
import { IconProps } from ".";

const Elix: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3114)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#00ADED" />
        <path d="M6.31055 14.7519L6.3118 14.7494L8.3043 9.98936L6.31055 5.22998L9.98867 9.98936L6.31305 14.7487L6.31055 14.7519ZM13.6705 14.7519L13.668 14.7487L9.99242 9.98936L13.6705 5.22998L11.6768 9.98936L13.6693 14.7494L13.6705 14.7519Z" fill="white" />
        <path d="M9.99082 9.98955V13.3058L6.30957 14.7496L9.99082 9.98705V6.6708L13.6721 5.22705L9.99082 9.98955Z" fill="white" fill-opacity="0.8" />
        <path d="M9.99082 13.306V16.2129L6.30957 14.7479L9.99082 13.301V9.98979L6.30957 5.22729L9.99082 6.67104V3.76416L13.6721 5.22854L9.99082 6.67541V9.98729L13.6721 14.7498L9.99082 13.306Z" fill="white" fill-opacity="0.5" />
        <path d="M6.30957 5.22854L9.99082 3.76416V6.67541L6.30957 5.22854ZM13.6721 14.7479L9.99082 16.2129V13.301L13.6721 14.7479Z" fill="white" fill-opacity="0.145" />
      </g>
      <defs>
        <clipPath id="clip0_17_3114">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default Elix;

