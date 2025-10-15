"use client";

import Link from "next/link";
import type { ComponentType } from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type AccountMenuItemProps = {
  href: string;
  label: string;
  description?: string;
  icon: ComponentType<{ className?: string }>;
  className?: string;
};

export function AccountMenuItem({
  href,
  label,
  description,
  icon: Icon,
  className,
}: AccountMenuItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex items-center gap-4 rounded-2xl bg-gray-50 px-5 py-4 shadow-sm ring-1 ring-transparent transition-all hover:-translate-y-0.5 hover:bg-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 dark:bg-gray-500/80 dark:hover:bg-gray-500",
        className
      )}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-200 group-hover:bg-orange-200 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="flex flex-1 flex-col gap-1">
        <span className="text-base font-exo2-medium text-gray-700 transition-colors group-hover:text-gray-900 dark:text-white">
          {label}
        </span>
        {description ? (
          <span className="text-sm font-exo2-regular text-gray-400 group-hover:text-gray-500 dark:text-gray-200/80">
            {description}
          </span>
        ) : null}
      </span>
      <ChevronRight className="h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-1 dark:text-gray-200" />
    </Link>
  );
}
