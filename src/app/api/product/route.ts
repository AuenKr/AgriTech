import { Session } from "@/actions/auth/type";
import { getAllProducts } from "@/actions/product";
import { CreateProductSchema} from "@/actions/product/schema";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    const result = await getAllProducts();
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
        const body: z.infer<typeof CreateProductSchema> = await req.json();
        const { success } = CreateProductSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        const result = await prisma.product.create({
            data: {
                name: body.name,
                description: body.description,
                price: body.price,
                salePrice: body.salePrice,
                quantityAvailable: body.quantityAvailable,
                userId: Number(session.user.userId)
            }
        })
        return NextResponse.json({
            msg: "created sucess",
            result
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error",
            error
        }, { status: 500 })
    }
}