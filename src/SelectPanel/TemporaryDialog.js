import { Box } from '@primer/react'

function TemporaryDialog({ children, modal, width }) {
    return (
        <Box
            sx={{
                display: modal ? 'flex' : 'block',
                justifyContent: 'center',
                alignItems: 'center',
                bg: modal && 'neutral.muted',
                position: [
                    'fixed',
                    'fixed',
                    modal ? 'fixed' : 'absolute',
                    modal ? 'fixed' : 'absolute',
                ],
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
            }}
        >
            <Box
                role={modal ? 'dialog' : 'overlay'}
                sx={{
                    display: 'flex',
                    maxWidth: ['100%', '100%', width, width],
                    maxHeight: ['100%', '100%', 500, 500],
                    flexDirection: 'column',
                    bg: 'canvas.default',
                    width: '100%',
                    height: ['100%', '100%', 'auto', 'auto'],
                    borderRadius: [0, 0, '12px', '12px'],
                    boxShadow: ['none', 'none', 'shadow.large', 'shadow.large'],
                }}
            >
                {children}
            </Box>
        </Box>
    )
}

export default TemporaryDialog
