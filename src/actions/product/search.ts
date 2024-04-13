"use server"

import prisma from "@/db";
import Fuse from "fuse.js";

export async function searchProduct(query: string) {
    const prismaSearchResult = await prisma.product.findMany({
        select: {
            name: true,
            description: true,
            id: true
        }
    })
    const fuse = new Fuse(prismaSearchResult, fuseOptions);
    const searchResult = fuse.search(query);
    return searchResult;
}

const fuseOptions = {
    keys: [
        "name",
        "description"
    ]
};
