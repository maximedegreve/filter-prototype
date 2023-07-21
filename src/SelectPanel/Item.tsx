import { ActionList } from '@primer/react'
import { ItemType } from './types'

type ItemDataType = {
    item: ItemType
    selected: boolean
    onSelect?: (() => void) | undefined
}

function Item({ item, selected, onSelect }: ItemDataType) {
    return (
        <ActionList.Item key={item.id} selected={selected} onSelect={onSelect}>
            {item.leadingVisual && (
                <ActionList.LeadingVisual>
                    {item.leadingVisual}
                </ActionList.LeadingVisual>
            )}
            {item.text}
            {item.description && (
                <ActionList.Description
                    variant={item.descriptionVariant || 'block'}
                >
                    {item.description}
                </ActionList.Description>
            )}
            {item.trailingVisual && (
                <ActionList.TrailingVisual>
                    {item.trailingVisual}
                </ActionList.TrailingVisual>
            )}
        </ActionList.Item>
    )
}

export default Item
