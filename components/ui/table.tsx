"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { SmartPagination } from "./pagination";
interface Column {
  label: string;
  name: string;
  className?: string;
  value?: (row: any, index?: number) => React.ReactNode;
}

interface DataTableProps {
  titleNode?: React.ReactNode;
  columns: Column[];
  data: any[];
  className?: string;
  emptyMessage?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    showFirstLast?: boolean;
    maxVisiblePages?: number;
    itemsPerPage?: number;
    onItemsPerPageChange?: (n: number) => void;
    perPageOptions?: number[];
  };
}

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted !border-b transition-colors",
        className
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  );
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  );
}

function DataTable({
  titleNode,
  columns,
  data,
  className,
  emptyMessage = "No data available",
  pagination,
}: DataTableProps) {
  console.log(columns);

  return (
    <div>
      <div>{titleNode}</div>
      <Table className={` rounded-[8px] ${className} relative`}>
        <TableHeader className="top-0 sticky">
          <TableRow className=" !border-b-transparent">
            {columns.map(column => (
              <TableHead
                key={column.name}
                className={`py-2 px-3 text-gray-400 font-exo2 font-medium text-sm ${column.className}`}
              >
                {column.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className="text-center py-8 text-gray-500"
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={index}>
                {columns.map(column => (
                  <TableCell
                    key={column.name}
                    className={`py-5 px-3  ${column.className}`}
                  >
                    {column.value ? column.value(row, index) : row[column.name]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      {pagination && (
        <div className="mt-4">
          <SmartPagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={pagination.onPageChange}
            showFirstLast={pagination.showFirstLast}
            maxVisiblePages={pagination.maxVisiblePages}
            itemsPerPage={pagination.itemsPerPage}
            onItemsPerPageChange={pagination.onItemsPerPageChange}
            perPageOptions={pagination.perPageOptions}
          />
        </div>
      )}
    </div>
  );
}
export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  DataTable,
};
