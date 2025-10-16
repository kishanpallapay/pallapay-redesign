import type { ComponentType } from "react";
import {
  BadgeCheck,
  BellRing,
  Briefcase,
  Building2,
  Headphones,
  LayoutDashboard,
  ListChecks,
  Lock,
  UserCog,
} from "lucide-react";

export type AccountNavItem = {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export const accountNavItems: AccountNavItem[] = [
  {
    id: "account-settings",
    label: "Account Setting",
    href: "/account/settings",
    icon: UserCog,
  },
  {
    id: "account-verification",
    label: "Verification",
    href: "/account/verification",
    icon: BadgeCheck,
  },
  {
    id: "account-business",
    label: "My Business",
    href: "/account/business",
    icon: Briefcase,
  },
  {
    id: "account-bank-accounts",
    label: "Bank Accounts",
    href: "/account/bank-accounts",
    icon: Building2,
  },
  {
    id: "account-whitelist",
    label: "Whitelist Addresses",
    href: "/account/whitelist-addresses",
    icon: ListChecks,
  },
  {
    id: "account-privacy",
    label: "Privacy and Security",
    href: "/account/privacy-security",
    icon: Lock,
  },
  {
    id: "account-notifications",
    label: "Notifications",
    href: "/account/notifications",
    icon: BellRing,
  },
  {
    id: "account-support",
    label: "Support",
    href: "/account/support",
    icon: Headphones,
  },
];
