export function ReviewCard({ name, feedback, role }: ReviewCardType) {
    return (
        <div className="m-2 border-2 rounded-lg text-center">
            <div className="max-w-[450px] space-y-1">
                <div className="text-center p-2 text-lg text-wrap border-b-2">
                    {feedback}
                </div>
                <div className="font-bold">{name}</div>
                <div className="font-medium">{role}</div>
            </div>
        </div>
    );
}

interface ReviewCardType {
    name: string;
    feedback: string;
    role: string;
}
