"use client";

import { useEffect, useMemo, useState } from "react";

import { Login } from "@/views/auth/login/login";
import { Register } from "@/views/auth/register/register";
import { ForgotPassword } from "@/views/auth/forgot/forgot-password";
import { AuthSwitch } from "@/components/pages/auth/AuthSwitch";
import Image from "next/image";
type AuthView = "login" | "register" | "forgotPassword";

type AuthEndpointResponse = {
  view?: string;
};

const AUTH_VIEW_ENDPOINT =
  process.env.NEXT_PUBLIC_AUTH_VIEW_ENDPOINT ?? "/api/auth/view";

function normalizeView(value: unknown): AuthView {
  if (value === "register") return "register";
  if (value === "forgotPassword" || value === "forgot-password") {
    return "forgotPassword";
  }
  return "login";
}

type AuthPageGatewayProps = {
  initialView?: string;
};

export function AuthPageGateway({ initialView }: AuthPageGatewayProps = {}) {
  const normalizedInitialView = normalizeView(initialView);
  const [activeView, setActiveView] = useState<AuthView>(normalizedInitialView);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAuthView() {
      try {
        if (!AUTH_VIEW_ENDPOINT) {
          setIsLoading(false);
          return;
        }

        let endpointUrl: URL;

        try {
          endpointUrl = new URL(AUTH_VIEW_ENDPOINT, window.location.origin);
        } catch (parseError) {
          throw new Error(
            `Invalid auth endpoint: ${AUTH_VIEW_ENDPOINT}. ${String(
              parseError
            )}`
          );
        }

        endpointUrl.searchParams.set("view", normalizedInitialView);

        const response = await fetch(endpointUrl.toString(), {
          cache: "no-store",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Failed to load auth view (${response.status})`);
        }

        const data: AuthEndpointResponse = await response.json();
        setActiveView(normalizeView(data.view));
      } catch (err) {
        console.error(err);
        setError("Unable to load authentication view. Showing login form.");
        setActiveView(normalizedInitialView);
      } finally {
        setIsLoading(false);
      }
    }

    fetchAuthView();
  }, [normalizedInitialView]);

  const showSwitch = useMemo(
    () => activeView !== "forgotPassword",
    [activeView]
  );

  if (isLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading authentication...</p>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background flex-col">
      <div className="text-center mb-2">
        <div className="w-[160px] h-[40px] mx-auto mb-3">
          <Image
            src="/logo/LogoBlue.png"
            alt="Logo"
            width={160}
            height={40}
            className="block dark:hidden"
          />
          <Image
            src="/logo/LogoWhite.png"
            alt="Logo"
            width={160}
            height={40}
            className="hidden dark:block"
          />
        </div>
      </div>
      <div className="w-full max-w-xl rounded-2xl bg-transparent md:border-2 md:border-orange md:px-14 md:py-10 px-8">
        <div className="w-full justify-center items-center flex mb-7">
          {" "}
          {showSwitch && (
            <AuthSwitch
              leftButton={{ label: "Register", value: "register" }}
              rightButton={{ label: "Login", value: "login" }}
              activeValue={activeView}
              onLeftClick={() => setActiveView("register")}
              onRightClick={() => setActiveView("login")}
            />
          )}
        </div>

        {activeView === "register" && <Register />}
        {activeView === "forgotPassword" && <ForgotPassword />}
        {activeView === "login" && <Login />}
        {error && (
          <div className="fixed top-28 left-1/2 z-10 w-full max-w-md -translate-x-1/2 px-4">
            <div className="rounded-lg border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
              {error}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
