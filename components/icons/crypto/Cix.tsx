import React from "react";
import { IconProps } from ".";

const Cix: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3368)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#0576B4" />
        <path d="M15.4177 11.7892L14.7558 11.3748L16.1996 11.358L16.2296 11.3417V11.3573L16.8258 11.3511L15.8139 12.9973L15.7233 12.2036L11.1208 14.743L9.3752 12.4123L4.48145 14.9911V14.4036L9.52707 11.7455L11.2721 14.0761L15.4183 11.7892H15.4177ZM9.0977 11.2236L7.1852 12.2305V5.40234H9.0977V11.2236ZM14.5058 11.5242L12.5933 12.5867V5.40234H14.5058V11.5242Z" fill="white" />
        <path opacity="0.5" d="M11.8017 13.0267L11.3911 13.2542L9.88859 11.248V6.18359H11.8011V13.0267H11.8017ZM6.39297 12.6473L4.48047 13.6548V7.06984H6.39297V12.6473Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3368">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>



  );
};

export default Cix;

