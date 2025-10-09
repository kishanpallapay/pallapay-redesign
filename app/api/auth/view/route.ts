import { NextResponse } from "next/server";

type AuthView = "login" | "register" | "forgotPassword";

function normalizeView(view: string | null): AuthView {
  if (view === "register") return "register";
  if (view === "forgotPassword" || view === "forgot-password") {
    return "forgotPassword";
  }
  return "login";
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const requestedView = url.searchParams.get("view");
  const view = normalizeView(requestedView);

  return NextResponse.json({ view });
}
