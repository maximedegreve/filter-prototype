import { Button } from '@primer/react'

// Created this because buttons right now don't support responsive values for the size

function ResponsiveButton({ children, alwaysMedium, ...rest }) {
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
