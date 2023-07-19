import { Box, Button } from '@primer/react'

function Footer({ declaritive, modal }) {
    return (
        <Box
            sx={{
                display: 'grid',
                borderTopColor: 'border.default',
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                alignItems: 'center',
                gridGap: 4,
                gridTemplateColumns: '1fr min-content',
                py: 3,
                pl: 3,
                pr: 3,
            }}
        >
            <Box sx={{ flex: 1 }}>
                <Box
                    sx={{
                        display: modal
                            ? 'none'
                            : ['none', 'none', 'block', 'block'],
                    }}
                >
                    <Button size="small">View authors</Button>
                </Box>
                <Box
                    sx={{
                        display: modal
                            ? 'block'
                            : ['block', 'block', 'none', 'none'],
                    }}
                >
                    <Button>View authors</Button>
                </Box>
            </Box>

            <Box
                sx={{
                    display: declaritive ? 'block' : 'none',
                }}
            >
                <Box
                    sx={{
                        display: modal
                            ? 'none'
                            : ['none', 'none', 'inline-grid', 'inline-grid'],
                        gridGap: 2,
                        gridTemplateColumns: 'auto auto',
                    }}
                >
                    <Button size="small">Cancel</Button>
                    <Button size="small" variant="primary">
                        Save
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: modal
                            ? 'inline-grid'
                            : ['inline-grid', 'inline-grid', 'none', 'none'],
                        gridGap: 2,
                        gridTemplateColumns: 'auto auto',
                    }}
                >
                    <Button>Cancel</Button>
                    <Button variant="primary">Save</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
