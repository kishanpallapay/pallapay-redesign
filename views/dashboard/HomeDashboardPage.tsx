"use client";

import { withResponsiveLayout } from "@/components/layouts/with-responsive-layout";
import { EstimatedBalanceCard } from "@/components/pages/dashboard/estimated-balance-card";
import { LatestTransactionsCard } from "@/components/pages/dashboard/latest-transactions-card";
import { TransactionsStatusCard } from "@/components/pages/dashboard/transactions-status-card";
import { TransactionsValueCard } from "@/components/pages/dashboard/transactions-value-card";
import { JSX } from "react";

function DashboardHomeContent(): JSX.Element {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="h-full lg:col-span-5">
          <EstimatedBalanceCard />
        </div>
        <div className="h-full lg:col-span-7">
          <TransactionsValueCard />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="order-2 lg:order-none lg:col-span-7">
          <LatestTransactionsCard />
        </div>
        <div className="lg:col-span-5">
          <TransactionsStatusCard />
        </div>
      </div>
    </div>
  );
}

export const DashboardHomePage = withResponsiveLayout(DashboardHomeContent, {
  role: "merchant",
  header: (
    <span className="font-exo2-semibold text-black dark:text-white">
      Home Page
    </span>
  ),
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Home Page</span>
  ),
});
