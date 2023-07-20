import { Box } from '@primer/react'

function TemporaryDialog({ children, modal, size }) {
    let pxWidth = 320
    let pxHeight = 432

    if (size === 'medium') {
        pxWidth = 480
        pxHeight = 320
    }

    if (size === 'portrait') {
        pxWidth = 480
        pxHeight = 600
    }

    if (size === 'large') {
        pxWidth = 640
        pxHeight = 432
    }

    if (size === 'xlarge') {
        pxWidth = 960
        pxHeight = 600
    }
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
                    maxWidth: ['100%', '100%', pxWidth, pxWidth],
                    maxHeight: ['100%', '100%', pxHeight, pxHeight],
                    flexDirection: 'column',
                    bg: 'canvas.default',
                    margin: [0, 0, 8, 8],
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
