import { getAllProducts } from "@/actions/product";
import { ShopItemCard } from "@/components/ShopItemCard";

export default async function Shop() {
    const allProducts = await getAllProducts();
    return (
        <div className="flex flex-col items-center justify-center">
            {allProducts.map((product) => {
                return (
                    <ShopItemCard
                        key={product.id}
                        id={product.id}
                        imgSrc={product.Image[0].imageUrl}
                        name={product.name}
                        price={product.price}
                        salePrice={product.salePrice}
                    />
                );
            })}
        </div>
    );
}
