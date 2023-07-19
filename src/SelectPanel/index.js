import { useState } from 'react'

import Header from './Header.js'
import Footer from './Footer.js'
import List from './List.js'
import Loading from './Loading.js'
import Notice from './Notice.js'
import SubtleNotice from './SubtleNotice.js'

import TemporaryDialog from './TemporaryDialog.js'

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
    items,
    initialSelectedItems,
    loading,
    onClickBack,
    onSelectionChange,
    declaritive,
    width = 360,
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
    }

    let subtleNotice = null
    if (subtleError) {
        subtleNotice = <SubtleNotice message={subtleError} type="error" />
    } else if (subtleWarning) {
        subtleNotice = <SubtleNotice message={subtleWarning} type="warning" />
    }

    return (
        <TemporaryDialog modal={modal} width={width}>
            <Header
                title={title}
                onSearchValueChange={onSearchValueChange}
                onSearchValueClear={onSearchValueClear}
                searchValue={searchValue}
                description={description}
                searchPlaceholder={searchPlaceholder}
                subtleLoading={subtleLoading}
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
                    <Footer declaritive={declaritive} modal={modal} />
                </>
            )}
        </TemporaryDialog>
    )
}

export default SelectPanel
