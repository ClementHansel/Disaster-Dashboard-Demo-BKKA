"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes"; // Optional, for dark mode
import { SessionProvider } from "next-auth/react"; // Optional, for authentication
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Optional, for data fetching

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
