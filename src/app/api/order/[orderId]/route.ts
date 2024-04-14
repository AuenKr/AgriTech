import { Session } from "@/actions/auth/type";
import { getOrderDetails } from "@/actions/order";
import { UpdateOrderSchema } from "@/actions/order/schema";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest, { params }: {
    params: {
        orderId: string
    }
}) {
    const { orderId } = params;
    if (!orderId) {
        return NextResponse.json({
            orderId,
            data: {
                msg: "Invalid orderId"
            }
        })
    }
    const result = await getOrderDetails(orderId);

    if (!result) {
        return NextResponse.json({
            orderId,
            data: {
                msg: "Invalid orderId"
            }
        })
    }
    return NextResponse.json({
        orderId,
        data: result
    })
}

export async function PUT(req: NextRequest, { params }: {
    params: {
        orderId: string
    }
}) {
    try {
        const { orderId } = params;
        if (!orderId) {
            return NextResponse.json({
                orderId,
                data: {
                    msg: "Invalid orderId"
                }
            })
        }
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof UpdateOrderSchema> = await req.json();
        const { success } = UpdateOrderSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        const result = await prisma.order.update({
            where: {
                id: Number(orderId)
            },
            data: {
                quantity: Number(body.quantity),
                bidPrice: Number(body.bidPrice),
                productId: Number(body.productId),
            }

        })
        return NextResponse.json({
            msg: "order update success",
            result
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error"
        }, { status: 500 })
    }

}

export async function DELETE(req: NextRequest, { params }: {
    params: {
        orderId: string
    }
}) {
    try {
        const { orderId } = params;
        if (!orderId) {
            return NextResponse.json({
                orderId,
                data: {
                    msg: "Invalid orderId"
                }
            })
        }
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const result = await prisma.order.delete({
            where: {
                id: Number(orderId),
                userId: Number(session.user.userId)
            }
        })
        return NextResponse.json({
            msg: "order deleted success",
            result
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error"
        }, { status: 500 })
    }
}