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
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

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
};

type ResponsiveLayoutProps = LayoutOptions & {
  children: ReactNode;
};

function ResponsiveLayout({
  children,
  navItems,
  header,
  actions,
  sidebarTitle,
}: ResponsiveLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname() ?? "/";
  const hasNav = Boolean(navItems?.length);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
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

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-gray-50 p-6 text-gray-600">
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
        <header
          className={cn(
            "fixed top-6 left-6 right-6 z-30 flex h-[88px] items-center border-b border-gray-100 bg-white/95 px-4 shadow-sm backdrop-blur transition-all lg:left-[calc(16rem+2.25rem)] lg:px-10"
          )}
        >
          <div className="flex w-full items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {hasNav ? (
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-100 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200 focus-visible:ring-offset-2 focus-visible:ring-offset-white lg:hidden"
                  onClick={() => setSidebarOpen(open => !open)}
                  aria-label={
                    sidebarOpen ? "Close navigation" : "Open navigation"
                  }
                  aria-expanded={sidebarOpen}
                >
                  {sidebarOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              ) : null}
              <div className="text-xl font-semibold leading-tight text-gray-600">
                {header}
              </div>
            </div>
            {actions ? (
              <div className="flex items-center gap-3 text-gray-500">
                {actions}
              </div>
            ) : null}
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-gray-50 pt-[100px]">
          <div className="mx-auto h-full w-full max-w-6xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
            {children}
          </div>
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
