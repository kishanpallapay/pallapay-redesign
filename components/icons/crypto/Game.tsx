import React from "react";
import { IconProps } from ".";

const Game: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_2968)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#2D475B" />
        <path d="M8.04333 7.92834H14.9715V9.48334H8.04333V7.92834ZM14.9715 10.5183H15.0002V14.6077C15.0002 14.6077 9.59583 18.5233 5.39833 14.2627C5.39833 14.2627 3.09833 11.9302 3.93208 8.53272C3.93208 8.53272 4.59333 4.30084 9.62458 3.78272C9.62458 3.78272 12.729 3.35022 14.7415 5.65397L13.534 6.83397C13.534 6.83397 10.9752 4.18522 7.55458 6.25897C7.55458 6.25897 4.76583 7.81334 5.91583 11.729C5.91583 11.729 7.18083 15.1265 11.1477 14.4352C11.1477 14.4352 12.499 14.1277 13.189 13.5327V12.0733H8.04396V10.5183H14.9715Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_2968">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Game;

