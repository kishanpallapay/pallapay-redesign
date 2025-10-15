"use client";

import Image from "next/image";
import { ArrowRight, Bell, Headphones, Menu, Search, X } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "../ui/drawer";

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
  notifications?: NotificationItem[];
  onViewAllNotifications?: () => void;
} & ComponentPropsWithoutRef<"header">;

const getInitials = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map(part => part.charAt(0)?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("") || "JD";

type NotificationStatus = "info" | "warning" | "success" | "alert";

type NotificationItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status?: NotificationStatus;
};

const DEFAULT_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "business-verification-1",
    title: "Business Verification",
    description: "Your business request confirmed.",
    timestamp: "14:40, 29/08/2025",
    status: "alert",
  },
  {
    id: "account-debited-1",
    title: "Account Debited",
    description: "Your account has been debited with 35.50 AED by admin.",
    timestamp: "12:05, 28/08/2025",
    status: "warning",
  },
  {
    id: "crypto-withdrawal-request",
    title: "Crypto Withdrawal Request",
    description: "Your crypto withdrawal request is completed.",
    timestamp: "10:00, 28/08/2025",
    status: "info",
  },
  {
    id: "fiat-withdrawal-request",
    title: "Fiat Withdrawal Request",
    description: "Your fiat withdrawal request is completed.",
    timestamp: "12:50, 24/08/2025",
    status: "success",
  },
  {
    id: "business-verification-2",
    title: "Business Verification",
    description: "Your business request confirmed.",
    timestamp: "14:40, 29/08/2025",
    status: "alert",
  },
];

const NOTIFICATION_STATUS_COLOR: Record<NotificationStatus, string> = {
  info: "bg-info-200",
  warning: "bg-alert-200",
  success: "bg-success-200",
  alert: "bg-orange",
};

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
  notifications: notificationsProp,
  onViewAllNotifications,
  ...rest
}: TopHeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const lastReportedHeight = useRef<number>(0);
  const userInitials = getInitials(user.name);
  const [desktopNotificationsOpen, setDesktopNotificationsOpen] =
    useState(false);
  const [mobileNotificationsOpen, setMobileNotificationsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });
  const notifications =
    notificationsProp && notificationsProp.length > 0
      ? notificationsProp
      : DEFAULT_NOTIFICATIONS;

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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDesktop(event.matches);
    };

    setIsDesktop(mediaQuery.matches);
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    setDesktopNotificationsOpen(false);
    setMobileNotificationsOpen(false);
  }, [isDesktop]);

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
                  placeholder={searchPlaceholder}
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

              <DropdownMenu
                open={desktopNotificationsOpen}
                onOpenChange={setDesktopNotificationsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    type="button"
                    className="relative hidden h-10 w-10 rounded-full bg-white p-2.5 dark:bg-black md:flex md:h-12 md:w-12"
                    aria-label="Notifications"
                    aria-haspopup="menu"
                    aria-expanded={desktopNotificationsOpen}
                  >
                    <Bell className="h-5 w-5" />
                    {hasNotificationDot ? (
                      <span className="absolute right-2 top-2 md:top-2.5 md:right-3 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-orange">
                        <span className="sr-only">New notifications</span>
                      </span>
                    ) : null}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={16}
                  className="hidden w-[420px] overflow-hidden rounded-[12px] border border-gray-100 bg-white p-6 shadow-[0_24px_48px_rgba(15,23,42,0.12)] dark:border-gray-500 dark:bg-black md:block"
                >
                  <div className="flex items-center justify-between border-b border-gray-100 dark:border-gray-500 pb-2">
                    <span className="text-lg font-exo2-semibold text-gray-900 dark:text-gray-50">
                      Notifications
                    </span>
                    <button
                      type="button"
                      onClick={() => setDesktopNotificationsOpen(false)}
                      className="inline-flex items-center justify-center rounded-full border border-transparent text-gray-500 dark:text-gray-300 transition hover:border-gray-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                      aria-label="Close notifications"
                    >
                      <X className="h-4.5 w-4.5" />
                    </button>
                  </div>
                  <NotificationList
                    notifications={notifications}
                    className="overflow-y-auto py-5"
                  />
                  <div className="h-fit mt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setDesktopNotificationsOpen(false);
                        onViewAllNotifications?.();
                      }}
                      className="w-full justify-center rounded-[8px] border border-gray h-11 text-sm font-exo2-medium text-gray hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700"
                    >
                      See All Messages
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </Button>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                type="button"
                className="relative h-10 w-10 rounded-full bg-white p-2.5 dark:bg-black md:hidden"
                onClick={() => setMobileNotificationsOpen(true)}
                aria-label="Notifications"
                aria-haspopup="dialog"
                aria-expanded={mobileNotificationsOpen}
              >
                <Bell className="h-5 w-5" />
                {hasNotificationDot ? (
                  <span className="absolute right-2 top-2 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-orange">
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

      <Drawer
        open={mobileNotificationsOpen}
        onOpenChange={next => setMobileNotificationsOpen(next)}
      >
        <DrawerContent className="md:hidden border-none bg-white pb-6 dark:bg-black px-7">
          <DrawerHeader className="flex-row items-center justify-between border-b border-gray-100 p-0 pt-4 pb-4 text-left dark:border-gray-700 ">
            <DrawerTitle className="text-lg font-exo2-semibold text-gray-900 dark:text-gray-50">
              Notifications
            </DrawerTitle>
            <DrawerClose
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-gray-500 transition hover:border-gray-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              aria-label="Close notifications"
            >
              <X className="h-4.5 w-4.5" />
            </DrawerClose>
          </DrawerHeader>
          <NotificationList
            notifications={notifications}
            className="max-h-[60vh] overflow-y-auto px-5 py-5"
          />
          <div className="px-5 pt-1">
            <Button
              type="button"
              variant="ghost"
              onClick={() => {
                setMobileNotificationsOpen(false);
                onViewAllNotifications?.();
              }}
              className="w-full justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-exo2-semibold text-gray-900 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-700"
            >
              See All Messages
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}

type NotificationListProps = {
  notifications: NotificationItem[];
  className?: string;
};

function NotificationList({ notifications, className }: NotificationListProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {notifications.map(notification => (
        <article
          key={notification.id}
          className="space-y-2"
          aria-label={`${notification.title}: ${notification.description}`}
        >
          <p className="text-xs font-exo2-medium uppercase tracking-wide text-gray-300">
            {notification.timestamp}
          </p>
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full",
                NOTIFICATION_STATUS_COLOR[notification.status ?? "alert"]
              )}
              aria-hidden="true"
            />
            <div className="">
              <p className="text-base font-exo2-medium text-gray-600 dark:text-gray-50">
                {notification.title}
              </p>
              <p className="text-sm font-exo2-regular text-gray-300">
                {notification.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export type { NotificationItem };
