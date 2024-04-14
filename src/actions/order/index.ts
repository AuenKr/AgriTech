"use server"
import prisma from "@/db";

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

