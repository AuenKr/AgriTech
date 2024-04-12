import { MouseEventHandler } from "react";

export function SidebarBtn({
    label,
    onClick = () => null,
}: {
    label: string;
    onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}) {
    return (
        <div
            className="border-b-2 p-2 px-5 hover:text-green-500 active:etxt-green-700 hover:cursor-pointer transition duration-200"
            onClick={onClick}
        >
            {label}
        </div>
    );
}
