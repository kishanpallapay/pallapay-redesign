"use client";

import {
  ComponentType,
  ReactElement,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { getNavItemsForRole } from "@/lib/navigation/get-nav-items";
import { HeaderUser, TopHeader } from "@/components/layouts/top-header";
import { SidebarNav } from "./sidebar-nav";

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

  const mainTopOffset = `calc(${
    headerHeight ?? DEFAULT_HEADER_HEIGHT
  }px + 2.3rem)`;

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
        />

        <main
          className="fixed left-6 right-6 bottom-6 overflow-y-auto no-scrollbar lg:left-[calc(16rem+2.25rem)]"
          style={{ top: mainTopOffset }}
        >
          <div className="h-full w-full no-scrollbar">{children}</div>
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
