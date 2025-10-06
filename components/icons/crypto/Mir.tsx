import React from "react";
import { IconProps } from ".";

const Mir: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2592)">
        <circle cx="110" cy="110" r="110" fill="#FEFEFE" />
        <path d="M12.1184 5.11446V2.60794L9.964 2.17578V4.6823L7.80964 4.16372V6.67024L5.65527 6.15166V14.1898L7.80964 14.7084V17.2149L9.964 17.7335V15.227L12.1184 15.7456V13.2391L14.2727 13.7577V5.7195L12.1184 5.11446ZM10.3949 13.6712L7.37877 12.9798V8.22602L10.3949 8.91748V13.6712Z" fill="#232C45" />
      </g>
      <defs>
        <clipPath id="clip0_17_2592">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Mir;

