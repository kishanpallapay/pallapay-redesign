import React from "react";
import { IconProps } from ".";

const Bos: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3485)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#00A8D6" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.02 11.8438V10.6456H10.8663C12.0975 10.6456 12.7131 10.3381 12.7131 9.72312V6.49562C12.7131 5.88125 12.0975 5.57375 10.8663 5.57375H7.9125V7.51H6.25V4.375H10.6813C13.1438 4.375 14.375 5.05125 14.375 6.40375V9.81563C14.375 11.1681 13.1438 11.8444 10.6813 11.8444H9.02V11.8438ZM12.7131 12.5819H14.375V13.5962C14.375 14.9487 13.1438 15.625 10.6813 15.625H6.25V8.4325H10.6813C10.9419 8.4325 11.1875 8.44 11.4206 8.455V9.65563C11.2363 9.63835 11.0513 9.63001 10.8663 9.63063H7.9125V14.4263H10.8669C12.0981 14.4263 12.7137 14.1188 12.7137 13.5044V12.5812L12.7131 12.5819Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3485">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>




  );
};

export default Bos;

