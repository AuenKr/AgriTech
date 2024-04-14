"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    bidPrice: z.string(),
    quantity: z.string(),
    message: z.string().optional(),
});

export function ContactForm({ productId }: { productId: string }) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            quantity: "0",
            bidPrice: "0",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log({ ...values, productId });
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/order`,
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ ...values, productId }),
            }
        );
        const result = await response.json();
        if (response.status != 200) {
            toast({
                title: result.msg,
            });
        } else router.push("/shop");
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 m-2 p-2 flex flex-col min-h-[600px] justify-around rounded-lg"
            >
                <div>
                    <FormField
                        control={form.control}
                        name="bidPrice"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Bid Price</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="price per kg"
                                        {...field}
                                        type="number"
                                    />
                                </FormControl>
                                <FormDescription>Price per Kg</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantity"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount Require</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="In kg"
                                        {...field}
                                        type="number"
                                    />
                                </FormControl>
                                <FormDescription>Amount in Kg</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message to farmer</FormLabel>
                                <FormControl>
                                    <div>
                                        <textarea
                                            placeholder="Give message to farmer"
                                            {...field}
                                            className="w-full min-h-[300px] dark:bg-black p-2 rounded-lg dark:border-2"
                                        ></textarea>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Send Message</Button>
            </form>
        </Form>
    );
}
