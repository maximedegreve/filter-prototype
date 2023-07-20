import { useControls, folder } from 'leva'
import { useState } from 'react'
import { Box, Avatar } from '@primer/react'

import SelectPanel from './SelectPanel'

const defaultSelectedItems = [
    {
        id: 3,
        text: 'max',
        description: 'Max Schoening',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/111631?s=80&v=4" />
        ),
    },
    {
        id: 4,
        text: 'jonrohan',
        description: 'Jon Rohan',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/54012?s=60&v=4" />
        ),
    },
]
const defaultItems = [
    {
        id: 3,
        text: 'max',
        description: 'Max Schoening',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/111631?s=80&v=4" />
        ),
    },
    {
        id: 4,
        text: 'jonrohan',
        description: 'Jon Rohan',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/54012?s=60&v=4" />
        ),
    },
    {
        id: 5,
        text: 'howdyray',
        description: 'Rachel Cohen',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/3454298?s=80&v=4" />
        ),
    },
    {
        id: 6,
        text: 'tbenning',
        description: 'Tyler Benning',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/7265547?s=80&v=4" />
        ),
    },
    {
        id: 7,
        text: 'cheshire137',
        description: 'Sarah Vessels',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/82317?s=60&v=4" />
        ),
    },
    {
        id: 8,
        text: 'technoweenie',
        description: 'technoweenie',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/21?s=60&v=4" />
        ),
    },
    {
        id: 9,
        text: 'tobiasahlin',
        description: 'Tobias Ahlin',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/211284?s=60&v=4" />
        ),
    },
    {
        id: 10,
        text: 'dgraham',
        description: 'David Graham',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/122102?s=60&v=4" />
        ),
    },
    {
        id: 11,
        text: 'mdo',
        description: 'Mark Otto',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/98681?s=60&v=4" />
        ),
    },
    {
        id: 12,
        text: 'tclem',
        description: 'Timothy Clem',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/136521?s=60&v=4" />
        ),
    },
    {
        id: 13,
        text: 'oreoshake',
        description: 'Neil Matatall',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/448516?s=60&v=4" />
        ),
    },
    {
        id: 14,
        text: 'latentflip',
        description: 'Philip Roberts',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/78225?s=60&v=4" />
        ),
    },
    {
        id: 15,
        text: 'koddsson',
        description: 'Kristján Oddsson',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/318208?s=60&v=4" />
        ),
    },
    {
        id: 16,
        text: 'shayfrendt',
        description: 'Shay Frendt',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/32535?s=60&v=4" />
        ),
    },
    {
        id: 17,
        text: 'dmarcey',
        description: 'Derrick Marcey',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/5487287?s=60&v=4" />
        ),
    },
    {
        id: 18,
        text: 'benbalter',
        description: 'Ben Balter',
        descriptionVariant: 'inline',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/282759?s=60&v=4" />
        ),
    },
]

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
    } = useControls({
        title: 'Select authors',
        description: '',
        modal: false,
        declaritive: {
            value: true,
            render: (get) => get('modal') == false,
        },
        back_button: false,
        selection_type: {
            options: { multiple: 'multiple', single: 'single' },
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
                    options: { button: 'button', link: 'link' },
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

    const onClickBack = (e) => alert('click back')
    const onClickExtraAction = (e) => alert('click extra action')

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bg: 'canvas.default',
                width: '100%',
                height: '100vh',
            }}
        >
            <SelectPanel
                title={title}
                description={description}
                type={selection_type}
                modal={modal}
                onSelect={(e) => {
                    console.log(e)
                }}
                subtleLoading={loading_subtle}
                declaritive={declaritive}
                subtleError={error_enabled_subtle && error_message_subtle}
                subtleWarning={warning_enabled_subtle && warning_message_subtle}
                error={
                    error_enabled && {
                        title: error_title,
                        description: error_description,
                    }
                }
                warning={
                    warning_enabled && {
                        title: warning_title,
                        description: warning_description,
                    }
                }
                empty={{
                    title: empty_title,
                    description: empty_description,
                }}
                extraAction={
                    extra_action_enabled && {
                        title: extra_action_title,
                        onClick: onClickExtraAction,
                        type: extra_action_type,
                    }
                }
                initialSelectedItems={defaultSelectedItems}
                items={filteredItems}
                onClickBack={back_button && onClickBack}
                onSearchValueChange={(e) => setSearchValue(e.target.value)}
                onSearchValueClear={() => setSearchValue('')}
                searchValue={searchValue}
                loading={loading_enabled && loading_title}
            />
        </Box>
    )
}

export default Explorer
