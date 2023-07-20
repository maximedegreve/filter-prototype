import { Box, Text, Spinner } from '@primer/react'

function Loading({ message }) {
    return (
        <Box
            sx={{
                minHeight: 270,
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Box
                sx={{
                    pb: 2,
                }}
            >
                <Spinner />
            </Box>

            <Text sx={{ textAlign: 'center', fontSize: 0, color: 'fg.muted' }}>
                {message}
            </Text>
        </Box>
    )
}

export default Loading
