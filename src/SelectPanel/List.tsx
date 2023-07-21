import { useState, useEffect } from 'react'
import { Box, ActionList } from '@primer/react'
import Item from './Item'
import { SelectionType, ItemType } from './types'

function List({
    items,
    selectedItems,
    onSelect,
    type,
}: {
    items: [ItemType]
    selectedItems: [ItemType]
    onSelect: ({
        item,
        selected,
    }: {
        item: ItemType
        selected: boolean
    }) => void
    type: SelectionType
}) {
    const [selectedItemsGroup, setSelectedItemsGroup] = useState<
        ItemType[] | []
    >([])
    const [unSelectedItemsGroup, setUnselectedItemsGroup] = useState<
        ItemType[] | []
    >([])

    useEffect(() => {
        const selectedItemIds = selectedItems.map((item) => item.id)
        const unSelectedItemIds = items.map((item) => item.id)

        const unSelectedItemsWithoutSelected = items?.filter(
            (item) => !selectedItemIds.includes(item.id)
        )

        const visibleSelectedItems = selectedItems.filter((selectedItem) =>
            unSelectedItemIds.includes(selectedItem.id)
        )
        setSelectedItemsGroup(visibleSelectedItems)
        setUnselectedItemsGroup(unSelectedItemsWithoutSelected)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])

    const isSelected = (id: string | number) => {
        return !!selectedItems?.find((item) => item.id === id)
    }

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
