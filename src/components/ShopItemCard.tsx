import Link from "next/link";
import { ContactBtn } from "./ContactBtn";
import Image from "next/image";

export function ShopItemCard({
    id,
    imgSrc,
    name,
    price,
    salePrice,
}: ShopItemCardType) {
    return (
        <div className="w-full h-[450px] flex flex-col border-2 m-2 shadow-md hover:shadow-lg md:w-[500px] rounded-lg">
            <div className="w-full overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={name}
                    width={1280}
                    height={720}
                    className="hover:scale-110 transition-all duration-500 w-full aspect-auto max-w-lg h-[350px] sm:h-full rounded-lg"
                />
            </div>
            <div className="flex justify-between">
                <Link href={`/shop/${id}`} className="grow">
                    <div className="flex flex-col items-start p-2 font-bold">
                        <div>
                            <span className="capitalize">{name}</span>
                            <span>{" ( 1 kg )"}</span>
                        </div>
                        <div className="space-x-2">
                            <span className="line-through text-gray-400">
                                ₹{price}
                            </span>
                            <span>₹{salePrice}</span>
                        </div>
                    </div>
                </Link>
                <div className="flex items-center justify-center p-2">
                    <ContactBtn productId={String(id)}>Contact Now</ContactBtn>
                </div>
            </div>
        </div>
    );
}

interface ShopItemCardType {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
    salePrice: number;
}
