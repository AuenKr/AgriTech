export function AddressDetailCard({
    title,
    value,
}: {
    title: string;
    value: string;
}) {
    return (
        <div className="px-2 flex flex-col border-b-2 rounded-lg">
            <div className="p-1 text-xl font-bold hover:underline hover:underline-offset-4">
                {title}
            </div>
            <div className="p-1 text-lg">{value}</div>
        </div>
    );
}
