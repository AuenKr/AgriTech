"use client";
import { useEffect, useState } from "react";
import { CircularData } from "./CircularData";
import { toast } from "./ui/use-toast";

export function DeviceData() {
    const [soilMoisture, setSoilMositure] = useState<number>(0);
    const [temperature, setTemperature] = useState<number>(0);
    const [humidity, setHumidity] = useState<number>(0);
    async function getSoilMoisture() {
        const response = await fetch(
            `https://blr1.blynk.cloud/external/api/get?token=${process.env.NEXT_PUBLIC_BLYNK_TOKEN}&v0`
        );
        if (response.status !== 200) {
            return toast({
                title: "Soil Moisture sensor not working",
            });
        }
        const result: any = await response.text();
        setSoilMositure(result);
    }
    async function getTemperature() {
        const response = await fetch(
            `https://blr1.blynk.cloud/external/api/get?token=${process.env.NEXT_PUBLIC_BLYNK_TOKEN}&v2`
        );
        if (response.status !== 200) {
            return toast({
                title: "Temperature sensor not working",
            });
        }
        const result: any = await response.text();
        setTemperature(result);
    }
    async function getHumidity() {
        const response = await fetch(
            `https://blr1.blynk.cloud/external/api/get?token=${process.env.NEXT_PUBLIC_BLYNK_TOKEN}&v3`
        );
        if (response.status !== 200) {
            return toast({
                title: "Humidity sensor not working",
            });
        }
        const result: any = await response.text();
        setHumidity(result);
    }
    useEffect(() => {
        const x = setInterval(() => {
            getSoilMoisture();
            getTemperature();
            getHumidity();
        }, 10 * 1000);
        return () => clearInterval(x);
    }, []);
    return (
        <>
            <CircularData label="Soil Moisture" value={soilMoisture || 10} />
            <CircularData
                label="Temperature"
                value={temperature || 32}
                type="degree"
            />
            <CircularData label="Humidity" value={humidity || 38} />
        </>
    );
}
