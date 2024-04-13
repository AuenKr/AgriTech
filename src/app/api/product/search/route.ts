import prisma from "@/db";
import { NextRequest, NextResponse } from "next/server";
import Fuse from 'fuse.js';

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('q');
    if (!query) {
        return NextResponse.json({
            msg: "on serach route",
            result: null,
        })
    }
    const prismaSearchResult = await prisma.product.findMany({
        select: {
            name: true,
            description: true
        }
    })
    const fuse = new Fuse(prismaSearchResult, fuseOptions);

    const searchResult = fuse.search(query);

    return NextResponse.json({
        msg: "on serach route",
        result: searchResult,
    })
}

const fuseOptions = {
    keys: [
        "name",
        "description"
    ]
};


