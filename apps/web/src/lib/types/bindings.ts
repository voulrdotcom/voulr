// This file was generated by [rspc](https://github.com/oscartbeaumont/rspc). Do not edit this file manually.

export type Procedures = {
    queries: never,
    mutations: 
        { key: "auth.login", input: LoginArgs, result: null } | 
        { key: "auth.register", input: RegisterArgs, result: null },
    subscriptions: never
};

export type RegisterArgs = { email: string; password: string }

export type LoginArgs = { email: string; password: string }