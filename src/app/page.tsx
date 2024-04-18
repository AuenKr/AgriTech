import BottomAapbar from "@/components/BottomAppbar";
import { FarmerReview } from "@/components/FarmerReview";
import { Feature } from "@/components/Feature";
import { FeatureCard } from "@/components/FeatureCard";
import HomeCarousel from "@/components/HomeCarousel";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-roboto m-2 flex flex-col justify-between dark:text-white dark:bg-black">
            <div>
                <div className="lg:flex lg:justify-center lg:items-center">
                    <div className="lg:max-w-lg">
                        <HomeCarousel />
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center justify-center space-y-3 mt-5 text-xl lg:mt-24 lg:mb-10">
                        <span className="capitalize">
                            Organic Fresh Vegetables{" "}
                        </span>
                        <span className="uppercase font-extrabold">
                            WHY PEOPLE KRISHI MANDI
                        </span>
                    </div>
                    <Feature />
                    <div className="flex justify-center items-center">
                        <div className="mt-10 mb-20 max-w-[600px]">
                            <FarmerReview />
                        </div>
                    </div>
                </div>
            </div>
            <BottomAapbar />
        </div>
    );
}
