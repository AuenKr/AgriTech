import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db";

export const authOption: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email", placeholder: "abc@abc.com", type: "text"
                },
                password: {
                    label: "Password", placeholder: "Strong Password", type: "password"
                }
            },
            async authorize(credentials) {
                try {
                    if (!credentials?.email || !credentials?.password) {
                        return null;
                    }
                    console.log(credentials);
                    const result = await prisma.user.findFirst({
                        where: {
                            email: credentials.email,
                            password: credentials.password,
                        },
                    });
                    if (!result) return null;
                    return { ...result, id: result.id.toString() };
                } catch (error) {
                    console.error("Error in authorize function:", error);
                    throw new Error("Error during authentication");
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_ID || ""
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
}