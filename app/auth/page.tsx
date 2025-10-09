import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { AuthPageGateway } from "@/views/auth/AuthPageGateway";

export const dynamic = "force-dynamic";

export default async function AuthPage() {
  const requestHeaders = await headers();
  const view =
    requestHeaders.get("x-initial-view") ?? requestHeaders.get("x-view");

  return <AuthPageGateway initialView={view ?? undefined} />;
}
