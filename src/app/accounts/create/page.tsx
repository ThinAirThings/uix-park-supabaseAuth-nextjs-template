'use client'
import { useEnterButton } from "@/hooks/useEnterButton"
import { signUp } from "@/lib/auth/signUp"
import { LabeledInput } from "@/ui/general/LabeledInput"
import { Button } from "@/ui/park/button"
import { Heading } from "@/ui/park/heading"
import { Input } from "@/ui/park/input"
import { Text } from "@/ui/park/text"
import { zodResolver } from "@hookform/resolvers/zod"
import { Separator } from "@radix-ui/themes"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { TypeOf, z } from "zod"
import { HStack, VStack } from "~/styled-system/jsx"
import { PhoneInput } from "@/ui/general/PhoneInput"
import { Checkbox } from "@/ui/park/checkbox"

export const SignUpSchema = z.object({
    firstName: z.string().min(1, 'Please enter a first name'),
    lastName: z.string().min(1, 'Please enter a last name'),
    email: z.string().email('Invalid email address'),
    phoneNumber: z.string().min(10, 'Invalid phone number'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
})
export default function SignUp() {
    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
    } = useForm<TypeOf<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
    })
    const router = useRouter()
    return (
        <VStack alignItems='start' px='16px' py='8px'>
            <Heading size='2xl' fontWeight='bold'>Sign up for Hirebird!</Heading>
            <Text color='neutral.300'>Swipe, match and get hired. It's that simple.</Text>
            <Button variant='outline'><Image src={'/logos/google.colored.svg'} alt={'Google Logo'} width={25} height={25} />Continue with Google</Button>
            <HStack w='full'>
                <Separator orientation='horizontal' size='4' />
                <Text>or</Text>
                <Separator orientation='horizontal' size='4' />
            </HStack>
            <LabeledInput
                label='First Name'
                error={errors.firstName}
                input={<Input
                    placeholder="First Name (e.g. John)"
                    type='text'
                    {...register('firstName')}
                />}
            />
            <LabeledInput
                label='Last Name'
                error={errors.lastName}
                input={<Input
                    placeholder="Last Name (e.g. Doe)"
                    type='text'
                    {...register('lastName')}
                />}
            />
            <LabeledInput
                label='Email'
                error={errors.email}
                input={<Input
                    placeholder="Email (e.g. email@example.com)"
                    type='email'
                    {...register('email')}
                />}
            />
            <LabeledInput
                label='Phone Number'
                error={errors.phoneNumber}
                input={
                    <PhoneInput
                        control={control}
                    />
                }
            />
            <LabeledInput
                label='Password'
                error={errors.password}
                input={
                    <Input
                        placeholder="Enter your password"
                        type='password'
                        {...register('password')}
                    />
                }
            />
            {/* <HStack w='full' justify='start' my='10px'>
                <Checkbox />
                <Text color='primary'>I agree to <b>terms & conditions</b></Text>
            </HStack> */}
            <Button
                mt='12px'
                ref={useEnterButton()}
                onClick={handleSubmit(async input => {
                    const { error, data } = await signUp(input)
                    if (error) {
                        console.log(error)
                        setError('email', { message: error.message })
                        return
                    }
                    router.push('/dashboard')
                })}
                data-loading={isSubmitting ? true : null}
                disabled={!isValid}
            >{isSubmitSuccessful ? `🚀 Signing you in...` : "Sign up"}</Button>
            <HStack w='full' justify='center' mt='23px'>
                <Text color='grayscale.600'>Don't have an account?</Text>
                <Link href="/accounts/authenticate">
                    <Text color='primary' fontWeight='bold'>Sign in</Text>
                </Link>
            </HStack>
        </VStack>
    )
}