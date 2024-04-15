"use client";
import Autoplay from "embla-carousel-autoplay";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ReviewCard } from "./ReviewCard";

export function FarmerReview() {
    const reviews = [
        {
            id: 1,
            name: "Gautam Sharma",
            role: "Farmer",
            feedback: `I never knew farming could be this easy!
        Thanks to Krishi Mandi, my crops are
        practically growing themselves. The AI
        predictions are so accurate, I think my
        tomatoes are on a first-name basis with the
        delivery truck!`,
        },
        {
            id: 2,
            name: "Pushkar",
            role: "Buyer",
            feedback: `Krishi Mandi has made me a believer in the power of green living. Their commitment to sustainability is so inspiring! I feel like Mother Earth is giving me a virtual high-five every time I order. Truly, a game-changer for the environmentally conscious!`,
        },
    ];
    return (
        <div className="mt-10">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                className="sm:m-10"
            >
                <CarouselContent>
                    {reviews.map((review) => (
                        <CarouselItem key={review.id}>
                            <ReviewCard
                                name={review.name}
                                role={review.role}
                                feedback={review.feedback}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:block" />
                <CarouselNext className="hidden sm:block" />
            </Carousel>
        </div>
    );
}
