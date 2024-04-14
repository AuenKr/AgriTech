import { AppbarBtn } from "./AppbarBtn";
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import { CartSidebar } from "./CartSidebar";
import Image from "next/image";

export default function BottomAppbar() {
    return (
        <div className="flex justify-around items-center p-1 bg-slate-100 fixed bottom-0 left-0 w-full z-10 dark:bg-black dark:text-white">
            <Link href={"/shop"}>
                <AppbarBtn imgSrc="shop.svg" label="shop" />
            </Link>
            <div className="flex flex-col items-center justify-center">
                <SearchBar type="bottom" />
                <span className="font-bold hover:text-green-500">Search</span>
            </div>
            <CartSidebar>
                <div className="flex flex-col justify-center items-center hover:text-green-500 active:text-green-700">
                    <Image
                        src="/category.svg"
                        alt="category"
                        width={24}
                        height={24}
                    />
                    <span className="font-bold px-2 p-1">Category</span>
                </div>
            </CartSidebar>
        </div>
    );
}
