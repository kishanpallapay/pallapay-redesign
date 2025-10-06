import React from "react";
import { IconProps } from ".";

const Bnt: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3497)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#000D2B" />
        <path d="M9.95024 3.6748L7.12648 5.32918L9.95024 6.98418L12.8271 5.32918L9.95024 3.6748ZM10.4146 12.5086V15.8179L14.2502 13.6298V10.3198L10.4146 12.5086ZM13.2915 6.3698V9.6798L10.414 11.3348V8.0248L13.2915 6.3698ZM6.36523 9.6798L9.24273 11.3348V8.0248L6.36523 6.3698V9.6798ZM6.36523 14.1636L9.24273 15.8179V12.5086L6.36523 10.8542V14.1629V14.1636Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3497">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Bnt;

