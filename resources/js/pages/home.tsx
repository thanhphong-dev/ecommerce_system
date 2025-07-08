import ProductListing from "@/components/frontend/ProductListing";
import ShopBanner from "@/components/frontend/ShopBanner";
import ShopCategories from "@/components/frontend/ShopCategories";
import ShopLayout from "@/layouts/shop-layout";
import React from "react";

export default function Home() {
    return (
        <ShopLayout>
            <div className="min-h-screen">
                <div className="container mx-auto max-w-6xl">
                    <ShopBanner/>
                    <div className="py-16">
                        <ShopCategories />
                    </div>
                    <div className="py-24">
                        <ProductListing />
                    </div>
                </div>
            </div>
        </ShopLayout>
    )
}
