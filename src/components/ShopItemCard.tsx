import Image from "next/image";
import { AppbarBtn } from "./AppbarBtn";
import Link from "next/link";

export function ShopItemCard({
    id,
    imgSrc,
    name,
    price,
    salePrice,
}: ShopItemCardType) {
    return (
        <div className="flex flex-col border-2 m-2 shadow-md hover:shadow-lg">
            <div className="w-full overflow-hidden">
                <Image
                    src={imgSrc}
                    alt={name}
                    width={500}
                    height={300}
                    className="hover:scale-110 transition-all duration-500"
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
                <div>
                    <AppbarBtn imgSrc="cart.svg" label="Add to Cart" />
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
