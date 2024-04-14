import { ProductCard } from "@/components/Product";

export default async function Product({
    params,
}: {
    params: { productId: string };
}) {
    return (
        <div>
            <div>
                <ProductCard productId={params.productId} />
            </div>
        </div>
    );
}
