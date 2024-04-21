"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useRef } from "react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

export function UploadProductImage({ productId }: { productId: string }) {
    const resource = useRef<ResourceType[]>([]);
    const router = useRouter();

    const addProductImage = async () => {
        const response = await fetch("/api/sign-image/create", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                productId: productId,
                images: resource.current,
            }),
        });
        const result = await response.json();
        if (response.status != 200) {
            toast({
                title: result.msg,
            });
        } else router.push(`/shop/${productId}`);
    };
    return (
        <div className="flex flex-col space-y-10 h-[400px] w-[450px] justify-center">
            <CldUploadWidget
                uploadPreset="agri_tech"
                options={{ sources: ["local"] }}
                signatureEndpoint="/api/sign-image"
                onSuccess={async (result: any) => {
                    const data: ResourceType = {
                        id: result.info.asset_id,
                        imageSrc: result.info.secure_url,
                    };
                    resource.current = [...resource.current, data];
                }}
            >
                {({ open }) => {
                    function handleOnClick() {
                        open();
                    }
                    return (
                        <Button onClick={handleOnClick}>Upload an Image</Button>
                    );
                }}
            </CldUploadWidget>

            <Button onClick={addProductImage}>Add Images</Button>
        </div>
    );
}

interface ResourceType {
    id: string;
    imageSrc: string;
}