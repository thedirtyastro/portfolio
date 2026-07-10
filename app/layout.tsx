import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import ThemeProvider from "./components/ThemeProvider";
import ThemeScript from "./components/ThemeScript";
import SiteFooter from "./components/SiteFooter";
import FloatingThemeToggle from "./components/FloatingThemeToggle";
import ResumeProvider from "./components/ResumeProvider";

export const metadata: Metadata = {
  title: "Sarukhan Muthuraman — Frontend Engineer & Web3 Developer",
  description:
    "Sarukhan Muthuraman — Frontend Engineer, Web3 Developer, UI Engineer. Portfolio of selected work in Next.js, React, TypeScript and blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Runs before first paint — prevents theme flash */}
        <ThemeScript />
      </head>
      <body suppressHydrationWarning style={{ background: "var(--paper)", color: "var(--ink)" }}>
        <ThemeProvider>
          <ResumeProvider>
            <Cursor />
            <Header />
            <main>{children}</main>
            <SiteFooter />
            {/* Always-visible floating toggle — bottom right */}
            <FloatingThemeToggle />
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
