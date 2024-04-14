import { authOption } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOption);

export const GET = handler;
export const POST = handler;
