"use client";

import { type ComponentProps, JSX, type ReactNode, useState } from "react";
import { ChevronRight, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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

interface MobileDataTableProps {
  columns: ColumnConfig[];
  data: any[];
  onRowClick?: (row: any) => void;
  rowMenuLabel?: string;
  cryptoIcons?: Record<string, (props: any) => JSX.Element>;
  detailColumns?: ColumnConfig[];
  detailTitle?: string;
  getRowActions?: (row: any) => RowAction[];
}

export interface RowAction {
  label: string;
  onClick?: (row: any) => void;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  icon?: ReactNode;
  className?: string;
  disabled?: boolean;
  closeOnClick?: boolean;
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
        <div className="flex items-center gap-1">
          <CryptoIcon className="h-4 w-4" />
          <span className="text-xs font-exo2-medium text-gray-900 dark:text-white">
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
          className="rounded-md border-transparent px-2.5 py-1 text-xs font-exo2-medium"
        >
          {STATUS_LABELS[status] || value}
        </Badge>
      );
    }

    case "badge":
      return (
        <div className="px-2.5 py-1 text-xs font-exo2-medium rounded-md bg-gray-100 text-gray-800 w-fit">
          {value}
        </div>
      );

    case "number":
      return FIAT_FORMATTER.format(value);

    case "text":
    case "custom":
    default:
      return value;
  }
};

export function MobileDataTable({
  columns,
  data,
  onRowClick,
  rowMenuLabel = "Open transaction actions",
  cryptoIcons = {},
  detailColumns,
  detailTitle = "Transaction Details",
  getRowActions,
}: MobileDataTableProps): JSX.Element {
  const mergedCryptoIcons = { ...DEFAULT_CRYPTO_ICONS, ...cryptoIcons };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any | null>(null);
  const detailFields =
    detailColumns && detailColumns.length > 0 ? detailColumns : columns;
  const isInteractive = true;

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedRow(null);
  };

  const handleActionClick = (action: RowAction) => {
    if (!selectedRow) return;
    action.onClick?.(selectedRow);
    if (action.closeOnClick) {
      closeDrawer();
    }
  };

  const actions: RowAction[] =
    selectedRow && getRowActions ? getRowActions(selectedRow) ?? [] : [];

  return (
    <Drawer
      open={isDrawerOpen}
      onOpenChange={open => {
        setIsDrawerOpen(open);
        if (!open) {
          setSelectedRow(null);
        }
      }}
    >
      <div className="overflow-hidden rounded-lg">
        <Table className="table-auto text-sm">
          <TableHeader className="bg-gray-50 dark:bg-gray-600">
            <TableRow className="border-none">
              {columns.map(column => (
                <TableHead
                  key={column.key}
                  className={`px-2 py-3 text-xs font-exo2-medium uppercase tracking-wide text-gray-600 dark:text-gray-300 !whitespace-normal leading-tight ${
                    column.align === "right"
                      ? "text-right"
                      : column.align === "center"
                      ? "text-center"
                      : "text-left"
                  }`}
                  style={column.width ? { width: column.width } : {}}
                >
                  {column.label}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, rowIndex) => {
              return (
                <TableRow
                  key={row.id || rowIndex}
                  onClick={() => {
                    onRowClick?.(row);
                    setSelectedRow(row);
                    setIsDrawerOpen(true);
                  }}
                  onKeyDown={event => {
                    if (!isInteractive) return;
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      onRowClick?.(row);
                      setSelectedRow(row);
                      setIsDrawerOpen(true);
                    }
                  }}
                  role={isInteractive ? "button" : undefined}
                  tabIndex={isInteractive ? 0 : undefined}
                  aria-label={isInteractive ? rowMenuLabel : undefined}
                  className={`border-t border-gray-100 transition-colors first:border-t-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600/50 ${
                    isInteractive
                      ? "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-orange-200/40 dark:focus-visible:ring-offset-gray-700"
                      : ""
                  }`}
                >
                  {columns.map(column => {
                    const value = getCellValue(row, column.key);
                    const textAlignClass =
                      column.align === "right"
                        ? "text-right"
                        : column.align === "center"
                        ? "text-center"
                        : "text-left";
                    const isStatusColumn = column.type === "status";

                    return (
                      <TableCell
                        key={`${row.id || rowIndex}-${column.key}`}
                        className={`px-4 py-4 align-middle ${textAlignClass} ${
                          column.type !== "crypto"
                            ? "text-sm font-exo2-medium text-gray-900 dark:text-white"
                            : ""
                        } !whitespace-normal break-words`}
                      >
                        {isStatusColumn ? (
                          <div className="flex items-center justify-between gap-3">
                            {renderCellContent(
                              value,
                              column,
                              row,
                              mergedCryptoIcons
                            )}
                            <ChevronRight
                              aria-hidden
                              className="h-4 w-4 text-gray-300 dark:text-gray-400"
                            />
                          </div>
                        ) : (
                          renderCellContent(
                            value,
                            column,
                            row,
                            mergedCryptoIcons
                          )
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {selectedRow && (
        <DrawerContent className="bg-white dark:bg-black">
          <DrawerHeader className="px-6 pt-5 pb-2 text-left">
            <div className="flex items-start justify-between border-b dark:border-gray-500 border-gray-100">
              <DrawerTitle className="text-lg font-exo2-semibold text-gray-900 dark:text-gray-50 mb-2.5">
                {detailTitle}
              </DrawerTitle>
              <DrawerClose asChild>
                <button
                  type="button"
                  className="text-gray-400 transition hover:text-gray-600 dark:text-gray-300 dark:hover:text-gray-100"
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
              </DrawerClose>
            </div>
          </DrawerHeader>
          <div className="px-6 pb-2">
            <div className="flex flex-col gap-4 rounded-2xl py-5">
              {detailFields.map(detailColumn => {
                const value = getCellValue(selectedRow, detailColumn.key);
                const hasValue =
                  value !== null && value !== undefined && value !== "";
                const content = hasValue ? (
                  renderCellContent(
                    value,
                    detailColumn,
                    selectedRow,
                    mergedCryptoIcons
                  )
                ) : (
                  <span className="text-sm font-exo2-medium text-gray-400">
                    —
                  </span>
                );

                return (
                  <div
                    key={detailColumn.key}
                    className="flex items-start justify-between  gap-6"
                  >
                    <span className="text-sm font-exo2-medium text-gray-500 dark:text-gray-200">
                      {detailColumn.label} :
                    </span>
                    <div className="flex min-w-0 flex-1 justify-end text-right text-sm font-exo2-medium text-gray-900 dark:text-white">
                      <div className="flex max-w-full justify-end text-right">
                        {content}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {actions.length > 0 && (
            <DrawerFooter className="gap-3 pb-6 pt-4 dark:bg-gray-600">
              {actions.map((action, index) => (
                <Button
                  key={`${action.label}-${index}`}
                  variant={action.variant ?? "outline"}
                  size={action.size ?? "md"}
                  className={`w-full justify-center ${action.className ?? ""}`}
                  disabled={action.disabled}
                  onClick={() => handleActionClick(action)}
                >
                  {action.icon && (
                    <span className="mr-2 inline-flex">{action.icon}</span>
                  )}
                  {action.label}
                </Button>
              ))}
            </DrawerFooter>
          )}
        </DrawerContent>
      )}
    </Drawer>
  );
}
