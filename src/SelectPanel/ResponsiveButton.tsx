import { ReactNode } from 'react'
import { Button } from '@primer/react'

// 🐛 Waiting for a Primer fix to remove this file
// https://github.com/github/primer/issues/2408

function ResponsiveButton({
    children,
    alwaysMedium,
    ...rest
}: {
    children: ReactNode
    alwaysMedium: boolean
}) {
    return (
        <>
            <Button
                size="medium"
                sx={{
                    display: alwaysMedium
                        ? 'inline'
                        : ['inline', 'inline', 'none', 'none'],
                }}
                {...rest}
            >
                {children}
            </Button>
            <Button
                size="small"
                sx={{
                    display: alwaysMedium
                        ? 'none'
                        : ['none', 'none', 'inline', 'inline'],
                }}
                {...rest}
            >
                {children}
            </Button>
        </>
    )
}

export default ResponsiveButton
