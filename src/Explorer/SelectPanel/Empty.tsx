import { Box, Text } from '@primer/react'
import { Empty as EmptyType } from './types'

function Empty({ title, description }: EmptyType) {
    return (
        <Box
            sx={{
                minHeight: 270,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                p: 5,
                flex: 1,
                a: {
                    color: 'accent.fg',
                    textDecoration: 'none',
                },
            }}
        >
            <Text
                sx={{
                    textAlign: 'center',
                    fontSize: 1,
                    fontWeight: 'semibold',
                    pb: 1,
                }}
            >
                {title}
            </Text>
            {description && (
                <Text
                    sx={{ textAlign: 'center', fontSize: 0, color: 'fg.muted' }}
                >
                    {description}
                </Text>
            )}
        </Box>
    )
}

export default Empty
