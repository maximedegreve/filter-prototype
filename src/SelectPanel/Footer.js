import { Box, Button } from '@primer/react'

import ResponsiveButton from './ResponsiveButton'

function Footer({
    declaritive,
    modal,
    extraAction,
    onClickConfirm,
    onClickCancel,
    size,
}) {
    const showSaveCancel = declaritive || modal
    const alwaysMedium = size !== 'small' && modal
    return (
        <Box
            sx={{
                borderTopColor: 'border.default',
                borderTopWidth: 1,
                borderTopStyle: 'solid',
                alignItems: 'center',
                gridGap: 4,
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
                        gridGap: 2,
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
                    </ResponsiveButton>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
