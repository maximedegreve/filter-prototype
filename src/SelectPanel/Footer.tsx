import { Box } from '@primer/react'
import { SelectionType } from './types'
import {
    ItemType,
    ExtraActionButtonType,
    ExtraActionLinkType,
    ExtraActionCheckboxType,
    DialogSizeType,
} from './types'

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
    extraAction:
        | ExtraActionButtonType
        | ExtraActionLinkType
        | ExtraActionCheckboxType
        | undefined
    onClickConfirm?: () => void | undefined
    onClickCancel?: () => void | undefined
    size: DialogSizeType
    selectedItems: ItemType[]
    type: SelectionType
}) {
    const showSaveCancel = declaritive || modal
    const alwaysMedium = size !== DialogSizeType.Small && modal
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
            {extraAction?.type === 'button' && (
                <ResponsiveButton
                    alwaysMedium={alwaysMedium}
                    variant="default"
                    onClick={extraAction.onClick}
                >
                    {extraAction.text}
                </ResponsiveButton>
            )}

            {extraAction?.type === 'link' && (
                <ResponsiveButton
                    alwaysMedium={alwaysMedium}
                    variant="invisible"
                    onClick={extraAction.onClick}
                >
                    {extraAction.text}
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
