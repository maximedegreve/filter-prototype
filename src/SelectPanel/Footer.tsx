import { Box } from '@primer/react'
import { SelectionType } from './types'
import { ItemType } from './types'

import ResponsiveButton from './ResponsiveButton'

function Footer({
    declaritive,
    modal,
    extraAction,
    onClickConfirm,
    onClickCancel,
    size,
    selectedItems,
    type,
}: {
    declaritive: boolean
    modal: boolean
    extraAction: string
    onClickConfirm: void
    onClickCancel: void
    size: string
    selectedItems: [ItemType]
    type: SelectionType
}) {
    const showSaveCancel = declaritive || modal
    const alwaysMedium = size !== 'small' && modal
    const totalSelection = selectedItems.length
    const isMultiple = type === SelectionType.Multiple
    return (
        <Box
            role="footer"
            sx={{
                borderTopColor: 'border.default',
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                alignItems: 'center',
                gap: 4,
                display:
                    showSaveCancel || extraAction
                        ? 'grid'
                        : ['grid', 'grid', 'none', 'none'],
                gridTemplateColumns:
                    showSaveCancel && extraAction
                        ? 'min-content auto'
                        : [
                              extraAction ? 'min-content auto' : '1fr',
                              extraAction ? 'min-content auto' : '1fr',
                              '1fr',
                              '1fr',
                          ],
                py: 3,
                pl: 3,
                pr: 3,
            }}
        >
            {extraAction && (
                <ResponsiveButton
                    alwaysMedium={alwaysMedium}
                    variant={
                        extraAction.type === 'button' ? 'default' : 'invisible'
                    }
                    onClick={extraAction.onClick}
                >
                    {extraAction.title}
                </ResponsiveButton>
            )}

            <Box
                sx={{
                    display: showSaveCancel
                        ? 'none'
                        : ['inline', 'inline', 'none', 'none'],
                    textAlign: 'right',
                }}
            >
                <ResponsiveButton
                    variant="primary"
                    alwaysMedium={alwaysMedium}
                    onClick={onClickConfirm}
                >
                    Done
                    {totalSelection > 0 && isMultiple && ` (${totalSelection})`}
                </ResponsiveButton>
            </Box>
            <Box
                sx={{
                    display: showSaveCancel ? 'block' : 'none',
                    textAlign: 'right',
                }}
            >
                <Box
                    sx={{
                        display: 'inline-grid',
                        gap: 2,
                        gridTemplateColumns: 'auto auto',
                    }}
                >
                    <ResponsiveButton
                        alwaysMedium={alwaysMedium}
                        onClick={onClickCancel}
                    >
                        Cancel
                    </ResponsiveButton>
                    <ResponsiveButton
                        alwaysMedium={alwaysMedium}
                        variant="primary"
                        onClick={onClickConfirm}
                    >
                        Save
                        {totalSelection > 0 &&
                            isMultiple &&
                            ` (${totalSelection})`}
                    </ResponsiveButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
