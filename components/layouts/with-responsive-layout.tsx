"use client";

import {
  ComponentType,
  ReactElement,
  ReactNode,
  useMemo,
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
  navItems = [],
  header,
  actions,
  sidebarTitle,
}: ResponsiveLayoutProps) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const computedTitle = useMemo(
    () =>
      sidebarTitle ??
      header ?? <span className="text-lg font-semibold">Menu</span>,
    [header, sidebarTitle]
  );

  const renderNavItems = () =>
    navItems.map(item => {
      const Icon = item.icon;
      const isActive =
        item.href === "/"
          ? pathname === item.href
          : pathname?.startsWith(item.href ?? "");

      return (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-muted/40 hover:text-foreground"
          )}
          onClick={() => setIsSidebarOpen(false)}
        >
          <span className="flex items-center gap-3">
            {Icon ? <Icon className="h-4 w-4" /> : null}
            {item.label}
          </span>
          {item.trailing}
        </Link>
      );
    });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-card px-4 shadow-sm backdrop-blur md:h-20 md:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open navigation"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-background p-2 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2 text-lg font-semibold md:text-xl">
            {header ?? <span>Dashboard</span>}
          </div>
        </div>

        <div className="flex items-center gap-3">{actions}</div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="hidden w-72 flex-shrink-0 flex-col border-r border-border bg-card/60 px-4 pb-6 pt-8 backdrop-blur-md md:flex">
          <div className="mb-6 px-1 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {computedTitle}
          </div>
          <nav className="flex-1 space-y-1">{renderNavItems()}</nav>
        </aside>

        <main className="flex-1 overflow-y-auto bg-background px-4 py-6 md:px-8 md:py-8">
          <div className="mx-auto w-full max-w-6xl">{children}</div>
        </main>
      </div>

      {/* Mobile sidebar */}
      {isSidebarOpen ? (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 flex w-72 max-w-full flex-col border-r border-border bg-card shadow-xl md:hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-4">
              <div className="text-base font-semibold">{computedTitle}</div>
              <button
                type="button"
                aria-label="Close navigation"
                className="rounded-lg border border-border bg-background p-2 text-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-4">
              {renderNavItems()}
            </nav>
          </aside>
        </>
      ) : null}
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
