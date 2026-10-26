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
  title: "Sarukhan Muthuraman | Frontend & Full Stack Developer",
  description:
    "Sarukhan Muthuraman is a Frontend and Full Stack Developer specializing in React, Next.js, TypeScript, responsive web applications, and scalable product development. Explore projects and get in touch.",
  metadataBase: new URL("https://sarukhan.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://sarukhan.dev",
    title: "Sarukhan Muthuraman | Frontend & Full Stack Developer",
    description:
      "Sarukhan Muthuraman is a Frontend and Full Stack Developer specializing in React, Next.js, TypeScript, responsive web applications, and scalable product development.",
    siteName: "Sarukhan Muthuraman",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarukhan Muthuraman | Frontend & Full Stack Developer",
    description:
      "Frontend and Full Stack Developer specializing in React, Next.js, TypeScript, and scalable product development.",
  },
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
