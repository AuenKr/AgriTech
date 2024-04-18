import { getAllProducts } from "@/actions/product";
import { ItemCard } from "@/components/ItemCard";

export default async function Shop() {
    const allProducts = await getAllProducts();
    return (
        <div className="flex flex-col items-center justify-center">
            {allProducts.map((product) => {
                return (
                    <ItemCard
                        key={product.id}
                        id={product.id}
                        imgSrc={product.Image[0]?.imageUrl || "/public/potatoes.jpg"}
                        name={product.name}
                        price={product.price}
                        salePrice={product.salePrice}
                    />
                );
            })}
        </div>
    );
}
