"use client";
import { useEffect, useState } from "react";
import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";

export function MotorControl() {
    const [motorStatus, setMotorStatus] = useState(false);
    async function motorSwitch() {
        const response = await fetch(
            `https://blr1.blynk.cloud/external/api/update?token=${
                process.env.NEXT_PUBLIC_BLYNK_TOKEN
            }&v1=${motorStatus ? 1 : 0}`
        );
        console.log(response.status);
        if (response.status !== 200) {
            setMotorStatus((prev) => !prev);
            toast({
                title: "Internal server error",
                description: "Try again later",
            });
        }
    }
    useEffect(() => {
        motorSwitch();
    }, [motorStatus]);

    const motorSwitchBtnHandler = () => {
        setMotorStatus((prev) => !prev);
    };
    return (
        <div>
            {motorStatus ? (
                <Button variant={"green"} onClick={motorSwitchBtnHandler} className="">
                    Turn OFF
                </Button>
            ) : (
                <Button variant={"destructive"} onClick={motorSwitchBtnHandler} className="">
                    Turn ON
                </Button>
            )}
        </div>
    );
}
