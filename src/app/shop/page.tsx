import { ShopAppbar } from "@/components/ShopAppbar";
import { ShopItemCard } from "@/components/ShopItemCard";

export default function Shop() {
    return (
        <>
            <ShopAppbar />
            <ShopItemCard
                imgSrc="/potatoes.jpg"
                name="potato"
                price="89.00"
                salePrice="39.00"
            />
            <ShopItemCard
                imgSrc="/tomatoes.jpg"
                name="tomatoe"
                price="89.00"
                salePrice="49.00"
            />
        </>
    );
}
