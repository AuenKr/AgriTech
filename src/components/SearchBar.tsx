"use client";

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "./ui/card";
import Link from "next/link";
import { DialogClose } from "@radix-ui/react-dialog";

let debouncing: NodeJS.Timeout;

export function SearchBar() {
    const [inputValue, setInputValue] = useState<string>("");
    const [serachResult, setSearchResult] = useState<SearchResultType | null>();

    useEffect(() => {
        debouncing = setTimeout(async () => {
            console.log(inputValue);
            console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/search/?q=${inputValue}`,
                {
                    next: {
                        revalidate: 60 * 1,
                    },
                }
            );
            const result: SearchResultType = await response.json();
            setSearchResult(result);
            console.log(result);
        }, 300);
        return () => {
            clearTimeout(debouncing);
        };
    }, [inputValue]);

    return (
        <Dialog>
            <DialogTrigger>
                <div className="hidden md:block border-2 rounded-lg dark:border-slate-800 ml-2">
                    <div className="flex justify-center items-center">
                        <Input />
                        <Search className="mx-2" />
                    </div>
                </div>
                <Search className="md:hidden" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Search Product</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center">
                    <Input
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <Card className="w-full m-2">
                        {!serachResult?.results ? (
                            <div className="m-2 p-1">Type to search</div>
                        ) : (
                            <div>
                                {serachResult.results?.map((result) => (
                                    <div
                                        key={result.item.id}
                                        className="border-b-2 m-2 p-1"
                                    >
                                        <DialogClose asChild>
                                            <Link
                                                href={`/shop/${result.item.id}`}
                                            >
                                                <span>
                                                    {result.item.name} :{" "}
                                                </span>
                                                <span>
                                                    {result.item.description}
                                                </span>
                                            </Link>
                                        </DialogClose>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                </div>
            </DialogContent>
        </Dialog>
    );
}

interface SearchResultType {
    results: {
        item: {
            id: string;
            name: string;
            description: string;
        };
        refIndex: number;
    }[];
}
