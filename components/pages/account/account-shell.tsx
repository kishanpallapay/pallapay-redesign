"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { accountNavItems } from "@/lib/navigation/account-nav-items";
import { AccountSidebarNav } from "./account-sidebar-nav";

type AccountShellProps = {
  children: ReactNode;
  className?: string;
};

export function AccountShell({ children, className }: AccountShellProps) {
  return (
    <div className="flex h-full flex-col overflow-y-auto bg-gray-50 px-4 py-4 dark:bg-gray-600 sm:px-6">
      <div className="grid flex-1 gap-6 lg:grid-cols-[188px_1fr]">
        <AccountSidebarNav items={accountNavItems} />
        <div className={cn("space-y-6 p-4 sm:p-6", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
