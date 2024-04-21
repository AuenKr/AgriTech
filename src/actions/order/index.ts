"use server"
import prisma from "@/db";
import { getServerSession } from "next-auth";
import { useId } from "react";

export async function getOrderDetails(productId: string) {
    const result = await prisma.order.findFirst({
        where: {
            id: Number(productId)
        }
    })
    if (!result) {
        return null
    }
    return result;
}

export async function getUserOrdersDetail() {
    const session = await getServerSession();
    if (!session) {
        return null;
    }
    const result = await prisma.order.findMany({
        where: {
            user: {
                email: session.user?.email as string
            }
        },
        select: {
            id: true,
            quantity: true,
            bidPrice: true,
            message: true,
            status: true,
            userId: true,
            product: true,
            createdAt: true,
        }
    })
    return result;
}