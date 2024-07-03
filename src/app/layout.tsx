import './globals.css'
import { Box } from '~/styled-system/jsx'
import { Urbanist } from 'next/font/google'
import { Theme } from '@radix-ui/themes'
import { cookies } from 'next/headers'
import { ThemeName, getTheme } from '~/styled-system/themes'
import { UixProvider } from '~/uix/generated/UixProvider'
import { Metadata } from 'next'

// Fonts
const urbanist = Urbanist({
    subsets: ["latin"],
    variable: '--font-urbanist',
    display: 'swap'
});

export const metadata: Metadata = {
    title: 'Hirebird | Like a dating app, but for jobs.',
    description: 'A modern AI-centric job search tool that matches candidates with employers to find top job openings and internships. Stop getting ghosted, get Hirebird.',
    metadataBase: new URL('https://joinhirebird.com'),
    openGraph: {
        title: 'Hirebird | Like a dating app, but for jobs.',
        description: 'A modern AI-centric job search tool that matches candidates with employers to find top job openings and internships. Stop getting ghosted, get Hirebird.',
        siteName: 'Hirebird',
        type: 'website',
        url: 'https://joinhirebird.com',
        images: [
            {
                url: './opengraph-image.png',
            }
        ]
    }
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const themeName = cookies().get('theme')?.value as ThemeName
    const theme = themeName && (await getTheme(themeName)) as any
    return (
        <html lang="en" data-color-mode={themeName ? themeName : undefined}>
            {themeName && (
                <head>
                    <style type="text/css" id={theme.id} dangerouslySetInnerHTML={{ __html: theme.css }} />
                </head>
            )}
            <body className={urbanist.className}>
                <UixProvider>
                    <Theme appearance={'light'}>
                        <Box
                            position='fixed'
                            top='0'
                            left='0'
                            width='screen'
                            height='100dvh'
                            overflow='hidden'
                        >
                            {children}
                        </Box>
                    </Theme>
                </UixProvider>
            </body>
        </html>
    )
}
