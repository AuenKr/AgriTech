"use server"
import prisma from "@/db";

export async function getUserDetails(userId: string) {
    const result = await prisma.user.findFirst({
        where: {
            id: Number(userId)
        }
    })
    if (!result) {
        return null
    }
    return result;
}