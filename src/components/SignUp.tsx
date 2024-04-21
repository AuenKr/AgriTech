import { getServerSession } from "next-auth";
import { SignUpForm } from "./SignUpForm";
import { redirect } from "next/navigation";
import Link from "next/link";

export async function SignUp() {
    const session = await getServerSession();
    if (session) redirect("/");

    return (
        <div className="flex justify-center">
            <div className="border-2 rounded-lg m-4 p-4 md:max-w-lg">
                <div className="w-full md:w-[450px] h-[550px] flex flex-col">
                    <div className="text-center flex-grow-0">
                        <div className="font-extrabold text-4xl border-b-2 p-2">
                            <span className="hover:text-green-500 transition duration-300">
                                Krishi
                            </span>
                            <span className="text-green-500"> Mandi</span>
                        </div>
                        <div className="p-2 hover:text-green-500 duration-300">
                            Great to have you back!
                        </div>
                    </div>
                    <div className="flex-grow">
                        <SignUpForm />
                    </div>
                    <div className="text-center">
                        Already a user{" "}
                        <Link
                            href={"/api/auth/signin"}
                            className="underline hover:font-bold"
                        >
                            Sing In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
