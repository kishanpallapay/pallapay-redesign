import React from "react";
import { IconProps } from ".";

const Emc2
: React.FC<IconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg width={width}
      height={height}
      className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_17_3099)">
        <path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#00CCFF" />
        <path d="M4.93375 11.9756H7.68188L6.49875 14.375H3.75L4.93375 11.9756ZM6.49938 8.80063H9.24813L8.06875 11.1937H5.31875L6.5 8.8L6.49938 8.80063ZM8.06562 5.62563H10.8144L9.63375 8.01938H6.88563L8.06562 5.625V5.62563Z" fill="white" fill-opacity="0.4" />
        <path d="M7.67301 11.975H10.4218L9.23801 14.3737H6.48926L7.67301 11.9744V11.975ZM9.23926 8.8H11.9874L10.8074 11.1925H8.05863L9.23926 8.8ZM10.8049 5.625H13.5536L12.373 8.01813H9.62488L10.8049 5.625Z" fill="white" fill-opacity="0.6" />
        <path d="M10.3687 11.975H13.1174L11.9343 14.3737H9.18555L10.3693 11.9744L10.3687 11.975ZM11.9349 8.8H14.6837L13.5037 11.1925H10.7549L11.9349 8.8ZM13.5012 5.625H16.2499L15.0693 8.01813H12.3212L13.5012 5.625Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_17_3099">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>

  );
};

export default Emc2
;

