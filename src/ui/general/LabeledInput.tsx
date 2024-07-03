import { HStack, VStack } from "~/styled-system/jsx";
import { ComponentPropsWithRef, FC, forwardRef, ReactNode } from "react";
import { FormLabel } from "../park/form-label";
import { Input } from "../park/input";
import { FieldError, FieldErrors } from "react-hook-form";

export const LabeledInput: FC<{
    label: string
    input: ReactNode
    error?: FieldError
}> = ({
    label,
    error,
    input,
}) => {
        return (
            <VStack alignItems='start' gap='6px' w='full'>
                <HStack justify='space-between' alignItems='baseline' w='full'>
                    <FormLabel>{label}</FormLabel>
                    {error && <FormLabel color='error' fontSize='s'>{(error as FieldError).message}</FormLabel>}
                </HStack>
                {input}
            </VStack >
        )
    }