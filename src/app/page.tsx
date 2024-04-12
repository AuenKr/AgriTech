import BottomAapbar from "@/components/BottomAppbar";
import HomeCarousel from "@/components/HomeCarousel";
import Image from "next/image";

export default function Home() {
    return (
        <div className="font-roboto flex flex-col justify-between">
            <div>
                <HomeCarousel />
                <div className="flex flex-col items-center justify-center space-y-3 mt-5 text-xl mb-36">
                    <span className="capitalize">
                        Organic Fresh Vegetables{" "}
                    </span>
                    <span className="uppercase font-extrabold">
                        WHY PEOPLE KRISHI MANDI
                    </span>
                    <Image
                        src={"/farm-choose-us.png"}
                        alt="vegetables"
                        width={300}
                        height={300}
                        className="animate-bounce delay-150 duration-1000 relative top-16"
                    />
                </div>
            </div>
            <BottomAapbar />
        </div>
    );
}
