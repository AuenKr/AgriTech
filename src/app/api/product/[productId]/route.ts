import { Session } from "@/actions/auth/type";
import { getProductDetails } from "@/actions/product";
import { UpdateProductSchema } from "@/actions/product/schema";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest, { params }: {
    params: {
        productId: string
    }
}) {
    const { productId } = params;
    if (!productId) {
        return NextResponse.json({
            productId,
            data: {
                msg: "Invalid productId"
            }
        })
    }
    const result = await getProductDetails(productId);

    if (!result) {
        return NextResponse.json({
            productId,
            data: {
                msg: "Invalid productId"
            }
        })
    }
    return NextResponse.json({
        productId,
        data: result
    })
}

export async function PUT(req: NextRequest, { params }: {
    params: {
        productId: string
    }
}) {
    try {
        const { productId } = params;
        if (!productId) {
            return NextResponse.json({
                productId,
                data: {
                    msg: "Invalid productId"
                }
            })
        }
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof UpdateProductSchema> = await req.json();
        const { success } = UpdateProductSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        const result = await prisma.product.update({
            where: {
                id: Number(productId)
            },
            data: {
                name: body.name,
                description: body.description,
                price: body.price,
                salePrice: body.salePrice,
                quantityAvailable: body.quantityAvailable,
            }

        })
        return NextResponse.json({
            msg: "update success",
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
        productId: string
    }
}) {
    try {
        const { productId } = params;
        if (!productId) {
            return NextResponse.json({
                productId,
                data: {
                    msg: "Invalid productId"
                }
            })
        }
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const result = prisma.product.delete({
            where: {
                id: Number(productId),
                userId: Number(session.user.userId)
            }
        })
        return NextResponse.json({
            msg: "deleted success",
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error"
        }, { status: 500 })
    }
}