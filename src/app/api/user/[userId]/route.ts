import { getUserDetails } from "@/actions/auth";
import { UpdateUserSchema } from "@/actions/auth/schema";
import { Session } from "@/actions/auth/type";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = params;
    if (!userId) {
        return NextResponse.json({
            userId,
            data: {
                msg: "Invalid userId"
            }
        })
    }
    const result = await getUserDetails(userId);

    if (!result) {
        return NextResponse.json({
            userId,
            data: {
                msg: "Invalid userId"
            }
        })
    }
    return NextResponse.json({
        userId,
        data: result
    })
}

export async function PUT(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof UpdateUserSchema> = await req.json();
        const { success } = UpdateUserSchema.safeParse(body)
        if (!success) {
            return NextResponse.json({
                msg: "Invaid inputs"
            }, { status: 403 })
        }
        await prisma.user.update({
            where: {
                email: session.user?.email
            },
            data: {
                password: body.password,
                mobile: body.mobile,
                firstName: body.firstName,
                lastName: body.lastname,
                role: "buyer" === body.role ? "buyer" : "farmer"
            }

        })
        return NextResponse.json({
            msg: "update sucess"
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error"
        }, { status: 500 })
    }

}

export async function DELETE(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const result = await prisma.user.delete({
            where: {
                id: Number(session.user?.userId),
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