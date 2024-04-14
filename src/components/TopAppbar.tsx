"use client";

import Image from "next/image";
import { useState } from "react";
import { AppbarBtn } from "./AppbarBtn";
import { SidebarBtn } from "./SidebarBtn";
import { AccountAuthBtn } from "./AccountAuthBtn";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { SearchBar } from "./SearchBar";

export function TopAppbar() {
    const [appBar, setAppBar] = useState<boolean>(false);
    const navebarHandler = () => {
        setAppBar((prev) => !prev);
    };

    const navbar = (
        <div className="flex flex-col justify-between h-screen z-50 w-9/12 text-start sticky top-0 dark:text-white dark:bg-black">
            <div>
                <div className="font-extrabold text-4xl p-3 border-b-2 pb-3 text-center flex justify-between">
                    <div className="flex-grow">
                        <span>Krishi</span>
                        <span className="text-green-500"> Mandi</span>
                    </div>
                    <div
                        className="relative left-8 bottom-2 px-3 py-1 rounded-full border-2 border-gray-600 dark:border-gray-500 font-extralight text-2xl hover:bg-green-400 active:bg-green-600 cursor-pointer"
                        onClick={navebarHandler}
                    >
                        {"<"}
                    </div>
                </div>
                <div className="flex flex-col text-md font-bold space-y-2 capitalize">
                    <SidebarBtn label="Home" />
                    <SidebarBtn label="Shop" />
                    <SidebarBtn label="Blog" />
                    <SidebarBtn label="About Us" />
                    <SidebarBtn label="Contact Us" />
                </div>
            </div>
            <div className="border-t-2 p-3 flex hover:text-green-500 hover:cursor-pointer transition duration-200">
                <Link href={"/api/auth/signin"}>
                    <Image
                        src="/account.svg"
                        alt="Account logo"
                        width={24}
                        height={24}
                        className="pr-2"
                    />
                    Login
                </Link>
            </div>
        </div>
    );

    return (
        <div className="dark:text-white dark:bg-black">
            {appBar ? navbar : null}
            <div className="flex justify-between text-2xl pt-4 p-3 border-b sticky top-0 text-center">
                <div className="flex space-x-2">
                    {/* hamberger icon */}
                    <div
                        onClick={navebarHandler}
                        className="transition duration-200 hover:cursor-pointer hover:text-green-500"
                    >
                        &#9776;
                    </div>
                    <SearchBar />
                </div>
                <div className="font-extrabold">
                    <span className="hover:text-green-500 transition duration-200">
                        Krishi
                    </span>
                    <span className="text-green-500"> Mandi</span>
                </div>
                <div className="flex space-x-2">
                    <AccountAuthBtn />
                    <AppbarBtn imgSrc="/cart.svg" size={24} />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}