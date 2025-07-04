import ShopFooter from "@/components/frontend/ShopFooter";
import ShopHeader from "@/components/frontend/ShopHeader";
import { ThemeProvider } from "@/components/theme-provider";
import React, { ReactNode } from "react";

export default function ShopLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <ShopHeader />
                {children}
                <ShopFooter />
            </ThemeProvider>

        </div>
    );
}
