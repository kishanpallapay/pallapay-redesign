"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { Badge } from "@/components/ui/badge";
import Generic from "@/components/icons/crypto/Generic";

function TransactionDetailsContent() {
  const router = useRouter();
  const { id } = useParams();

  // Example static data
  const data = {
    "Ref ID": id,
    "Payment Amount": "8500 AED",
    "Receiving Amount": "8000 AED",
    "Crypto Amount": "455.6879 USDT",
    "Payment Network": "Tron (TRC20)",
    "Fee Paid by": "Buyer",
    "Payment Fee": "500 AED",
    "Payment Type": "API",
    "API Note": "Pallapay Demo.",
    "Fiat Currency": "AED",
    "Merchant Name": "Test",
    "POS Device Name": "-",
    "Payer Email Address": "johndoe@gmail.com",
    "Payer First Name": "John",
    "Payer Last Name": "Doe",
    "Payer Note": "-",
    "Paid at": "-",
    "IPN Payment Request ID": "dfhjtrei456lkfgdotdr578876542v",
    "IPN Notify Status": "Done",
    "IPN Notify Date": "21/07/2025, 14:02",
    "Date of Create": "21/07/2025, 14:02",
    Status: "Canceled",
  };

  const Item = ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }) => {
    const isStatus = ["Done", "Canceled", "Processing"].includes(value);
    const Icon = icon;

    const getVariant = (status: string) => {
      switch (status) {
        case "Done":
          return "success";
        case "Canceled":
          return "ghost";
        case "Processing":
          return "process";
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
      icon?: React.ComponentType<{ className?: string }>;
    }[];
  }) => {
    const filled = [...items];
    while (filled.length < 3) filled.push({ label: "", value: "" });

    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3">
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
      <div
        className="flex items-center justify-between mb-4 sm:hidden cursor-pointer text-sm font-medium"
        onClick={() => router.back()}
      >
        <span className="flex items-center justify-start gap-1">
          <ChevronLeft className="h-4 w-4" />
          Transaction Details
        </span>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 sm:p-4 md:p-6 shadow-sm space-y-4 sm:space-y-5">
        <div className="hidden md:flex items-center justify-between mb-3">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Transaction #{data["Ref ID"]}
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
        </div>

        <Row
          items={[
            { label: "Ref ID", value: data["Ref ID"] },
            { label: "Payment Amount", value: data["Payment Amount"] },
            { label: "Receiving Amount", value: data["Receiving Amount"] },
          ]}
        />
        <Row
          items={[
            {
              label: "Crypto Amount",
              value: data["Crypto Amount"],
              icon: Generic,
            },
            { label: "Payment Network", value: data["Payment Network"] },
            { label: "Fee Paid by", value: data["Fee Paid by"] },
          ]}
        />
        <Row
          items={[
            { label: "Payment Fee", value: data["Payment Fee"] },
            { label: "Payment Type", value: data["Payment Type"] },
            { label: "API Note", value: data["API Note"] },
          ]}
        />
        <Row
          items={[
            { label: "Fiat Currency", value: data["Fiat Currency"] },
            { label: "Merchant Name", value: data["Merchant Name"] },
          ]}
        />
        <Row
          items={[{ label: "POS Device Name", value: data["POS Device Name"] }]}
        />

        {/* Section 2 - Payer info */}
        <Row
          items={[
            {
              label: "Payer Email Address",
              value: data["Payer Email Address"],
            },
            { label: "Payer First Name", value: data["Payer First Name"] },
            { label: "Payer Last Name", value: data["Payer Last Name"] },
          ]}
        />
        <Row
          items={[
            { label: "Payer Note", value: data["Payer Note"] },
            { label: "Paid at", value: data["Paid at"] },
          ]}
        />

        {/* Section 3 - IPN info */}

        <Row
          items={[
            {
              label: "IPN Payment Request ID",
              value: data["IPN Payment Request ID"],
            },
            { label: "IPN Notify Status", value: data["IPN Notify Status"] },
            { label: "IPN Notify Date", value: data["IPN Notify Date"] },
          ]}
        />
        <Row
          items={[
            { label: "Date of Create", value: data["Date of Create"] },
            { label: "Status", value: data["Status"] },
          ]}
        />
      </div>
    </div>
  );
}

const TransactionDetailsPage = withResponsiveLayout(TransactionDetailsContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Transaction Details
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Transaction Details</span>
  ),
});

export default TransactionDetailsPage;
