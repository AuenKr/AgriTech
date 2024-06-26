import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
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
                    const result = await prisma.user.findFirst({
                        where: {
                            email: credentials.email,
                            password: credentials.password,
                        },
                    });
                    if (!result) return null;
                    return { ...result, id: result.id.toString() };
                } catch (error) {
                    throw new Error("Error during authentication");
                }
            },
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
        }),
        Github({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            if (session.user) {
                session.user.userId = token.uid;
            }
            return session;
        },
        signIn: async ({ account, profile, user }) => {
            try {
                if (account?.provider !== "credentials") {
                    const result = await prisma.user.upsert({
                        where: {
                            email: profile?.email as string
                        },
                        update: {
                            firstName: profile?.name?.split(" ")[0] as string,
                            lastName: String(profile?.name?.split(" ")[1]),
                        },
                        create: {
                            email: profile?.email as string,
                            firstName: profile?.name?.split(" ")[0] as string,
                            lastName: String(profile?.name?.split(" ")[1]),
                        }
                    })
                    user.id = String(result.id);
                }
            } catch (error) {
                return false;
            }
            return true;
        },
    }
}