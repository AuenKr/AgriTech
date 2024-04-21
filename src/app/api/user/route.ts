import { CreateUserSchema } from "@/actions/auth/schema";
import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    const result = await prisma.user.findMany({});
    return NextResponse.json({
        products: result
    })
}

export async function POST(req: NextRequest) {
    try {
        const body: z.infer<typeof CreateUserSchema> = await req.json();
        const { success } = CreateUserSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        const result = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                mobile: body.mobile,
                firstName: body.firstName,
                lastName: body.lastName,
                role: body.role,
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