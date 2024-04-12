import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function CardCarousel({
    header,
    preHeader,
    postHeader,
}: CardCarouselType) {
    return (
        <Card className="w-[450px] h-[300px] flex">
            <CardContent className="flex items-center justify-center p-5">
                <div className="flex flex-col capitalize text-center space-y-3">
                    <div className="text-xl">{preHeader}</div>
                    <div className="text-3xl font-extrabold uppercase">
                        {header}
                    </div>
                    <div className="text-sm">
                        {postHeader}
                    </div>
                    <div className="flex justify-around pt-5">
                        <Button className="hover:bg-green-500 active:bg-green-700">
                            <Link href={"#"}>Shop Now</Link>
                        </Button>
                        <Button className="hover:bg-green-500 active:bg-green-700">
                            <Link href={"#"}>Read More</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export interface CardCarouselType {
    header: string;
    preHeader: string;
    postHeader: string;
}
