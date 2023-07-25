import { ReactNode } from 'react'
import { Button, Box, Spinner } from '@primer/react'

// 🐛 Waiting for a Primer fix to remove this file
// https://github.com/github/primer/issues/2408

// ⭐️ Waiting for a Primer update to support loading states
// https://github.com/github/primer/issues/775

function ResponsiveButton({
    children,
    variant,
    alwaysMedium,
    isLoading,
    onClick,
    ...rest
}: {
    children: ReactNode
    variant?: 'default' | 'primary' | 'invisible' | 'danger'
    alwaysMedium: boolean
    isLoading: boolean
    onClick?: () => void | undefined
}) {
    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            {isLoading && (
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bg: 'btn.bg',
                        borderColor: 'btn.border',
                        borderRadius: 2,
                        borderWidth: 1,
                        borderStyle: 'solid',
                    }}
                >
                    <Spinner size="small" />
                </Box>
            )}
            <Button
                block
                size="medium"
                variant={variant}
                sx={{
                    visibility: isLoading ? 'hidden' : 'visible',
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
                block
                sx={{
                    visibility: isLoading ? 'hidden' : 'visible',
                    display: alwaysMedium
                        ? 'none'
                        : ['none', 'none', 'inline', 'inline'],
                }}
                onClick={onClick}
                {...rest}
            >
                {children}
            </Button>
        </Box>
    )
}

export default ResponsiveButton
