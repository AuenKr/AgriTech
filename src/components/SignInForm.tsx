"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@radix-ui/react-toast";

export function SignInForm() {
    const { toast } = useToast();
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        const res = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        });
        if (!res?.error) router.push("/");
        else {
            toast({
                title: "Error Signing in",
                action: <ToastAction altText="Ok">Ok</ToastAction>,
            });
        }
    }
    async function onSubmitProvider(provider: ProviderType) {
        const res = await signIn(provider);
        if (!res?.error) router.push("/");
        else {
            toast({
                title: "Error Signing in",
                action: <ToastAction altText="Ok">Ok</ToastAction>,
            });
        }
    }
    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Email<sup className="text-red-500"> *</sup>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="abc@abc.com"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Password
                                    <sup className="text-red-500"> *</sup>
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="*******"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center justify-center">
                        <Button type="submit" variant={"green"}>
                            Submit
                        </Button>
                    </div>
                </form>
            </Form>
            <div className="flex flex-col justify-center p-3">
                <span className="border-b-2 w-full"></span>
                <span className="text-center m-1">OR</span>
                <div className="flex items-center justify-center">
                    <Button
                        variant={"destructive"}
                        className="hover:bg-red-600 active:bg-red-700"
                        onClick={async () => onSubmitProvider("google")}
                    >
                        Login with Google <span className="px-1">+</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

type ProviderType = "google";
