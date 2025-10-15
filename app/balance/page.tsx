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
  SlidersHorizontal,
  Download,
  Search,
  Wallet,
  ChevronLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/useIsMobile";

type Balance = {
  event: "Debit" | "Credit"
  amount: string;
  reason: string;
  balance: string;
  date: string;
};

type StatusVariants = "success" | "destructive";

const balances: Balance[] = [
  {
    event: "Credit",
    amount: "$1,000.00",
    reason: "Crypto Deposit",
    balance: "$5,000.00",
    date: "2024-10-12",
  },
  {
    event: "Debit",
    amount: "$500.00",
    reason: "Bank Transfer",
    balance: "$4,500.00",
    date: "2024-10-11",
  },
  {
    event: "Debit",
    amount: "$2,500.00",
    reason: "BTC Purchase",
    balance: "$2,000.00",
    date: "2024-10-10",
  },
  {
    event: "Credit",
    amount: "$300.00",
    reason: "Crypto Deposit",
    balance: "$2,300.00",
    date: "2024-10-09",
  },
  {
    event: "Debit",
    amount: "$1,200.00",
    reason: "Bank Transfer",
    balance: "$1,100.00",
    date: "2024-10-08",
  },
  {
    event: "Credit",
    amount: "$1,000.00",
    reason: "Crypto Deposit",
    balance: "$5,000.00",
    date: "2024-10-12",
  },
  {
    event: "Debit",
    amount: "$500.00",
    reason: "Bank Transfer",
    balance: "$4,500.00",
    date: "2024-10-11",
  },
  {
    event: "Debit",
    amount: "$2,500.00",
    reason: "BTC Purchase",
    balance: "$2,000.00",
    date: "2024-10-10",
  },
  {
    event: "Credit",
    amount: "$300.00",
    reason: "Crypto Deposit",
    balance: "$2,300.00",
    date: "2024-10-09",
  },
  {
    event: "Debit",
    amount: "$1,200.00",
    reason: "Bank Transfer",
    balance: "$1,100.00",
    date: "2024-10-08",
  },
];

const statusVariant: { [key: string]: StatusVariants } = {
  Credit: "success",
  Debit: "destructive",
};

function BalancesContent() {
  const [selectedBalance, setSelectedBalance] =
    useState<Balance | null>(null);
  const [showAll, setShowAll] = useState(false);
  const isMobile = useIsMobile();

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return balances.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const mobileData = useMemo(() => {
    return balances.slice(0, 3);
  }, []);

  const data = isMobile && !showAll ? mobileData : paginatedData;

  const totalPages = Math.ceil(balances.length / itemsPerPage);
  const router = useRouter();
  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, balances.length);

  const columns = [
    {
      label: "Event",
      name: "event",
      value: (row: Balance) => (
        <Badge variant={statusVariant[row.event]}>{row.event}</Badge> 
      ),
    },
    {
      label: "Amount",
      name: "amount",
    },
    {
      label: "Reason",
      name: "reason",
      className: "hidden md:table-cell",
    },
    {
      label: "Balance",
      name: "balance",
      className: "hidden md:table-cell",
    },
    {
      label: "Date",
      name: "date",
    },
    {
      label: "",
      name: "actions",
      value: (row: Balance) => (
        <div>
          <div className="md:hidden">
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSelectedBalance(row)}
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
      <section
        className={`flex justify-between gap-2 md:gap-4 md:flex-nowrap flex-wrap ${isMobile && showAll ? "hidden" : "flex"
          }`}>
        {/* AED Balance Card */}
        <div className="relative flex flex-col justify-between bg-orange-100 text-gray-900 dark:text-white dark:bg-transparent dark:border dark:border-orange-100 rounded-2xl p-5 mb-4 md:w-1/2 w-full shadow-sm overflow-hidden">
          {/* Left-side radial gradient in dark mode */}
          <div className="hidden dark:block absolute top-0 left-0 h-full w-1/2 
                  bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,175,26,0.15)_0%,_rgba(255,175,26,0)_100%)]
                  pointer-events-none z-0"></div>
          {/* Header */}
          <div className="flex items-center space-x-3 mb-3">
            <Wallet className="w-6 h-6 " />
            <p className="text-sm font-medium opacity-80">Total AED Balance</p>
          </div>

          {/* Content */}
          <div className="flex justify-between w-full items-end">
            {/* Left: Total */}
            <div>
              <h2 className="text-2xl font-bold">
                18,055 <span className="ml-1 text-base font-semibold">AED</span>
              </h2>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col items-start text-sm text-gray-800 dark:text-gray-200 space-y-1">
              <p>
                <span className="font-medium">Available Amount:</span> 18,055
              </p>
              <p>
                <span className="font-medium">Locked Amount:</span> 0
              </p>
            </div>
          </div>
        </div>

        {/* USD Balance Card */}
        <div className="flex flex-col justify-between bg-gray-200 text-gray-900 dark:text-white dark:bg-transparent dark:border dark:border-white rounded-2xl p-5 mb-4 md:w-1/2 w-full shadow-sm relative">
          {/* Header */}

          <div className="hidden dark:block absolute top-0 left-0 h-full w-1/2 
                  bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(255,255,255,0.15)_0%,_rgba(255,175,26,0)_100%)]
                  pointer-events-none z-0"></div>
          <div className="flex items-center space-x-3 mb-3">
            <Wallet className="w-6 h-6" />
            <p className="text-sm font-medium opacity-80">Total USD Balance</p>
          </div>

          {/* Content */}
          <div className="flex justify-between w-full items-end">
            {/* Left: Total */}
            <div>
              <h2 className="text-2xl font-bold">
                250.55 <span className="ml-1 text-base font-semibold">$</span>
              </h2>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col items-start text-sm text-gray-800 dark:text-gray-200 space-y-1">
              <p>
                <span className="font-medium">Available Amount:</span> 250.55
              </p>
              <p>
                <span className="font-medium">Locked Amount:</span> 0
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Header */}
      <div className="md:hidden mb-4">
        {isMobile && !showAll && (
          <h1 className="text-2xl font-bold">Balances History</h1>
        )}
        {isMobile && showAll && (
          <div>
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowAll(false)}>
                <ChevronLeft className="h-6 w-6 text-foreground" />
              </Button>
              <h1 className="text-xl font-bold">Balances History</h1>
              <div />
            </div>
            <div className="flex items-center justify-end mt-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Data
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="relative flex-grow">
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-10" />
              </div>
                <Button variant="outline" className="flex items-center h-full border-foreground text-foreground">
                  <span className="mr-2">Filter</span>
                  <SlidersHorizontal className="h-4 w-4" />
                </Button>
            </div>
          </div>
        )}
      </div>
      <div className="w-full p-5 rounded-2xl bg-gray-50 dark:bg-gray-600 text-foreground">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between mb-4 ">
          <h1 className="text-2xl font-bold">Balances History</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="text-foreground border-foreground flex items-center"
            >
              <span className="mr-2">Filter</span>
              <SlidersHorizontal className="h-4 w-4" />
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



        <DataTable columns={columns} data={data} />
        {isMobile && !showAll && (
          <div className="md:hidden mt-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setShowAll(true)}
            >
              See all balance history
            </Button>
          </div>
        )}
        {(!isMobile || showAll) && (
          <div className="flex items-center justify-between mt-4 flex-wrap">
            <div className="text-sm text-muted-foreground">
              Showing {startIndex} to {endIndex} of {balances.length} results
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
        )}
        {selectedBalance && (
          <DrawerContent>
            <DrawerHeader className="flex justify-between items-center">
              <DrawerTitle>Balance Details</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>

            <div className="px-4 py-4 grid gap-4">
              {/* Event with Badge */}
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Event :
                </span>
                <Badge variant={statusVariant[selectedBalance.event]}>
                  {selectedBalance.event}
                </Badge>
              </div>

              {/* Reason */}
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Reason :
                </span>
                <span className="text-left font-semibold text-gray-800 dark:text-gray-100">
                  {selectedBalance.reason}
                </span>
              </div>

              {/* Amount */}
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Amount :
                </span>
                <span className="text-left font-semibold text-gray-800 dark:text-gray-100">
                  {selectedBalance.amount}
                </span>
              </div>

              {/* Balance */}
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Balance :
                </span>
                <span className="text-left font-semibold text-gray-800 dark:text-gray-100">
                  {selectedBalance.balance}
                </span>
              </div>

              {/* Date of Creation */}
              <div className="grid grid-cols-2 items-center gap-4">
                <span className="text-left font-medium text-gray-500 dark:text-gray-400">
                  Date :
                </span>
                <span className="text-left font-semibold text-gray-800 dark:text-gray-100">
                  {selectedBalance.date}
                </span>
              </div>
            </div>
          </DrawerContent>
        )}
      </div>
    </Drawer>
  );
}

const BalancesPage = withResponsiveLayout(BalancesContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Balances
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Balances</span>
  ),
});

export default BalancesPage;
