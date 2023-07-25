import { useState, useEffect } from 'react'
import { Box, ActionList, useResponsiveValue } from '@primer/react'
import ActionListItem from './ActionListItem'
import { SelectionVariant, Item } from './types'

function List({
    items,
    selectedItems,
    onSelect,
    declaritive,
    modal,
    type,
}: {
    items: Item[]
    selectedItems: Item[]
    declaritive: boolean
    modal: boolean
    onSelect: ({ item, selected }: { item: Item; selected: boolean }) => void
    type: SelectionVariant
}) {
    const [selectedItemsGroup, setSelectedItemsGroup] = useState<Item[] | []>(
        []
    )
    const [unSelectedItemsGroup, setUnselectedItemsGroup] = useState<
        Item[] | []
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

    const useRadioIcons =
        (type === SelectionVariant.Single && declaritive) ||
        (type === SelectionVariant.Single && modal)

    const useRadioIconsResponsive = useResponsiveValue(
        { regular: useRadioIcons, narrow: type === SelectionVariant.Single },
        useRadioIcons
    )

    return (
        <Box sx={{ flex: 1, overflowY: 'scroll' }}>
            <ActionList
                selectionVariant={type}
                showDividers={hasBlockDescriptions}
                role="listbox"
            >
                {selectedItemsGroup.map((item) => (
                    <ActionListItem
                        isRadio={useRadioIconsResponsive}
                        item={item}
                        key={item.id}
                        selected={isSelected(item.id)}
                        onSelect={() =>
                            onSelect({ item, selected: !isSelected(item.id) })
                        }
                    />
                ))}
                {unSelectedItemsGroup.map((item) => (
                    <ActionListItem
                        isRadio={useRadioIconsResponsive}
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
