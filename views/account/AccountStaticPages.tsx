"use client";

import { Copy, Pencil, Share2 } from "lucide-react";

import { withResponsiveLayout } from "@/components/layouts/withResponsiveLayout";
import { AccountShell } from "@/components/pages/account/account-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const layoutConfig = {
  role: "merchant" as const,
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
};

function AccountSettingsContent() {
  const publicPaymentPage = "https://dashboard.pallapay.com/page/866132412cg";

  return (
    <AccountShell className="space-y-8">
      <section className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm dark:border-gray-500/40 dark:bg-gray-500/30 sm:p-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-2xl font-semibold text-gray-400 dark:bg-gray-400/40 dark:text-white sm:h-24 sm:w-24">
                JD
                <button
                  type="button"
                  aria-label="Update profile picture"
                  className="absolute -bottom-1 -right-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 dark:border-gray-400/40 dark:bg-gray-500 dark:text-white sm:h-9 sm:w-9"
                >
                  <Pencil className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-exo2-semibold text-gray-900 dark:text-white sm:text-xl">
                  John Doe
                </p>
                <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
                  johndoe@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-sm font-exo2-medium uppercase tracking-wide text-gray-400 dark:text-gray-200/80">
                Your Public Payment Page
              </p>
              <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
                Share this link to receive payments directly from customers.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl border border-dashed border-orange-200 bg-orange-50 px-4 py-3 text-sm font-exo2-medium text-orange-300 dark:border-orange-200/60 dark:bg-orange-300/10 dark:text-orange-200 sm:py-4">
                <span className="truncate text-left">{publicPaymentPage}</span>
                <button
                  type="button"
                  aria-label="Copy public payment page link"
                  className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-orange-200 bg-white text-orange-300 transition hover:bg-orange-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 dark:border-orange-200/60 dark:bg-transparent sm:h-11 sm:w-11"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl border-gray-200 px-5 py-3 text-sm font-exo2-medium text-gray-700 hover:text-gray-900 dark:border-gray-400/60 dark:text-white sm:w-auto"
                >
                  Open My Page
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full rounded-xl border-gray-200 px-5 py-3 text-sm font-exo2-medium text-gray-700 hover:text-gray-900 dark:border-gray-400/60 dark:text-white sm:w-auto"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-500/40 dark:bg-gray-500/30">
        <div className="divide-y divide-gray-100 dark:divide-gray-500/30">
          <SettingsRow
            title="Email Address"
            description="The email address associated with your account."
            value="johndoe@gmail.com"
            status="Verified"
            actionLabel="Edit"
          />
          <SettingsRow
            title="Mobile Number"
            description="The mobile number associated with your account."
            value="+971512345678"
            status="Verified"
            actionLabel="Edit"
          />
          <SettingsRow
            title="Profile Name"
            description="Your identity is already verified. You cannot change it."
            value="John Doe"
            status="Verified"
            actionLabel="Edit"
            actionDisabled
          />
        </div>
      </section>
    </AccountShell>
  );
}

type SettingsRowProps = {
  title: string;
  description: string;
  value: string;
  status?: string;
  actionLabel: string;
  actionDisabled?: boolean;
};

function SettingsRow({
  title,
  description,
  value,
  status,
  actionLabel,
  actionDisabled,
}: SettingsRowProps) {
  return (
    <div className="flex flex-col gap-4 py-4 first:pt-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-6 md:py-5">
      <div className="space-y-1">
        <p className="text-base font-exo2-semibold text-gray-900 dark:text-white">
          {title}
        </p>
        <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
          {description}
        </p>
      </div>
      <div className="flex w-full flex-col items-start gap-3 md:w-auto md:items-end">
        <div className="flex w-full flex-wrap items-center gap-3 text-sm font-exo2-medium text-gray-900 dark:text-white md:w-auto md:justify-end">
          <span>{value}</span>
          {status ? (
            <Badge
              variant="success"
              className="rounded-full px-3 py-1 text-xs font-exo2-semibold uppercase tracking-wide"
            >
              {status}
            </Badge>
          ) : null}
        </div>
        <Button
          type="button"
          variant="outline"
          size="xs"
          disabled={actionDisabled}
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 rounded-lg border-gray-200 px-3 py-2 text-xs font-exo2-medium text-gray-600 hover:text-gray-900 dark:border-gray-400/60 dark:text-gray-200 md:w-auto md:justify-start",
            actionDisabled
              ? "cursor-not-allowed opacity-60 hover:text-gray-600 dark:hover:text-gray-200"
              : ""
          )}
        >
          <Pencil className="h-3.5 w-3.5" />
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}

type SectionConfig = {
  title: string;
  description: string;
};

function buildStaticSection({ title, description }: SectionConfig) {
  function SectionPage() {
    return (
      <AccountShell className="space-y-6">
        <header className="space-y-1">
          <h2 className="text-2xl font-exo2-semibold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-sm font-exo2-regular text-gray-400 dark:text-gray-200/80">
            {description}
          </p>
        </header>

        <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-center text-sm font-exo2-regular text-gray-400 dark:border-gray-500/40 dark:bg-gray-500/20 dark:text-gray-200/80">
          <p>We are putting the finishing touches on this section.</p>
          <p className="mt-1">
            In the meantime, reach out to support if you need any help.
          </p>
        </div>
      </AccountShell>
    );
  }

  return withResponsiveLayout(SectionPage, layoutConfig);
}

export const AccountSettingsPage = withResponsiveLayout(
  AccountSettingsContent,
  layoutConfig
);

export const AccountVerificationPage = buildStaticSection({
  title: "Verification",
  description:
    "Submit and track your KYC/KYB documents to keep your account compliant.",
});

export const AccountBusinessPage = buildStaticSection({
  title: "My Business",
  description: "Review business information, team members, and permissions.",
});

export const AccountBankAccountsPage = buildStaticSection({
  title: "Bank Accounts",
  description: "Link payout accounts and monitor settlement details.",
});

export const AccountWhitelistAddressesPage = buildStaticSection({
  title: "Whitelist Addresses",
  description:
    "Configure trusted wallet or payout addresses for faster approvals.",
});

export const AccountPrivacySecurityPage = buildStaticSection({
  title: "Privacy and Security",
  description:
    "Adjust security settings, sign-in methods, and notification preferences.",
});
