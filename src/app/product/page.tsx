"use client";
import { getUserProduct } from "@/actions/product";
import { ItemCard } from "@/components/ItemCard";
import { ItemCardSkeleton } from "@/components/skeleton/ItemCardSkeleton";
import { useEffect, useState } from "react";

export default function ProductPage() {
    const [products, setProducts] = useState<AllProductsType[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getAllProducts() {
            const products = await getUserProduct();
            setProducts(products);
            setLoading(false);
        }
        getAllProducts();
    }, []);
    if (loading) {
        const tempArray = [0, 1];
        return (
            <div className="flex flex-col justify-center items-center space-y-4">
                {tempArray.map((value, index) => {
                    return <ItemCardSkeleton key={index} />;
                })}
            </div>
        );
    }
    if (!products[0]) {
        return (
            <div className="flex flex-col items-center justify-center p-10 text-lg md:text-xl font-bold">
                You don&apos;t have any product listing listing
            </div>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center">
            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    id={product.id}
                    imgSrc={product.Image[0]?.imageUrl}
                    price={product.price}
                    salePrice={product.salePrice}
                    name={product.name}
                    type="product"
                />
            ))}
        </div>
    );
}

interface AllProductsType {
    id: number;
    name: string;
    price: number;
    salePrice: number;
    Image: {
        id: number;
        sourceId: string;
        productId: number;
        imageUrl: string;
    }[];
}
