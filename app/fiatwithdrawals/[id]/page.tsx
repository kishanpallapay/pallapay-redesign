"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ChevronLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { Badge } from "@/components/ui/badge";

function FiatWithdrawalDetailsContent() {
  const router = useRouter();
  const { id } = useParams();

  const data = {
    "Ref ID": id || "123456789012",
    "Request Amount": "8500 AED",
    "Fee Amount": "500 AED",
    "Receiving Amount": "8000 AED",
    "Withdrawal Method": "Cash Pickup",
    "Bank Account": "AE1234567890123467 (ADCB)",
    "Status": "Completed",
    "Date of Create": "21/07/2025, 14:02",
  };

  const Item = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    const isStatus = ["Completed", "Pending", "Failed", "Rejected"].includes(
      value
    );

    const getVariant = (status: string) => {
      switch (status) {
        case "Completed":
          return "success";
        case "Pending":
          return "process";
        case "Failed":
        case "Rejected":
          return "destructive";
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
          <span className="text-xs sm:text-sm md:text-[15px] font-medium text-gray-600 dark:text-gray-100 break-words">
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
    }[];
  }) => {
    const filled = [...items];
    while (filled.length < 3) filled.push({ label: "", value: "" });

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-3">
        {filled.map((item, i) =>
          item.label ? (
            <Item key={i} label={item.label} value={item.value} />
          ) : (
            <div key={i} className="hidden md:block"></div>
          )
        )}
      </div>
    );
  };

  const handlePrint = () => {
    window.print();
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
          Fiat Withdrawal #{data["Ref ID"]}
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
      <div className="bg-white dark:bg-gray-700 rounded-xl p-3 sm:p-4 md:p-6 shadow-sm space-y-4 sm:space-y-5">
        {/* Header Row */}
        <div className="hidden md:flex items-center justify-between mb-3">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
            Fiat Withdrawal #{data["Ref ID"]}
          </h1>
          <div className="flex items-center gap-2">
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
        </div>

        {/* Info Grid */}
        <Row
          items={[
            { label: "Ref ID", value: data["Ref ID"] },
            { label: "Request Amount", value: data["Request Amount"] },
            { label: "Fee Amount", value: data["Fee Amount"] },
          ]}
        />
        <Row
          items={[
            { label: "Receiving Amount", value: data["Receiving Amount"] },
            { label: "Withdrawal Method", value: data["Withdrawal Method"] },
            { label: "Bank Account", value: data["Bank Account"] },
          ]}
        />
        <Row
          items={[
            { label: "Status", value: data["Status"] },
            { label: "Date of Create", value: data["Date of Create"] },
          ]}
        />
      </div>
    </div>
  );
}

const FiatWithdrawalDetailsPage = withResponsiveLayout(
  FiatWithdrawalDetailsContent,
  {
    role: "merchant",
    header: (
      <span className="font-exo2-semibold text-black dark:text-white">
        Fiat Withdrawal Details
      </span>
    ),
    sidebarTitle: (
      <span className="text-sm font-semibold uppercase">
        Fiat Withdrawal Details
      </span>
    ),
  }
);

export default FiatWithdrawalDetailsPage;
