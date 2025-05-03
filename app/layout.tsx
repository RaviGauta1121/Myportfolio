import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "@/styles/globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { FirebaseProvider } from "../app/firebase-provider"
import { AuthProvider } from "../app/admin/auth-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ravi Gautam | Full Stack Developer",
  description: "Personal portfolio website of Ravi Gautam, a Full Stack Developer specialized in React, Next.js, and modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <FirebaseProvider>
            <AuthProvider>
              {children}
              <Toaster />
            </AuthProvider>
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}