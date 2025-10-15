"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "./withResponsiveLayout";

type SidebarNavProps = {
  items: NavItem[];
  title?: ReactNode;
  onNavigate?: () => void;
  className?: string;
};

export function SidebarNav({
  items,
  title,
  onNavigate,
  className,
}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col gap-16 rounded-[12px] bg-gray-50 py-8 text-gray-600 dark:bg-gray-600",
        className
      )}
    >
      <div className="flex items-center justify-center">
        <Image
          src={"/images/pallapay-light.png"}
          alt="Pallapay"
          width={168}
          height={40}
          priority={false}
          className="h-7 w-[168px] dark:hidden block"
        />
        <Image
          src={"/images/pallapay-dark.png"}
          alt="Pallapay"
          width={168}
          height={40}
          priority={false}
          className="h-7 w-[168px] dark:block hidden"
        />
      </div>

      <nav className="flex flex-1 flex-col overflow-y-auto pb-2">
        {items.map(item => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                onNavigate?.();
              }}
              className={cn(
                "group relative grid grid-cols-[1.75rem_1fr] text-black dark:text-white items-center gap-3 rounded-2xl px-6 py-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "pointer-events-none absolute h-[2.75rem] w-2  rounded-r-3xl bg-orange-200  transition-opacity duration-200",
                  isActive ? "opacity-100" : "opacity-0"
                )}
              />
              {Icon ? (
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors duration-200",
                    isActive
                      ? "text-orange-200"
                      : "text-black dark:text-white group-hover:text-gray-300 dark:group-hover:text-gray-300 "
                  )}
                />
              ) : (
                <span
                  className={cn(
                    "inline-flex h-5 w-5 items-center justify-center text-md",
                    isActive
                      ? "text-orange-200"
                      : "text-black dark:text-white group-hover:text-gray-300 dark:group-hover:text-gray-300 "
                  )}
                >
                  •
                </span>
              )}
              <span
                className={cn(
                  "font-exo2-semibold text-md transition-colors duration-200",
                  isActive
                    ? "text-orange-200"
                    : "text-black dark:text-white group-hover:text-gray-300 dark:group-hover:text-gray-300 "
                )}
              >
                {item.label}
              </span>
              {item.trailing}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
