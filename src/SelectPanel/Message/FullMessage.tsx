import { Box, Text } from '@primer/react'
import { AlertIcon } from '@primer/octicons-react'
import { MessageLevel, Message } from '../types'

function FullMessage({ title, description, level }: Message) {
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
                    color:
                        level === MessageLevel.Warning
                            ? 'attention.fg'
                            : 'danger.fg',
                    pb: 2,
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

export default FullMessage
