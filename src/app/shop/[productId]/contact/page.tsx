import { ContactForm } from "@/components/ContactForm";

export default async function ContactPage({
    params,
}: {
    params: {
        productId: string;
    };
}) {
    const { productId } = params;
    return (
        <div>
            <div>Contact Page</div>
            <div>
                <ContactForm productId={productId} />
            </div>
        </div>
    );
}
