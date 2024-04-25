import { getUser } from "@/actions/auth";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export async function SideAppbar() {
    const userData = await getUser();
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <div className="transition duration-200 hover:cursor-pointer hover:text-green-500">
                        &#9776;
                    </div>
                </SheetTrigger>
                <SheetContent side={"left"}>
                    <SheetHeader>
                        <SheetTitle>
                            <div className="font-extrabold text-4xl p-3 border-b-2 pb-3 text-center">
                                <Link href={"/"}>
                                    <div className="flex-grow">
                                        <span className="hover:text-green-500 duration-100">
                                            Krishi
                                        </span>
                                        <span className="text-green-500">
                                            {" "}
                                            Mandi
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </SheetTitle>

                        <div className="flex flex-col text-xl font-bold space-y-6 capitalize pt-4">
                            <Link
                                href={"/"}
                                className="hover:text-green-500 duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                href={"/shop"}
                                className="hover:text-green-500 duration-200"
                            >
                                Shop
                            </Link>
                            <Link
                                href={"https://blogger-omega-wheat.vercel.app/"}
                                className="hover:text-green-500 duration-200"
                            >
                                Blog
                            </Link>
                            {userData?.role === "farmer" && (
                                <Link
                                    href={"/document"}
                                    className="hover:text-green-500 duration-200"
                                >
                                    Documentation
                                </Link>
                            )}
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
