"use client";
import { useState, useMemo } from "react";
import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
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
  Download,
  Search,
  SlidersHorizontal,
  PlusIcon,
} from "lucide-react";
import Btc from "@/components/icons/crypto/Btc";
import Eth from "@/components/icons/crypto/Eth";
import Ltc from "@/components/icons/crypto/Ltc";
import Generic from "@/components/icons/crypto/Generic";
import { useRouter } from "next/navigation";

type Withdrawal = {
  refId: string;
  withdrawalAmount: string;
  cryptoAmount: string;
  cryptoIcon: React.ComponentType<{ className?: string }>;
  status: "Completed" | "Rejected" ;
  date: string;
};
type StatusVariants = "success" | "process" | "destructive";
const withdrawalData: Withdrawal[] = [
  {
    refId: "PP12345",
    withdrawalAmount: "1,000 AED",
    cryptoAmount: "0.025 BTC",
    cryptoIcon: Btc,
    status: "Completed",
    date: "2024-10-12",
  },
  {
    refId: "PP12346",
    withdrawalAmount: "500 AED",
    cryptoAmount: "1.5 ETH",
    cryptoIcon: Eth,
    status: "Rejected",
    date: "2024-10-11",
  },
  {
    refId: "PP12347",
    withdrawalAmount: "2,500 AED",
    cryptoAmount: "2,500 USDT",
    cryptoIcon: Generic,
    status: "Completed",
    date: "2024-10-10",
  },
  {
    refId: "PP12348",
    withdrawalAmount: "300 AED",
    cryptoAmount: "0.5 LTC",
    cryptoIcon: Ltc,
    status: "Rejected",
    date: "2024-10-09",
  },
  {
    refId: "PP12349",
    withdrawalAmount: "1,200 AED",
    cryptoAmount: "1,200 USDC",
    cryptoIcon: Generic,
    status: "Completed",
    date: "2024-10-08",
  },
  {
    refId: "PP12350",
    withdrawalAmount: "750 AED",
    cryptoAmount: "0.02 BTC",
    cryptoIcon: Btc,
    status: "Completed",
    date: "2024-10-07",
  },
  {
    refId: "PP12351",
    withdrawalAmount: "250 AED",
    cryptoAmount: "0.8 ETH",
    cryptoIcon: Eth,
    status: "Rejected",
    date: "2024-10-06",
  },
  {
    refId: "PP12352",
    withdrawalAmount: "3,000 AED",
    cryptoAmount: "3,000 USDT",
    cryptoIcon: Generic,

    status: "Completed",
    date: "2024-10-05",
  },
  {
    refId: "PP12353",
    withdrawalAmount: "150 AED",
    cryptoAmount: "0.2 LTC",
    cryptoIcon: Ltc,

    status: "Rejected",
    date: "2024-10-04",
  },
  {
    refId: "PP12354",
    withdrawalAmount: "1,500 AED",
    cryptoAmount: "1,500 USDC",
    cryptoIcon: Generic,
 
    status: "Completed",
    date: "2024-10-03",
  },
  {
    refId: "PP12355",
    withdrawalAmount: "900 AED",
    cryptoAmount: "0.022 BTC",
    cryptoIcon: Btc,
    status: "Completed",
    date: "2024-10-02",
  },
  {
    refId: "PP12356",
    withdrawalAmount: "600 AED",
    cryptoAmount: "1.2 ETH",
    cryptoIcon: Eth,
    status: "Rejected",
    date: "2024-10-01",
  },
  {
    refId: "PP12357",
    withdrawalAmount: "2,000 AED",
    cryptoAmount: "2,000 USDT",
    cryptoIcon: Generic,
    status: "Completed",
    date: "2024-09-30",
  },
  {
    refId: "PP12358",
    withdrawalAmount: "400 AED",
    cryptoAmount: "0.8 LTC",
    cryptoIcon: Ltc,
    status: "Rejected",
    date: "2024-09-29",
  },
  {
    refId: "PP12359",
    withdrawalAmount: "1,800 AED",
    cryptoAmount: "1,800 USDC",
    cryptoIcon: Generic,
    status: "Completed",
    date: "2024-09-28",
  },
];

const statusVariant: { [key: string]: StatusVariants } = {
  Completed: "success",
  Rejected: "destructive",
};

function CryptoWithdrawalsContent() {
  const [selectedTransaction, setSelectedTransaction] =
    useState<Withdrawal | null>(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return withdrawalData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const totalPages = Math.ceil(withdrawalData.length / itemsPerPage);
  const router = useRouter();
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, withdrawalData.length);

  const columns = [
    {
      label: "Ref ID",
      name: "refId",
    },
    {
      label: "Withdrawal Amount",
      name: "withdrawalAmount",
      className: "whitespace-normal",
    },
    {
      label: "Receiving Crypto Amount",
      name: "cryptoAmount",
      className: "hidden md:table-cell",
      value: (row: Withdrawal) => (
        <div className="flex items-center gap-2">
          <row.cryptoIcon className="h-6 w-6" />
          <span>{row.cryptoAmount}</span>
        </div>
      ),
    },
    {
      label: "Status",
      name: "status",
      value: (row: Withdrawal) => (
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
      value: (row: Withdrawal) => (
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
          <h1 className="text-2xl font-bold">Crypto Withdrawals :</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="flex items-center border-foreground text-foreground"
            >
              <span className="mr-2">Filter</span>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="text-foreground border-foreground"
            >
              Export Data
              <Download className="h-4 w-4 ml-2" />
            </Button>
            <Button

              className="!text-black"
            >
              Create New Widrawal
              <PlusIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden mb-4">
          <div className="flex items-center justify-between w-full gap-2">
            <Button variant="outline"  className="text-foreground border-foreground">
              Export
              <Download className="h-4 w-4 ml-2" />
            </Button>
            <Button

              className="!text-black"
            >
              Create New Widrawal
              <PlusIcon className="h-4 w-4 ml-2" />
            </Button>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10" />
            </div>
            <Button
              variant="outline"
              className="flex items-center border-foreground text-foreground"
            >
              <span className="mr-2">Filter</span>
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <DataTable columns={columns} data={paginatedData} />
        <div className="flex items-center justify-between mt-4 flex-wrap">
          <div className="text-sm text-muted-foreground">
            Showing {startIndex} to {endIndex} of {withdrawalData.length} results
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
              <DrawerTitle>Crypto Withdrawal Details</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>

            <div className="px-4 py-4 grid gap-4">
              {[
                { label: "Ref ID", value: selectedTransaction.refId },
                {
                  label: "Payment Amount",
                  value: selectedTransaction.withdrawalAmount,
                },
                {
                  label: "Crypto Amount",
                  value: selectedTransaction.cryptoAmount,
                },
             
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
                    router.push(`/cryptowithdrawals/${selectedTransaction.refId}`)
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

const CryptoWithdrawalsPage = withResponsiveLayout(CryptoWithdrawalsContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Crypto Withdrawals
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Crypto Withdrawals</span>
  ),
});

export default CryptoWithdrawalsPage;
