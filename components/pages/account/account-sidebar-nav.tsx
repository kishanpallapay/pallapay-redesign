"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { AccountNavItem } from "@/lib/navigation/account-nav-items";

type AccountSidebarNavProps = {
  items: AccountNavItem[];
  onNavigate?: () => void; // Added missing prop type
};

function normalizePath(path: string) {
  if (!path) return "/";
  const trimmed = path.trim();
  if (!trimmed) return "/";
  if (trimmed.length > 1 && trimmed.endsWith("/")) {
    return trimmed.slice(0, -1);
  }
  return trimmed;
}

export function AccountSidebarNav({
  items,
  onNavigate,
}: AccountSidebarNavProps) {
  const pathname = usePathname();
  const normalizedPath = normalizePath(pathname);
  const defaultHref = items.length ? normalizePath(items[0].href) : "";

  return (
    <nav
      className="sticky top-0 hidden border-r border-gray-100 bg-transparent dark:border-gray-500 lg:block"
      aria-label="Account sections"
    >
      <ul className="flex flex-col gap-6 mt-3 ">
        {items.map(item => {
          const itemHref = normalizePath(item.href);
          const defaultActive =
            normalizedPath === "/account" && itemHref === defaultHref;
          const isActive =
            normalizedPath === itemHref ||
            normalizedPath.startsWith(`${itemHref}/`) ||
            defaultActive;

          return (
            <li key={item.id}>
              <Link
                href={item.href}
                onClick={() => {
                  onNavigate?.();
                }}
                className={cn(
                  "group relative flex items-center rounded-2xl  text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black"
                )}
              >
                <span
                  className={cn(
                    "font-exo2-regular text-sm transition-colors duration-200",
                    isActive
                      ? "text-orange"
                      : "text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
