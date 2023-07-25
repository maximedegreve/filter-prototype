import { Box } from '@primer/react'
import { AlertIcon } from '@primer/octicons-react'
import { Message, MessageLevel } from '../types'

function SubtleMessage({ title, description, level }: Message) {
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
                    level === MessageLevel.Warning
                        ? 'attention.fg'
                        : 'danger.fg',
                gridTemplateColumns: `${iconSize}px auto`,
                gap: 2,
                borderBottomColor:
                    level === MessageLevel.Warning
                        ? 'attention.muted'
                        : 'danger.muted',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor:
                    level === MessageLevel.Warning
                        ? 'attention.muted'
                        : 'danger.muted',
                fontSize: 0,
                a: {
                    color:
                        level === MessageLevel.Warning
                            ? 'attention.fg'
                            : 'danger.fg',
                },
            }}
        >
            <Box sx={{ display: 'grid', pt: '1px' }}>
                <AlertIcon size={iconSize} />
            </Box>
            <Box>
                {title}
                {description && <>. {description}</>}
            </Box>
        </Box>
    )
}

export default SubtleMessage
