"use client";
import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { CardCarousel, CardCarouselType } from "./CardCarousel";

export default function HomeCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 10000,
                }),
            ]}
        >
            <CarouselContent>
                {homeCardCarouselData.map((card, index) => (
                    <CarouselItem
                        key={index}
                        className="flex justify-center items-center"
                    >
                        <CardCarousel
                            preHeader={card.preHeader}
                            header={card.header}
                            postHeader={card.postHeader}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block z-10" />
            <CarouselNext className="hidden md:block z-10" />
        </Carousel>
    );
}

const homeCardCarouselData: CardCarouselType[] = [
    {
        preHeader: "Welcome to the AgriTech",
        header: "HIGHEST QUALITY",
        postHeader:
            "Bring fields to futures, Harvesting Innovation for prosperous agriculture",
    },
    {
        preHeader: "Farm fresh",
        header: "organic",
        postHeader:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus unde excepturi minus accusantium nisi libero quisquam, tempora aut illo quaerat obcaecati repudiandae quam necessitatibus praesentium. Perferendis magnam incidunt aliquid.",
    },
];
