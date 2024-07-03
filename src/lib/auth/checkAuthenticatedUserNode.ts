'use server'
import { rootNodeKey, UserNode } from "~/uix/generated/staticObjects";
import { createSupabaseSsrClient } from "../supabase/createSupabaseSsrClient";
import { redirect } from "next/navigation";
import { createNode, getNodeByIndex } from "~/uix/generated/functionModule";

export async function checkAuthenticatedUserNode(): Promise<UserNode | never> {
    const { data: { user }, error } = await createSupabaseSsrClient().auth.getUser();
    if (error || !user) redirect('/accounts/authenticate')
    // Check if userNode exists
    const { data: existingUserNode } = await getNodeByIndex('User', 'email', user.email!)
    if (existingUserNode) return existingUserNode
    const { data: newUserNode } = await createNode([rootNodeKey], 'User', {
        email: user.email!,
        firstName: user.user_metadata.full_name.split(' ')[0]!,
        lastName: user.user_metadata.full_name.split(' ')[1]!,
        phoneNumber: user.user_metadata.phoneNumber,
        userType: 'Unspecified',
        completedOnboardingV3: false,
    }, user.id)
    if (newUserNode) return newUserNode
    throw new Error('Something must be wrong with Uix. In checkAuthenticationNode')
}