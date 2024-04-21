"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
    address: z.string(),
    locality: z.string(),
    landmark: z.string(),
    city: z.string(),
    state: z.string(),
    pincode: z.string().length(6),
    alternateMob: z.string().optional(),
});

export function AddressForm({ userId }: { userId: string }) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const response = await fetch(`/api/user/${userId}/address`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...values, userId }),
        });
        const result = await response.json();
        if (response.status != 200) {
            toast({
                title: result.msg,
            });
        } else {
            router.push(`/dashboard/address`);
        }
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 m-2 p-2 flex flex-col justify-around rounded-lg w-full max-w-lg"
            >
                <div>
                    <FormField
                        name="address"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>House Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="House No-10"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="landmark"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Landmark</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="At xyz coloney"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="locality"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Locality</FormLabel>
                                <FormControl>
                                    <div>
                                        <Input
                                            placeholder="Locality"
                                            {...field}
                                        ></Input>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="city"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>City</FormLabel>
                                <FormControl>
                                    <div>
                                        <Input
                                            placeholder="Bhopal"
                                            {...field}
                                        ></Input>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="state"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>State</FormLabel>
                                <FormControl>
                                    <div>
                                        <Input
                                            placeholder="Assam"
                                            {...field}
                                        ></Input>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="pincode"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Pincode</FormLabel>
                                <FormControl>
                                    <div>
                                        <Input
                                            placeholder="462003"
                                            {...field}
                                            type="number"
                                        ></Input>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="alternateMob"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Alternate Mobile Number</FormLabel>
                                <FormControl>
                                    <div>
                                        <Input
                                            placeholder="Mobile No"
                                            {...field}
                                            type="number"
                                        ></Input>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit">Add Address</Button>
            </form>
        </Form>
    );
}
