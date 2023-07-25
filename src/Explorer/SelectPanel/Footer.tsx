import { Box, FormControl, Checkbox } from '@primer/react'
import {
    SelectionVariant,
    Item,
    ExtraActionButton,
    ExtraActionLink,
    ExtraActionCheckbox,
    ExtraActionType,
    DialogSize,
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
        | ExtraActionButton
        | ExtraActionLink
        | ExtraActionCheckbox
        | undefined
    onClickConfirm?: () => void | undefined
    onClickCancel?: () => void | undefined
    size: DialogSize
    selectedItems: Item[]
    type: SelectionVariant
}) {
    const showSaveCancel = declaritive || modal
    const alwaysMedium = size !== DialogSize.Small && modal
    const totalSelection = selectedItems.length
    const isMultiple = type === SelectionVariant.Multiple
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
                        ? 'max-content auto'
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
            {extraAction?.type === ExtraActionType.Checkbox && (
                <FormControl>
                    <Checkbox
                        onChange={extraAction.onChange}
                        id="default-checkbox"
                    />
                    <FormControl.Label sx={{ fontSize: [1, 1, 0, 0] }}>
                        {extraAction.text}
                    </FormControl.Label>
                </FormControl>
            )}
            {extraAction?.type === ExtraActionType.Button && (
                <ResponsiveButton
                    alwaysMedium={alwaysMedium}
                    variant="default"
                    onClick={extraAction.onClick}
                >
                    {extraAction.text}
                </ResponsiveButton>
            )}

            {extraAction?.type === ExtraActionType.Link && (
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
