import { getServerSession } from "next-auth";
import { SignUpForm } from "./SignUpForm";
import { redirect } from "next/navigation";

export async function SignUp() {
    const session = await getServerSession();
    if (session) redirect("/");

    return (
        <div className="flex justify-center">
            <div className="border-2 rounded-lg m-4 p-4 md:max-w-lg">
                <div className="w-[400px] md:w-[450px] h-[550px]">
                    <div className="text-center">
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
                    <div className="h-auto">
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
