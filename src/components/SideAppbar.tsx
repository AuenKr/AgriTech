import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function SideAppbar() {
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

                        <div className="flex flex-col text-md font-bold space-y-2 capitalize">
                            <Link
                                href={"home"}
                                className="hover:text-green-500 duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                href={"shop"}
                                className="hover:text-green-500 duration-200"
                            >
                                Shop
                            </Link>
                            <Link
                                href={"blog"}
                                className="hover:text-green-500 duration-200"
                            >
                                Blog
                            </Link>
                            <Link
                                href={"about"}
                                className="hover:text-green-500 duration-200"
                            >
                                AboutUs
                            </Link>
                            <Link
                                href={"contact"}
                                className="hover:text-green-500 duration-200"
                            >
                                ContactUs
                            </Link>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
