import { UploadProductImage } from "@/components/UploadProductImage";

export default async function Product({
    params,
}: {
    params: { productId: string };
}) {
    return (
        <div className="flex items-center justify-center">
            <UploadProductImage productId={params.productId} />
        </div>
    );
}
