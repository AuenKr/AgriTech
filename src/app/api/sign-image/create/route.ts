import { CreateProductImagesSchema } from "@/actions/product/schema";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { Session } from "@/actions/auth/type";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { z } from "zod";
import { error } from "console";

export async function POST(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof CreateProductImagesSchema> = await req.json();
        console.log(body);
        const response = CreateProductImagesSchema.safeParse(body)
        if (!response.success) {
            return NextResponse.json({
                msg: "Invaid inputs",
                error: response.error
            }, { status: 403 })
        }
        const allImage = body.images.map((image) => {
            return {
                productId: Number(body.productId),
                sourceId: image.id,
                imageUrl: image.imageSrc
            }
        })
        console.log(allImage);
        const result = await prisma.image.createMany({
            data: allImage
        })
        return NextResponse.json({
            msg: "Image created",
            result
        })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "internal server error",
            error
        }, { status: 500 })
    }
}