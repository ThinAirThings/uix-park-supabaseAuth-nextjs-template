'use client'

import { createContext, FC, ReactNode, useContext } from "react"
import { NodeKey } from "~/uix/generated/staticObjects"

const UserNodeKeyContext = createContext<NodeKey<'User'> | null>(null)
export const useUserNodeKey = () => {
    const userNodeKey = useContext(UserNodeKeyContext)
    if (!userNodeKey) throw new Error('UserContext not found')
    return userNodeKey
}
export const UserNodeKeyProvider: FC<{
    userNodeKey: NodeKey<'User'>,
    children: ReactNode
}> = ({
    userNodeKey,
    children
}) => {
        return (
            <UserNodeKeyContext.Provider value={userNodeKey}>
                {children}
            </UserNodeKeyContext.Provider>
        )
    }