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
            description: `Our delectable solutions, including real-time data analytics and crop yield predictions.`,
        },
        {
            id: 3,
            imgSrc: "/farm-icon3.png",
            header: "Pure and Untouched",
            description: `Every product is cultivated through organic farming practices, ensuring that no harmful chemicals or pesticides touch the soil.`,
        },
        {
            id: 4,
            imgSrc: "/farm-icon4.png",
            header: "Eco-Friendly Cultivation",
            description: `Our farmers are stewards of the land, practicing eco-friendly cultivation methods that prioritize soil health and biodiversity.`,
        },
    ];
    return (
        <>
            {features.map((feature) => (
                <FeatureCard
                    key={feature.id}
                    imgSrc={feature.imgSrc}
                    header={feature.header}
                    description={feature.description}
                />
            ))}
        </>
    );
}
