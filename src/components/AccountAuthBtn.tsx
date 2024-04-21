"use client";
import { signOut, useSession } from "next-auth/react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";

export function AccountAuthBtn() {
    const session = useSession();
    const router = useRouter();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-bold">
                {session.data ? (
                    <>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href={"/dashboard"}>Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/product/add"}>Add Product</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <div onClick={() => signOut()}>Log Out</div>
                        </DropdownMenuItem>
                    </>
                ) : (
                    <>
                        <DropdownMenuItem>
                            <Link href={"/api/auth/signin"}>Sign In</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={"/auth/signup"}>Sign Up</Link>
                        </DropdownMenuItem>
                    </>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
