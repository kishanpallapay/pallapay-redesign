"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { AccountOverviewPage } from "@/views";

const MOBILE_MAX_WIDTH = 767;

export default function AccountPage() {
  const router = useRouter();
  const [isMobileViewport, setIsMobileViewport] = useState<boolean | null>(null);
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    const handleViewportCheck = () => {
      const isMobile = window.innerWidth <= MOBILE_MAX_WIDTH;
      setIsMobileViewport(isMobile);

      if (!isMobile && !hasRedirectedRef.current) {
        hasRedirectedRef.current = true;
        router.replace("/account/settings");
      }
    };

    handleViewportCheck();
    window.addEventListener("resize", handleViewportCheck);

    return () => {
      window.removeEventListener("resize", handleViewportCheck);
    };
  }, [router]);

  if (isMobileViewport === null || !isMobileViewport) {
    return null;
  }

  return <AccountOverviewPage />;
}
