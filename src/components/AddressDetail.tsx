import { AddressDetailCard } from "./AddressDetailCard";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function AddressDetail({ address }: { address: AddressType }) {
    return (
        <Card className="m-2">
            <div className="m-2">
                <div>
                    <AddressDetailCard
                        title={"House Number"}
                        value={address.address}
                    />
                    <AddressDetailCard
                        title={"Landmark"}
                        value={address.landmark as string}
                    />
                    <AddressDetailCard
                        title={"Locality"}
                        value={address.locality}
                    />
                    <AddressDetailCard title={"City"} value={address.city} />
                    <AddressDetailCard title={"State"} value={address.state} />
                    <AddressDetailCard
                        title={"Pin Code"}
                        value={address.pincode}
                    />
                    <AddressDetailCard
                        title={"Alternate Mobile Number"}
                        value={address.alternateMob as string}
                    />
                </div>
                <Button className="w-full mt-2 active:ring-4">
                    Update Address
                </Button>
            </div>
        </Card>
    );
}

interface AddressType {
    id: number;
    userId: number;
    address: string;
    landmark: string | null;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    alternateMob: string | null;
}
