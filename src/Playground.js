import { useState } from 'react'
import {
    Box,
    Button,
    StyledOcticon,
    ActionList,
    TextInput,
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

function Playground() {
    const [totalResults, setTotalResults] = useState(100)
    return (
        <Box
            as="main"
            sx={{ p: 5, button: { border: 'none', background: 'transparent' } }}
        >
            <h1>{totalResults} results</h1>

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

            <LabelsPopover id="filter-by-label" parentId="filter-by" />

            <button popovertoggletarget="filter-by">
                <Button as="div">Filter</Button>
            </button>
        </Box>
    )
}

function LabelsPopover({ id, parentId }) {
    const data = ['Bug', 'Feature', 'Backlog']
    const [search, setSearch] = useState('')

    const filtered = data.filter((label) =>
        label.toLowerCase().includes(search.toLowerCase())
    )
    return (
        <Popover id={id}>
            <Header>
                <Box display="flex">
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

                <FormControl>
                    <FormControl.Label visuallyHidden>
                        Filter Person
                    </FormControl.Label>
                    <TextInput
                        name="search-label"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        block
                        leadingVisual={SearchIcon}
                        aria-label="Search labels"
                        placeholder="Search"
                    />
                </FormControl>
            </Header>
            <Box sx={{ p: 3 }} role="region" aria-live="polite">
                <span
                    id="checkboxes-d57a2367-count"
                    class="app-c-option-select__count govuk-visually-hidden"
                    aria-live="polite"
                    data-single="option found"
                    data-multiple="options found"
                    data-selected="selected"
                ></span>

                <fieldset class="govuk-fieldset">
                    {filtered.map((f) => {
                        return (
                            <li key={f}>
                                <input
                                    type="checkbox"
                                    name="people[]"
                                    value={f}
                                />
                                <label for={f}>{f}</label>
                            </li>
                        )
                    })}
                </fieldset>
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
