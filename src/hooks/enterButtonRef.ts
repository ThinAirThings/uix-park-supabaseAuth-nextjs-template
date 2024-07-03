import { fromEvent } from "rxjs"


export const enterButtonRef = (ref: HTMLButtonElement | null) => {
    if (!ref) return
    const subscription = fromEvent<KeyboardEvent>(window, 'keydown').subscribe((event) => {
        if (event.key === 'Enter') {
            ref.click()
        }
    })
    return () => {
        subscription.unsubscribe()
    }
}