"use client";

import Image from "next/image";
import { ArrowRight, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdownMenu";
import { Button } from "../ui/button";
import ThemeToggle, { ThemeToggleSwitch } from "../theme-toggle";
import { getInitials } from "./utils";
import type { HeaderUser, UserVerification } from "./headerUser";
import { cn } from "@/lib/utils";
import VerificationLevelCard from "../ui/verification-level-card";

type ProfileDropdownProps = {
  user: HeaderUser;
  verification?: UserVerification;
  onLogout?: () => void;
  onManageSettings?: () => void;
  onUpgradeVerification?: () => void;
  triggerClassName?: string;
  contentClassName?: string;
};

export function ProfileDropdown({
  user,
  verification,
  onLogout,
  onManageSettings,
  onUpgradeVerification,
  triggerClassName,
  contentClassName,
}: ProfileDropdownProps) {
  const initials = getInitials(user.name);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={cn(
            "group inline-flex items-center gap-3 rounded-full px-2 py-1 text-left transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange dark:hover:bg-gray-700/80",
            triggerClassName
          )}
          aria-haspopup="menu"
        >
          {user.avatarUrl ? (
            <span className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-200">
              <Image
                src={user.avatarUrl}
                alt={`${user.name}'s avatar`}
                fill
                sizes="40px"
                className="object-cover"
              />
            </span>
          ) : (
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-base font-semibold text-gray-600 dark:bg-gray-700 dark:text-gray-200">
              {initials}
            </span>
          )}
          <span className="hidden min-w-[140px] text-left leading-tight sm:block">
            <span className="block text-base font-exo2-semibold text-gray-900 dark:text-white">
              {user.name}
            </span>
            <span className="block text-sm font-exo2-medium text-gray-600 dark:text-gray-300">
              {user.email}
            </span>
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={16}
        className={cn(
          "min-w-[368px] overflow-hidden rounded-[12px] border dark:border-gray-400 border-gray-50 bg-gray-50 dark:bg-gray p-0 text-white  ",
          contentClassName
        )}
      >
        <div className="space-y-6 px-4 py-6 w-full">
          <div className="flex items-start justify-center">
            <Image
              src="/images/pallapay-light.png"
              alt="Pallapay"
              width={124}
              height={20}
              priority={false}
              className="h-auto w-[124px] h-5 dark:hidden block"
            />
            <Image
              src="/images/pallapay-dark.png"
              alt="Pallapay"
              width={124}
              height={20}
              priority={false}
              className="h-auto w-[124px] h-5 dark:!block hidden"
            />
          </div>

          <div className="flex items-center gap-4 w-full justify-between">
            <div className="flex justify-between w-full gap-2">
              <div className="flex gap-2  justify-start items-center">
                {user.avatarUrl ? (
                  <span className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white/10">
                    <Image
                      src={user.avatarUrl}
                      alt={`${user.name}'s avatar`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </span>
                ) : (
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-gray-100 dark:bg-gray-400 text-lg font-semibold dark:text-white dark:text-black">
                    {initials}
                  </span>
                )}
                <div className="flex flex-col leading-tight">
                  <span className="text-lg font-exo2-semibold dark:text-white text-black">
                    {user.name}
                  </span>
                  <span className="text-sm font-exo2-medium dark:text-white/60 text-black/60">
                    {user.email}
                  </span>
                </div>
              </div>
              <ThemeToggleSwitch />
            </div>
          </div>

          {verification ? <VerificationLevelCard /> : null}
        </div>
        <div className="flex items-center justify-between gap-4 mb-6 mx-4">
          <Button
            type="button"
            variant="outline"
            className="border-black dark:border-white text-black dark:text-white h-11"
            onClick={onLogout}
          >
            Log Out
            <LogOut className="h-4 w-4" />
          </Button>
          <button
            type="button"
            onClick={onManageSettings}
            className="text-black dark:text-white h-11 flex items-center gap-1"
          >
            More Settings
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export type { ProfileDropdownProps };
