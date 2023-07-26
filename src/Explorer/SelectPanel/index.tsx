import { useState, useEffect, ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import Loading from './Loading'
import Message from './Message'
import Empty from './Empty'

import TemporaryDialog from './TemporaryDialog'

import {
    SelectionVariant,
    SelectionMultipleVariant,
    SelectionSingleVariant,
    Item,
    DialogSize,
    ExtraActionButton,
    ExtraActionLink,
    ExtraActionCheckbox,
    Message as MessageType,
    Empty as EmptyType,
} from './types'

function SelectPanel({
    variant,
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
    confirmation = 'Save',
    loadingMessage,
    isLoading,
    onClickBack,
    extraAction,
    declaritive,
    declaritiveIsLoading = false,
}: {
    title: string
    description?: string
    modal: boolean
    variant: SelectionMultipleVariant | SelectionSingleVariant
    items: Item[]
    size: DialogSize
    searchPlaceholder?: string
    declaritive: boolean
    declaritiveIsLoading: boolean
    message?: MessageType
    empty: EmptyType
    confirmation?: string
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
    const initialSelected =
        variant.type === SelectionVariant.Multiple
            ? variant.selected
            : [variant.selected]
    const [selectedItems, setSelectedItems] = useState<Item[]>(initialSelected)

    useEffect(() => {
        if (variant.type === SelectionVariant.Multiple) {
            variant.onChange({ selected: selectedItems })
        }
        if (variant.type === SelectionVariant.Single) {
            variant.onChange({ selected: selectedItems[0] })
        }
    }, [selectedItems, variant])

    const onSelect = ({
        item,
        selected,
    }: {
        item: Item
        selected: boolean
    }) => {
        if (variant.type === SelectionVariant.Multiple) {
            const selectedItemsWithout = selectedItems.filter(
                (selectedItem) => selectedItem.id !== item.id
            )
            let newSelectedItems = [...selectedItemsWithout]

            if (selected) {
                newSelectedItems.push(item)
            }
            setSelectedItems(newSelectedItems)
        } else {
            setSelectedItems([item])
        }
    }

    // Validation

    if (endsWithAny(['?', '.', '!'], loadingMessage)) {
        console.error(
            '🚨 SelectPanel: loadingMessage should not include a period, exclamation or question mark at the end of the sentence.'
        )
    }

    if (message?.title && endsWithAny(['?', '.', '!'], message?.title)) {
        console.error(
            '🚨 SelectPanel: message.title should not include a period, exclamation or question mark at the end of the sentence.'
        )
    }

    if (
        message?.description &&
        endsWithAny(['?', '.', '!'], lastCharInReactNode(message?.description))
    ) {
        console.error(
            '🚨 SelectPanel: The message.description should not include a period, exclamation or question mark at the end of the sentence.'
        )
    }

    if (empty?.title && endsWithAny(['?', '.', '!'], empty?.title)) {
        console.error(
            '🚨 SelectPanel: The empty.title should not include a period, exclamation or question mark at the end of the sentence.'
        )
    }

    if (
        empty?.description &&
        endsWithAny(['?', '.', '!'], lastCharInReactNode(empty?.description))
    ) {
        console.error(
            '🚨 SelectPanel: The empty.description should not include a period, exclamation or question mark at the end of the sentence.'
        )
    }

    return (
        <>
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
                    <Empty
                        title={empty.title}
                        description={empty.description}
                    />
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
                        declaritive={declaritive}
                        modal={modal}
                        items={items}
                        selectedItems={selectedItems}
                        type={variant.type}
                        onSelect={onSelect}
                    />
                )}
                <Footer
                    size={size}
                    type={variant.type}
                    selectedItems={selectedItems}
                    declaritive={declaritive}
                    confirmation={confirmation}
                    declaritiveIsLoading={declaritiveIsLoading}
                    onClickConfirm={() => alert('clicked confirm')}
                    onClickCancel={() => alert('clicked cancel')}
                    modal={modal}
                    extraAction={extraAction}
                />
            </TemporaryDialog>
        </>
    )
}

function lastCharInReactNode(reactNode: ReactNode) {
    const nodeAsString = String(reactNode)
    const lastCharacter = nodeAsString.charAt(nodeAsString.length - 1)
    return lastCharacter
}

function endsWithAny(suffixes: string[], string: string) {
    for (let suffix of suffixes) {
        if (string.endsWith(suffix)) return true
    }
    return false
}

export default SelectPanel
