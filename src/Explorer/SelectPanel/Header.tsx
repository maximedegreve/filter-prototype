import { Box, IconButton, TextInput, Text, Tooltip } from '@primer/react'
import {
    XIcon,
    XCircleFillIcon,
    SearchIcon,
    ArrowLeftIcon,
} from '@primer/octicons-react'
import ClearIcon from './ClearIcon'

function Header({
    title,
    description,
    modal,
    bordered,
    subtleLoading,
    showClearIcon,
    searchValue,
    searchPlaceholder,
    onSearchValueChange,
    onSearchValueClear,
    onKeyDown,
    onClickBack,
    onClickClear,
}: {
    title: string
    description?: string
    modal: boolean
    bordered: boolean
    subtleLoading: boolean
    showClearIcon: boolean
    searchValue?: string
    searchPlaceholder?: string
    onSearchValueChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSearchValueClear?: () => void
    onClickBack?: () => void
    onClickClear: () => void
    onKeyDown: () => void
}) {
    const onKeyDownDelegate = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.keyCode === 40) {
            onKeyDown()
        }
    }
    const searchEnabled = onSearchValueChange && onSearchValueClear
    return (
        <Box
            role="header"
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
                                aria-label="Back"
                                onClick={onClickBack}
                                icon={ArrowLeftIcon}
                            />
                        </Tooltip>
                    </Box>
                )}

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        fontSize: 1,
                        position: 'relative',
                        width: '100%',
                        minWidth: 0,
                    }}
                >
                    <Text
                        as={modal ? 'h1' : 'h2'}
                        sx={{
                            fontSize: 1,
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            fontWeight: 'bold',
                            pt: description && 1,
                        }}
                    >
                        {title}
                    </Text>
                    {description && (
                        <Text
                            sx={{
                                pb: searchEnabled ? 0 : 1,
                                fontSize: 0,
                                color: 'fg.muted',
                                display: 'block',
                            }}
                        >
                            {description}
                        </Text>
                    )}
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto',
                    }}
                >
                    {showClearIcon && (
                        <Tooltip text="Clear selection">
                            <IconButton
                                aria-label="Clear selection"
                                variant="invisible"
                                icon={ClearIcon}
                                onClick={onClickClear}
                            />
                        </Tooltip>
                    )}
                    <Tooltip text="Close">
                        <IconButton
                            variant="invisible"
                            icon={XIcon}
                            aria-label="Close"
                        />
                    </Tooltip>
                </Box>
            </Box>
            {searchEnabled && (
                <Box sx={{ width: '100%', px: 2, pb: 2 }}>
                    <TextInput
                        leadingVisual={!subtleLoading && SearchIcon}
                        loaderPosition={subtleLoading ? 'leading' : undefined}
                        loading={subtleLoading}
                        aria-label="Search"
                        value={searchValue}
                        onChange={onSearchValueChange}
                        width="100%"
                        placeholder={searchPlaceholder || 'Search'}
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
