'use server'

import { Ok } from "@thinairthings/utilities"
import { createSupabaseSsrClient } from "../supabase/createSupabaseSsrClient"
import { AuthErr, TypedSupabaseAuthError } from "./AuthErr"

export const signIn = async (authData: {
    email: string
    password: string
}) => {
    const { data, error } = await createSupabaseSsrClient().auth.signInWithPassword({
        email: authData.email,
        password: authData.password
    })
    if (error) {
        console.log(error)
        const typedError = new TypedSupabaseAuthError(error);
        return AuthErr({ error: typedError })
    }
    return Ok(data)
}