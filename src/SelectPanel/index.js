import { useState } from 'react'

import Header from './Header.tsx'
import Footer from './Footer.tsx'
import List from './List.tsx'
import Loading from './Loading.tsx'
import Notice from './Notice.tsx'
import SubtleNotice from './SubtleNotice.tsx'

import TemporaryDialog from './TemporaryDialog.tsx'

function SelectPanel({
    type = 'single',
    title,
    modal = false,
    onSearchValueChange,
    onSearchValueClear,
    description,
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
}) {
    const [selectedItems, setSelectedItems] = useState(initialSelectedItems)

    const onSelect = ({ item, selected }) => {
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
                type="error"
            />
        )
    } else if (warning) {
        notice = (
            <Notice
                title={warning.title}
                description={warning.description}
                type="warning"
            />
        )
    } else if (items.length === 0) {
        notice = (
            <Notice
                title={empty.title}
                description={empty.description}
                type="empty"
            />
        )
    }

    let subtleNotice = null
    if (subtleError) {
        subtleNotice = <SubtleNotice message={subtleError} type="error" />
    } else if (subtleWarning) {
        subtleNotice = <SubtleNotice message={subtleWarning} type="warning" />
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
