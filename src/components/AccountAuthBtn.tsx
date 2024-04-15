"use client";
import { signOut, useSession } from "next-auth/react";
import { AppbarBtn } from "./AppbarBtn";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { ActivityIcon, UserRound } from "lucide-react";

export function AccountAuthBtn() {
    const session = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserRound />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {session.data ? (
                    <>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
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
