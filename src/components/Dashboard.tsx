import { CircleUserRound, ClipboardList, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import Link from "next/link";

export function Dashboard() {
    return (
        <div>
            <div className="text-3xl font-bold text-center pt-10 pb-5">
                Dashboard
            </div>
            <div className="flex flex-col items-center justify-center space-y-10">
                <Card>
                    <Link
                        href={"/dashboard/order"}
                        className="flex flex-col items-center justify-center w-[200px] h-[100px] hover:bg-green-500 transition duration-300 active:bg-green-700 active:ring-4 rounded-xl"
                    >
                        <ClipboardList />
                        Orders
                    </Link>
                </Card>
                <Card>
                    <Link
                        href={"/dashboard/address"}
                        className="flex flex-col items-center justify-center w-[200px] h-[100px] hover:bg-green-500 transition duration-300 active:bg-green-700 active:ring-4 rounded-xl"
                    >
                        <MapPin />
                        Address
                    </Link>
                </Card>
                <Card>
                    <Link
                        href={"/dashboard/account"}
                        className="flex flex-col items-center justify-center w-[200px] h-[100px] hover:bg-green-500 transition duration-300 active:bg-green-700 active:ring-4 rounded-xl"
                    >
                        <CircleUserRound />
                        Account Detais
                    </Link>
                </Card>
            </div>
        </div>
    );
}
