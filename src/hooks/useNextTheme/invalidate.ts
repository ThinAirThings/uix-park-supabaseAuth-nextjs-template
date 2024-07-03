'use server'

import { revalidatePath } from "next/cache"

export const invalidate = () => {
    revalidatePath('/', 'layout')
}