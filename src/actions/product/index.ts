"use server"
import prisma from "@/db";

export async function getAllProducts() {
    const result = await prisma.product.findMany({});
    return result

}

export async function getProductDetails(productId: string) {
    const result = await prisma.product.findFirst({
        where: {
            id: Number(productId)
        }
    })
    if (!result) {
        return null
    }
    return result;
}