import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import Fuse from 'fuse.js';
import { searchProduct } from "@/actions/product/search";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('q');
    if (!query) {
        return NextResponse.json({
            msg: "on serach route",
            result: null,
        })
    }
    const searchResult = await searchProduct(query);
    return NextResponse.json({
        msg: "on serach route",
        results: searchResult
    })
}

