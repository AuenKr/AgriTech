import { getUserProduct } from "@/actions/product";
import { ItemCard } from "@/components/ItemCard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProductPage() {
    const session = await getServerSession();
    if(!session){
        redirect('/');
    }
    const products = await getUserProduct();
    return (
        <div className="flex flex-col items-center justify-center">
            {products.map((product) => (
                <ItemCard
                    key={product.id}
                    id={product.id}
                    imgSrc="/potatoes.jpg"
                    price={product.price}
                    salePrice={product.salePrice}
                    name={product.name}
                    type="product"
                />
            ))}
        </div>
    );
}
