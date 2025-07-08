import ShopFooter from "@/components/frontend/ShopFooter";
import ShopHeader from "@/components/frontend/ShopHeader";
import { ThemeProvider } from "@/components/theme-provider";
import React, { ReactNode } from "react";
import GlobalLayout from "./global-layout";

export default function ShopLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            <GlobalLayout>
                <ShopHeader />
                {children}
                <ShopFooter />
            </GlobalLayout>
        </div>
    );
}
