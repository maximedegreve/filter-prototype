import { useState } from 'react'
import { Box, IconButton, TextInput } from '@primer/react'
import { XIcon, XCircleFillIcon, SearchIcon } from '@primer/octicons-react'

// Input component
// Tooltip should not appear for clearing
// No content for tooltip results in empty tooltip
// Clearing should not have a background state

function Header({
    title,
    onSearchValueChange,
    onSearchValueClear,
    searchValue,
    searchPlaceholder,
    description,
}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottomColor: 'border.default',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    py: 2,
                    width: '100%',
                    alignItems: 'center',
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
                    <Text sx={{ fontSize: 1 }}>{title}</Text>
                    {description && (
                        <Text sx={{ fontSize: 0, color: 'fg.muted' }}>
                            {description}
                        </Text>
                    )}
                </Box>
                <Box sx={{ display: 'grid', gridGap: 2 }}>
                    <IconButton variant="invisible" icon={XIcon} />
                </Box>
            </Box>
            {onSearchValueChange && searchValue && onSearchValueClear && (
                <Box sx={{ width: '100%', px: 2, pb: '12px' }}>
                    <TextInput
                        leadingVisual={SearchIcon}
                        aria-label="Search"
                        value={searchValue}
                        onChange={onSearchValueChange}
                        width="100%"
                        placeholder={searchPlaceholder}
                        size="medium"
                        trailingAction={
                            <TextInput.Action
                                onClick={onSearchValueClear}
                                icon={XCircleFillIcon}
                                aria-label="Clear"
                                sx={{ color: 'fg.subtle', bg: 'none' }}
                            />
                        }
                    />
                </Box>
            )}
        </Box>
    )
}

export default Header
