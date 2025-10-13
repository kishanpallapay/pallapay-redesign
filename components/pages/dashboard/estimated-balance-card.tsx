"use client";

import { JSX, useMemo, useState } from "react";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

type BalanceSlice = {
  asset: string;
  label: string;
  value: number;
  color: string;
  unit?: string;
};

type BalanceView = {
  total: number;
  headline: string;
  subHeadline: string;
  currency: string;
  data: BalanceSlice[];
};

const BALANCE_VIEWS: Record<"fiat" | "crypto", BalanceView> = {
  fiat: {
    total: 1805.55,
    headline: "Estimated Balance :",
    subHeadline: "All crypto and fiat balances",
    currency: "USD",
    data: [
      {
        asset: "USD",
        label: "USD",
        value: 1173.61,
        color: "#F8B400",
      },
      {
        asset: "AED",
        label: "AED",
        value: 361.11,
        color: "#5F6368",
      },
      {
        asset: "BNB",
        label: "BNB",
        value: 270.83,
        color: "#C7C9CC",
      },
    ],
  },
  crypto: {
    total: 4.78,
    headline: "Estimated Balance :",
    subHeadline: "Primary crypto holdings",
    currency: "BTC",
    data: [
      {
        asset: "BTC",
        label: "BTC",
        value: 2.9,
        color: "#F7931A",
        unit: "BTC",
      },
      {
        asset: "ETH",
        label: "ETH",
        value: 1.1,
        color: "#454ADE",
        unit: "ETH",
      },
      {
        asset: "BNB",
        label: "BNB",
        value: 0.78,
        color: "#C7C9CC",
        unit: "BNB",
      },
    ],
  },
};

function getDominantSlice(data: BalanceSlice[]): BalanceSlice {
  return data.reduce((currentMax, candidate) =>
    candidate.value > currentMax.value ? candidate : currentMax
  );
}

export function EstimatedBalanceCard(): JSX.Element {
  const [view, setView] = useState<"fiat" | "crypto">("fiat");

  const { data, total, currency, headline, subHeadline } = BALANCE_VIEWS[view];
  const dominantSlice = useMemo(() => getDominantSlice(data), [data]);

  const formattedTotal = useMemo(() => {
    if (view === "crypto") {
      return `${total.toFixed(2)} ${currency}`;
    }
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    }).format(total);
  }, [currency, total, view]);

  const legendCurrencyFormatter = useMemo(() => {
    if (view !== "fiat") return null;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    });
  }, [currency, view]);

  return (
    <section className="w-full rounded-2xl bg-gray-50 dark:bg-gray-600 p-4 sm:p-6 transition-colors duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex-1">
          <p className="font-exo2-medium text-base sm:text-lg text-gray dark:text-gray-50 transition-colors duration-200">
            {headline}
          </p>
          <p className="text-xs sm:text-sm text-gray-300 dark:text-gray-400 font-exo2-medium mt-1 transition-colors duration-200">
            {subHeadline}
          </p>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setView(view === "fiat" ? "crypto" : "fiat")}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-orange dark:bg-orange flex items-center justify-center flex-shrink-0 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md dark:shadow-lg"
          aria-label="Toggle balance view"
        >
          <span className="text-xl sm:text-2xl font-exo2-semibold text-gray-600 dark:text-gray-600">
            {view === "fiat" ? "$" : "₿"}
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Top Section: Balance & Chart */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Balance Info */}
          <div className="flex flex-col items-start gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-exo2-semibold text-gray-900 dark:text-white break-all transition-colors duration-200">
                {formattedTotal}
              </span>
              <Eye
                className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 dark:text-gray-500 flex-shrink-0 transition-colors duration-200"
                aria-hidden
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-exo2-medium transition-colors duration-200">
              Breakdown of your {view === "fiat" ? "fiat and crypto" : "crypto"}{" "}
              portfolio.
            </p>
          </div>

          {/* Right: Pie Chart */}
          <div className="flex justify-center lg:justify-end w-full lg:w-auto">
            <div className="relative flex h-48 w-48 sm:h-56 sm:w-56 items-center justify-center flex-shrink-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    innerRadius="55%"
                    outerRadius="85%"
                    strokeWidth={0}
                    startAngle={90}
                    endAngle={-270}
                    paddingAngle={3}
                    labelLine={false}
                    label={({ percent }) =>
                      `${Math.round((Number(percent) || 0) * 100)}%`
                    }
                  >
                    {data.map(entry => (
                      <Cell key={entry.asset} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-1 rounded-full">
                <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-exo2-medium transition-colors duration-200">
                  {dominantSlice.label}
                </span>
                <span className="text-2xl sm:text-3xl font-exo2-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  {Math.round(
                    (dominantSlice.value /
                      data.reduce((acc, slice) => acc + slice.value, 0)) *
                      100
                  )}
                  %
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {data.map(slice => (
            <div
              key={slice.asset}
              className={cn(
                "flex items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2 sm:py-3 transition-all duration-200",
                "bg-white dark:bg-gray-700",
                "border border-gray-100 dark:border-gray-600",
                "shadow-sm dark:shadow-md",
                "hover:shadow-md dark:hover:shadow-lg",
                "hover:border-gray-200 dark:hover:border-gray-500"
              )}
            >
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span
                  className={cn(
                    "h-3 w-3 rounded-full transition-all duration-200 flex-shrink-0",
                    slice.asset === dominantSlice.asset
                      ? "ring-2 ring-offset-2 ring-orange dark:ring-orange"
                      : ""
                  )}
                  style={{ backgroundColor: slice.color }}
                />
                <span className="text-xs sm:text-sm font-exo2-semibold text-gray-900 dark:text-white truncate transition-colors duration-200">
                  {slice.label}
                </span>
              </div>
              <span className="text-xs sm:text-sm font-exo2-medium text-gray-600 dark:text-gray-300 flex-shrink-0 ml-2 transition-colors duration-200">
                {view === "fiat" && legendCurrencyFormatter
                  ? legendCurrencyFormatter.format(slice.value)
                  : `${slice.value.toFixed(2)} ${slice.unit ?? slice.asset}`}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
