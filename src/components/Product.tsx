import { getProductDetails } from "@/actions/product";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ContactBtn } from "./ContactBtn";
import Image from "next/image";

export async function ProductCard({ productId }: { productId: string }) {
    const productDetail = await getProductDetails(productId);
    return (
        <div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-fit"
            >
                <CarouselContent className="w-[450px] h-[450px]">
                    {productDetail?.Image[0] ? (
                        productDetail?.Image.map((image) => {
                            return (
                                <CarouselItem
                                    key={image.id}
                                    className="overflow-hidden pl-2 md:pl-4"
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={String(image.id)}
                                        width={1280}
                                        height={720}
                                        className="hover:scale-125 transition-all duration-500 w-full aspect-auto max-w-lg h-[60vh] sm:h-full rounded-lg"
                                    />
                                </CarouselItem>
                            );
                        })
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            No Image Avalable
                        </div>
                    )}
                </CarouselContent>
                <CarouselPrevious className="hidden md:block" />
                <CarouselNext className="hidden md:block" />
            </Carousel>
            <div className="mt-4 space-y-2">
                <div className="text-2xl font-bold">
                    <span>{productDetail?.name}</span>
                    <span>{` (1 kg)`}</span>
                </div>
                <div className="flex justify-between items-center">
                    <div className="text-xl space-x-2">
                        <span className="line-through text-gray-400">
                            ₹{" " + productDetail?.price}
                        </span>
                        <span>₹{" " + productDetail?.salePrice}</span>
                    </div>
                    <ContactBtn productId={productId}>
                        Contact Farmer
                    </ContactBtn>
                </div>
                <div className="flex flex-col items-center space-y-2 min-h-[120px]">
                    <div className="text-xl font-bold border-b-2 border-gray-500 dark:border-gray-300">
                        Description
                    </div>
                    <div className="px-4 text-justify">
                        {productDetail?.description}{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}
