'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle({
    variant = 'outline',
    size = 'icon',
    isDropdown = false,
    ...props
}: {
    isDropdown?: boolean
} & React.ComponentProps<typeof Button>) {
    const { setTheme, theme } = useTheme()

    return isDropdown ? (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={variant} size={size} {...props}>
                    <Sun className='dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0' />
                    <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    ) : (
        <Button
            variant={variant}
            size={size}
            {...props}
            onClick={() => {
                theme === 'dark' ? setTheme('light') : setTheme('dark')
            }}
            aria-label='Toggle theme'
        >
            <Sun className='dark:-rotate-90 rotate-0 scale-100 transition-all dark:scale-0' />
            <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
        </Button>
    )
}
