"use client";

import { useState, type JSX } from "react";
import { Bell, Headphones, Search, UserRound } from "lucide-react";

import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { AccountShell } from "@/components/pages/account/account-shell";
import { AccountMenuItem } from "@/components/pages/account/account-menu-item";
import { accountNavItems } from "@/lib/navigation/account-nav-items";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

function AccountOverviewContent(): JSX.Element {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const quickLinks = accountNavItems.filter(
    item => item.id !== "account-overview"
  );

  return (
    <AccountShell className="space-y-8">
      <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-500/30 dark:bg-gray-500/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-semibold text-gray-400 dark:bg-gray-400/40 dark:text-white">
              JD
            </div>
            <div>
              <p className="text-lg font-exo2-semibold text-gray-900 dark:text-white">
                John Doe
              </p>
              <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
                johndoe@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[Bell, Headphones, UserRound].map((Icon, index) => (
              <span
                key={Icon.displayName ?? Icon.name ?? index}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-gray-200 dark:bg-gray-400/30 dark:text-white dark:hover:bg-gray-400/40"
              >
                <Icon className="h-5 w-5" />
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-300 dark:text-gray-200/70" />
          <Input
            placeholder="Search"
            className="h-12 rounded-full border-transparent bg-gray-100 pl-12 text-sm text-gray-500 ring-0 focus-visible:border-orange-200 focus-visible:ring-2 focus-visible:ring-orange-200 dark:bg-gray-400/50 dark:text-white"
            aria-label="Search account settings"
          />
        </div>

        <div className="mt-6 rounded-2xl bg-gray-50 p-5 dark:bg-gray-400/40">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-base font-exo2-medium text-gray-700 dark:text-white">
                Change Theme
              </p>
              <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
                Toggle between light and dark modes.
              </p>
            </div>
            <Switch
              aria-label="Toggle dark mode"
              variant="theme-filled"
              size="lg"
              showIcons
              checked={isDarkTheme}
              onCheckedChange={setIsDarkTheme}
            />
          </div>
        </div>
      </section>

      <section className="grid gap-3 sm:grid-cols-2">
        {quickLinks.map(item => (
          <AccountMenuItem
            key={item.id}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </section>
    </AccountShell>
  );
}

export const AccountOverviewPage = withResponsiveLayout(
  AccountOverviewContent,
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
