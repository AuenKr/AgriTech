import { CropData } from "@/components/CropData";
import { DeviceData } from "@/components/DeviceData";
import { DeviceStatus } from "@/components/DeviceStatus";
import { MotorControl } from "@/components/MotorControl";

export default function CropDataDisplay() {
    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <div className="w-full max-w-lg">
                <CropData />
            </div>
            <div className="flex flex-col justify-center items-center text-center h-full mt-4 space-y-2">
                <div>
                    <DeviceStatus />
                </div>
                <div className="flex space-x-2 items-center">
                    <span className="font-bold">Motor Switch : </span>
                    <MotorControl />
                </div>
            </div>
            <div className="flex flex-col items-center justify-around sm:flex-row w-full max-w-3xl space-y-2">
                <DeviceData />
            </div>
        </div>
    );
}
