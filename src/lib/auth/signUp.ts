'use server'
import { createSupabaseSsrClient } from "../supabase/createSupabaseSsrClient"
import { Ok } from "@thinairthings/uix"
import { AuthErr, TypedSupabaseAuthError } from "./AuthErr"
import { TypeOf, z } from "zod"
import { SignUpSchema } from "@/app/accounts/create/page"



export const signUp = async ({
    email,
    password
}: TypeOf<typeof SignUpSchema>) => {
    const { error } = await createSupabaseSsrClient().auth.signUp({
        email,
        password
    })
    if (error) {
        const typedError = new TypedSupabaseAuthError(error);
        return AuthErr({ error: typedError })
    }
    return Ok(true)
}