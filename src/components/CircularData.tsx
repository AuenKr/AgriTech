"use client";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Card } from "./ui/card";

export function CircularData({
    label,
    value,
    type = "percentage",
}: {
    label: string;
    value: number;
    type?: "percentage" | "degree";
}) {
    return (
        <Card className="p-5 max-w-[300px] flex items-center justify-center">
            <div className="max-w-[150px] flex flex-col text-center space-y-2">
                <CircularProgressbarWithChildren value={value}>
                    {`${value} ${type === "percentage" ? "%" : "° C"}`}
                </CircularProgressbarWithChildren>
                <div className="text-2xl font-bold">{label}</div>
            </div>
        </Card>
    );
}
