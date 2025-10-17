'use client'

import { IconSearch } from '@tabler/icons-react'
import { Input, Spinner } from '@/components/ui'
import { cn } from '@/lib/utils'

export const SearchInput = ({
    className,
    isLoading,
    ...props
}: React.ComponentProps<'input'> & { isLoading?: boolean }) => {
    return (
        <div className={cn('relative flex items-center', className)}>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground peer-disabled:opacity-50'>
                <IconSearch className='size-4' />
                <span className='sr-only'>Search</span>
            </div>
            <Input
                type='search'
                {...props}
                className='peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none'
            />
            {isLoading && (
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-muted-foreground peer-disabled:opacity-50'>
                    <Spinner className='size-4' />
                    <span className='sr-only'>Loading...</span>
                </div>
            )}
        </div>
    )
}
