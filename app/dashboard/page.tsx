"use client";

import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  CreditCard,
  Home,
  Settings,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

import { withResponsiveLayout } from "@/components/layouts/with-responsive-layout";
import type { NavItem } from "@/components/layouts/with-responsive-layout";
import { cn } from "../../lib/utils";

function DashboardContent() {
  const stats = [
    {
      label: "Wallet Balance",
      value: "$18,425.32",
      change: "+4.2%",
      icon: Wallet,
      changeIcon: ArrowUpRight,
      changeColor: "text-emerald-500",
      trendBar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    },
    {
      label: "Monthly Volume",
      value: "$124,580.00",
      change: "+11.8%",
      icon: TrendingUp,
      changeIcon: ArrowUpRight,
      changeColor: "text-blue-500",
      trendBar: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      label: "Pending Settlements",
      value: "$8,910.50",
      change: "-2.1%",
      icon: CreditCard,
      changeIcon: ArrowDownRight,
      changeColor: "text-amber-500",
      trendBar: "bg-gradient-to-r from-amber-400 to-orange-500",
    },
  ];

  const recentActivity = [
    {
      id: "TX-43192",
      label: "USDT Withdrawal",
      type: "Debit",
      amount: "-$2,250.00",
      timestamp: "5 minutes ago",
      status: "Processing",
    },
    {
      id: "TX-43189",
      label: "Card Deposit",
      type: "Credit",
      amount: "+$5,400.00",
      timestamp: "25 minutes ago",
      status: "Completed",
    },
    {
      id: "TX-43170",
      label: "BTC Purchase",
      type: "Debit",
      amount: "-$3,110.00",
      timestamp: "1 hour ago",
      status: "Completed",
    },
    {
      id: "TX-43160",
      label: "Merchant Settlement",
      type: "Credit",
      amount: "+$1,980.00",
      timestamp: "2 hours ago",
      status: "Pending",
    },
  ];

  const quickActions = [
    { label: "New Invoice", description: "Send a payment request" },
    { label: "Convert Crypto", description: "Swap assets instantly" },
    { label: "Request Payout", description: "Transfer to your bank" },
    { label: "Invite Member", description: "Add a teammate" },
  ];

  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-3">
        {stats.map(stat => {
          const Icon = stat.icon;
          const ChangeIcon = stat.changeIcon;
          return (
            <div
              key={stat.label}
              className="rounded-3xl border border-border bg-card/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-[2px] hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{stat.value}</h3>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold">
                <span className={stat.changeColor}>
                  <ChangeIcon className="mr-1 inline h-3.5 w-3.5" />
                  {stat.change}
                </span>
                <span className="text-muted-foreground/70">vs last month</span>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-muted">
                <div className={`h-full rounded-full ${stat.trendBar}`} />
              </div>
            </div>
          );
        })}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-muted"
            >
              View all
            </button>
          </div>
          <div className="mt-5 space-y-4">
            {recentActivity.map(activity => (
              <div
                key={activity.id}
                className="flex items-center justify-between rounded-2xl border border-border/80 bg-background/80 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold">{activity.label}</p>
                  <span className="text-xs text-muted-foreground">
                    {activity.timestamp} • {activity.id}
                  </span>
                </div>
                <div className="text-right">
                  <p
                    className={cn(
                      "text-sm font-semibold",
                      activity.type === "Credit"
                        ? "text-emerald-500"
                        : "text-destructive"
                    )}
                  >
                    {activity.amount}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {activity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <ul className="mt-4 space-y-3">
            {quickActions.map(action => (
              <li
                key={action.label}
                className="rounded-2xl border border-border/70 bg-background/70 px-4 py-3 transition hover:border-primary/40 hover:bg-primary/5"
              >
                <p className="text-sm font-semibold">{action.label}</p>
                <span className="text-xs text-muted-foreground">
                  {action.description}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-5 w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
          >
            Create New Action
          </button>
        </div>
      </section>

      <section className="rounded-3xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Performance Snapshot</h2>
            <p className="text-sm text-muted-foreground">
              Quick overview of merchant growth versus the previous quarter.
            </p>
          </div>
          <button
            type="button"
            className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:bg-muted"
          >
            Download report
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Conversion Rate
            </h3>
            <p className="mt-3 text-3xl font-semibold">62.4%</p>
            <p className="mt-1 text-xs text-emerald-500">
              <ArrowUpRight className="mr-1 inline h-3.5 w-3.5" />
              +6.3% vs last quarter
            </p>
            <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          </div>

          <div className="rounded-2xl border border-border/60 bg-background/80 p-4">
            <h3 className="text-sm font-semibold text-muted-foreground">
              Dispute Ratio
            </h3>
            <p className="mt-3 text-3xl font-semibold">1.4%</p>
            <p className="mt-1 text-xs text-emerald-500">
              <ArrowDownRight className="mr-1 inline h-3.5 w-3.5" />
              -0.8% vs last quarter
            </p>
            <div className="mt-4 h-32 rounded-xl bg-gradient-to-br from-emerald-200/30 via-emerald-100/20 to-transparent" />
          </div>
        </div>
      </section>
    </div>
  );
}

const navItems: NavItem[] = [
  { label: "Overview", href: "/dashboard", icon: Home },
  { label: "Customers", href: "/dashboard/customers", icon: Users },
  { label: "Analytics", href: "/dashboard/analytics", icon: Activity },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default withResponsiveLayout(DashboardContent, {
  navItems,
  header: <span className="font-semibold">Pallapay Dashboard</span>,
  sidebarTitle: (
    <span className="text-sm font-semibold uppercase">Navigation</span>
  ),
});
