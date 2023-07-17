import { ActionList } from '@primer/react'

function Item({ item, selected, onSelect }) {
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
                    variant={
                        item.descriptionVariant
                            ? item.descriptionVariant
                            : 'block'
                    }
                >
                    {item.description}
                </ActionList.Description>
            )}
        </ActionList.Item>
    )
}

export default Item
