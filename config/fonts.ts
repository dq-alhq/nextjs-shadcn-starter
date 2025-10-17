import { Fira_Code as FontMono, Inter as FontSans, IBM_Plex_Serif as FontSerif } from 'next/font/google'

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export const fontMono = FontMono({
    subsets: ['latin'],
    variable: '--font-mono',
})

export const fontSerif = FontSerif({
    subsets: ['latin'],
    variable: '--font-serif',
    weight: ['400', '700'],
})

