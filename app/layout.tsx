import type { Metadata, Viewport } from 'next'
import Providers from '@/components/providers'
import { fontMono, fontSans } from '@/config/fonts'
import { siteConfig } from '@/config/site'
import './globals.css'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: '/favicon.ico',
    },
}

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: 'white' },
        { media: '(prefers-color-scheme: dark)', color: 'black' },
    ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html suppressHydrationWarning lang='en'>
            <body
                className={cn(
                    `min-h-screen bg-background font-sans text-foreground antialiased`,
                    fontSans.variable,
                    fontMono.variable,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
