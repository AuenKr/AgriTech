"use client";
import Image from "next/image";
import { MouseEventHandler } from "react";

export function AppbarBtn({
    label,
    imgSrc,
    size = 28,
    onClick,
}: AppbarBtnType) {
    return (
        <div
            className="flex flex-col justify-center items-center hover:text-green-500 active:text-green-700"
            onClick={onClick}
        >
            {imgSrc ? (
                <Image
                    src={imgSrc}
                    alt={label || ""}
                    width={size}
                    height={size}
                />
            ) : null}
            {label ? <span className="font-bold px-2 p-1">{label}</span> : null}
        </div>
    );
}

interface AppbarBtnType {
    imgSrc?: string;
    label?: string;
    size?: number;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
    children?: React.ReactNode;
}
