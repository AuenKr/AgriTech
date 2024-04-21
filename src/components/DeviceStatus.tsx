"use client";

import { useEffect, useState } from "react";

export function DeviceStatus() {
    const [status, setStatus] = useState(false);
    useEffect(() => {
        async function checkDeviceStatus() {
            const response = await fetch(
                `https://blr1.blynk.cloud/external/api/isHardwareConnected?token=${process.env.NEXT_PUBLIC_BLYNK_TOKEN}`
            );
            const result: any = await response.json();
            setStatus(result);
        }
        checkDeviceStatus();
    }, []);
    return (
        <div>
            <div className="text-2xl font-bold">
                <span>Device :</span>{" "}
                {status ? (
                    <span className="text-green-500">Online</span>
                ) : (
                    <span className="text-red-500">Offline</span>
                )}
            </div>
        </div>
    );
}
