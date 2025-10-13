"use client";

import { JSX, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

type HeatmapLevel = 0 | 1 | 2 | 3;

type HeatmapConfig = Record<string, HeatmapLevel>;

const INTENSITY_CLASSES: Record<HeatmapLevel, string> = {
  0: "bg-orange-50",
  1: "bg-orange-100",
  2: "bg-orange-200",
  3: "bg-orange-300",
};

const generateHeatmap = (
  entries: Array<[number, HeatmapLevel]>
): HeatmapConfig => {
  const month = 0; // January (0-indexed)
  const year = 2024;

  return entries.reduce<HeatmapConfig>((map, [day, level]) => {
    const isoString = new Date(Date.UTC(year, month, day))
      .toISOString()
      .split("T")[0];
    map[isoString] = level;
    return map;
  }, {});
};

const JANUARY_HEATMAP = generateHeatmap([
  [1, 1],
  [2, 3],
  [3, 2],
  [4, 2],
  [5, 3],
  [6, 1],
  [7, 0],
  [8, 1],
  [9, 2],
  [10, 2],
  [11, 3],
  [12, 1],
  [13, 2],
  [14, 0],
  [15, 1],
  [16, 3],
  [17, 2],
  [18, 3],
  [19, 2],
  [20, 3],
  [21, 1],
  [22, 2],
  [23, 3],
  [24, 1],
  [25, 1],
  [26, 2],
  [27, 3],
  [28, 3],
  [29, 2],
  [30, 1],
  [31, 2],
]);

const LEGEND_STOPS: Array<{ label: string; level: HeatmapLevel }> = [
  { label: "Low", level: 0 },
  { label: "", level: 1 },
  { label: "", level: 2 },
  { label: "High", level: 3 },
];

export function TransactionsStatusCard(): JSX.Element {
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(
    new Date(2024, 0, 12)
  );

  return (
    <section className="rounded-[12px] bg-gray-50 p-6 dark:bg-gray-600 h-full">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-exo2-medium text-lg text-gray dark:text-gray-50">
            Total Transactions Status
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <Calendar
          mode="single"
          selected={selectedDay}
          onSelect={setSelectedDay}
          defaultMonth={new Date(2024, 0)}
          fromMonth={new Date(2024, 0)}
          toMonth={new Date(2024, 0)}
          showOutsideDays={false}
          intensityMap={JANUARY_HEATMAP}
          className="mx-auto rounded-xl p-3 "
        />

        <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
          <span className="font-medium dark:text-white text-black">LOW</span>
          {LEGEND_STOPS.map(({ label, level }, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className={`block h-3 w-3 rounded-full ${INTENSITY_CLASSES[level]}`}
                aria-hidden
              />
            </div>
          ))}
          <span className="font-medium dark:text-white text-black">HIGH</span>
        </div>
      </div>
    </section>
  );
}
