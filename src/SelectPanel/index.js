import { useState } from 'react'
import { Avatar } from '@primer/react'

import Header from './Header.js'
import Footer from './Footer.js'
import List from './List.js'
import Notice from './Notice.js'
import TemporaryDialog from './TemporaryDialog.js'

const selectedItems = [
    {
        id: 3,
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 4,
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
]
const items = [
    {
        id: 3,
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 4,
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 5,
        text: 'Estimate',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 6,
        text: 'Due Date',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 7,
        text: 'Status',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 8,
        text: 'Stage',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 9,
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 10,
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 11,
        text: 'Estimate',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: false,
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 12,
        text: 'Due Date',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: false,
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 13,
        text: 'Status',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 14,
        text: 'Stage',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 15,
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 16,
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 17,
        text: 'Estimate',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 18,
        text: 'Due Date',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
]

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
    width = 400,
}) {
    let notice = null
    if (subtleError) {
        notice = <Notice message={subtleError} type="error" />
    } else if (subtleWarning) {
        notice = <Notice message={subtleWarning} type="warning" />
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
                onKeyDown={() => alert('test')}
                bordered={!subtleError && !subtleWarning}
            />
            {notice}
            <List items={items} selectedItems={selectedItems} type={type} />
            <Footer declaritveControlsEnabled={true} modal={modal} />
        </TemporaryDialog>
    )
}

export default SelectPanel
