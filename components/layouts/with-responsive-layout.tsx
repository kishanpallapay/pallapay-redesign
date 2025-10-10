"use client";

import {
  ComponentType,
  ReactElement,
  ReactNode,
  useCallback,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { HeaderUser, TopHeader } from "@/components/layouts/top-header";

type NavItem = {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
  trailing?: ReactNode;
};

type LayoutOptions = {
  navItems?: NavItem[];
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
  navItems,
  header,
  actions,
  sidebarTitle,
  searchPlaceholder = "Search",
  user,
  hasNotificationDot = true,
}: ResponsiveLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const pathname = usePathname() ?? "/";
  const hasNav = Boolean(navItems?.length);
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

  const renderNavItems = useCallback(
    (onNavigate?: () => void) =>
      navItems?.map(item => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
              isActive
                ? "bg-orange-50 text-orange after:absolute after:left-0 after:top-1/2 after:h-10 after:w-1.5 after:-translate-y-1/2 after:rounded-r-full after:bg-orange"
                : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
            )}
          >
            {Icon ? <Icon className="h-4 w-4 shrink-0" /> : null}
            <span className="flex-1 truncate">{item.label}</span>
            {item.trailing}
          </Link>
        );
      }),
    [navItems, pathname]
  );

  const mainTopOffset = `calc(${
    headerHeight ?? DEFAULT_HEADER_HEIGHT
  }px + 2.3rem)`;

  return (
    <div className="relative flex h-screen w-screen overflow-hidden dark:bg-black bg-white p-6 text-gray-600">
      {hasNav ? (
        <aside className="fixed top-6 bottom-6 left-6 z-40 hidden w-64 border-r border-gray-100 bg-white pb-8 pt-10 shadow-sm lg:flex">
          <div className="flex h-full w-full flex-col gap-6 overflow-y-auto px-6">
            {sidebarTitle ? (
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
                {sidebarTitle}
              </div>
            ) : null}
            <nav className="flex flex-1 flex-col gap-1.5">
              {renderNavItems()}
            </nav>
          </div>
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
              "ml-6 mt-6 flex h-[calc(100vh-3rem)] w-[min(80vw,256px)] flex-col gap-6 rounded-3xl border border-gray-100 bg-white px-6 py-10 shadow-xl transition-transform duration-200",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
            onClick={event => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeSidebar}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-label="Close navigation"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarTitle ? (
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-300">
                {sidebarTitle}
              </div>
            ) : null}
            <nav className="flex flex-1 flex-col gap-1.5">
              {renderNavItems(closeSidebar)}
            </nav>
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
          className="fixed left-6 right-6 bottom-6 overflow-y-auto lg:left-[calc(16rem+2.25rem)]"
          style={{ top: mainTopOffset }}
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
