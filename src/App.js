import { ThemeProvider, BaseStyles } from '@primer/react'
import { useState } from 'react'
import { Avatar } from '@primer/react'

import Playground from './Playground'
import SelectPanel from './SelectPanel'

const defaultSelectedItems = [
    {
        id: 3,
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
        trailingVisual: 'Default',
    },
    {
        id: 4,
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
]
const defaultItems = [
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

function App() {
    const [searchValue, setSearchValue] = useState('')
    const [selectedItems, setSelectedItems] = useState(defaultSelectedItems)
    const [items, setItems] = useState(defaultItems)

    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <SelectPanel
                    title="Select labels"
                    type="multiple"
                    modal={false}
                    onSelect={(e) => {
                        console.log(e)
                    }}
                    declaritive={true}
                    subtleWarning={
                        <>
                            We couldn't load the authors. Try again or if the
                            problem persists{' '}
                            <a href="mailto:hello@github.com">
                                contact support
                            </a>
                            .
                        </>
                    }
                    selectedItems={selectedItems}
                    items={items}
                    onClickBack={(e) => alert('click back')}
                    onSearchValueChange={(e) => setSearchValue(e.target.value)}
                    onSearchValueClear={() => setSearchValue('')}
                    searchValue={searchValue}
                />
                <Playground />
            </BaseStyles>
        </ThemeProvider>
    )
}
// loading="Fetching users..."
/*
error={{
    title: `We couldn’t load the authors`,
    description: (
        <>
            Try again or if the problem persists{' '}
            <a href="mailto:hello@github.com">
                contact support
            </a>
            .
        </>
    ),
}}
*/

export default App
