"use server"
import prisma from "@/db";

export async function getAllProducts() {
    const result = await prisma.product.findMany({
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            salePrice: true,
            quantityAvailable: true,
            userId: true,
            Image: true,
        }
    });
    return result

}

export async function getProductDetails(productId: string) {
    const result = await prisma.product.findFirst({
        where: {
            id: Number(productId),
        },
        select: {
            id: true,
            name: true,
            description: true,
            price: true,
            salePrice: true,
            quantityAvailable: true,
            userId: true,
            Image: {
                where: {
                    productId: Number(productId)
                }
            }
        }
    })
    return result;
}