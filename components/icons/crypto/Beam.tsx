import React from "react";
import { IconProps } from ".";

const Beam: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3531)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#0B76FF" />
        <path d="M16.975 7.9126V6.5376L12.5 9.14385L9.7375 4.38135V7.50635L11.1438 9.94385L10.575 10.2813L9.7375 8.80635L8.8375 10.4063L8.2125 10.1501L9.7375 7.50635V4.38135L6.7125 9.53135L2.5 7.7876V9.38135L6.25 10.3063L3.875 14.3813H9.7375V12.7001H6.74375L7.8625 10.7376L8.5375 10.9063L7.8625 12.0938H11.6125L11.05 11.1001L11.7938 11.0438L12.75 12.7001H9.7375V14.3813H15.625L13.6 10.9251L17 10.6751V9.29385L13.175 10.2376L16.9938 9.25635V8.00635L12.85 9.6876L16.975 7.9126ZM11.5375 10.6313L10.8625 10.8001L11.525 10.6313H11.5375ZM11.325 10.2563L10.7 10.5063L11.325 10.2501V10.2563Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3531">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Beam;

