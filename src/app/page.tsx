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
                <HomeCarousel />
                <div className="flex flex-col items-center justify-center space-y-3 mt-5 text-xl mb-36">
                    <span className="capitalize">
                        Organic Fresh Vegetables{" "}
                    </span>
                    <span className="uppercase font-extrabold">
                        WHY PEOPLE KRISHI MANDI
                    </span>
                    <div className="animate-translate p-2">
                        <Image
                            src={"/farmLandingPage.png"}
                            alt="vegetables"
                            width={300}
                            height={300}
                        />
                    </div>
                    <div className="space-y-10 py-10">
                        <Feature />
                    </div>
                    <div>
                        <FarmerReview />
                    </div>
                </div>
            </div>
            <BottomAapbar />
        </div>
    );
}
