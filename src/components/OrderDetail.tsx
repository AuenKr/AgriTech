import { Message } from "./Message";

export function OrderDetail({ orderId }: { orderId: string }) {
    return (
        <div className="flex flex-col">
            <div className="text-center font-bold">Order Id #{orderId}</div>
            <div className="text-center pt-10">
                <Message />
                ...
            </div>
        </div>
    );
}
