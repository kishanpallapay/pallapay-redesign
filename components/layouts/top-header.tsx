"use client";

import Image from "next/image";
import { Bell, Headphones, Menu, Search, X } from "lucide-react";
import { ComponentPropsWithoutRef, ReactNode, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export type HeaderUser = {
  name: string;
  email: string;
  avatarUrl?: string;
};

type TopHeaderProps = {
  hasNav: boolean;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  header?: ReactNode;
  actions?: ReactNode;
  searchPlaceholder: string;
  hasNotificationDot: boolean;
  user: HeaderUser;
  onHeightChange?: (height: number) => void;
} & ComponentPropsWithoutRef<"header">;

const getInitials = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map(part => part.charAt(0)?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("") || "JD";

export function TopHeader({
  hasNav,
  sidebarOpen,
  onToggleSidebar,
  header,
  actions,
  searchPlaceholder,
  hasNotificationDot,
  user,
  className,
  style,
  onHeightChange,
  ...rest
}: TopHeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastReportedHeight = useRef<number>(0);
  const userInitials = getInitials(user.name);

  useEffect(() => {
    if (!onHeightChange) return;
    const node = headerRef.current;
    if (!node) return;

    const reportHeight = (height: number) => {
      if (Math.abs(lastReportedHeight.current - height) < 0.5) return;
      lastReportedHeight.current = height;
      onHeightChange(height);
    };

    reportHeight(node.getBoundingClientRect().height);

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.target !== node) continue;
        reportHeight(entry.contentRect.height);
      }
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [onHeightChange]);

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed left-0 top-0 w-full md:w-auto md:top-6 md:left-6 md:right-6 z-30 transition-all ",
        hasNav ? "lg:left-[calc(16rem+2.25rem)]" : "",
        className
      )}
      style={style}
      {...rest}
    >
      <div className="w-full md:rounded-[12px] md:bg-gray-50 md:dark:bg-gray-600 px-4 py-4  sm:px-4 sm:py-2 md:py-4 md:pl-3.5 md:pr-6">
        <div className="flex w-full flex-wrap items-center gap-4 md:flex-nowrap md:gap-6">
          <div className="flex w-full flex-wrap items-center justify-between gap-4 md:flex-nowrap md:gap-6">
            <div className="flex flex-1 items-center gap-2 md:gap-4">
              {hasNav ? (
                <button
                  type="button"
                  onClick={onToggleSidebar}
                  className="inline-flex h-10 w-10 items-center justify-center transition lg:hidden dark:text-white text-black"
                  aria-label="Toggle navigation"
                  aria-expanded={sidebarOpen}
                >
                  {sidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              ) : null}

              <div className="hidden w-full max-w-md flex-1 items-center gap-3 h-[52px] rounded-full  bg-white overflow-hidden text-sm text-gray-500  md:flex dark:border-gray-700 dark:bg-black">
                <Search
                  className="h-6 w-6 ml-3.5 text-gray-200 dark:text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="global-search"
                  className="flex-1 bg-white dark:bg-black font-exo2 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none dark:text-gray-200"
                />
              </div>

              <div className="flex items-center gap-2 md:hidden">
                {typeof header === "string" ? (
                  <span className="text-base font-exo2-semibold text-black dark:text-white">
                    {header}
                  </span>
                ) : (
                  header ?? null
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 md:gap-4">
              {actions ? (
                <div className="flex items-center gap-3">{actions}</div>
              ) : null}

              <Button
                type="button"
                className="bg-white dark:bg-black w-10 h-10 md:h-12 md:w-12 p-2.5  rounded-full relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                {hasNotificationDot ? (
                  <span className="absolute right-2 top-2 md:top-2.5 md:right-3 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-orange ">
                    <span className="sr-only">New notifications</span>
                  </span>
                ) : null}
              </Button>
              <Button
                variant={"primary"}
                className="bg-white dark:bg-black w-10 h-10 md:h-12 md:w-12 p-2.5 rounded-full"
                aria-label="Customer support"
              >
                <Headphones className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2 md:gap-3 rounded-full">
                {user.avatarUrl ? (
                  <div className="relative w-10 h-10 md:h-14 md:w-14 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src={user.avatarUrl}
                      alt={`${user.name}'s avatar`}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex  w-10 h-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-gray-200 text-base font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-200">
                    {userInitials}
                  </div>
                )}
                <div className="hidden min-w-[140px] text-left leading-tight sm:block">
                  <p className="text-base font-exo2-semibold text-black dark:text-white">
                    {user.name}
                  </p>
                  <p className="text-sm font-exo2-medium text-black dark:text-white opacity-60">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
