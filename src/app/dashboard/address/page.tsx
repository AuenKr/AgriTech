import { getUserAddress } from "@/actions/auth";
import { AddressDetail } from "@/components/AddressDetail";
import { AddressForm } from "@/components/AddressForm";

export default async function AddressPage() {
    const result = await getUserAddress();
    return (
        <div className="flex flex-col items-center">
            <div className="text-center p-2 text-2xl font-bold">
                Address Detail
            </div>

            {!result?.Address[0] ? (
                <div className="flex items-center justify-center w-full max-w-lg">
                    <AddressForm userId={String(result?.id)} />
                </div>
            ) : (
                <div className="flex flex-col space-y-4 w-full max-w-lg">
                    <AddressDetail address={result.Address[0]} />
                </div>
            )}
        </div>
    );
}
