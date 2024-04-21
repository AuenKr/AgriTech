"use client";
import { getAllProducts } from "@/actions/product";
import { ItemCard } from "@/components/ItemCard";
import { ItemCardSkeleton } from "@/components/skeleton/ItemCardSkeleton";
import { useEffect, useState } from "react";

export default function Shop() {
    const [allProducts, setAllProducts] = useState<allProductsType[]>([]);
    useEffect(() => {
        async function getAllProduct() {
            const allProducts = await getAllProducts();
            setAllProducts(allProducts);
        }
        getAllProduct();
    }, []);
    if (!allProducts[0]) {
        const tempArray = [0, 1];
        return (
            <div className="flex flex-col justify-center items-center space-y-4">
                {tempArray.map((value, index) => {
                    return <ItemCardSkeleton key={index} />;
                })}
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center">
            {allProducts.map((product) => {
                return (
                    <ItemCard
                        key={product.id}
                        id={product.id}
                        imgSrc={
                            product.Image[0]?.imageUrl || "/public/potatoes.jpg"
                        }
                        name={product.name}
                        price={product.price}
                        salePrice={product.salePrice}
                    />
                );
            })}
        </div>
    );
}

interface allProductsType {
    id: number;
    name: string;
    description: string | null;
    price: number;
    salePrice: number;
    quantityAvailable: number;
    userId: number;
    Image: {
        id: number;
        sourceId: string;
        productId: number;
        imageUrl: string;
    }[];
}
