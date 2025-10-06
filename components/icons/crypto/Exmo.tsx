import React from "react";
import { IconProps } from ".";

const Exmo: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3026)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#347FFB" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3125 8.15938L10.5194 13.0031L10.5081 13.0325L10.1794 12.3731L9.49188 12.6856L11.295 7.8125L11.9825 7.5L12.3119 8.15938H12.3125ZM16.8 8.27375L15.0075 13.125L14.6781 12.4637L13.9906 12.7762L14.0325 12.6625L15.8244 7.8125L16.5119 7.5L16.84 8.15938L16.8 8.27375ZM12.9625 12.4688L14.0181 9.61688L13.3288 9.92938L13.0013 9.26875L11.9425 12.12L12.2706 12.7813L12.9625 12.4688ZM7.25187 9.65625H4.09875L4.63625 10.1562L4.09875 10.6644H7.24875L7.78375 10.1562L7.25187 9.65625ZM3.6625 11.7706H8.75938L8.22375 12.275L8.75938 12.7781H3.6625L3.125 12.275L3.6625 11.77V11.7706ZM5.22563 7.54062H10.3194L9.78562 8.04563L10.32 8.54875H5.22625L4.68875 8.045L5.22625 7.54062H5.22563Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3026">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Exmo
;

