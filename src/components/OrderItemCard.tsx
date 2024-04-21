import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { OrderType } from "./Orders";

export function OrderItemCard({ order }: { order: OrderType }) {
    return (
        <Card className="flex justify-between p-2 mt-2">
            <div className="border-r-2 px-2 w-[150px] flex-grow-0">
                <div>Order No: #{order.id}</div>
                <div>Status: {order.status}</div>
                <div>Qunatity: {order.quantity} Kg</div>
            </div>
            <div className="flex items-center justify-between flex-grow px-10">
                <div className="font-bold text-xl">{order.product.name}</div>
                <Link href={`order/${order.id}`}>
                    <Button size={"sm"}>View Details</Button>
                </Link>
            </div>
        </Card>
    );
}
