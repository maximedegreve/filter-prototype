import { useState, useEffect } from 'react'

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
    onChange,
    onClickBack,
    extraAction,
    declaritive,
    declaritiveIsLoading = false,
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
    declaritiveIsLoading: boolean
    message?: MessageType
    empty: EmptyType
    loadingMessage: string
    isLoading: boolean
    searchValue?: string
    onChange: ({ selected }: { selected: Item[] }) => void
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

    // 🧠 The onChange event depends heavily on the context of the SelectPanel.

    // 1️⃣ For example onChange is instantly triggered on desktop breakpoints
    // when the declaritive option is false. However in mobile the declaritive
    // option is overriden because the SelectPanel is displayed full screen in
    // that case the onChange event only gets triggered upon clicking save/apply.

    // 2️⃣ Equally when the modal option is turned on then the onChange event is only
    // triggered on clicking save since modals are always declaritive.

    useEffect(() => {
        onChange({ selected: selectedItems })
    }, [selectedItems])

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
            {!(items.length === 0 && isLoading) && message && (
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
                declaritiveIsLoading={declaritiveIsLoading}
                onClickConfirm={() => alert('clicked confirm')}
                onClickCancel={() => alert('clicked cancel')}
                modal={modal}
                extraAction={extraAction}
            />
        </TemporaryDialog>
    )
}

export default SelectPanel
