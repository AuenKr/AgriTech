import { SignInForm } from "./SignInForm";

export function SignInPage() {
    return (
        <div className="flex flex-col border-2 rounded-lg m-4 p-4">
            <div className="max-w-md">
                <div className="text-center">
                    <div className="font-extrabold text-4xl border-b-2 p-2">
                        <span className="hover:text-green-500 transition duration-200">
                            Krishi
                        </span>
                        <span className="text-green-500"> Mandi</span>
                    </div>
                    <div className="p-2">Great to have you back!</div>
                </div>
                <SignInForm />
            </div>
        </div>
    );
}
