import { AppbarBtn } from "./AppbarBtn";
import Link from "next/link";

export default function BottomAppbar() {
    return (
        <div className="flex justify-around items-center p-1 bg-slate-100 fixed bottom-0 left-0 w-full z-10">
            <Link href={"/shop"}>
                <AppbarBtn imgSrc="shop.svg" label="shop" />
            </Link>
            <AppbarBtn imgSrc="category.svg" label="category" />
            <AppbarBtn imgSrc="search.svg" label="search" />
            <AppbarBtn imgSrc="heart.svg" label="cart" />
        </div>
    );
}
