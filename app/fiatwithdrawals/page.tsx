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
import { useRouter } from "next/navigation";

type Withdrawal = {
  refId: string;
  requested: string;
  fee: string;
  received: string;
  method: string;
  status: "Completed" | "Rejected";
  date: string;
};
type StatusVariants = "success" | "process" | "destructive";

const withdrawalData: Withdrawal[] = [
  {
    refId: "123456789012",
    requested: "12550 AED",
    fee: "250 AED",
    received: "12550 AED",
    method: "Cash Pickup",
    status: "Completed",
    date: "19/08/2025, 12:43",
  },
  {
    refId: "123456789013",
    requested: "10000 AED",
    fee: "200 AED",
    received: "9800 AED",
    method: "Bank Transfer",
    status: "Completed",
    date: "18/08/2025, 10:30",
  },
  {
    refId: "123456789014",
    requested: "5000 AED",
    fee: "100 AED",
    received: "4900 AED",
    method: "Cash Pickup",
    status: "Rejected",
    date: "17/08/2025, 14:00",
  },
  {
    refId: "123456789015",
    requested: "20000 AED",
    fee: "400 AED",
    received: "19600 AED",
    method: "Bank Transfer",
    status: "Completed",
    date: "16/08/2025, 09:00",
  },
];

const statusVariant: { [key: string]: StatusVariants } = {
  Completed: "success",
  Rejected: "destructive",
};

function FiatWithdrawalsContent() {
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
      label: "Requested",
      name: "requested",
      className: "whitespace-normal",
    },
    {
      label: "Fee",
      name: "fee",
      className: "hidden md:table-cell",
    },
    {
      label: "Received",
      name: "received",
      className: "hidden md:table-cell",
    },
    {
      label: "Method",
      name: "method",
      className: "hidden md:table-cell",
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
          <h1 className="text-2xl font-bold">Fiat Withdrawals :</h1>
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
              <DrawerTitle>Fiat Withdrawal Details</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>

            <div className="px-4 py-4 grid gap-4">
              {[
                { label: "Ref ID", value: selectedTransaction.refId },
                {
                  label: "Requested",
                  value: selectedTransaction.requested,
                },
                {
                  label: "Fee",
                  value: selectedTransaction.fee,
                },
                 {
                  label: "Received",
                  value: selectedTransaction.received,
                },
                {
                  label: "Method",
                  value: selectedTransaction.method,
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
                    router.push(`/fiatwithdrawals/${selectedTransaction.refId}`)
                  }
                >
                  Show More Detail
                </Button>.
              </div>
            </div>
          </DrawerContent>
        )}
      </div>
    </Drawer>
  );
}

const FiatWithdrawalsPage = withResponsiveLayout(FiatWithdrawalsContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Fiat Withdrawals
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Fiat Withdrawals</span>
  ),
});

export default FiatWithdrawalsPage;
