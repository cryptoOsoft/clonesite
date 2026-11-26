import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const { pathname } = request.nextUrl;
  const locale = pathname === "/ro" || pathname.startsWith("/ro/") ? "ro" : "en";
  requestHeaders.set("x-locale", locale);
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|sites/|.*\\.(?:svg|jpg|jpeg|png|json|ico|txt)$).*)"],
};
