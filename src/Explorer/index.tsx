import { useControls, folder } from 'leva'
import React, { useState } from 'react'
import { Box } from '@primer/react'

import SelectPanel from './SelectPanel'

import {
    SelectionVariant,
    DialogSize,
    ExtraActionType,
    Message,
    MessageLevel,
    Item,
    ExtraActionButton,
    ExtraActionLink,
    ExtraActionCheckbox,
} from './SelectPanel/types'

import { defaultSelectedItems, defaultItems } from './data'

function Explorer() {
    const [searchValue, setSearchValue] = useState('')
    const [selectedItems, setSelectedItems] = useState(defaultSelectedItems)

    const filteredItems = searchValue
        ? defaultItems.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
        : defaultItems

    const {
        title,
        description,
        selection_type,
        modal,
        declaritive,
        declaritive_loading,
        back_button,
        search_enabled,
        loading_enabled,
        loading_title,
        message_enabled,
        message_description,
        message_title,
        message_level,
        empty_title,
        noItems,
        confirmation,
        empty_description,
        extra_action_title,
        extra_action_enabled,
        extra_action_type,
        extra_action_checked,
        size,
    } = useControls({
        title: 'Select authors',
        description: '',
        confirmation: 'Save',
        modal: false,
        noItems: false,
        search_enabled: true,
        size: {
            options: {
                small: DialogSize.Small,
                medium: DialogSize.Medium,
                portrait: DialogSize.Portrait,
                large: DialogSize.Large,
                xlarge: DialogSize.XLarge,
            },
        },
        declaritive: {
            value: true,
            render: (get) => get('modal') === false,
        },
        declaritive_loading: {
            value: false,
            render: (get) =>
                get('declaritive') === true || get('modal') === true,
        },
        back_button: false,
        selection_type: {
            options: {
                multiple: SelectionVariant.Multiple,
                single: SelectionVariant.Single,
            },
        },
        empty: folder(
            {
                empty_title: `No actors found for your search term`,
                empty_description: 'Try a different search term',
            },
            { collapsed: true }
        ),
        message: folder(
            {
                message_title: `We couldn't load the authors`,
                message_description:
                    'Try again or if the problem persists contact support',
                message_enabled: false,
                message_level: {
                    options: {
                        warning: MessageLevel.Warning,
                        error: MessageLevel.Error,
                    },
                },
            },
            { collapsed: true }
        ),
        loading: folder(
            {
                loading_enabled: false,
                loading_title: 'Fetching authors',
            },
            { collapsed: true }
        ),
        extra_action: folder(
            {
                extra_action_enabled: true,
                extra_action_type: {
                    options: {
                        button: ExtraActionType.Button,
                        link: ExtraActionType.Link,
                        checkbox: ExtraActionType.Checkbox,
                    },
                },
                extra_action_title: `View authors`,
                extra_action_checked: {
                    value: true,
                    render: (get) =>
                        get('extra_action.extra_action_type') === 'checkbox',
                },
            },
            { collapsed: true }
        ),
    })
    const onChangeSingle = ({ selected }: { selected: Item }) =>
        setSelectedItems([selected])
    const onChangeMultiple = ({ selected }: { selected: Item[] }) =>
        setSelectedItems(selected)
    const onClickBack = () => alert('click back')
    const onClickExtraAction = () => alert('click extra action')
    const onClickCheckbox = (event: React.ChangeEvent<HTMLInputElement>) =>
        alert(`clicked checkbox ${event}`)
    const onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
        setSearchValue(e.target.value)

    const message: Message = {
        title: message_title,
        description: message_description,
        level: message_level,
    }

    const extraActionButton: ExtraActionButton = {
        text: extra_action_title,
        onClick: onClickExtraAction,
        type: ExtraActionType.Button,
    }

    const extraActionCheckbox: ExtraActionCheckbox = {
        text: extra_action_title,
        checked: extra_action_checked,
        onChange: onClickCheckbox,
        type: ExtraActionType.Checkbox,
    }

    const extraActionLink: ExtraActionLink = {
        text: extra_action_title,
        onClick: onClickExtraAction,
        type: ExtraActionType.Link,
    }

    let action = undefined

    switch (extra_action_type) {
        case ExtraActionType.Checkbox:
            action = extraActionCheckbox
            break
        case ExtraActionType.Button:
            action = extraActionButton
            break
        default:
            action = extraActionLink
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bg: 'canvas.subtle',
                width: '100%',
                height: '100vh',
            }}
        >
            <SelectPanel
                title={title}
                description={description}
                variant={
                    selection_type === SelectionVariant.Single
                        ? {
                              type: SelectionVariant.Single,
                              selected: selectedItems[0],
                              onChange: onChangeSingle,
                          }
                        : {
                              type: SelectionVariant.Multiple,
                              selected: selectedItems,
                              onChange: onChangeMultiple,
                          }
                }
                modal={modal}
                declaritive={declaritive}
                declaritiveIsLoading={declaritive_loading}
                message={message_enabled ? message : undefined}
                empty={{
                    title: empty_title,
                    description: empty_description,
                }}
                extraAction={extra_action_enabled ? action : undefined}
                size={size}
                items={noItems ? [] : filteredItems}
                onClickBack={back_button ? onClickBack : undefined}
                onSearchValueChange={
                    search_enabled ? onSearchValueChange : undefined
                }
                confirmation={confirmation}
                onSearchValueClear={() => setSearchValue('')}
                searchValue={searchValue}
                loadingMessage={loading_title}
                isLoading={loading_enabled}
            />
        </Box>
    )
}

export default Explorer
