"use client";

import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { AccountShell } from "@/components/pages/account/account-shell";
import {
  NotificationList,
  type NotificationItem,
} from "@/components/pages/notification/notificationList";

const notifications: NotificationItem[] = [
  {
    id: "business-verification",
    title: "Business Verification",
    description: "Your business request is confirmed.",
    timestamp: "14:40, 29/08/2025",
    status: "alert",
  },
  {
    id: "account-debited",
    title: "Account Debited",
    description: "Your account has been debited with 35.50 AED by admin.",
    timestamp: "12:05, 28/08/2025",
    status: "warning",
  },
  {
    id: "crypto-withdrawal",
    title: "Crypto Withdrawal Request",
    description: "Your crypto withdrawal request is completed.",
    timestamp: "10:00, 28/08/2025",
    status: "info",
  },
  {
    id: "fiat-withdrawal",
    title: "Fiat Withdrawal Request",
    description: "Your fiat withdrawal request is completed.",
    timestamp: "12:50, 24/08/2025",
    status: "success",
  },
  {
    id: "application-review",
    title: "Application Review",
    description: "Your application is under review.",
    timestamp: "09:15, 23/08/2025",
    status: "warning",
  },
];

function AccountNotificationsContent() {
  return (
    <AccountShell className="space-y-6">
      <header className="space-y-1">
        <h2 className="text-2xl font-exo2-semibold text-gray-900 dark:text-white">
          All Notifications
        </h2>
        <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
          Review recent updates about your account and payouts.
        </p>
      </header>

      <NotificationList notifications={notifications} />
    </AccountShell>
  );
}

export const AccountNotificationsPage = withResponsiveLayout(
  AccountNotificationsContent,
  {
    role: "merchant",
    header: (
      <span className="font-exo2-semibold text-black dark:text-white">
        Account
      </span>
    ),
    sidebarTitle: (
      <span className="text-sm font-semibold uppercase text-gray-400">
        Account
      </span>
    ),
    searchPlaceholder: "Search account",
  }
);
