import Link from "next/link";
import { ContactBtn } from "./ContactBtn";
import Image from "next/image";
import { EditBtn } from "./EditBtn";

export function ItemCard({
    id,
    imgSrc,
    name,
    price,
    salePrice,
    type = "shop",
}: ItemCardType) {
    return (
        <div className="w-full h-[450px] flex flex-col justify-between border-2 m-2 shadow-md hover:shadow-lg max-w-[500px] rounded-lg">
            <div className="w-full overflow-hidden">
                <Link href={type === "shop" ? `/shop/${id}` : `/product/${id}`}>
                    {imgSrc ? (
                        <Image
                            src={imgSrc}
                            alt={name}
                            width={1280}
                            height={720}
                            className="hover:scale-110 transition-all duration-500 w-full aspect-auto max-w-lg h-[350px] sm:h-full rounded-lg"
                        />
                    ) : (
                        <div className="h-[350px] flex justify-center items-center">
                            No Image Avalable
                        </div>
                    )}
                </Link>
            </div>
            <div className="flex justify-between pb-5">
                <Link href={type === "shop" ? `/shop/${id}` : `/product/${id}`}>
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
                    {type === "shop" ? (
                        <ContactBtn productId={String(id)}>
                            Contact Now
                        </ContactBtn>
                    ) : (
                        <EditBtn productId={String(id)}>Edit Now</EditBtn>
                    )}
                </div>
            </div>
        </div>
    );
}

interface ItemCardType {
    id: number;
    imgSrc: string;
    name: string;
    price: number;
    salePrice: number;
    type?: "shop" | "product";
}
