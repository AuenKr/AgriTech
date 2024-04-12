"use client";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { SessionProvider } from "next-auth/react";


export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <SessionProvider>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                {children}
            </ThemeProvider>
        </SessionProvider>
    );
}
