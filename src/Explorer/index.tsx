import { useControls, folder } from 'leva'
import { useState } from 'react'
import { Box } from '@primer/react'

import SelectPanel from './SelectPanel'

import {
    SelectionVariant,
    DialogSize,
    ExtraActionType,
} from './SelectPanel/types'

import { defaultSelectedItems, defaultItems } from './data'

function Explorer() {
    const [searchValue, setSearchValue] = useState('')
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
        back_button,
        loading_enabled,
        loading_title,
        loading_subtle,
        error_enabled,
        error_description,
        error_title,
        error_message_subtle,
        error_enabled_subtle,
        warning_title,
        warning_description,
        warning_enabled,
        warning_message_subtle,
        warning_enabled_subtle,
        empty_title,
        empty_description,
        extra_action_title,
        extra_action_enabled,
        extra_action_type,
        size,
    } = useControls({
        title: 'Select authors',
        description: '',
        modal: false,
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
        back_button: false,
        selection_type: {
            options: {
                multiple: SelectionVariant.Multiple,
                single: SelectionVariant.Single,
            },
        },
        loading_subtle: false,
        empty: folder(
            {
                empty_title: `No actors found for your search term`,
                empty_description: 'Try a different search term',
            },
            { collapsed: true }
        ),
        extra_action: folder(
            {
                extra_action_title: `View authors`,
                extra_action_enabled: true,
                extra_action_type: {
                    options: {
                        button: ExtraActionType.Button,
                        link: ExtraActionType.Link,
                    },
                },
            },
            { collapsed: true }
        ),
        error: folder(
            {
                error_title: `We couldn't load the authors`,
                error_description:
                    'Try again or if the problem persists contact support',
                error_enabled: false,
            },
            { collapsed: true }
        ),
        warning: folder(
            {
                warning_title: `We couldn't load the authors`,
                warning_description:
                    'Try again or if the problem persists contact support',
                warning_enabled: false,
            },
            { collapsed: true }
        ),
        warning_subtle: folder(
            {
                warning_message_subtle: `We couldn't load the authors. Try again or if the
            problem persists contact support.`,
                warning_enabled_subtle: false,
            },
            { collapsed: true }
        ),
        error_subtle: folder(
            {
                error_message_subtle: `We couldn't load the authors. Try again or if the
            problem persists contact support.`,
                error_enabled_subtle: false,
            },
            { collapsed: true }
        ),
        loading: folder(
            {
                loading_enabled: false,
                loading_title: 'Fetching users...',
            },
            { collapsed: true }
        ),
    })

    const onClickBack = () => alert('click back')
    const onClickExtraAction = () => alert('click extra action')

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
                type={selection_type}
                modal={modal}
                declaritive={declaritive}
                extraAction={
                    extra_action_enabled
                        ? {
                              text: extra_action_title,
                              onClick: onClickExtraAction,
                              type: extra_action_type,
                          }
                        : undefined
                }
                message={
                    error_enabled
                        ? {
                              title: error_title,
                              description: error_description,
                              level: 'error',
                          }
                        : undefined
                }
                empty={{
                    title: empty_title,
                    description: empty_description,
                }}
                size={size}
                initialSelectedItems={defaultSelectedItems}
                items={filteredItems}
                onClickBack={back_button ? onClickBack : undefined}
                onSearchValueChange={(e) => setSearchValue(e.target.value)}
                onSearchValueClear={() => setSearchValue('')}
                searchValue={searchValue}
                loadingMessage={loading_title}
                isLoading={loading_enabled}
            />
        </Box>
    )
}

export default Explorer
