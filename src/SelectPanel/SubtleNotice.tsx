import { ReactNode } from 'react'
import { Box } from '@primer/react'
import { AlertIcon } from '@primer/octicons-react'
import { NoticeType } from './types'

function SubtleNotice({
    message,
    type,
}: {
    message: ReactNode
    type: NoticeType
}) {
    const iconSize = 16
    return (
        <Box
            aria-live="polite"
            sx={{
                bg: 'attention.subtle',
                py: '12px',
                display: 'grid',
                px: 3,
                color:
                    type === NoticeType.Warning ? 'attention.fg' : 'danger.fg',
                gridTemplateColumns: `${iconSize}px auto`,
                gap: 2,
                borderBottomColor:
                    type === NoticeType.Warning
                        ? 'attention.muted'
                        : 'danger.muted',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor:
                    type === NoticeType.Warning
                        ? 'attention.muted'
                        : 'danger.muted',
                fontSize: 0,
                a: {
                    color:
                        type === NoticeType.Warning
                            ? 'attention.fg'
                            : 'danger.fg',
                },
            }}
        >
            <Box sx={{ display: 'grid', pt: '1px' }}>
                <AlertIcon size={iconSize} />
            </Box>
            <Box>{message}</Box>
        </Box>
    )
}

export default SubtleNotice
