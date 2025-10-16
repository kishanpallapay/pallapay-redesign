"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { Badge } from "@/components/ui/badge";
import Generic from "@/components/icons/crypto/Generic";

function CryptoWithdrawalDetailsContent() {
  const router = useRouter();
  const { id } = useParams();

  const data = {
    "Ref ID": id || "123456789012",
    "Withdrawal Amount": "8500 AED",
    "Total Crypto Amount": "455.6879 TRX",
    "Receiving Crypto Amount": "400.24 TRX",
    "Fee Amount": "500 AED",
    Status: "Completed",
    "Date of Create": "21/07/2025, 14:02",
    "Wallet Address": "qwerdiohrsdo65okxcfjfdpojs4 (TRX)",
    "Transaction Hash": "qwerdiohrsdo65okxcfjfdpojs4r3aronicxfopioterw654foj",
  };

  const Item = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string; }>;
  }) => {
    const isStatus = ["Completed", "Pending", "Failed"].includes(value);
    const Icon = icon;

    const getVariant = (status: string) => {
      switch (status) {
        case "Completed":
          return "success";
        case "Pending":
          return "process";
        case "Failed":
          return "ghost";
        default:
          return "default";
      }
    };

    return (
      <div className="flex flex-col text-left min-h-[48px] sm:min-h-[56px]">
        <span className="text-xs sm:text-sm text-gray-400 dark:text-gray-400 font-semibold mb-1">
          {label} :
        </span>
        {isStatus ? (
          <Badge
            variant={getVariant(value)}
            className="text-xs sm:text-sm md:text-[15px] font-medium w-fit"
          >
            {value}
          </Badge>
        ) : (
          <span className="flex items-center gap-1.5 text-xs sm:text-sm md:text-[15px] font-medium text-gray-600 dark:text-gray-100 break-words">
            {Icon && <Icon className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />}
            {value}
          </span>
        )}
      </div>
    );
  };

  const Row = ({
    items,
  }: {
    items: {
      label: string;
      value: any;
      icon?: React.ComponentType<{ className?: string; }>;
    }[];
  }) => {
    const filled = [...items];
    while (filled.length < 3) filled.push({ label: "", value: "" });

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3">
        {filled.map((item, i) =>
          item.label ? (
            <Item
              key={i}
              label={item.label}
              value={item.value}
              icon={item.icon}
            />
          ) : (
            <div key={i} className="hidden md:block"></div>
          )
        )}
      </div>
    );
  };

  return (
    <div className="mx-auto">
      {/* Mobile Header */}
      <div
        className="flex items-center justify-between mb-4 sm:hidden cursor-pointer text-sm font-medium"
        onClick={() => router.back()}
      >
        <span className="flex items-center justify-start gap-1 text-foreground">
          <ChevronLeft className="h-4 w-4" />
          Crypto Withdrawal #{data["Ref ID"]}
        </span>
        <Button
          size="sm"
          className="flex items-center gap-1"

        >
          <Printer className="h-4 w-4" />
          Print
        </Button>
      </div>

      {/* Main Card */}
      <div className="bg-gray-50 dark:bg-gray-600 rounded-xl p-3 sm:p-4 md:p-6 shadow-sm space-y-4 sm:space-y-5">
        <div className="hidden md:flex items-center justify-between mb-3">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Crypto Withdrawal #{data["Ref ID"]}
          </h1>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-foreground border-foreground"
            onClick={() => router.back()}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button
            size="sm"
            className="flex items-center gap-1"

          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>

        <Row
          items={[
            { label: "Ref ID", value: data["Ref ID"] },
            { label: "Withdrawal Amount", value: data["Withdrawal Amount"] },
            {
              label: "Total Crypto Amount",
              value: data["Total Crypto Amount"],
              icon: Generic,
            },
          ]}
        />
        <Row
          items={[
            { label: "Status", value: data["Status"] },
            { label: "Fee Amount", value: data["Fee Amount"] },
            {
              label: "Receiving Crypto Amount",
              value: data["Receiving Crypto Amount"],
              icon: Generic,
            },
          ]}
        />
        <Row
          items={[
            { label: "Date of Create", value: data["Date of Create"] },
          ]}
        />
        <Row
          items={[
            { label: "Wallet Address", value: data["Wallet Address"] },
          ]}
        />
        <Row
          items={[
            { label: "Transaction Hash", value: data["Transaction Hash"] },
          ]}
        />
      </div>
    </div>
  );
}

const CryptoWithdrawalDetailsPage = withResponsiveLayout(
  CryptoWithdrawalDetailsContent,
  {
    role: "merchant",
    header: (
      <span className="font-exo2-semibold text-black dark:text-white">
        Crypto Withdrawal Details
      </span>
    ),
    sidebarTitle: (
      <span className="text-sm font-semibold uppercase">
        Crypto Withdrawal Details
      </span>
    ),
  }
);

export default CryptoWithdrawalDetailsPage;
