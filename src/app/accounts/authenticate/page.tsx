'use client'
import { useEnterButton } from "@/hooks/useEnterButton";
import { signIn } from "@/lib/auth/signIn";
import { createSupabaseBrowserClient } from "@/lib/supabase/createSupabaseBrowserClient";
import { LabeledInput } from "@/ui/general/LabeledInput";
import { Button } from "@/ui/park/button";
import { Heading } from "@/ui/park/heading";
import { Input } from "@/ui/park/input";
import { Text } from "@/ui/park/text";
import { getVercelURL } from "@/utils/getVercelUrl";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TypeOf, z } from "zod";
import { css } from "~/styled-system/css";
import { HStack, VStack } from "~/styled-system/jsx";

export const SignInSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Please enter a password'),
})
export default function Authenticate() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isValid, isSubmitting },
    } = useForm<TypeOf<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema)
    })
    const router = useRouter()
    return (
        <VStack alignItems='start' px='16px' py='32px'>
            <Heading size='2xl' fontWeight='bold'>Sign in!</Heading>
            <Text color='neutral.300'>Welcome back! Let's get you signed in.</Text>
            <Button variant='outline'
                onClick={async () => {
                    await createSupabaseBrowserClient().auth.signInWithOAuth({
                        provider: 'google',
                        options: {
                            redirectTo: `${getVercelURL()}auth/callback?next=/dashboard`,
                        },
                    })
                }}
            ><Image src={'/logos/google.colored.svg'} alt={'Google Logo'} width={25} height={25} />Continue with Google</Button>
            <HStack w='full'>
                <Separator orientation='horizontal' size='4' />
                <Text>or</Text>
                <Separator orientation='horizontal' size='4' />
            </HStack>
            <LabeledInput
                label='Email'
                error={errors.email}
                input={<Input
                    placeholder="Email"
                    type='email'
                    {...register('email')}
                />}
            />
            <LabeledInput
                label='Password'
                error={errors.password}
                input={<Input
                    placeholder="Password"
                    type='password'
                    {...register('password')}
                />}
            />
            <HStack w='full' mb='10px' mt='5px' justify='space-between'>
                {errors.root && <Text color='error' fontSize='s' justifySelf={'start'}>{errors.root.message}</Text>}
                <Link href="/accounts/forgot-password" className={css({ ml: 'auto' })}>
                    <Text color='mint.700' fontWeight='semibold'>Forgot password?</Text>
                </Link>
            </HStack>
            <Button
                disabled={!isValid}
                data-loading={isSubmitting ? true : null}
                ref={useEnterButton()}
                onClick={handleSubmit(async input => {
                    const { error, data } = await signIn(input)
                    if (error) {
                        setError('root', { message: error.message })
                        return
                    }
                    router.push('/dashboard')
                })}
            >Sign in</Button>
            <HStack w='full' justify='center' mt='23px'>
                <Text color='grayscale.600'>Don't have an account?</Text>
                <Link href="/accounts/create">
                    <Text color='primary' fontWeight='bold'>Sign up</Text>
                </Link>
            </HStack>
        </VStack>
    )
}