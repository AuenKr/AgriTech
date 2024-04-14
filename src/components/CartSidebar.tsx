import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export function CartSidebar({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Sheet>
                <SheetTrigger>{children}</SheetTrigger>
                <SheetContent side={"right"}>
                    <SheetHeader>
                        <SheetTitle>
                            <div className="font-extrabold text-4xl p-3 border-b-2 pb-3">
                                <Link href={"/"}>
                                    <div className="text-center">Wish List</div>
                                </Link>
                            </div>
                        </SheetTitle>

                        <div className="flex flex-col text-md font-bold space-y-2 capitalize">
                            Under Devlopement
                            <div>........</div>
                            <div>.......</div>
                            <div>......</div>
                            <div>....</div>
                            <div>...</div>
                            <div>..</div>
                            <div>.</div>
                            AuenKr
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    );
}
