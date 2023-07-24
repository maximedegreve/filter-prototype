import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import Loading from './Loading'
import Message from './Message'
import Empty from './Empty'

import TemporaryDialog from './TemporaryDialog'

import {
    SelectionVariant,
    Item,
    DialogSize,
    ExtraActionButton,
    ExtraActionLink,
    ExtraActionCheckbox,
    Message as MessageType,
    Empty as EmptyType,
} from './types'

function SelectPanel({
    type,
    title,
    description,
    modal = false,
    onSearchValueChange,
    onSearchValueClear,
    searchValue,
    searchPlaceholder = 'Search',
    message,
    empty,
    items,
    size,
    initialSelectedItems,
    loadingMessage,
    isLoading,
    onClickBack,
    extraAction,
    declaritive,
}: {
    title: string
    description?: string
    modal: boolean
    type: SelectionVariant
    items: Item[]
    initialSelectedItems: Item[]
    size: DialogSize
    searchPlaceholder?: string
    declaritive: boolean
    message?: MessageType
    empty: EmptyType
    loadingMessage: string
    isLoading: boolean
    searchValue?: string
    onClickBack?: () => void
    onSearchValueChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSearchValueClear?: () => void
    extraAction?:
        | ExtraActionButton
        | ExtraActionLink
        | ExtraActionCheckbox
        | undefined
}) {
    const [selectedItems, setSelectedItems] = useState(initialSelectedItems)

    const onSelect = ({
        item,
        selected,
    }: {
        item: Item
        selected: boolean
    }) => {
        const selectedItemsWithout = selectedItems.filter(
            (selectedItem) => selectedItem.id !== item.id
        )
        let newSelectedItems = [...selectedItemsWithout]

        if (selected) {
            newSelectedItems.push(item)
        }
        setSelectedItems(newSelectedItems)
    }

    return (
        <TemporaryDialog
            modal={modal}
            size={size}
            ariaLabelledby={title}
            ariaDescribedby={description}
        >
            <Header
                title={title}
                onSearchValueChange={onSearchValueChange}
                onSearchValueClear={onSearchValueClear}
                searchValue={searchValue}
                description={description}
                searchPlaceholder={searchPlaceholder}
                subtleLoading={items.length > 0 && isLoading}
                modal={modal}
                onKeyDown={() => alert('test')}
                onClickBack={onClickBack}
                showClearIcon={selectedItems.length > 0}
                onClickClear={() => setSelectedItems([])}
                bordered={
                    items.length === 0 || !!(items.length > 0 && !message)
                }
            />

            {items.length === 0 && isLoading && (
                <Loading message={loadingMessage} />
            )}
            {items.length === 0 && !isLoading && !message && (
                <Empty title={empty.title} description={empty.description} />
            )}
            {message && !(items.length === 0 && isLoading) && (
                <Message
                    title={message.title}
                    description={message.description}
                    level={message.level}
                    isSubtle={items.length > 0}
                />
            )}
            {items.length > 0 && (
                <List
                    items={items}
                    selectedItems={selectedItems}
                    type={type}
                    onSelect={onSelect}
                />
            )}
            <Footer
                size={size}
                type={type}
                selectedItems={selectedItems}
                declaritive={declaritive}
                onClickConfirm={() => alert('clicked confirm')}
                onClickCancel={() => alert('clicked cancel')}
                modal={modal}
                extraAction={extraAction}
            />
        </TemporaryDialog>
    )
}

export default SelectPanel
