import Image from "next/image";

export function FeatureCard({ imgSrc, header, description }: FeatureCardType) {
    return (
        <div className="flex items-center justify-center space-x-2">
            <Image
                src={imgSrc}
                alt={imgSrc}
                width={100}
                height={100}
                className="w-[100px] h-[100px] p-2 shadow-lg bg-green-500 rounded-full"
            />
            <div className="p-2">
                <div className="font-bold text-2xl text-left pb-2">
                    {header}
                </div>
                <div className="text-left text-base">{description}</div>
            </div>
        </div>
    );
}

interface FeatureCardType {
    imgSrc: string;
    header: string;
    description: string;
}
