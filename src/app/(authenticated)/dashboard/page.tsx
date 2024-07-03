'use client'

import { useNodeKey } from "~/uix/generated/useNodeKey"
import { useUserNodeKey } from "../UserNodeKeyProvider"



export default function () {
    const userNodeKey = useUserNodeKey()
    const userNode = useNodeKey({
        nodeKey: userNodeKey
    })
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}