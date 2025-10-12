import type { ComponentType } from "react";
import {
  ArrowLeftRight,
  Banknote,
  Circle,
  Coins,
  FileText,
  Handshake,
  Home,
  KeyRound,
  Link as LinkIcon,
  MonitorSmartphone,
  UserCircle,
  Users2,
  Wallet,
} from "lucide-react";

import type { NavItem } from "@/components/layouts/with-responsive-layout";
import navConfig from "./nav-items.json";

type NavIconMapKey =
  | "home"
  | "transactions"
  | "balances"
  | "cryptoWithdrawals"
  | "fiatWithdrawals"
  | "posDevices"
  | "paymentLink"
  | "paymentPage"
  | "apiKeys"
  | "partnership"
  | "employees"
  | "account";

type RawNavItem = {
  id: string;
  label: string;
  href: string;
  icon: NavIconMapKey;
  roles?: string[];
};

const iconMap: Record<NavIconMapKey, ComponentType<{ className?: string }>> = {
  home: Home,
  transactions: ArrowLeftRight,
  balances: Wallet,
  cryptoWithdrawals: Coins,
  fiatWithdrawals: Banknote,
  posDevices: MonitorSmartphone,
  paymentLink: LinkIcon,
  paymentPage: FileText,
  apiKeys: KeyRound,
  partnership: Handshake,
  employees: Users2,
  account: UserCircle,
};

const fallbackIcon: ComponentType<{ className?: string }> = Circle;

function normalizeRole(role?: string) {
  return role?.trim().toLowerCase() ?? "";
}

export function getNavItemsForRole(role?: string): NavItem[] {
  const normalizedRole = normalizeRole(role);

  return (navConfig as RawNavItem[])
    .filter(item => {
      if (!item.roles?.length) return true;
      if (!normalizedRole) return false;
      return item.roles.some(candidate => candidate.toLowerCase() === normalizedRole);
    })
    .map<NavItem>(item => ({
      label: item.label,
      href: item.href,
      icon: iconMap[item.icon] ?? fallbackIcon,
    }));
}
