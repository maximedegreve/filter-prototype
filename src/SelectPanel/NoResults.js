function NoResults({ title, description, type }) {
    return (
        <Box
            sx={{
                minHeight: 200,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            Empty state
        </Box>
    )
}

export default NoResults
