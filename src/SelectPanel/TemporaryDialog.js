import { Box } from '@primer/react'

function TemporaryDialog({ children, modal, width }) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bg: modal && 'neutral.muted',
                position: [
                    'fixed',
                    'fixed',
                    modal ? 'fixed' : 'absolute',
                    modal ? 'fixed' : 'absolute',
                ],
                top: [0, 0, modal ? 0 : 5, modal ? 0 : 5],
                left: [0, 0, modal ? 0 : 5, modal ? 0 : 5],
                right: [0, 0, modal ? 0 : 'auto', modal ? 0 : 'auto'],
                bottom: [0, 0, modal ? 0 : 'auto', modal ? 0 : 'auto'],
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
                    width: ['100%', '100%', 'auto', 'auto'],
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
