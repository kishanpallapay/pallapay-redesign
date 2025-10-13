"use client";

import { JSX, useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";
import type { TooltipProps } from "recharts";
import {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import { Switch } from "../../ui/switch";

type CurrencyView = "aed" | "usd";

type TransactionCategoryKey =
  | "paymentLink"
  | "paymentPage"
  | "posMachine"
  | "apiKeys"
  | "unpaid";

type DailyTransaction = {
  day: string;
} & Record<TransactionCategoryKey, number>;

type TransactionCategory = {
  key: TransactionCategoryKey;
  label: string;
  color: string;
  description?: string;
};

const PAYMENT_CATEGORIES = [
  {
    key: "paymentLink",
    label: "Paid By Payment Link",
    color: "#FACC15",
  },
  {
    key: "paymentPage",
    label: "Paid By Payment Page",
    color: "#FDB022",
  },
  {
    key: "posMachine",
    label: "Paid By POS Machine",
    color: "#F97316",
  },
  {
    key: "apiKeys",
    label: "Paid By API Keys",
    color: "#FEF08A",
  },
] satisfies TransactionCategory[];

const UNPAID_CATEGORY: TransactionCategory = {
  key: "unpaid",
  label: "Unpaid",
  color: "#9CA3AF",
};

const AED_BASE_DATA: DailyTransaction[] = [
  {
    day: "Sun.",
    paymentLink: 360,
    paymentPage: 300,
    posMachine: 380,
    apiKeys: 260,
    unpaid: 1100,
  },
  {
    day: "Mon.",
    paymentLink: 540,
    paymentPage: 520,
    posMachine: 640,
    apiKeys: 500,
    unpaid: 1300,
  },
  {
    day: "Tue.",
    paymentLink: 500,
    paymentPage: 460,
    posMachine: 520,
    apiKeys: 420,
    unpaid: 900,
  },
  {
    day: "Wed.",
    paymentLink: 320,
    paymentPage: 290,
    posMachine: 360,
    apiKeys: 330,
    unpaid: 700,
  },
  {
    day: "Thu.",
    paymentLink: 520,
    paymentPage: 500,
    posMachine: 600,
    apiKeys: 430,
    unpaid: 200,
  },
  {
    day: "Fri.",
    paymentLink: 540,
    paymentPage: 460,
    posMachine: 550,
    apiKeys: 450,
    unpaid: 350,
  },
  {
    day: "Sat.",
    paymentLink: 460,
    paymentPage: 420,
    posMachine: 430,
    apiKeys: 370.65,
    unpaid: 1000,
  },
];

const AED_TO_USD = 0.272294;

const createUsdData = (days: DailyTransaction[]): DailyTransaction[] => {
  return days.map(day => ({
    day: day.day,
    paymentLink: day.paymentLink * AED_TO_USD,
    paymentPage: day.paymentPage * AED_TO_USD,
    posMachine: day.posMachine * AED_TO_USD,
    apiKeys: day.apiKeys * AED_TO_USD,
    unpaid: day.unpaid * AED_TO_USD,
  }));
};

const TRANSACTION_DATA: Record<CurrencyView, DailyTransaction[]> = {
  aed: AED_BASE_DATA,
  usd: createUsdData(AED_BASE_DATA),
};

const ALL_CATEGORIES: TransactionCategory[] = [
  ...PAYMENT_CATEGORIES,
  UNPAID_CATEGORY,
];

const CATEGORY_LOOKUP: Record<TransactionCategoryKey, TransactionCategory> =
  ALL_CATEGORIES.reduce((acc, category) => {
    acc[category.key] = category;
    return acc;
  }, {} as Record<TransactionCategoryKey, TransactionCategory>);

const currencyDisplay = {
  aed: {
    label: "AED",
    formatter: new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    axisFormatter: new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
    }),
  },
  usd: {
    label: "USD",
    formatter: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    axisFormatter: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }),
  },
} as const;

type CustomTooltipProps = TooltipProps<ValueType, NameType> & {
  currencyCode: CurrencyView;
  payload?: Array<{
    dataKey: string;
    value: number | null | undefined;
  }>;
  label?: string | number;
};

function TransactionsTooltip({
  active,
  payload,
  label,
  currencyCode,
}: CustomTooltipProps): JSX.Element | null {
  if (!active || !payload?.length) {
    return null;
  }

  const formatter = currencyDisplay[currencyCode as CurrencyView].formatter;
  const currencyLabel = currencyDisplay[currencyCode as CurrencyView].label;

  return (
    <div className="rounded-xl bg-white dark:bg-gray-800 px-4 py-3 text-sm shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-colors duration-200">
      <p className="font-exo2-semibold text-gray-900 dark:text-white transition-colors duration-200">
        {label}
      </p>
      <div className="mt-2 space-y-1.5">
        {payload.map(
          (entry: { dataKey: string; value: number | null | undefined }) => {
            const key = entry.dataKey as TransactionCategoryKey;
            const category = CATEGORY_LOOKUP[key];
            if (
              !category ||
              entry.value === undefined ||
              entry.value === null
            ) {
              return null;
            }
            if (Number(entry.value) <= 0) {
              return null;
            }

            return (
              <div
                key={category.key}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="block h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    {category.label}
                  </span>
                </div>
                <span className="text-xs font-exo2-semibold text-gray-900 dark:text-white transition-colors duration-200">
                  {currencyCode === "usd"
                    ? formatter.format(Number(entry.value))
                    : `${formatter.format(
                        Number(entry.value)
                      )} ${currencyLabel}`}
                </span>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

function computePaidTotal(days: DailyTransaction[]): number {
  return days.reduce((sum, day) => {
    return (
      sum +
      PAYMENT_CATEGORIES.reduce(
        (daySum, category) => daySum + day[category.key],
        0
      )
    );
  }, 0);
}

export function TransactionsValueCard(): JSX.Element {
  const [view, setView] = useState<CurrencyView>("aed");

  const data = TRANSACTION_DATA[view];
  const currencyMeta = currencyDisplay[view];

  const total = useMemo(() => computePaidTotal(data), [data]);

  const formattedTotal = useMemo(
    () => currencyMeta.formatter.format(total),
    [currencyMeta, total]
  );

  const handleSwitchChange = (checked: boolean): void => {
    setView(checked ? "usd" : "aed");
  };

  const axisTickFormatter = (value: number): string => {
    if (view === "usd") {
      return currencyMeta.axisFormatter.format(value);
    }
    return `${currencyMeta.axisFormatter.format(value)} ${currencyMeta.label}`;
  };

  return (
    <section className="flex h-full w-full flex-col rounded-2xl bg-gray-50 dark:bg-gray-600 p-4 sm:p-6 transition-colors duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-6">
        <div className="flex-1">
          <p className="font-exo2-medium text-base sm:text-lg text-black dark:text-white transition-colors duration-200">
            Transactions Value
          </p>
        </div>

        {/* This Week Button */}
        <button
          type="button"
          className="flex items-center justify-center gap-2  text-xs sm:text-sm font-exo2-semibold text-black dark:text-white transition-all duration-200  flex-shrink-0"
        >
          This Week
          <ChevronDown className="h-4 w-4" aria-hidden />
        </button>
      </div>

      {/* Total Balance Section */}
      <div className="flex flex-col sm:flex-row sm:items-center  sm:justify-start gap-6 mb-6 sm:mb-8">
        <div className="flex items-end gap-2 sm:gap-3 flex-wrap">
          <span className="text-3xl font-exo2-semibold text-black dark:text-white transition-colors duration-200">
            {formattedTotal}
          </span>
          <span className="text-lg font-exo2-medium text-black dark:text-white transition-colors duration-200">
            {currencyMeta.label}
          </span>
        </div>

        {/* Toggle Button */}
        <Switch
          size="lg"
          variant="filled"
          checked={view === "usd"}
          onCheckedChange={handleSwitchChange}
          showText
          onText="USD"
          offText="AED"
          aria-label="Toggle currency between AED and USD"
        />
      </div>

      {/* Chart */}
      <div className="mb-6 h-56 sm:h-64 lg:h-72 w-full -mx-4 sm:-mx-6 px-4 sm:px-6 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            barCategoryGap="24%"
            barGap={8}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E5E7EB"
              className="dark:stroke-gray-400 stroke-gray-200"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 11, fill: "#6B7280" }}
              className="dark:fill-gray-50 fill-gray-600"
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickFormatter={axisTickFormatter}
              tick={{ fontSize: 11, fill: "#6B7280" }}
              className="dark:fill-gray-50 fill-gray-600"
            />
            <Tooltip
              cursor={{ fill: "rgba(249, 115, 22, 0.08)" }}
              content={tooltipProps => (
                <TransactionsTooltip {...tooltipProps} currencyCode={view} />
              )}
            />
            {PAYMENT_CATEGORIES.map((category, index) => (
              <Bar
                key={category.key}
                dataKey={category.key}
                fill={category.color}
                stackId="paid"
                radius={
                  index === PAYMENT_CATEGORIES.length - 1
                    ? [6, 6, 0, 0]
                    : [0, 0, 0, 0]
                }
                maxBarSize={28}
              />
            ))}
            <Bar
              dataKey={UNPAID_CATEGORY.key}
              fill={UNPAID_CATEGORY.color}
              radius={[6, 6, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm pl-9">
        {ALL_CATEGORIES.map(category => (
          <div
            key={category.key}
            className="flex items-center gap-2 font-exo2-semibold text-gray-900 dark:text-white transition-colors duration-200"
          >
            <span
              className="h-3 w-3 rounded-full flex-shrink-0"
              style={{ backgroundColor: category.color }}
              aria-hidden
            />
            <span className="truncate">{category.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
