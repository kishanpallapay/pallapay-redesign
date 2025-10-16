import React from "react";
import { Button } from "./button";

const VerificationLevelCard = ({ level = "standard" }) => {
  const configs: any = {
    basic: {
      label: "Basic",
      borderColor: "border-gray-300 dark:border-gray-400",
      bgColor: "bg-gray-50 dark:bg-gray-500",
      badgeColor: "bg-gray-500 dark:bg-gray-300",
      badgeTextColor: "text-white",
    },
    standard: {
      label: "Standard",
      borderColor: "border-info-300",
      bgColor: "bg-info-50 dark:bg-info-600",
      badgeColor: "bg-info-500",
      badgeTextColor: "text-white",
    },
    extended: {
      label: "Extended",
      borderColor: "border-success-300",
      bgColor: "bg-success-50 dark:bg-success-600",
      badgeColor: "bg-success-500",
      badgeTextColor: "text-white",
    },
  };

  const config = configs[level] || configs.standard;

  return (
    <div
      className={`${config.bgColor} ${config.borderColor} border-2 rounded-2xl p-4 px-7 max-w-2xl w-full`}
    >
      <div className="flex items-center gap-5 justify-center mb-4">
        <h2 className="text-md font-exo2-medium text-black dark:text-white">
          Verification Level :
        </h2>
        <span
          className={`${config.badgeColor} ${config.badgeTextColor} h-7 p-3 rounded-full text-sm flex items-center  font-exo2-medium`}
        >
          {config.label}
        </span>
      </div>

      <div className="flex items-center justify-center mb-8">
        <h2 className="text-sm font-exo2-medium text-gray-300">
          Account Status :
        </h2>
        <span className="text-gray-300 text-sm font-exo2-medium h-7 p-3 rounded-full text-sm flex items-center  font-exo2-medium">
          Individual
        </span>
      </div>
      <div className="flex justify-end">
        <Button variant={"primary"} className="h-11">
          Upgrade Your Verification
        </Button>
      </div>
    </div>
  );
};
export default VerificationLevelCard;
