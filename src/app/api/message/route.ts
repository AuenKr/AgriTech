import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        msg: 'On /api/message health check route'
    })
}