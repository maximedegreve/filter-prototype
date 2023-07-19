import { useState, useEffect } from 'react'
import { Box, ActionList } from '@primer/react'
import Item from './Item'

function List({ items, selectedItems, onSelect, type }) {
    const [selectedItemsGroup, setSelectedItemsGroup] = useState([])
    const [unSelectedItemsGroup, setUnselectedItemsGroup] = useState([])

    useEffect(() => {
        const selectedItemIds = selectedItems.map((item) => item.id)
        const unSelectedItemsWithoutSelected = items?.filter(
            (item) => !selectedItemIds.includes(item.id)
        )
        setSelectedItemsGroup(selectedItems)
        setUnselectedItemsGroup(unSelectedItemsWithoutSelected)
    }, [items])

    const isSelected = (id) => {
        return !!selectedItems?.find((item) => item.id === id)
    }

    const isSingleGroup =
        selectedItemsGroup.length === 0 || unSelectedItemsGroup.length === 0
    let hasBlockDescriptions =
        items?.filter((item) => item.descriptionVariant === 'block').length > 0

    return (
        <Box sx={{ flex: 1, overflowY: 'scroll' }}>
            <ActionList
                selectionVariant={type}
                showDividers={hasBlockDescriptions}
                role="listbox"
            >
                {selectedItemsGroup.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        selected={isSelected(item.id)}
                        onSelect={() =>
                            onSelect({ item, selected: !isSelected(item.id) })
                        }
                    />
                ))}
                {!isSingleGroup && <ActionList.Divider />}
                {unSelectedItemsGroup.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        selected={isSelected(item.id)}
                        onSelect={() =>
                            onSelect({ item, selected: !isSelected(item.id) })
                        }
                    />
                ))}
            </ActionList>
        </Box>
    )
}

export default List
