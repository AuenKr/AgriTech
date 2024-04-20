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
                    console.log(resource.current);
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

/*
model Image {
  id        Int     @id @default(autoincrement())
  imageUrl  String
  productId Int
  product   Product @relation(fields: [productId], references: [id])
}
*/
/*
{
    "event": "success",
    "info": {
        "id": "uw-file3",
        "batchId": "uw-batch2",
        "asset_id": "c5b182fe717249caea8d3104b7d23038",
        "public_id": "agriTech/gt1fmwxjt6od9qj82vv4",
        "version": 1713558157,
        "version_id": "249a202c08beb1262abf5143fbef2f21",
        "signature": "ddfd207e64e61e8a74533fc8882ac4a93fd7a130",
        "width": 1586,
        "height": 733,
        "format": "png",
        "resource_type": "image",
        "created_at": "2024-04-19T20:22:37Z",
        "tags": [],
        "bytes": 454800,
        "type": "upload",
        "etag": "bae89d6a777b77db6d3d2607b8ae3839",
        "placeholder": false,
        "url": "http://res.cloudinary.com/dfwh2torn/image/upload/v1713558157/agriTech/gt1fmwxjt6od9qj82vv4.png",
        "secure_url": "https://res.cloudinary.com/dfwh2torn/image/upload/v1713558157/agriTech/gt1fmwxjt6od9qj82vv4.png",
        "folder": "agriTech",
        "original_filename": "Screenshot from 2024-04-16 15-11-10",
        "api_key": "779979387141337",
        "path": "v1713558157/agriTech/gt1fmwxjt6od9qj82vv4.png",
        "thumbnail_url": "https://res.cloudinary.com/dfwh2torn/image/upload/c_limit,h_60,w_90/v1713558157/agriTech/gt1fmwxjt6od9qj82vv4.png"
    }
}
*/
