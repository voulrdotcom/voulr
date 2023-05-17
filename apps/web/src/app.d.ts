import jwt from 'jwt';

enum Plan {
    HOBBY,
    PRO,
    BUSINESS
}

declare global {
    namespace App {
        interface Locals {
            user: {
                username: string;
                email: string;
                plan: Plan;
            };
        }
        // interface Error {}
        // interface PageData {}
        // interface Platform {}
    }
}

declare module 'jsonwebtoken' {
    export interface AccessToken extends jwt.JwtPayload {
        username: string;
        email: string;
        plan: Plan;
        iat: number;
        sub: string;
        exp: number;
    }
    export interface RefreshToken extends jwt.JwtPayload {
        userId: number;
        iat: number;
        sub: string;
        exp: number;
    }
}

export { };
