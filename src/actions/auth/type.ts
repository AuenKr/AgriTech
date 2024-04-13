export interface Session {
    user: {
        email: string,
        userId: string,
        firstName: string,
    },
    expires: Date
}
