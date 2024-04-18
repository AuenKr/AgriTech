"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export function EditBtn({
    productId,
    children,
}: {
    productId: string;
    children: React.ReactNode;
}) {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/product/${productId}/edit`);
    };
    return <Button onClick={handleClick}>{children}</Button>;
}
