"use client";

import type { JSX } from "react";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Download, Filter, Search, SlidersHorizontal } from "lucide-react";

import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable, type ColumnConfig } from "@/components/ui/dataTable";
import {
  MobileDataTable,
  type RowAction,
} from "@/components/ui/mobileDataTable";
import { SmartPagination } from "@/components/ui/pagination";
import Btc from "@/components/icons/crypto/Btc";
import Eth from "@/components/icons/crypto/Eth";
import Generic from "@/components/icons/crypto/Generic";
import Ltc from "@/components/icons/crypto/Ltc";

type TransactionStatus = "completed" | "processing" | "failed";
type TransactionType = "Deposit" | "Withdrawal" | "Trade";
type CryptoSymbol = "BTC" | "ETH" | "LTC" | "USDT" | "USDC";

type Transaction = {
  refId: string;
  paymentAmount: number;
  fiatCurrency: string;
  cryptoAmount: number;
  cryptoSymbol: CryptoSymbol;
  type: TransactionType;
  status: TransactionStatus;
  date: string;
};

const STATUS_DISPLAY: Record<
  TransactionStatus,
  { label: string; variant: "success" | "process" | "destructive" }
> = {
  completed: { label: "Success", variant: "success" },
  processing: { label: "Processing", variant: "process" },
  failed: { label: "Failed", variant: "destructive" },
};

const DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const CRYPTO_ICONS: Record<
  CryptoSymbol,
  (props: { className?: string }) => JSX.Element
> = {
  BTC: props => <Btc {...props} />,
  ETH: props => <Eth {...props} />,
  LTC: props => <Ltc {...props} />,
  USDT: props => <Generic {...props} />,
  USDC: props => <Generic {...props} />,
};

const transactions: Transaction[] = [
  {
    refId: "PP12345",
    paymentAmount: 1000,
    fiatCurrency: "USD",
    cryptoAmount: 0.025,
    cryptoSymbol: "BTC",
    type: "Deposit",
    status: "completed",
    date: "2024-10-12",
  },
  {
    refId: "PP12346",
    paymentAmount: 500,
    fiatCurrency: "USD",
    cryptoAmount: 1.5,
    cryptoSymbol: "ETH",
    type: "Withdrawal",
    status: "processing",
    date: "2024-10-11",
  },
  {
    refId: "PP12347",
    paymentAmount: 2500,
    fiatCurrency: "USD",
    cryptoAmount: 2500,
    cryptoSymbol: "USDT",
    type: "Trade",
    status: "completed",
    date: "2024-10-10",
  },
  {
    refId: "PP12348",
    paymentAmount: 300,
    fiatCurrency: "USD",
    cryptoAmount: 0.5,
    cryptoSymbol: "LTC",
    type: "Deposit",
    status: "failed",
    date: "2024-10-09",
  },
  {
    refId: "PP12349",
    paymentAmount: 1200,
    fiatCurrency: "USD",
    cryptoAmount: 1200,
    cryptoSymbol: "USDC",
    type: "Withdrawal",
    status: "completed",
    date: "2024-10-08",
  },
  {
    refId: "PP12350",
    paymentAmount: 750,
    fiatCurrency: "USD",
    cryptoAmount: 0.02,
    cryptoSymbol: "BTC",
    type: "Deposit",
    status: "completed",
    date: "2024-10-07",
  },
  {
    refId: "PP12351",
    paymentAmount: 250,
    fiatCurrency: "USD",
    cryptoAmount: 0.8,
    cryptoSymbol: "ETH",
    type: "Withdrawal",
    status: "processing",
    date: "2024-10-06",
  },
  {
    refId: "PP12352",
    paymentAmount: 3000,
    fiatCurrency: "USD",
    cryptoAmount: 3000,
    cryptoSymbol: "USDT",
    type: "Trade",
    status: "completed",
    date: "2024-10-05",
  },
  {
    refId: "PP12353",
    paymentAmount: 150,
    fiatCurrency: "USD",
    cryptoAmount: 0.2,
    cryptoSymbol: "LTC",
    type: "Deposit",
    status: "failed",
    date: "2024-10-04",
  },
  {
    refId: "PP12354",
    paymentAmount: 1500,
    fiatCurrency: "USD",
    cryptoAmount: 1500,
    cryptoSymbol: "USDC",
    type: "Withdrawal",
    status: "completed",
    date: "2024-10-03",
  },
  {
    refId: "PP12355",
    paymentAmount: 900,
    fiatCurrency: "USD",
    cryptoAmount: 0.022,
    cryptoSymbol: "BTC",
    type: "Deposit",
    status: "completed",
    date: "2024-10-02",
  },
  {
    refId: "PP12356",
    paymentAmount: 600,
    fiatCurrency: "USD",
    cryptoAmount: 1.2,
    cryptoSymbol: "ETH",
    type: "Withdrawal",
    status: "processing",
    date: "2024-10-01",
  },
  {
    refId: "PP12357",
    paymentAmount: 2000,
    fiatCurrency: "USD",
    cryptoAmount: 2000,
    cryptoSymbol: "USDT",
    type: "Trade",
    status: "completed",
    date: "2024-09-30",
  },
  {
    refId: "PP12358",
    paymentAmount: 400,
    fiatCurrency: "USD",
    cryptoAmount: 0.8,
    cryptoSymbol: "LTC",
    type: "Deposit",
    status: "failed",
    date: "2024-09-29",
  },
  {
    refId: "PP12359",
    paymentAmount: 1800,
    fiatCurrency: "USD",
    cryptoAmount: 1800,
    cryptoSymbol: "USDC",
    type: "Withdrawal",
    status: "completed",
    date: "2024-09-28",
  },
];

const formatCurrency = (amount: number, currency: string) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount);

const desktopColumns: ColumnConfig[] = [
  {
    key: "refId",
    label: "Ref ID",
    type: "text",
  },
  {
    key: "paymentAmount",
    label: "Payment Amount",
    type: "custom",
    render: (_value, row: Transaction) =>
      formatCurrency(row.paymentAmount, row.fiatCurrency),
  },
  {
    key: "cryptoAmount",
    label: "Crypto Amount",
    type: "crypto",
  },
  {
    key: "type",
    label: "Type",
    type: "text",
  },
  {
    key: "status",
    label: "Status",
    type: "status",
    render: (_value, row: Transaction) => {
      const status = STATUS_DISPLAY[row.status];
      return <Badge variant={status.variant}>{status.label}</Badge>;
    },
  },
  {
    key: "date",
    label: "Date",
    type: "custom",
    render: (value: string) => DATE_FORMATTER.format(new Date(value)),
  },
];

const mobileColumns: ColumnConfig[] = [
  {
    key: "refId",
    label: "Ref ID",
    type: "text",
  },
  {
    key: "paymentAmount",
    label: "Payment Amount",
    type: "custom",
    render: (_value, row: Transaction) =>
      formatCurrency(row.paymentAmount, row.fiatCurrency),
  },
  {
    key: "status",
    label: "Status",
    type: "status",
    render: (_value, row: Transaction) => {
      const status = STATUS_DISPLAY[row.status];
      return <Badge variant={status.variant}>{status.label}</Badge>;
    },
  },
];

const detailColumns: ColumnConfig[] = [
  desktopColumns[0],
  desktopColumns[1],
  desktopColumns[2],
  {
    key: "type",
    label: "Type",
    type: "text",
  },
  desktopColumns[4],
  desktopColumns[5],
];

function TransactionsContent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const router = useRouter();

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return transactions.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, transactions.length);

  const handleRowMenuClick = (transaction: Transaction) => {
    router.push(`/transactions/${transaction.refId}`);
  };

  const getMobileRowActions = (transaction: Transaction): RowAction[] => {
    const actions: RowAction[] = [
      {
        label: "Show More Detail",
        variant: "outline",
        className: "border-gray text-gray dark:text-white dark:border-white",
        size: "lg",
        onClick: () => router.push(`/transactions/${transaction.refId}`),
        closeOnClick: true,
      },
    ];

    return actions;
  };

  return (
    <>
      <div className="mb-4 md:hidden">
        <div className="flex items-center justify-end px-0.5 ">
          <Button
            variant="outline"
            className="border-gray dark:border-white text-gray dark:text-white"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <label
            htmlFor="transactions-mobile-search"
            className="flex flex-1 items-center gap-2 h-11 rounded-[8px] border border-gray-200 bg-white px-4 py-2 text-sm shadow-sm transition-all focus-within:border-gray-400 focus-within:ring-2 focus-within:ring-gray-200 dark:border-gray-500 dark:bg-gray-600 dark:focus-within:border-gray-300 dark:focus-within:ring-gray-300/40"
          >
            <Search className="h-6 w-6 text-gray-300 transition-colors dark:text-gray-200" />
            <input
              id="transactions-mobile-search"
              type="search"
              placeholder="Search"
              className="w-full bg-transparent font-exo2-regular text-sm text-gray-700 placeholder:text-gray-300 focus:outline-none dark:text-white "
            />
          </label>
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1 rounded-full px-0 !pl-4 py-2  text-sm font-exo2-medium text-gray-500 hover:scale-100 hover:bg-transparent hover:opacity-100 hover:text-foreground active:scale-100 active:opacity-100 focus-visible:ring-transparent dark:text-white dark:hover:text-gray-100"
          >
            Filter
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="w-full rounded-2xl bg-gray-50 text-foreground dark:bg-gray-600 pb-5">
        {/* Desktop Header */}
        <div className="mb-4 hidden items-center justify-between md:flex">
          <h1 className="text-2xl font-bold">All Transactions</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-foreground text-foreground"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button
              variant="outline"
              className="border-foreground text-foreground"
            >
              <Download className="mr-2 h-4 w-4" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Mobile Header */}

        <div className="hidden md:block">
          <DataTable
            columns={desktopColumns}
            data={paginatedTransactions}
            onRowMenuClick={handleRowMenuClick}
            rowMenuLabel="View transaction details"
            cryptoIcons={CRYPTO_ICONS}
          />
        </div>

        <div className="block md:hidden">
          <MobileDataTable
            columns={mobileColumns}
            data={paginatedTransactions}
            detailColumns={detailColumns}
            detailTitle="Transaction Details"
            rowMenuLabel="View transaction actions"
            getRowActions={getMobileRowActions}
            cryptoIcons={CRYPTO_ICONS}
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 px-2">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex} to {endIndex} of {transactions.length} results
          </div>
          <div className="md:w-fit sm:w-full">
            <SmartPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              onItemsPerPageChange={setItemsPerPage}
              perPageOptions={[5, 10, 15]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const TransactionsPage = withResponsiveLayout(TransactionsContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Transactions
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Transactions</span>
  ),
});

export default TransactionsPage;
