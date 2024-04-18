import { ProductCard } from "@/components/Product";

export default async function Product({
    params,
}: {
    params: { productId: string };
}) {
    return (
        <div className="flex items-center justify-center">
            <div className="w-full max-w-[450px] m-1">
                <ProductCard productId={params.productId} />
            </div>
        </div>
    );
}
