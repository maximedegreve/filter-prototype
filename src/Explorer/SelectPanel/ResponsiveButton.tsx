import { ReactNode } from 'react'
import { Button } from '@primer/react'

// 🐛 Waiting for a Primer fix to remove this file
// https://github.com/github/primer/issues/2408

function ResponsiveButton({
    children,
    variant,
    alwaysMedium,
    onClick,
    ...rest
}: {
    children: ReactNode
    variant?: 'default' | 'primary' | 'invisible' | 'danger'
    alwaysMedium: boolean
    onClick?: () => void | undefined
}) {
    return (
        <>
            <Button
                size="medium"
                variant={variant}
                sx={{
                    display: alwaysMedium
                        ? 'inline'
                        : ['inline', 'inline', 'none', 'none'],
                }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Button>
            <Button
                size="small"
                variant={variant}
                sx={{
                    display: alwaysMedium
                        ? 'none'
                        : ['none', 'none', 'inline', 'inline'],
                }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Button>
        </>
    )
}

export default ResponsiveButton
