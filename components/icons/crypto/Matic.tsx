import React from "react";
import { IconProps } from ".";

const Matic: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2630)">
        <path d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47708 15.5229 0 10 0C4.47708 0 0 4.47708 0 10C0 15.5229 4.47708 20 10 20Z" fill="#2B6DEF" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1671 5L12.0863 6.19979H12.0842V8.59958L12.0769 8.60063L5.83354 5L3.75104 6.2L3.75 6.19958V13.6604L5.83229 14.861L5.83354 14.8515V14.8604L7.91667 13.6604V11.0021L9.99542 12.2L9.99667 12.2025L9.99833 12.2015L12.0846 11.0073V13.6615L14.1581 14.8565V14.8627L14.1633 14.8596L14.1671 14.8617L14.17 14.8558L16.2408 13.6627V6.20625L16.2502 6.20083L14.1671 5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2630">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>


  );
};

export default Matic
;

