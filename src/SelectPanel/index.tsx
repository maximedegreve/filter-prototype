import { useState } from 'react'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import Loading from './Loading'
import Notice from './Notice'
import SubtleNotice from './SubtleNotice'

import TemporaryDialog from './TemporaryDialog'

import {
    SelectionType,
    ItemType,
    DialogSizeType,
    ExtraActionButtonType,
    ExtraActionLinkType,
    ExtraActionCheckboxType,
    NoticeType,
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
    subtleWarning,
    subtleError,
    subtleLoading,
    warning,
    error,
    empty,
    items,
    size,
    initialSelectedItems,
    loading,
    onClickBack,
    extraAction,
    declaritive,
}: {
    title: string
    description?: string
    modal: boolean
    type: SelectionType
    items: ItemType[]
    initialSelectedItems: ItemType[]
    size: DialogSizeType
    searchPlaceholder?: string
    declaritive: boolean
    searchValue?: string
    onClickBack?: () => void
    onSearchValueChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
    onSearchValueClear?: () => void
    extraAction:
        | ExtraActionButtonType
        | ExtraActionLinkType
        | ExtraActionCheckboxType
        | undefined
}) {
    const [selectedItems, setSelectedItems] = useState(initialSelectedItems)

    const onSelect = ({
        item,
        selected,
    }: {
        item: ItemType
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
    let spinner = null
    if (loading) {
        spinner = <Loading message={loading} />
    }

    let notice = null
    if (error) {
        notice = (
            <Notice
                title={error.title}
                description={error.description}
                type={NoticeType.Error}
            />
        )
    } else if (warning) {
        notice = (
            <Notice
                title={warning.title}
                description={warning.description}
                type={NoticeType.Warning}
            />
        )
    } else if (items.length === 0) {
        notice = (
            <Notice
                title={empty.title}
                description={empty.description}
                type={NoticeType.Empty}
            />
        )
    }

    let subtleNotice = null
    if (subtleError) {
        subtleNotice = (
            <SubtleNotice message={subtleError} type={NoticeType.Error} />
        )
    } else if (subtleWarning) {
        subtleNotice = (
            <SubtleNotice message={subtleWarning} type={NoticeType.Warning} />
        )
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
                subtleLoading={subtleLoading}
                modal={modal}
                onKeyDown={() => alert('test')}
                onClickBack={onClickBack}
                showClearIcon={selectedItems.length > 0}
                onClickClear={() => setSelectedItems([])}
                bordered={error || warning || (!subtleError && !subtleWarning)}
            />
            {spinner || notice || (
                <>
                    {subtleNotice}
                    <List
                        items={items}
                        selectedItems={selectedItems}
                        type={type}
                        onSelect={onSelect}
                    />
                </>
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
