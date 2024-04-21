import { Card } from "../ui/card";

export function OrderItemCardSkeleton() {
    return (
        <Card className="flex justify-between p-2 mt-2">
            <div className="border-r-2 px-2 w-[150px] h-[100px] flex-grow-0 space-y-2 flex flex-col justify-around">
                <div className="animate-pulse bg-slate-700 h-[20px] rounded-lg"></div>
                <div className="animate-pulse bg-slate-700 h-[20px] rounded-lg"></div>
                <div className="animate-pulse bg-slate-700 h-[20px] rounded-lg"></div>
            </div>
            <div className="px-2 flex items-center justify-center flex-grow space-x-10">
            <div className="animate-pulse bg-slate-700 h-[20px] rounded-lg"></div>
                <div className="animate-pulse bg-slate-700 w-[100px] h-[50px] rounded-lg"></div>
                <div className="animate-pulse bg-slate-700 w-[100px] h-[30px] rounded-lg"></div>
            </div>
        </Card>
    );
}
