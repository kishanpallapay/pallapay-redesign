"use client";

import type { JSX } from "react";

import { ArrowRight } from "lucide-react";
import { DataTable, type ColumnConfig } from "@/components/ui/dataTable";
import {
  MobileDataTable,
  type RowAction,
} from "@/components/ui/mobileDataTable";
import { useRouter } from "next/navigation";

type TransactionStatus = "completed" | "processing" | "canceled" | "failed";
type PaymentChannel = "Payment Link" | "Payment Page" | "API" | "POS";
type CryptoSymbol = "USDT" | "ETH" | "TRX" | "BTC";

type LatestTransaction = {
  id: string;
  paymentAmount: number;
  fiatCurrency: string;
  cryptoAmount: number;
  cryptoSymbol: CryptoSymbol;
  channel: PaymentChannel;
  status: TransactionStatus;
  occurredAt: string;
};

const LATEST_TRANSACTION_COLUMNS: ColumnConfig[] = [
  {
    key: "id",
    label: "Ref ID",
    type: "text",
  },
  {
    key: "paymentAmount",
    label: "Payment Amount",
    type: "currency",
  },
  {
    key: "cryptoAmount",
    label: "Crypto Amount",
    type: "crypto",
  },
  {
    key: "channel",
    label: "Type",
    type: "text",
  },
  {
    key: "status",
    label: "Status",
    type: "status",
  },
  {
    key: "occurredAt",
    label: "Date",
    type: "date",
  },
];

// Mobile columns - 3 columns only
const MOBILE_TRANSACTION_COLUMNS: ColumnConfig[] = [
  {
    key: "id",
    label: "Ref ID",
    type: "text",
  },
  {
    key: "paymentAmount",
    label: "Payment Amount",
    type: "currency",
  },
  {
    key: "status",
    label: "Status",
    type: "status",
  },
];

const LATEST_TRANSACTIONS: LatestTransaction[] = [
  {
    id: "123456789012",
    paymentAmount: 12550,
    fiatCurrency: "AED",
    cryptoAmount: 455.68709,
    cryptoSymbol: "USDT",
    channel: "Payment Link",
    status: "failed",
    occurredAt: "2025-08-19T12:43:00Z",
  },
  {
    id: "987654321098",
    paymentAmount: 24800,
    fiatCurrency: "AED",
    cryptoAmount: 0.01563,
    cryptoSymbol: "ETH",
    channel: "API",
    status: "completed",
    occurredAt: "2025-08-18T09:18:00Z",
  },
  {
    id: "543216789012",
    paymentAmount: 7800,
    fiatCurrency: "AED",
    cryptoAmount: 3420.45,
    cryptoSymbol: "TRX",
    channel: "Payment Page",
    status: "processing",
    occurredAt: "2025-08-18T07:25:00Z",
  },
  {
    id: "112233445566",
    paymentAmount: 15200,
    fiatCurrency: "AED",
    cryptoAmount: 0.182,
    cryptoSymbol: "BTC",
    channel: "POS",
    status: "completed",
    occurredAt: "2025-08-17T17:05:00Z",
  },
  {
    id: "998877665544",
    paymentAmount: 9100,
    fiatCurrency: "AED",
    cryptoAmount: 312.09,
    cryptoSymbol: "USDT",
    channel: "API",
    status: "canceled",
    occurredAt: "2025-08-17T11:46:00Z",
  },
];

const handleRowMenuClick = (_transaction: LatestTransaction) => {
  console.log("Desktop row clicked:", _transaction);
};

const handleMobileRowClick = (_transaction: LatestTransaction) => {
  console.log("Mobile row clicked:", _transaction);
};

export function LatestTransactionsCard(): JSX.Element {
  const router = useRouter();
  const getMobileRowActions = (transaction: LatestTransaction): RowAction[] => {
    const actions: RowAction[] = [
      {
        label: "Show More Detail",
        variant: "outline",
        className: "border-gray text-gray dark:text-white dark:border-white",
        size: "lg",
        onClick: () => router.push(`/transactions/${transaction.id}`),
        closeOnClick: true,
      },
    ];

    return actions;
  };

  const handleNavigateToTransaction = () => {
    if (router) {
      router.push("/transactions");
    }
  };
  return (
    <section className="rounded-[12px] bg-gray-50  md:px-6 md:pt-6 p-3 dark:bg-gray-600">
      <div className="flex flex-wrap items-start mb-8 justify-between gap-4">
        <div>
          <p className="font-exo2-medium text-lg text-gray dark:text-gray-50">
            Latest Transactions:
          </p>
        </div>

        <button
          type="button"
          onClick={handleNavigateToTransaction}
          className="flex items-center gap-2 text-md font-semibold text-orange-200 font-exo2-medium transition hover:text-orange hover:cursor-pointer md:flex hidden"
        >
          See all Transactions
          <ArrowRight className="h-4.5 w-4.5" aria-hidden />
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <DataTable
          columns={LATEST_TRANSACTION_COLUMNS}
          data={LATEST_TRANSACTIONS}
          onRowMenuClick={handleRowMenuClick}
        />
      </div>

      {/* Mobile View */}
      <div className="md:hidden block">
        <MobileDataTable
          columns={MOBILE_TRANSACTION_COLUMNS}
          data={LATEST_TRANSACTIONS}
          onRowClick={handleMobileRowClick}
          detailColumns={LATEST_TRANSACTION_COLUMNS}
          detailTitle="Transaction Details"
          getRowActions={getMobileRowActions}
        />
      </div>
      <button
        type="button"
        onClick={handleNavigateToTransaction}
        className="flex mt-4 gap-2 text-md font-semibold text-orange-200 font-exo2-medium transition hover:text-orange hover:cursor-pointer w-full justify-center items-center flex md:hidden"
      >
        See all Transactions
        <ArrowRight className="h-4.5 w-4.5" aria-hidden />
      </button>
    </section>
  );
}
