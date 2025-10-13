"use client";
import { useState, useMemo } from "react";
import { withResponsiveLayout } from "@/components/layouts/with-responsive-layout";
import { DataTable } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SmartPagination } from "@/components/ui/pagination";
import {
  MoreVertical,
  ChevronRight,
  Filter,
  Download,
  Search,
} from "lucide-react";
import Btc from "@/components/icons/crypto/Btc";
import Eth from "@/components/icons/crypto/Eth";
import Ltc from "@/components/icons/crypto/Ltc";
import Generic from "@/components/icons/crypto/Generic";
import { useRouter } from "next/navigation";

type Transaction = {
  refId: string;
  paymentAmount: string;
  cryptoAmount: string;
  cryptoIcon: React.ComponentType<{ className?: string }>;
  type: "Deposit" | "Withdrawal" | "Trade";
  status: "Success" | "Processing" | "Failed";
  date: string;
};
type StatusVariants = "success" | "process" | "destructive";
const transactions: Transaction[] = [
  {
    refId: "PP12345",
    paymentAmount: "$1,000.00",
    cryptoAmount: "0.025 BTC",
    cryptoIcon: Btc,
    type: "Deposit",
    status: "Success",
    date: "2024-10-12",
  },
  {
    refId: "PP12346",
    paymentAmount: "$500.00",
    cryptoAmount: "1.5 ETH",
    cryptoIcon: Eth,
    type: "Withdrawal",
    status: "Processing",
    date: "2024-10-11",
  },
  {
    refId: "PP12347",
    paymentAmount: "$2,500.00",
    cryptoAmount: "2,500 USDT",
    cryptoIcon: Generic,
    type: "Trade",
    status: "Success",
    date: "2024-10-10",
  },
  {
    refId: "PP12348",
    paymentAmount: "$300.00",
    cryptoAmount: "0.5 LTC",
    cryptoIcon: Ltc,
    type: "Deposit",
    status: "Failed",
    date: "2024-10-09",
  },
  {
    refId: "PP12349",
    paymentAmount: "$1,200.00",
    cryptoAmount: "1,200 USDC",
    cryptoIcon: Generic,
    type: "Withdrawal",
    status: "Success",
    date: "2024-10-08",
  },
  {
    refId: "PP12350",
    paymentAmount: "$750.00",
    cryptoAmount: "0.02 BTC",
    cryptoIcon: Btc,
    type: "Deposit",
    status: "Success",
    date: "2024-10-07",
  },
  {
    refId: "PP12351",
    paymentAmount: "$250.00",
    cryptoAmount: "0.8 ETH",
    cryptoIcon: Eth,
    type: "Withdrawal",
    status: "Processing",
    date: "2024-10-06",
  },
  {
    refId: "PP12352",
    paymentAmount: "$3,000.00",
    cryptoAmount: "3,000 USDT",
    cryptoIcon: Generic,
    type: "Trade",
    status: "Success",
    date: "2024-10-05",
  },
  {
    refId: "PP12353",
    paymentAmount: "$150.00",
    cryptoAmount: "0.2 LTC",
    cryptoIcon: Ltc,
    type: "Deposit",
    status: "Failed",
    date: "2024-10-04",
  },
  {
    refId: "PP12354",
    paymentAmount: "$1,500.00",
    cryptoAmount: "1,500 USDC",
    cryptoIcon: Generic,
    type: "Withdrawal",
    status: "Success",
    date: "2024-10-03",
  },
  {
    refId: "PP12355",
    paymentAmount: "$900.00",
    cryptoAmount: "0.022 BTC",
    cryptoIcon: Btc,
    type: "Deposit",
    status: "Success",
    date: "2024-10-02",
  },
  {
    refId: "PP12356",
    paymentAmount: "$600.00",
    cryptoAmount: "1.2 ETH",
    cryptoIcon: Eth,
    type: "Withdrawal",
    status: "Processing",
    date: "2024-10-01",
  },
  {
    refId: "PP12357",
    paymentAmount: "$2,000.00",
    cryptoAmount: "2,000 USDT",
    cryptoIcon: Generic,
    type: "Trade",
    status: "Success",
    date: "2024-09-30",
  },
  {
    refId: "PP12358",
    paymentAmount: "$400.00",
    cryptoAmount: "0.8 LTC",
    cryptoIcon: Ltc,
    type: "Deposit",
    status: "Failed",
    date: "2024-09-29",
  },
  {
    refId: "PP12359",
    paymentAmount: "$1,800.00",
    cryptoAmount: "1,800 USDC",
    cryptoIcon: Generic,
    type: "Withdrawal",
    status: "Success",
    date: "2024-09-28",
  },
];

const statusVariant: { [key: string]: StatusVariants } = {
  Success: "success",
  Processing: "process",
  Failed: "destructive",
};

function TransactionsContent() {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return transactions.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);
  const router = useRouter();
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, transactions.length);

  const columns = [
    {
      label: "Ref ID",
      name: "refId",
    },
    {
      label: "Payment Amount",
      name: "paymentAmount",
      className: "whitespace-normal",
    },
    {
      label: "Crypto Amount",
      name: "cryptoAmount",
      className: "hidden md:table-cell",
      value: (row: Transaction) => (
        <div className="flex items-center gap-2">
          <row.cryptoIcon className="h-6 w-6" />
          <span>{row.cryptoAmount}</span>
        </div>
      ),
    },
    {
      label: "Type",
      name: "type",
      className: "hidden md:table-cell",
    },
    {
      label: "Status",
      name: "status",
      value: (row: Transaction) => (
        <Badge variant={statusVariant[row.status]}>{row.status}</Badge>
      ),
    },
    {
      label: "Date",
      name: "date",
      className: "hidden md:table-cell",
    },
    {
      label: "",
      name: "actions",
      value: (row: Transaction) => (
        <div>
          <div className="hidden md:block">
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
          <div className="md:hidden">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedTransaction(row)}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DrawerTrigger>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Drawer>
      <div className="w-full p-5 rounded-2xl bg-gray-50 dark:bg-gray-600 text-foreground">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between mb-4 ">
          <h1 className="text-2xl font-bold">All Transactions</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="text-foreground border-foreground"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button
              variant="outline"
              className="text-foreground border-foreground"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden mb-4">
          <div className="flex items-center justify-end">
            <Button variant="outline">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <DataTable columns={columns} data={paginatedData} />
        <div className="flex items-center justify-between mt-4 flex-wrap">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex} to {endIndex} of {transactions.length} results
          </div>
          <div>
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
        {selectedTransaction && (
          <DrawerContent>
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle>Transaction Details</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>

            <div className="px-4 py-4 grid gap-4">
              {[
                { label: "Ref ID", value: selectedTransaction.refId },
                {
                  label: "Payment Amount",
                  value: selectedTransaction.paymentAmount,
                },
                {
                  label: "Crypto Amount",
                  value: selectedTransaction.cryptoAmount,
                },
                { label: "Type", value: selectedTransaction.type },
                { label: "Date of Create", value: selectedTransaction.date },
              ].map(item => (
                <div
                  key={item.label}
                  className="grid grid-cols-2 items-center gap-4"
                >
                  <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                    {item.label} :
                  </span>
                  <span className="text-left font-semibold text-gray-800 dark:text-gray-100">
                    {item.value}
                  </span>
                </div>
              ))}

              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Status :
                </span>
                <Badge variant={statusVariant[selectedTransaction.status]}>
                  {selectedTransaction.status}
                </Badge>
              </div>

              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1 text-foreground border-foreground w-full"
                  onClick={() =>
                    router.push(`/transactions/${selectedTransaction.refId}`)
                  }
                >
                  Show More Detail
                </Button>
              </div>
            </div>
          </DrawerContent>
        )}
      </div>
    </Drawer>
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
