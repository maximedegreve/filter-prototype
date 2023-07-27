import { Box, Text } from '@primer/react'
import { Item, CheckboxValue } from './types'
import TemporaryCheckbox from './TemporaryCheckbox'

function ToggleSelection({
    items,
    selectedItems,
    value,
    onChange,
}: {
    items: Item[]
    selectedItems: Item[]
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    value: CheckboxValue
}) {
    return (
        <Box
            as="label"
            sx={{
                py: '6px',
                px: 3,
                bg: 'canvas.subtle',
                fontSize: 0,
                fontWeight: 'bold',
                color: 'fg.muted',
                display: 'flex',
                alignItems: 'center',
                borderBottomColor: 'border.default',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
            }}
        >
            <Box
                sx={{
                    width: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TemporaryCheckbox value={value} onChange={onChange} />
            </Box>
            <Text sx={{ pl: 2 }}>
                {items.length === selectedItems.length
                    ? 'Deselect all'
                    : 'Select all'}
            </Text>
        </Box>
    )
}

export default ToggleSelection
