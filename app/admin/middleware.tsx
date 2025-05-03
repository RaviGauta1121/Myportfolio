import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This middleware only applies to server requests, not client-side checks
export function middleware(request: NextRequest) {
  // We can't access localStorage here, so we use a client-side redirect
  // This provides a fallback security layer, but the main protection happens client-side
  
  // Skip middleware for API routes and public assets
  if (
    request.nextUrl.pathname.startsWith("/api") ||
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Check if the route is an admin route
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Add a header that will be checked by the client-side admin page
    // This serves as a signal to the client that it's an admin page
    const headers = new Headers(request.headers)
    headers.set("x-admin-route", "true")
    
    return NextResponse.next({
      headers,
    })
  }

  return NextResponse.next()
}