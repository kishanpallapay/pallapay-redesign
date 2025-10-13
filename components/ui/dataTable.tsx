"use client";

import { JSX, type ComponentProps, ReactNode } from "react";
import { EllipsisVertical } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type TransactionStatus = "completed" | "processing" | "canceled" | "failed";

// Column configuration types
export type ColumnType =
  | "text"
  | "number"
  | "currency"
  | "crypto"
  | "status"
  | "date"
  | "badge"
  | "custom";

export interface ColumnConfig {
  key: string;
  label: string;
  type: ColumnType;
  align?: "left" | "center" | "right";
  width?: string;
  formatter?: (value: any, row: any) => string;
  render?: (value: any, row: any) => ReactNode;
}

interface TableProps {
  columns: ColumnConfig[];
  data: any[];
  title?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  rowMenuLabel?: string;
  onRowMenuClick?: (row: any) => void;
  cryptoIcons?: Record<string, (props: any) => JSX.Element>;
}

// Default formatters
const FIAT_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 0,
});

const CRYPTO_FORMATTER = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 5,
});

const DATE_FORMATTER = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const STATUS_LABELS: Record<TransactionStatus, string> = {
  completed: "Completed",
  processing: "Processing",
  canceled: "Canceled",
  failed: "Failed",
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

const createLetterCryptoIcon = (letter: string, backgroundColor: string) => {
  const Icon = ({ className = "h-6 w-6" }: any): JSX.Element => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="12" fill={backgroundColor} />
      <text
        x="12"
        y="16"
        textAnchor="middle"
        fontSize="11"
        fill="#FFFFFF"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
      >
        {letter}
      </text>
    </svg>
  );
  Icon.displayName = `CryptoIcon${letter}`;
  return Icon;
};

const DEFAULT_CRYPTO_ICONS: Record<string, (props: any) => JSX.Element> = {
  USDT: createLetterCryptoIcon("T", "#16A34A"),
  ETH: createLetterCryptoIcon("E", "#3B82F6"),
  TRX: createLetterCryptoIcon("TR", "#EF4444"),
  BTC: createLetterCryptoIcon("B", "#F59E0B"),
};

const DEFAULT_CRYPTO_ICON = createLetterCryptoIcon("?", "#9CA3AF");

// Utility function to get cell value
const getCellValue = (row: any, key: string): any => {
  return key.split(".").reduce((obj, k) => obj?.[k], row);
};

// Render cell content based on column type
const renderCellContent = (
  value: any,
  columnConfig: ColumnConfig,
  row: any,
  cryptoIcons: Record<string, (props: any) => JSX.Element>
): ReactNode => {
  if (columnConfig.render) {
    return columnConfig.render(value, row);
  }

  if (columnConfig.formatter) {
    return columnConfig.formatter(value, row);
  }

  switch (columnConfig.type) {
    case "currency": {
      const currency =
        row[columnConfig.key + "Currency"] || row.fiatCurrency || "USD";
      return `${FIAT_FORMATTER.format(value)} ${currency}`;
    }

    case "crypto": {
      const symbol = row[columnConfig.key + "Symbol"] || row.cryptoSymbol;
      const CryptoIcon = cryptoIcons[symbol] || DEFAULT_CRYPTO_ICON;
      return (
        <div className="flex items-center gap-2">
          <CryptoIcon className="h-6 w-6" />
          <span className="text-sm font-exo2-medium text-gray-900 dark:text-white">
            {CRYPTO_FORMATTER.format(value)} {symbol}
          </span>
        </div>
      );
    }

    case "date":
      return DATE_FORMATTER.format(new Date(value));

    case "status": {
      const status = value as TransactionStatus;
      return (
        <Badge
          variant={STATUS_VARIANTS[status] || "default"}
          className="px-3 py-1 text-xs font-exo2-medium"
        >
          {STATUS_LABELS[status] || value}
        </Badge>
      );
    }

    case "badge":
      return (
        <Badge className="px-3 py-1 text-xs font-exo2-medium">{value}</Badge>
      );

    case "number":
      return FIAT_FORMATTER.format(value);

    case "text":
    case "custom":
    default:
      return value;
  }
};

export function DataTable({
  columns,
  data,
  rowMenuLabel = "Open transaction actions",
  onRowMenuClick,
  cryptoIcons = {},
}: TableProps): JSX.Element {
  const mergedCryptoIcons = { ...DEFAULT_CRYPTO_ICONS, ...cryptoIcons };

  return (
    <Table className="min-w-[920px] text-sm">
      <TableHeader>
        <TableRow className="border-none">
          {columns.map(column => (
            <TableHead
              key={column.key}
              className={`px-5 py-3 text-sm font-exo2-medium tracking-wide text-gray-300 dark:text-gray-300 ${
                column.align === "right" ? "text-right" : ""
              }`}
              style={column.width ? { width: column.width } : {}}
            >
              {column.label}
            </TableHead>
          ))}
          {onRowMenuClick && (
            <TableHead className="px-5 py-3 text-end text-sm font-exo2-medium tracking-wide text-gray-300 dark:text-gray-300"></TableHead>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow
            key={row.id || rowIndex}
            className="border-t border-gray-100 transition-colors hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-700/70"
          >
            {columns.map(column => {
              const value = getCellValue(row, column.key);
              const textAlignClass =
                column.align === "right"
                  ? "text-right"
                  : column.align === "center"
                  ? "text-center"
                  : "";

              return (
                <TableCell
                  key={`${row.id || rowIndex}-${column.key}`}
                  className={`px-5 py-4 ${textAlignClass} ${
                    column.type !== "crypto"
                      ? "text-sm font-exo2-medium text-gray-900 dark:text-white"
                      : ""
                  }`}
                >
                  {renderCellContent(value, column, row, mergedCryptoIcons)}
                </TableCell>
              );
            })}
            {onRowMenuClick && (
              <TableCell className="px-5 py-4 text-end">
                <button
                  type="button"
                  onClick={() => onRowMenuClick(row)}
                  className="rounded-full p-1.5 text-gray-400 transition hover:text-gray-600 dark:text-gray-200 dark:hover:text-white"
                  aria-label={rowMenuLabel}
                >
                  <EllipsisVertical className="h-4 w-4" aria-hidden />
                </button>
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

// Example Usage Component
const EXAMPLE_COLUMNS: ColumnConfig[] = [
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

const EXAMPLE_DATA = [
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
];

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 p-4">
      <DataTable
        columns={EXAMPLE_COLUMNS}
        data={EXAMPLE_DATA}
        title="Latest Transactions:"
        actionLabel="See all Transactions"
        onActionClick={() => console.log("View all transactions")}
        onRowMenuClick={row => console.log("Row menu clicked:", row)}
      />
    </div>
  );
}
