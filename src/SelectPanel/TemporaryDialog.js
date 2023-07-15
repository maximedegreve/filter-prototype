import { Box } from '@primer/react'

function TemporaryDialog({ children, modal }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bg: modal && 'neutral.muted',
                position: 'absolute',
                top: [0, 0, modal ? 0 : 5, modal ? 0 : 5],
                left: [0, 0, modal ? 0 : 5, modal ? 0 : 5],
                right: [0, 0, modal ? 0 : 'auto', modal ? 0 : 'auto'],
                bottom: [0, 0, modal ? 0 : 'auto', modal ? 0 : 'auto'],
                zIndex: 2,
            }}
        >
            <Box
                role="dialog"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bg: 'canvas.default',
                    width: ['100%', '100%', 'auto', 'auto'],
                    height: ['100%', '100%', 'auto', 'auto'],
                    borderRadius: [0, 0, '12px', '12px'],
                    boxShadow: [
                        'none',
                        'none',
                        'shadow.medium',
                        'shadow.medium',
                    ],
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default TemporaryDialog
