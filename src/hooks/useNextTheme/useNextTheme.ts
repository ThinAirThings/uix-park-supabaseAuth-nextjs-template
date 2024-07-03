import { useEffect } from "react";
import { getTheme, injectTheme } from "~/styled-system/themes";
import { invalidate } from "./invalidate";


export const useNextTheme = ({
    next,
    initial
}: {
    next: Parameters<typeof getTheme>[0]
    initial?: boolean
}) => useEffect(() => {
    (async () => {
        if (!next) return
        const theme = await getTheme(next)
        setCookie('theme', next, 7)
        injectTheme(document.documentElement, theme)
        invalidate()
    })()
}, [initial || next])

// Set a Cookie
function setCookie(cName: string, cValue: any, expDays: number) {
    let date = new Date()
    date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    document.cookie = cName + '=' + cValue + '; ' + expires + '; path=/'
}
