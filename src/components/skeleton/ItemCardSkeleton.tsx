export function ItemCardSkeleton() {
    return (
        <div className="w-full max-w-[500px] h-[450px] flex flex-col justify-between border-2 p-2 shadow-md hover:shadow-lg rounded-lg">
            <div className="animate-pulse bg-slate-300 dark:bg-slate-700 w-full h-full rounded-lg"></div>
            <div className="flex justify-between items-center py-2 h-20">
                <div className="flex-grow rounded-lg space-y-3">
                    <div className="animate-pulse w-full h-7 rounded-lg bg-slate-300 dark:bg-slate-700"></div>
                    <div className="animate-pulse w-full h-7 rounded-lg bg-slate-300 dark:bg-slate-700"></div>
                </div>
                <div className="animate-pulse flex-grow-0 rounded-xl mx-2 w-[100px] h-10 bg-slate-300 dark:bg-slate-700"></div>
            </div>
        </div>
    );
}
