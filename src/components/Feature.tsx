import Image from "next/image";
import { FeatureCard } from "./FeatureCard";

export function Feature() {
    const features = [
        {
            id: 1,
            imgSrc: "/farm-icon1.png",
            header: "100% Organic",
            description: `Krishi Mandi invites you to join us in fostering a future where every harvest is a celebration of health, sustainability, and environmental responsibility.`,
        },
        {
            id: 2,
            imgSrc: "/farm-icon2.png",
            header: "Delectable",
            description: `Krishi Mandi invites you to join us in fostering a future where every harvest is a celebration of health, sustainability, and environmental responsibility.`,
        },
        {
            id: 3,
            imgSrc: "/farm-icon3.png",
            header: "Pure and Untouched",
            description: `Krishi Mandi invites you to join us in fostering a future where every harvest is a celebration of health, sustainability, and environmental responsibility.`,
        },
        {
            id: 4,
            imgSrc: "/farm-icon4.png",
            header: "Eco-Friendly Cultivation",
            description: `Krishi Mandi invites you to join us in fostering a future where every harvest is a celebration of health, sustainability, and environmental responsibility.`,
        },
    ];
    return (
        <div className="flex flex-col justify-center items-center lg:flex-row lg:">
            <div className="animate-translate p-2 lg:mr-20">
                <Image
                    src={"/farmLandingPage.png"}
                    alt="vegetables"
                    width={300}
                    height={300}
                    className="lg:w-[400px] lg:h-[400px]"
                />
            </div>
            <div className="space-y-10 py-10"></div>
            <div className="m-2 space-y-8 justify-center items-center max-w-lg">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        imgSrc={feature.imgSrc}
                        header={feature.header}
                        description={feature.description}
                    />
                ))}
            </div>
        </div>
    );
}
