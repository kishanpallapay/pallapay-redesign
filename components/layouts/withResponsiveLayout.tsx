"use client";

import {
  ComponentType,
  CSSProperties,
  ReactElement,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { getNavItemsForRole } from "@/lib/navigation/get-nav-items";
import {
  HeaderUser,
  TopHeader,
  type NotificationItem,
} from "@/components/layouts/topHeader";
import { SidebarNav } from "./sidebarNav";

type NavItem = {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
  trailing?: ReactNode;
};

type LayoutOptions = {
  navItems?: NavItem[];
  role?: string;
  header?: ReactNode;
  actions?: ReactNode;
  sidebarTitle?: ReactNode;
  searchPlaceholder?: string;
  user?: HeaderUser;
  hasNotificationDot?: boolean;
  notifications?: NotificationItem[];
  onViewAllNotifications?: () => void;
};

type ResponsiveLayoutProps = LayoutOptions & {
  children: ReactNode;
};

const DEFAULT_USER: HeaderUser = {
  name: "John Doe",
  email: "johndoe@gmail.com",
};
const DEFAULT_HEADER_HEIGHT = 112;

function ResponsiveLayout({
  children,
  navItems: customNavItems,
  role,
  header,
  actions,
  sidebarTitle,
  searchPlaceholder = "Search",
  user,
  hasNotificationDot = true,
  notifications,
  onViewAllNotifications,
}: ResponsiveLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const resolvedNavItems = useMemo(() => {
    if (customNavItems?.length) return customNavItems;
    return getNavItemsForRole(role);
  }, [customNavItems, role]);

  const hasNav = resolvedNavItems.length > 0;
  const userProfile = user ?? DEFAULT_USER;
  const toggleSidebar = useCallback(() => setSidebarOpen(open => !open), []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleHeaderHeight = useCallback((height: number) => {
    setHeaderHeight(previous =>
      previous !== null && Math.abs(previous - height) < 0.5 ? previous : height
    );
  }, []);

  const headerOffset = headerHeight ?? DEFAULT_HEADER_HEIGHT;

  const mainOffsets = useMemo(
    () =>
      ({
        "--main-offset-mobile": `${headerOffset}px`,
        "--main-offset-desktop": `calc(${headerOffset}px + 2.3rem)`,
      } as CSSProperties),
    [headerOffset]
  );

  return (
    <div className="relative flex h-screen w-screen overflow-hidden dark:bg-black bg-white md:p-6 text-gray-600">
      {hasNav ? (
        <aside className="fixed top-6 bottom-6 left-6 z-40 hidden w-64 lg:flex">
          <SidebarNav items={resolvedNavItems} title={sidebarTitle} />
        </aside>
      ) : null}

      {hasNav ? (
        <div
          className={cn(
            "fixed inset-0 z-50 bg-gray-900/10 backdrop-blur-sm transition-all duration-200 lg:hidden",
            sidebarOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          )}
          role="presentation"
          onClick={closeSidebar}
        >
          <aside
            className={cn(
              "flex h-screen w-[min(80vw,256px)] flex-col transition-transform duration-200",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={event => event.stopPropagation()}
          >
            <SidebarNav
              items={resolvedNavItems}
              title={sidebarTitle}
              onNavigate={closeSidebar}
            />
          </aside>
        </div>
      ) : null}

      <div className="flex h-full w-full flex-col lg:pl-[calc(16rem+0.75rem)]">
        <TopHeader
          hasNav={hasNav}
          sidebarOpen={sidebarOpen}
          onToggleSidebar={toggleSidebar}
          header={header}
          actions={actions}
          searchPlaceholder={searchPlaceholder}
          hasNotificationDot={hasNotificationDot}
          user={userProfile}
          onHeightChange={handleHeaderHeight}
          notifications={notifications}
          onViewAllNotifications={onViewAllNotifications}
        />

        <main
          className="fixed left-6 right-6 bottom-6 top-[var(--main-offset-mobile)] overflow-y-auto no-scrollbar lg:left-[calc(16rem+2.25rem)] lg:top-[var(--main-offset-desktop)] rounded-[12px]"
          style={mainOffsets}
        >
          <div className="h-full w-full no-scrollbar ">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function withResponsiveLayout<P extends Record<string, unknown>>(
  Component: ComponentType<P>,
  options?: LayoutOptions
) {
  function WrappedComponent(props: P): ReactElement {
    return (
      <ResponsiveLayout
        navItems={options?.navItems}
        role={options?.role}
        header={options?.header}
        actions={options?.actions}
        sidebarTitle={options?.sidebarTitle}
        searchPlaceholder={options?.searchPlaceholder}
        user={options?.user}
        hasNotificationDot={options?.hasNotificationDot}
        notifications={options?.notifications}
        onViewAllNotifications={options?.onViewAllNotifications}
      >
        <Component {...props} />
      </ResponsiveLayout>
    );
  }

  WrappedComponent.displayName = `withResponsiveLayout(${
    Component.displayName ?? Component.name ?? "Component"
  })`;

  return WrappedComponent;
}

export type { NavItem, LayoutOptions, ResponsiveLayoutProps };
export { ResponsiveLayout };
