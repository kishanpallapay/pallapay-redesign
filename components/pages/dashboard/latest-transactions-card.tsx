"use client";

import { JSX, type ComponentProps } from "react";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

type TransactionStatus = "completed" | "processing" | "canceled" | "failed";

type LatestTransaction = {
  id: string;
  paymentAmount: string;
  fiatCurrency: string;
  cryptoAmount: string;
  cryptoSymbol: string;
  channel: "Payment Link" | "Payment Page" | "API" | "POS";
  status: TransactionStatus;
};

const STATUS_LABELS: Record<TransactionStatus, string> = {
  completed: "Completed",
  processing: "Processing",
  canceled: "Canceled",
  failed: "Rejected",
};

const STATUS_VARIANTS: Record<
  TransactionStatus,
  ComponentProps<typeof Badge>["variant"]
> = {
  completed: "success",
  processing: "process",
  canceled: "default",
  failed: "destructive",
};

const LATEST_TRANSACTIONS: LatestTransaction[] = [
  {
    id: "123456789012",
    paymentAmount: "12,550",
    fiatCurrency: "AED",
    cryptoAmount: "455.68709",
    cryptoSymbol: "USDT",
    channel: "Payment Link",
    status: "completed",
  },
  {
    id: "123456789013",
    paymentAmount: "24,500",
    fiatCurrency: "AED",
    cryptoAmount: "0.01356",
    cryptoSymbol: "ETH",
    channel: "API",
    status: "processing",
  },
  {
    id: "123456789014",
    paymentAmount: "9,800",
    fiatCurrency: "AED",
    cryptoAmount: "4,500.55",
    cryptoSymbol: "TRX",
    channel: "Payment Page",
    status: "failed",
  },
  {
    id: "123456789015",
    paymentAmount: "15,200",
    fiatCurrency: "AED",
    cryptoAmount: "325.11",
    cryptoSymbol: "USDT",
    channel: "POS",
    status: "completed",
  },
  {
    id: "123456789016",
    paymentAmount: "7,000",
    fiatCurrency: "AED",
    cryptoAmount: "0.182",
    cryptoSymbol: "BTC",
    channel: "API",
    status: "canceled",
  },
];

export function LatestTransactionsCard(): JSX.Element {
  return (
    <section className="rounded-[12px] bg-gray-50 p-6 dark:bg-gray-600">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-exo2-medium text-lg text-gray dark:text-gray-50">
            Latest Transactions
          </p>
          <p className="text-sm font-exo2-medium text-gray-300">
            Recent payments across channels
          </p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange"
        >
          See all Transactions
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="mt-6 space-y-4">
        <div className="hidden grid-cols-[1.4fr,1fr,1fr,1fr,auto] items-center text-xs uppercase tracking-wide text-gray-300 md:grid">
          <span>Ref ID</span>
          <span>Payment Amount</span>
          <span>Crypto Amount</span>
          <span>Channel</span>
          <span className="text-right">Status</span>
        </div>
        <div className="divide-y divide-gray-100 dark:divide-gray-500/30">
          {LATEST_TRANSACTIONS.map(transaction => (
            <div
              key={transaction.id}
              className="grid grid-cols-1 gap-3 py-4 md:grid-cols-[1.4fr,1fr,1fr,1fr,auto] md:items-center md:gap-4"
            >
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {transaction.id}
                </p>
                <p className="mt-1 text-xs text-gray-400 md:hidden">
                  {transaction.channel}
                </p>
              </div>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {transaction.paymentAmount} {transaction.fiatCurrency}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300">
                {transaction.cryptoAmount} {transaction.cryptoSymbol}
              </div>
              <div className="hidden text-sm font-medium text-gray-500 dark:text-gray-300 md:block">
                {transaction.channel}
              </div>
              <div className="flex items-center justify-between md:justify-end">
                <Badge variant={STATUS_VARIANTS[transaction.status]}>
                  {STATUS_LABELS[transaction.status]}
                </Badge>
                <ArrowRight
                  className="h-4 w-4 text-gray-300 md:hidden"
                  aria-hidden
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
