import { OrderDetail } from "@/components/OrderDetail";

export default function OrderIdPage({
    params,
}: {
    params: { orderId: string };
}) {
    const { orderId } = params;
    return (
        <div className="flex flex-col">
            <div className="w-full text-center font-bold text-2xl">
                Order Details
            </div>
            <div>
                <OrderDetail orderId={orderId} />
            </div>
        </div>
    );
}
