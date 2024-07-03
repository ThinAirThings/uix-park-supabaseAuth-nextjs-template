'use client'
import { useEffect, useState } from "react"
import { fromEvent } from "rxjs"


export const useEnterButton = () => {
    const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null)
    useEffect(() => {
        if (!buttonRef) return
        const subscription = fromEvent<KeyboardEvent>(window, 'keydown')
            .subscribe(event => {
                if (event.key === 'Enter' && !event.shiftKey) {
                    buttonRef.click()
                }
            })
        return () => subscription.unsubscribe()
    }, [buttonRef])
    return setButtonRef
}