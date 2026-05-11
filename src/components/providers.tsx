"use client";

import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="portfolio-theme">
      {children}
    </ThemeProvider>
  );
}