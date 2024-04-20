import { CreateProduct } from "@/components/CreateProduct";
import { UploadProductImage } from "@/components/UploadProductImage";

export default async function AddProduct() {
    return (
        <div className="p-1 flex flex-col items-center justify-center">
            <div className="text-center text-2xl font-bold underline underline-offset-4">
                Add Product
            </div>
            <div className="w-full max-w-[600px]">
                <div className="mt-1 border rounded-lg">
                    <CreateProduct/>
                </div>
            </div>
        </div>
    );
}
