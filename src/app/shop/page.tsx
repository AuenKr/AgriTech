import { getAllProducts } from "@/actions/product";
import { ShopAppbar } from "@/components/ShopAppbar";
import { ShopItemCard } from "@/components/ShopItemCard";

export default async function Shop() {
    const allProducts = await getAllProducts();
    return (
        <>
            <ShopAppbar />
            {allProducts.map((product) => {
                return (
                    <ShopItemCard
                        key={product.id}
                        id={product.id}
                        imgSrc="/potatoes.jpg"
                        name={product.name}
                        price={product.price}
                        salePrice={product.salePrice}
                    />
                );
            })}
        </>
    );
}
