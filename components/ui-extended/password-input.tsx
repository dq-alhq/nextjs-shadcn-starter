'use client'

import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import { type ComponentProps, useState } from 'react'
import { Button, Input } from '@/components/ui'
import { cn } from '@/lib/utils'

export const PasswordInput = ({
    className,
    ...props
}: ComponentProps<'input'>) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className={cn('relative flex items-center', className)}>
            <Input
                type={isVisible ? 'text' : 'password'}
                {...props}
                className='pr-9'
            />
            <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsVisible((prevState) => !prevState)}
                className='absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50'
            >
                {isVisible ? <IconEyeClosed /> : <IconEye />}
                <span className='sr-only'>
                    {isVisible ? 'Hide password' : 'Show password'}
                </span>
            </Button>
        </div>
    )
}
