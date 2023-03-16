import { useState } from 'react'
import {
    Box,
    Button,
    StyledOcticon,
    ActionList,
    FormControl,
    CheckboxGroup,
    Checkbox,
} from '@primer/react'
import {
    XIcon,
    TagIcon,
    PeopleIcon,
    SearchIcon,
    ArrowLeftIcon,
} from '@primer/octicons-react'

const labelsData = ['Bug', 'Feature', 'Backlog']

const data = [
    {
        title: 'Fix suggestions showing double',
        labels: ['Bug'],
        author: 'maximedegreve',
    },
    {
        title: 'Hide footers on the full height search pages',
        labels: ['Bug'],
        author: 'maximedegreve',
    },
    {
        title: 'Fix placeholder',
        labels: ['Bug'],
        author: 'maximedegreve',
    },
    {
        title: 'Search: New illustration',
        labels: ['Feature'],
        author: 'maximedegreve',
    },
    {
        title: 'Search: Fix accessibility issues',
        labels: ['Bug'],
        author: 'maximedegreve',
    },
]

function Playground() {
    const [selectedLabels, setSelectedLabels] = useState([])
    //const [selectedAuthors, setSelectedAuthors] = useState([])

    const filteredData = data.filter((item) => {
        if (selectedLabels.length === 0) {
            return true
        }
        return item.labels.some((r) => selectedLabels.includes(r))
    })

    console.log('RERENDER')

    return (
        <Box
            as="main"
            sx={{ p: 5, button: { border: 'none', background: 'transparent' } }}
        >
            <Box aria-live="assertive" aria-atomic="true">
                <h1 tabindex="0">{filteredData.length} results</h1>
            </Box>

            <Popover id="filter-by">
                <Header>
                    <Box display="flex">
                        <Box
                            display="flex"
                            px={2}
                            py="6px"
                            flexDirection="column"
                            flexGrow={1}
                        >
                            <Title as="h2">Filter by</Title>
                        </Box>

                        <CloseButton id="filter-by" />
                    </Box>
                </Header>

                <ActionList
                    sx={{
                        button: {
                            textAlign: 'left',
                            width: '100%',
                        },
                    }}
                >
                    <button popovertoggletarget="filter-by-label">
                        <ActionList.Item>
                            <ActionList.LeadingVisual>
                                <TagIcon />
                            </ActionList.LeadingVisual>
                            Labels
                        </ActionList.Item>
                    </button>
                    <ActionList.Item>
                        <ActionList.LeadingVisual>
                            <PeopleIcon />
                        </ActionList.LeadingVisual>
                        Authors
                    </ActionList.Item>
                </ActionList>
            </Popover>
            <LabelsPopover
                id="filter-by-label"
                parentId="filter-by"
                selectedLabels={selectedLabels}
                onSelectionChange={(e) => {
                    if (e.target.checked) {
                        var newLabels = [...selectedLabels]
                        newLabels.push(e.target.value)
                        console.log(newLabels)
                        setSelectedLabels(newLabels)
                    } else {
                        const withoutChecked = selectedLabels.filter(
                            (v) => v !== e.target.value
                        )
                        setSelectedLabels(withoutChecked)
                    }
                }}
            />
            <button popovertoggletarget="filter-by">
                <Button as="div">Filter</Button>
            </button>

            <ul>
                {filteredData.map((d) => {
                    return (
                        <li tabindex="0">
                            <h2>{d.title}</h2>
                            <div>by {d.author}</div>
                            <div>{d.labels.map((l) => l)}</div>
                        </li>
                    )
                })}
            </ul>
        </Box>
    )
}

function LabelsPopover({ id, parentId, selectedLabels, onSelectionChange }) {
    const [search, setSearch] = useState('')

    const totalResults = labelsData.filter((label) => {
        label.toLowerCase().includes(search.toLowerCase())
    }).length

    return (
        <Popover id={id}>
            <Header>
                <Box display="flex" sx={{ mb: 2 }}>
                    <BackButton id={id} />
                    <Box
                        display="flex"
                        px={2}
                        py="6px"
                        flexDirection="column"
                        flexGrow={1}
                    >
                        <Title as="h3">Filter by labels</Title>
                    </Box>

                    <CloseButton id={parentId} />
                </Box>

                <ul class="selected-options" id="combo3-selected"></ul>
                <FormControl>
                    <FormControl.Label visuallyHidden>
                        Search labels
                    </FormControl.Label>
                    <input
                        name="search-label"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                        role="combobox"
                        leadingVisual={SearchIcon}
                        aria-activedescendant=""
                        aria-autocomplete="none"
                        aria-controls="listbox3"
                        aria-expanded="false"
                        aria-haspopup="listbox"
                        placeholder="Search labels"
                    />
                </FormControl>
            </Header>
            {search !== '' && (
                <Box
                    sx={{
                        position: 'absolute',
                        left: -100000,
                        width: 1,
                        height: 1,
                        overflow: 'hidden',
                    }}
                    aria-live="assertive"
                    aria-atomic="true"
                >
                    Showing {totalResults} results for "{search}"
                </Box>
            )}

            <Box sx={{ p: 3 }} role="listbox" id="listbox3">
                <CheckboxGroup>
                    <CheckboxGroup.Label visuallyHidden>
                        Checkboxes
                    </CheckboxGroup.Label>

                    {labelsData.map((f) => {
                        return (
                            <FormControl
                                sx={{
                                    display: f
                                        .toLowerCase()
                                        .includes(search.toLowerCase())
                                        ? 'flex'
                                        : 'none',
                                }}
                            >
                                <Checkbox
                                    value={f}
                                    checked={selectedLabels.includes(f)}
                                    onChange={onSelectionChange}
                                />
                                <FormControl.Label>{f}</FormControl.Label>
                            </FormControl>
                        )
                    })}
                </CheckboxGroup>
            </Box>
        </Popover>
    )
}

function Popover({ id, children, trigger, ...rest }) {
    return (
        <Box
            sx={{
                '[popover]': {
                    borderWidth: 1,
                    borderRadius: 2,
                    maxHeight: 459,
                    position: 'fixed',
                    mt: 120,
                    ml: 34,
                    width: 320,
                    boxShadow: 'shadow.small',
                    borderColor: 'border.subtle',
                },
            }}
        >
            <div id={id} popover="auto">
                <Box {...rest}>{children}</Box>
            </div>
        </Box>
    )
}

const Header = ({ children }) => {
    return (
        <Box sx={{ boxShadow: 'shadow.small', p: 2, zIndex: 1, flexShrink: 0 }}>
            {children}
        </Box>
    )
}

const Title = ({ children, as }) => {
    return (
        <Box as={as} sx={{ fontSize: 1, fontWeight: 'bold', margin: 0 }}>
            {children}
        </Box>
    )
}

const CloseButton = ({ id }) => {
    return (
        <button popoverhidetarget={id} aria-label="Close">
            <Button
                as="div"
                sx={{
                    borderRadius: 2,
                    background: 'transparent',
                    border: 0,
                    verticalAlign: 'middle',
                    color: 'fg.muted',
                    p: 2,
                    alignSelf: 'flex-start',
                    lineHeight: 'normal',
                    boxShadow: 'none',
                }}
            >
                <StyledOcticon icon={XIcon} />
            </Button>
        </button>
    )
}

const BackButton = ({ id }) => {
    return (
        <button popoverhidetarget={id} aria-label="Back">
            <Button
                as="div"
                sx={{
                    borderRadius: 2,
                    background: 'transparent',
                    border: 0,
                    verticalAlign: 'middle',
                    color: 'fg.muted',
                    p: 2,
                    alignSelf: 'flex-start',
                    lineHeight: 'normal',
                    boxShadow: 'none',
                }}
            >
                <StyledOcticon icon={ArrowLeftIcon} />
            </Button>
        </button>
    )
}

export default Playground
