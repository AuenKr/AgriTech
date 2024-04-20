import { ContactForm } from "@/components/ContactForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ContactFormPage({
    params,
}: {
    params: {
        productId: string;
    };
}) {
    const { productId } = params;
    const session = await getServerSession();
    if (!session) {
        redirect(`/shop/${productId}`);
    }
    return (
        <div className="p-1 flex flex-col items-center justify-center">
            <div className="text-center text-2xl font-bold underline underline-offset-4">
                Contact Page
            </div>
            <div className="w-full max-w-[600px]">
                <div className="mt-1 border rounded-lg">
                    <ContactForm productId={productId} />
                </div>
            </div>
        </div>
    );
}
