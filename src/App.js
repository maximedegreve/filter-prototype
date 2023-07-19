import { ThemeProvider, BaseStyles } from '@primer/react'
import { useState } from 'react'
import { Avatar } from '@primer/react'

import Playground from './Playground'
import SelectPanel from './SelectPanel'

const defaultSelectedItems = [
    {
        id: 3,
        text: 'Max Schoening',
        description:
            'Assistant to the assistant regional branch manager @github.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/111631?s=80&v=4" />
        ),
    },
    {
        id: 4,
        text: 'Max Woolf',
        description: 'Data Scientist @buzzfeed. Plotter of pretty charts.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/2179708?s=80&v=4" />
        ),
    },
]
const defaultItems = [
    {
        id: 3,
        text: 'Max Schoening',
        description:
            'Assistant to the assistant regional branch manager @github.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/111631?s=80&v=4" />
        ),
    },
    {
        id: 4,
        text: 'Max Woolf',
        description: 'Data Scientist @buzzfeed. Plotter of pretty charts.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/2179708?s=80&v=4" />
        ),
    },
    {
        id: 5,
        text: 'Rachel Cohen',
        description:
            'Director of Design Infrastructure @github. Sucker for systems, scaling ops, and charcuterie plates 🧀 🍖 🍷.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/3454298?s=80&v=4" />
        ),
    },
    {
        id: 6,
        text: 'Tyler Benning',
        description: 'Im a designer that plays with code.',
        descriptionVariant: 'block',
        leadingVisual: (
            <Avatar src="https://avatars.githubusercontent.com/u/7265547?s=80&v=4" />
        ),
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
        leadingVisual: <Avatar src="https://github.com/mona.png" />,
    },
    {
        id: 12,
        text: 'Due Date',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
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
    const filteredItems = searchValue
        ? defaultItems.filter((item) =>
              item.text.toLowerCase().includes(searchValue.toLowerCase())
          )
        : defaultItems

    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <SelectPanel
                    title="Select authors"
                    type="multiple"
                    modal={false}
                    onSelect={(e) => {
                        console.log(e)
                    }}
                    declaritive={true}
                    subtleError={
                        <>
                            We couldn't load the authors. Try again or if the
                            problem persists{' '}
                            <a href="mailto:hello@github.com">
                                contact support
                            </a>
                            .
                        </>
                    }
                    empty={{
                        title: `No actors found for ‘${searchValue}’`,
                        description: 'Try a different search term',
                    }}
                    initialSelectedItems={defaultSelectedItems}
                    items={filteredItems}
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
// subtleLoading={true}
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
