import { ThemeProvider } from './theme-provider'
import { ToasterProvider } from './toast-provider'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ToasterProvider>{children}</ToasterProvider>
        </ThemeProvider>
    )
}
