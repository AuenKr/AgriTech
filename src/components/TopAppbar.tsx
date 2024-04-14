import { AccountAuthBtn } from "./AccountAuthBtn";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { SearchBar } from "./SearchBar";
import { SideAppbar } from "./SideAppbar";

export function TopAppbar() {
    return (
        <div className="bg-white dark:text-white dark:bg-black sticky top-0 text-center z-10 rounded-b-sm">
            <div className="flex justify-between text-2xl pt-4 p-3 border-b sticky top-0 text-center">
                <div className="flex space-x-2">
                    <SideAppbar />
                </div>
                <div className="font-extrabold w-full flex justify-between mr-3 ml-10">
                    <Link href={"/shop"} className="text-center">
                        <span className="hover:text-green-500 transition duration-200">
                            Krishi
                        </span>
                        <span className="text-green-500"> Mandi</span>
                    </Link>
                    <SearchBar />
                </div>
                <div className="flex space-x-2">
                    <AccountAuthBtn />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}
