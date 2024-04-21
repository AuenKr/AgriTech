import { Session } from "@/actions/auth/type";
import { CreateOrderSchema } from "@/actions/order/schema";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    const result = await prisma.order.findMany({});
    return NextResponse.json({
        products: result
    })
}

export async function POST(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof CreateOrderSchema> = await req.json();
        const { success } = CreateOrderSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        const result = await prisma.order.create({
            data: {
                productId: Number(body.productId),
                userId: Number(session.user.userId),
                quantity: Number(body.quantity),
                bidPrice: Number(body.bidPrice),
                message: body.message
            }
        })
        return NextResponse.json({
            msg: "order created success",
            result
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error",
            error
        }, { status: 500 })
    }
}