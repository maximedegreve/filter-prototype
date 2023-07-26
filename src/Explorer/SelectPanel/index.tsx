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
    searchValue,
    searchPlaceholder = 'Search',
    message,
    empty,
    items,
    size = DialogSize.Small,
    confirmation = 'Save',
    loadingMessage,
    isLoading = false,
    onClickBack,
    extraAction,
    declaritive = true,
    declaritiveIsLoading = false,
}: {
    title: string
    description?: string
    modal: boolean
    variant: SelectionMultipleVariant | SelectionSingleVariant
    items: Item[]
    size?: DialogSize
    searchPlaceholder?: string
    declaritive: boolean
    declaritiveIsLoading?: boolean
    message?: MessageType
    empty: EmptyType
    confirmation?: string
    loadingMessage: string
    isLoading?: boolean
    searchValue?: string
    onClickBack?: () => void
    onSearchValueChange?: (value: string) => void
    extraAction?:
        | ExtraActionButton
        | ExtraActionLink
        | ExtraActionCheckbox
        | undefined
}) {
    const selectedItems =
        variant.type === SelectionVariant.Multiple
            ? variant.selected
            : [variant.selected]

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
            variant.onChange({ selected: newSelectedItems })
        } else {
            variant.onChange({ selected: item })
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
                    onSearchValueChange={(e) =>
                        onSearchValueChange &&
                        onSearchValueChange(e.target.value)
                    }
                    onSearchValueClear={() =>
                        onSearchValueChange && onSearchValueChange('')
                    }
                    searchValue={searchValue}
                    description={description}
                    searchPlaceholder={searchPlaceholder}
                    subtleLoading={items.length > 0 && isLoading}
                    modal={modal}
                    onKeyDown={() => alert('test')}
                    onClickBack={onClickBack}
                    showClearIcon={
                        variant.type === SelectionVariant.Multiple &&
                        selectedItems.length > 0
                    }
                    onClickClear={() => {
                        if (variant.type === SelectionVariant.Multiple) {
                            variant.onChange({ selected: [] })
                        }
                    }}
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
