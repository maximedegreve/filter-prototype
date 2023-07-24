import { useControls, folder } from 'leva'
import { useState } from 'react'
import { Box } from '@primer/react'

import SelectPanel from './SelectPanel'

import {
    SelectionVariant,
    DialogSize,
    ExtraActionType,
    Message,
    MessageLevel,
    ExtraActionButton,
    ExtraActionLink,
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
        message_enabled,
        message_description,
        message_title,
        message_level,
        empty_title,
        noItems,
        empty_description,
        extra_action_title,
        extra_action_enabled,
        extra_action_type,
        size,
    } = useControls({
        title: 'Select authors',
        description: '',
        modal: false,
        noItems: false,
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
                loading_title: 'Fetching users...',
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
    })

    const onClickBack = () => alert('click back')
    const onClickExtraAction = () => alert('click extra action')

    const message: Message = {
        title: message_title,
        description: message_description,
        level: message_level,
    }

    const extraAction: ExtraActionButton = {
        text: extra_action_title,
        onClick: onClickExtraAction,
        type: ExtraActionType.Button,
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
                type={selection_type}
                modal={modal}
                declaritive={declaritive}
                message={message_enabled ? message : undefined}
                empty={{
                    title: empty_title,
                    description: empty_description,
                }}
                extraAction={extra_action_enabled ? extraAction : undefined}
                size={size}
                initialSelectedItems={defaultSelectedItems}
                items={noItems ? [] : filteredItems}
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
