import ShopBanner from "@/components/frontend/ShopBanner";
import ShopLayout from "@/layouts/shop-layout";
import React from "react";

export default function Home() {
    return (
        <ShopLayout>
            <div className="min-h-screen">
                <div className="container mx-auto max-w-6xl">
                    <ShopBanner/>
                </div>
            </div>
        </ShopLayout>
    )
}
