import { Err } from "@thinairthings/uix";
import { AuthError } from "@supabase/supabase-js";


export type AuthErrSubtypes =
    | 'Invalid credentials.'
    | 'User already registered. Try signing in.'
    | 'An unknown error occurred.'


export const supabaseErrorCodeSet = [
    'Invalid login credentials',
    'user_already_exists',
    'unknown',
] as const

export class TypedSupabaseAuthError extends AuthError {
    code: typeof supabaseErrorCodeSet[number]
    constructor(
        public supabaseAuthError: AuthError
    ) {
        super(supabaseAuthError.message)
        // console.log(supabaseAuthError)
        this.code = (supabaseErrorCodeSet.find(code =>
            supabaseAuthError.message.includes(code)
            || code === supabaseAuthError.code
        ) ?? 'unknown')
    }
}

export const AuthErr = ({
    error
}: {
    error: TypedSupabaseAuthError
}) => {
    if (error.code === 'Invalid login credentials') {
        return Err({
            type: 'AuthErr',
            subtype: 'Invalid credentials.',
            message: 'Invalid credentials.',
        })
    }
    if (error.code === 'user_already_exists') {
        return Err({
            type: 'AuthErr',
            subtype: 'User already registered. Try signing in.',
            message: 'User already registered. Try signing in.',
        })
    }
    return Err({
        type: 'AuthErr',
        subtype: 'An unknown error occurred.',
        message: 'An unknown error occurred.',
    })
}
