"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function CropData() {
    const [selectedCrop, setSelectedCrop] = useState("tomato");
    const [data, setData] = useState({
        Humidity: "70%",
        Temperature: "25°C",
        NPK: "10-5-10",
        SoilMoisture: "60%",
    });

    const handleCropSelect = (crop: any) => {
        switch (crop) {
            case "tomato":
                setData({
                    Humidity: "70%",
                    Temperature: "25°C",
                    NPK: "10-5-10",
                    SoilMoisture: "60%",
                });
                break;
            case "potato":
                setData({
                    Humidity: "80%",
                    Temperature: "20°C",
                    NPK: "5-10-10",
                    SoilMoisture: "70%",
                });
                break;
            case "rice":
                setData({
                    Humidity: "85%",
                    Temperature: "30°C",
                    NPK: "10-10-10",
                    SoilMoisture: "80%",
                });
                break;
            case "wheat":
                setData({
                    Humidity: "65%",
                    Temperature: "22°C",
                    NPK: "10-5-5",
                    SoilMoisture: "65%",
                });
                break;
        }
        setSelectedCrop(crop);
    };
    return (
        <div className="flex flex-col justify-center items-center text-center h-full mt-4 space-y-10">
            <div className="w-full max-w-lg space-y-10">
                <h2 className="font-bold text-2xl">Select a Crop:</h2>
                <div className="space-x-3 m-2">
                    <Button onClick={() => handleCropSelect("tomato")}>
                        Tomato
                    </Button>
                    <Button onClick={() => handleCropSelect("potato")}>
                        Potato
                    </Button>
                    <Button onClick={() => handleCropSelect("rice")}>
                        Rice
                    </Button>
                    <Button onClick={() => handleCropSelect("wheat")}>
                        Wheat
                    </Button>
                </div>
                {selectedCrop && (
                    <Card className="p-2 m-2 font-bold">
                        <div className="w-full flex">
                            <h3 className="flex-grow-0 flex items-center text-center border-r-2 w-[150px]">
                                {selectedCrop.toUpperCase()} Data:
                            </h3>
                            <div className="flex-grow">
                                <p>
                                    Humidity:{" "}
                                    <span className="font-semibold">
                                        {data.Humidity}
                                    </span>
                                </p>
                                <p>
                                    Temperature:{" "}
                                    <span className="font-semibold">
                                        {data.Temperature}
                                    </span>
                                </p>
                                <p>
                                    NPK:{" "}
                                    <span className="font-semibold">
                                        {data.NPK}
                                    </span>
                                </p>
                                <p>
                                    Soil Moisture:{" "}
                                    <span className="font-semibold">
                                        {data.SoilMoisture}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </Card>
                )}
            </div>
        </div>
    );
}
