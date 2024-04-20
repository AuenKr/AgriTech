"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const formData = z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    salePrice: z.string(),
    quantityAvailable: z.string(),
});
export function CreateProduct() {
    const router = useRouter();
    const form = useForm<z.infer<typeof formData>>({
        resolver: zodResolver(formData),
    });
    async function onSubmit(values: z.infer<typeof formData>) {
        console.log(values);
        const bodyData = {
            description: values.description,
            name: values.name,
            price: Number(values.price),
            quantityAvailable: Number(values.quantityAvailable),
            salePrice: Number(values.salePrice),
        };
        const response = await fetch(`/api/product`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(bodyData),
        });
        const result = await response.json();
        if (response.status != 200) {
            toast({
                title: result.msg,
            });
        } else router.push(`/product/add/${result.result.id}`);
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Product Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Name of Product"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="quantityAvailable"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Quantity Available</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="In kg"
                                        {...field}
                                        type="number"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between space-x-2">
                        <FormField
                            control={form.control}
                            name="price"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Price (MRP)</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="price per Kg"
                                            {...field}
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="salePrice"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Sale Price</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="price per Kg"
                                            {...field}
                                            type="number"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <div>
                                        <textarea
                                            placeholder="Write description abount product"
                                            {...field}
                                            className="w-full min-h-[300px] dark:bg-black p-2 rounded-l border-2"
                                        ></textarea>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Create Product</Button>
            </form>
        </Form>
    );
}
