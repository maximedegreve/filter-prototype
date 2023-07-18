import { Box, ActionList } from '@primer/react'
import Item from './Item'

function List({ items, selectedItems, onSelect, type }) {
    let hasBlockDescriptions =
        items.filter((item) => item.descriptionVariant === 'block').length > 0

    const selectedItemIds = selectedItems.map((item) => item.id)
    const itemsWithoutSelected =
        items?.filter((item) => !selectedItemIds.includes(item.id)) || []
    return (
        <Box sx={{ flex: 1, overflowY: 'scroll' }}>
            <ActionList
                selectionVariant={type}
                showDividers={hasBlockDescriptions}
                role="listbox"
            >
                {selectedItems.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        selected={true}
                        onSelect={(e, item) =>
                            onSelect({ item, selected: !selected })
                        }
                    />
                ))}
                {itemsWithoutSelected.length === 0 ||
                    (selectedItems.length === 0 && <ActionList.Divider />)}
                {itemsWithoutSelected.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        selected={false}
                        onSelect={(e, item) =>
                            onSelect({ item, selected: !selected })
                        }
                    />
                ))}
            </ActionList>
        </Box>
    )
}

export default List
