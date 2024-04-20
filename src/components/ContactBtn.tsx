"use client";

import { signIn, useSession } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { toast } from "./ui/use-toast";

export function ContactBtn({
    productId,
    children,
}: {
    productId: string;
    children: React.ReactNode;
}) {
    const session = useSession();
    const router = useRouter();
    const handleClick = () => {
        if (!session.data) {
            toast({
                title: "Sign In to contact",
                action: <Button onClick={() => signIn()}>Sign In</Button>,
            });
        } else {
            router.push(`/shop/${productId}/contact`);
        }
    };
    return <Button onClick={handleClick}>{children}</Button>;
}
