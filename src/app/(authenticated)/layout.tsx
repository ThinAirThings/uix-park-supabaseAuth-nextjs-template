import { checkAuthenticatedUserNode } from "@/lib/auth/checkAuthenticatedUserNode"
import { UserNodeKeyProvider } from "./UserNodeKeyProvider"
import { ReactNode } from "react"



export default async function ({ children }: { children: ReactNode }) {
    const userNode = await checkAuthenticatedUserNode()
    return (
        <UserNodeKeyProvider userNodeKey={{ nodeType: userNode.nodeType, nodeId: userNode.nodeId }}>
            {children}
        </UserNodeKeyProvider>
    )
}