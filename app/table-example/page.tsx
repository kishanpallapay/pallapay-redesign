"use client";
import React, { useMemo, useState } from "react";

import { DataTable } from "../../components/ui/table";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";

type TxRow = {
  refId: string;
  paymentAmount: string;
  cryptoAmount: string;
  type: string;
  status: "Failed" | "Success" | "Pending";
  date: string;
};

const statusBadge = (status: TxRow["status"]) => {
  switch (status) {
    case "Success":
      return <Badge variant="success">Success</Badge>;
    case "Pending":
      return <Badge variant="process">Pending</Badge>;
    case "Failed":
    default:
      return <Badge variant="destructive">Failed</Badge>;
  }
};

export default function TableExamplePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const allData: TxRow[] = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        refId: `PP-${String(100000 + i)}`,
        paymentAmount: `${(Math.random() * 900 + 100).toFixed(2)} AED`,
        cryptoAmount: `${(Math.random() * 500 + 50).toFixed(4)} USDT`,
        type: ["Payment Link", "Direct Transfer", "Wallet Transfer"][
          Math.floor(Math.random() * 3)
        ],
        status: ["Failed", "Success", "Pending"][
          Math.floor(Math.random() * 3)
        ] as TxRow["status"],
        date: `${Math.floor(Math.random() * 28) + 1}/09/2025, ${
          Math.floor(Math.random() * 12) + 1
        }:${Math.floor(Math.random() * 60)
          .toString()
          .padStart(2, "0")}`,
      })),
    []
  );

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const pageData = allData.slice(startIndex, startIndex + itemsPerPage);

  const columns: any = [
    { label: "Ref ID", name: "refId" },
    { label: "Payment Amount", name: "paymentAmount" },
    { label: "Crypto Amount", name: "cryptoAmount" },
    { label: "Type", name: "type" },
    {
      label: "Status",
      name: "status",
      value: (row: TxRow) => statusBadge(row.status),
    },
    { label: "Date", name: "date" },
    {
      label: "Actions",
      name: "actions",
      value: (_row: TxRow, index: number) => (
        <div className="flex items-center gap-2 w-full justify-center">
          <Button size="xs" variant="outline" aria-label={`View ${index}`}>
            <Eye className="h-3.5 w-3.5 mr-1" /> View
          </Button>
          <Button size="xs" variant="outline" aria-label={`Edit ${index}`}>
            <Pencil className="h-3.5 w-3.5 mr-1" /> Edit
          </Button>
          <Button size="icon" variant="ghost" aria-label={`Delete ${index}`}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      ),
      className: "text-center",
    },
  ];

  const titleNode = (
    <div className="flex items-center justify-between mb-3">
      <h2 className="font-exo2-bold text-lg text-orange">Transactions</h2>
      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          Export CSV
        </Button>
        <Button size="sm">Create</Button>
      </div>
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto p-6">
      <section className="bg-card rounded-lg p-6 border border-border">
        <DataTable
          titleNode={titleNode}
          columns={columns}
          data={pageData}
          pagination={{
            currentPage,
            totalPages,
            onPageChange: setCurrentPage,
            showFirstLast: true,
            maxVisiblePages: 5,
            itemsPerPage,
            onItemsPerPageChange: (n: number) => {
              setItemsPerPage(n);
              setCurrentPage(1);
            },
            perPageOptions: [5, 10, 20, 50, 100],
          }}
        />
      </section>
    </main>
  );
}
