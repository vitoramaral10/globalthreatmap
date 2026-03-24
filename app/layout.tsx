import { AuthInitializer } from "@/components/auth/auth-initializer";
import { CreditErrorBanner } from "@/components/credit-error-banner";
import { GeistMono } from "geist/font/mono";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Threat Map | Intelligence Platform",
  description: "Real-time global situational awareness platform for security events, geopolitical developments, and threat indicators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistMono.className} antialiased min-h-screen`}>
        <CreditErrorBanner />
        <AuthInitializer>{children}</AuthInitializer>
      </body>
    </html>
  );
}
