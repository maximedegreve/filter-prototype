import { Box, Text } from '@primer/react'
import { AlertIcon } from '@primer/octicons-react'

function Notice({ title, description, type }) {
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
            <Box
                sx={{
                    color: type === 'warning' ? 'attention.fg' : 'danger.fg',
                    pb: 2,
                    display: type === 'empty' ? 'none' : 'block',
                }}
            >
                <AlertIcon size={16} />
            </Box>
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

export default Notice
