import { Box } from '@primer/react'
import { AlertIcon } from '@primer/octicons-react'

function Notice({ message, type }) {
    const iconSize = 16
    return (
        <Box
            aria-live="polite"
            sx={{
                bg: 'attention.subtle',
                py: '12px',
                display: 'grid',
                px: 3,
                color: type === 'warning' ? 'attention.fg' : 'danger.fg',
                gridTemplateColumns: `${iconSize}px auto`,
                gridGap: 2,
                borderBottomColor:
                    type === 'warning' ? 'attention.muted' : 'danger.muted',
                borderBottomStyle: 'solid',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                borderTopColor:
                    type === 'warning' ? 'attention.muted' : 'danger.muted',
                fontSize: 0,
            }}
        >
            <Box sx={{ display: 'grid', pt: '1px' }}>
                <AlertIcon size={iconSize} />
            </Box>
            <Box sx={{}}>{message}</Box>
        </Box>
    )
}

export default Notice
