"use client";

import { cn } from "@/lib/utils";

export type NotificationStatus = "info" | "warning" | "success" | "alert";

export type NotificationItem = {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  status?: NotificationStatus;
};

const STATUS_COLORS: Record<NotificationStatus, string> = {
  info: "bg-info-200",
  warning: "bg-alert-200",
  success: "bg-success-200",
  alert: "bg-orange",
};

type NotificationListProps = {
  notifications: NotificationItem[];
  className?: string;
};

export function NotificationList({
  notifications,
  className,
}: NotificationListProps) {
  return (
    <div className={cn("space-y-5", className)}>
      {notifications.map(notification => (
        <article
          key={notification.id}
          className="space-y-2"
          aria-label={`${notification.title}: ${notification.description}`}
        >
          <p className="text-xs font-exo2-medium uppercase tracking-wide text-gray-300 dark:text-gray-400">
            {notification.timestamp}
          </p>
          <div className="flex items-start gap-3">
            <span
              className={cn(
                "mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full",
                STATUS_COLORS[notification.status ?? "alert"]
              )}
              aria-hidden="true"
            />
            <div>
              <p className="text-base font-exo2-medium text-gray-600 dark:text-gray-50">
                {notification.title}
              </p>
              <p className="text-sm font-exo2-regular text-gray-300 dark:text-gray-400">
                {notification.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
