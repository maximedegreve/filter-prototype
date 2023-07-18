import { Box, IconButton, TextInput, Text, Tooltip } from '@primer/react'
import {
    XIcon,
    XCircleFillIcon,
    SearchIcon,
    ArrowLeftIcon,
} from '@primer/octicons-react'

// Input component
// Tooltip should not appear for clearing
// No content for tooltip results in empty tooltip
// Clearing should not have a background state

function Header({
    title,
    onSearchValueChange,
    onSearchValueClear,
    onKeyDown,
    searchValue,
    searchPlaceholder,
    description,
    onClickBack,
    bordered,
    subtleLoading,
}) {
    const onKeyDownDelegate = (e) => {
        if (e.keyCode === 40) {
            onKeyDown()
        }
    }
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderBottomColor: 'border.default',
                borderBottomWidth: bordered ? 1 : 0,
                borderBottomStyle: 'solid',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    py: 2,
                    width: '100%',
                    alignItems: 'stretch',
                    pl: onClickBack ? 2 : 3,
                    pr: 2,
                }}
            >
                {onClickBack && (
                    <Box sx={{ pr: 1, display: 'grid' }}>
                        <Tooltip text="Back">
                            <IconButton
                                variant="invisible"
                                onClick={onClickBack}
                                icon={ArrowLeftIcon}
                            />
                        </Tooltip>
                    </Box>
                )}

                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        fontSize: 1,
                        fontWeight: 'semibold',
                    }}
                >
                    <Text sx={{ fontSize: 1, display: 'block' }}>{title}</Text>
                    {description && (
                        <Text
                            sx={{
                                fontSize: 0,
                                color: 'fg.muted',
                                display: 'block',
                            }}
                        >
                            {description}
                        </Text>
                    )}
                </Box>
                <Box sx={{ display: 'grid', gridGap: 2 }}>
                    <Tooltip text="Close">
                        <IconButton variant="invisible" icon={XIcon} />
                    </Tooltip>
                </Box>
            </Box>
            {onSearchValueChange && onSearchValueClear && (
                <Box sx={{ width: '100%', px: 2, pb: '12px' }}>
                    <TextInput
                        leadingVisual={SearchIcon}
                        aria-label="Search"
                        value={searchValue}
                        onChange={onSearchValueChange}
                        width="100%"
                        placeholder={searchPlaceholder}
                        size="medium"
                        autoFocus
                        onKeyDown={onKeyDownDelegate}
                        tabIndex={0}
                        trailingAction={
                            <TextInput.Action
                                onClick={onSearchValueClear}
                                icon={XCircleFillIcon}
                                aria-label="Clear"
                                sx={{
                                    color: 'fg.subtle',
                                    bg: 'none',
                                    display: searchValue ? 'block' : 'none',
                                }}
                            />
                        }
                    />
                </Box>
            )}
        </Box>
    )
}

export default Header
