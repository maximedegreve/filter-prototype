import { ReactNode } from 'react'
import { Box } from '@primer/react'
import { DialogSize } from './types'

// 🐛 Primer's dialog or overlay component has currently no way to properly adapt to mobile screens
// Issue: https://github.com/github/primer/issues/2413
// Issue: https://github.com/github/primer/issues/2414

function TemporaryDialog({
    children,
    modal,
    size,
    ariaLabelledby,
    ariaDescribedby,
}: {
    children: ReactNode
    modal: boolean
    size: DialogSize
    ariaLabelledby: string
    ariaDescribedby?: string
}) {
    let pxWidth = 320
    let pxHeight = 432

    switch (size) {
        case DialogSize.Medium:
            pxWidth = 480
            pxHeight = 320
            break
        case DialogSize.Portrait:
            pxWidth = 480
            pxHeight = 600
            break
        case DialogSize.Large:
            pxWidth = 640
            pxHeight = 432
            break
        case DialogSize.XLarge:
            pxWidth = 960
            pxHeight = 600
            break
        default:
            pxWidth = 320
            pxHeight = 432
    }

    return (
        <Box
            sx={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2,
                display: modal ? 'flex' : 'block',
                justifyContent: 'center',
                alignItems: 'center',
                bg: modal ? 'neutral.muted' : 'transparent',
                position: [
                    'fixed',
                    'fixed',
                    modal ? 'fixed' : 'absolute',
                    modal ? 'fixed' : 'absolute',
                ],
            }}
        >
            <Box
                role="dialog"
                aria-labelledby={ariaLabelledby}
                aria-describedby={ariaDescribedby}
                aria-modal={modal}
                sx={{
                    display: 'flex',
                    maxWidth: ['100%', '100%', pxWidth, pxWidth],
                    maxHeight: ['100%', '100%', pxHeight, pxHeight],
                    flexDirection: 'column',
                    bg: 'canvas.default',
                    margin: [0, 0, 8, 8],
                    width: '100%',
                    borderWidth: 1,
                    borderColor: 'border.default',
                    borderStyle: 'solid',
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
