import React from "react";
import { IconProps } from ".";

const Eop: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3081)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#35A7DF" />
        <path d="M9.19641 17.5001L5.85391 8.58568L4.50391 14.7357L9.19641 17.5001ZM10.0752 2.60693L6.41078 7.06443L10.0752 16.4288L13.7608 7.06443L10.0752 2.60693ZM10.9752 17.5001L14.3183 8.58568L15.6464 14.7357L10.9752 17.5001Z" fill="#FEFFFE" />
      </g>
      <defs>
        <clipPath id="clip0_17_3081">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Eop
;

