import { ActionList } from '@primer/react'
import { Item as ItemType } from './types'

type ItemDataType = {
    item: ItemType
    selected: boolean
    onSelect?: (() => void) | undefined
    isRadio: boolean | unknown
}

// 🐛 Implementing radio buttons manually as we're waiting for a Primer fix.
// Using css class now to hack this which is bad. It also doesn't work in light mode.
// NEEDS AN ISSUE

const radioSxOn = {
    '> span:first-of-type': {
        svg: { display: 'none !important' },
        '::after': {
            width: 16,
            height: 16,
            content: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='5.5' fill='%232F81F7' stroke='%232F81F7'/%3E%3Cpath d='M8 5.375C8.69619 5.375 9.36387 5.65156 9.85616 6.14384C10.3484 6.63613 10.625 7.30381 10.625 8C10.625 8.69619 10.3484 9.36387 9.85616 9.85616C9.36387 10.3484 8.69619 10.625 8 10.625C7.30381 10.625 6.63613 10.3484 6.14384 9.85616C5.65156 9.36387 5.375 8.69619 5.375 8C5.375 7.30381 5.65156 6.63613 6.14384 6.14384C6.63613 5.65156 7.30381 5.375 8 5.375Z' fill='white'/%3E%3C/svg%3E%0A")`,
        },
    },
}

const radioSxOff = {
    '> span:first-of-type': {
        svg: { display: 'none' },
        '::after': {
            width: 16,
            height: 16,
            content: `url("data:image/svg+xml,%3Csvg width='16' height='16' class='radio-off' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='5.5' stroke='%2330363D'/%3E%3C/svg%3E%0A")`,
        },
    },
}

function Item({ item, selected, onSelect, isRadio }: ItemDataType) {
    return (
        <ActionList.Item
            sx={isRadio ? (selected ? radioSxOn : radioSxOff) : undefined}
            key={item.id}
            selected={selected}
            onSelect={onSelect}
        >
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
