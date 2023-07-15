import { Box, IconButton } from '@primer/react'
import { XIcon } from '@primer/octicons-react'

function Header({ title }) {
    return (
        <Box
            sx={{
                minWidth: 200,
                display: 'flex',
                borderBottomColor: 'border.default',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                alignItems: 'center',
                py: 2,
                pl: 3,
                pr: 2,
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    fontSize: 1,
                    fontWeight: 'semibold',
                }}
            >
                {title}
            </Box>
            <Box sx={{ display: 'grid', gridGap: 2 }}>
                <IconButton variant="invisible" icon={XIcon} />
            </Box>
        </Box>
    )
}

export default Header
