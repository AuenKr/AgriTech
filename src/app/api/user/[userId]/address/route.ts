import { UpdateAddressSchema } from "@/actions/auth/schema";
import { Session } from "@/actions/auth/type";
import prisma from "@/db";
import { authOption } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
    const session = await getServerSession();
    if (!session) {
        return NextResponse.json({
            msg: "Invalid userId"
        }, {
            status: 404
        })
    }
    const result = await prisma.user.findFirst({
        where: {
            email: session.user?.email as string
        },
        select: {
            id: true,
            Address: true
        }
    })
    return NextResponse.json(result);
}

export async function PUT(req: NextRequest) {
    try {
        const session: Session | null = await getServerSession(authOption);
        if (!session) {
            return NextResponse.json({
                msg: "Invalid User"
            }, { status: 403 })
        }
        const body: z.infer<typeof UpdateAddressSchema> = await req.json();
        const validInput = UpdateAddressSchema.safeParse(body)
        if (!validInput.success) {
            return NextResponse.json({
                msg: "Invaid inputs",
                error: validInput.error
            }, { status: 403 })
        }
        const address = await prisma.address.findFirst({
            where: {
                userId: Number(body.userId)
            }
        })
        let result;
        if (!address) {
            result = await prisma.address.create({
                data: {
                    address: body.address as string,
                    city: body.city as string,
                    locality: body.locality as string,
                    state: body.state as string,
                    pincode: body.pincode as string,
                    alternateMob: body.alternateMob,
                    landmark: body.landmark,
                    userId: Number(body.userId)
                }
            })
        } else {
            result = await prisma.address.upsert({
                where: {
                    id: address?.id,
                },
                update: {
                    address: body.address as string,
                    city: body.city as string,
                    locality: body.locality as string,
                    state: body.state as string,
                    pincode: body.pincode as string,
                    alternateMob: body.alternateMob,
                    landmark: body.landmark,
                },
                create: {
                    address: body.address as string,
                    city: body.city as string,
                    locality: body.locality as string,
                    state: body.state as string,
                    pincode: body.pincode as string,
                    alternateMob: body.alternateMob,
                    landmark: body.landmark,
                    userId: Number(body.userId)
                }
            })
        }
        return NextResponse.json({
            msg: "update sucess",
            result
        })
    } catch (error) {
        return NextResponse.json({
            msg: "internal server error",
            error
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