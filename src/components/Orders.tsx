"use client";

import { getUserOrdersDetail } from "@/actions/order";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { OrderItemCard } from "./OrderItemCard";
import { OrderItemCardSkeleton } from "./skeleton/OrderItemCardSkeleton";

export function Order() {
    const [orders, setOrders] = useState<OrderType[] | null>();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getUserOrders() {
            const result = await getUserOrdersDetail();
            setOrders(result);
            setLoading(false);
        }
        getUserOrders();
    }, []);
    if (loading) {
        const tempArr = [1, 2, 3, 4, 5];
        return (
            <>
                {tempArr.map((value, index) => (
                    <OrderItemCardSkeleton key={index} />
                ))}
            </>
        );
    }
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-full md:max-w-lg">
                {orders ? (
                    orders.map((order) => (
                        <OrderItemCard key={order.id} order={order} />
                    ))
                ) : (
                    <div className="flex justify-center items-center">No order placed</div>
                )}
            </div>
        </div>
    );
}
let order = {
    id: 3,
    quantity: 100,
    bidPrice: 100,
    message: "djskaf akajsdf kahdf ljadskfhjh",
    status: "pending",
    userId: 4,
    product: {
        id: 1,
        name: "Apple",
        description: "Fresh apples from the farm",
        price: 200,
        salePrice: 120,
        quantityAvailable: 100,
        userId: 1,
        createdAt: "2024-04-20T16:41:06.570Z",
        updatedAt: "2024-04-20T16:41:06.570Z",
    },
    createdAt: "2024-04-21T05:01:32.664Z",
};

export interface OrderType {
    id: number;
    quantity: number;
    bidPrice: number;
    message: string | null;
    status: string;
    userId: number;
    createdAt: Date;
    product: {
        id: number;
        name: string;
        description: string | null;
        price: number;
        salePrice: number;
        quantityAvailable: number;
        userId: number;
        createdAt: Date;
        updatedAt: Date;
    };
}
