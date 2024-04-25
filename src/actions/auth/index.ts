"use server"
import prisma from "@/db";
import { getServerSession } from "next-auth";

export async function getUser() {
    const session = await getServerSession();
    if (!session) {
        return null;
    }
    const result = await prisma.user.findFirst({
        where: {
            email: session.user?.email as string,
        }
    })
    return result;
}
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

export async function getUserAddress() {
    const session = await getServerSession();
    if (!session) {
        return null;
    }
    const result = await prisma.user.findFirst({
        where: {
            email: session.user?.email as string,
        },
        select: {
            id: true,
            Address: true
        }
    })
    return result;
}