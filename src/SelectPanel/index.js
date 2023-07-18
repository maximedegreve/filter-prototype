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
    selectedItems,
    loading,
    onClickBack,
    declaritive,
    width = 360,
}) {
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
                bordered={error || warning || (!subtleError && !subtleWarning)}
            />
            {spinner || notice || (
                <>
                    {subtleNotice}
                    <List
                        items={items}
                        selectedItems={selectedItems}
                        type={type}
                    />
                    <Footer declaritive={declaritive} modal={modal} />
                </>
            )}
        </TemporaryDialog>
    )
}

export default SelectPanel
