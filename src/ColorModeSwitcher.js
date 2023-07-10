import { useTheme, ActionMenu, ActionList, Box, Octicon } from '@primer/react'
import { SunIcon, MoonIcon } from '@primer/octicons-react'

function ColorModeSwitcher() {
    const { setDayScheme, setNightScheme, colorScheme } = useTheme()

    const setScheme = (schemeValue) => {
        setDayScheme(schemeValue)
        setNightScheme(schemeValue)
    }

    const schemes = [
        {
            name: 'Light',
            value: 'light',
            icon: SunIcon,
        },
        {
            name: 'Dark',
            value: 'dark',
            icon: MoonIcon,
        },
    ]

    const current = schemes.find((scheme) => scheme.value === colorScheme)

    return (
        <Box position="relative" display="flex" justifyContent="flex-end">
            <ActionMenu>
                <ActionMenu.Button>
                    <current.icon />
                    <Box display="inline-block" ml={2}>
                        {' '}
                        {current.name}
                    </Box>
                </ActionMenu.Button>
                <ActionMenu.Overlay align="right">
                    <ActionList showDividers>
                        <ActionList.Group selectionVariant="single">
                            {schemes.map((scheme) => (
                                <ActionList.Item
                                    key={scheme.value}
                                    href="#"
                                    selected={scheme.value === colorScheme}
                                    onSelect={() => setScheme(scheme.value)}
                                >
                                    <ActionList.LeadingVisual>
                                        <Octicon icon={scheme.icon} size={16} />
                                    </ActionList.LeadingVisual>
                                    {scheme.name}
                                </ActionList.Item>
                            ))}
                        </ActionList.Group>
                    </ActionList>
                </ActionMenu.Overlay>
            </ActionMenu>
        </Box>
    )
}

export default ColorModeSwitcher
