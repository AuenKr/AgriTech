"use server"
import prisma from "@/db";
import { getServerSession } from "next-auth";

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

export async function getUserProduct() {
    const session = await getServerSession();
    const result = await prisma.product.findMany({
        where: {
            user: {
                email: session?.user?.email as string
            }
        },
        select: {
            id: true,
            price: true,
            salePrice: true,
            name: true,
            Image: true
        }
    })
    return result;
}