import { useState } from 'react'
import { Box, Text, FormControl, Checkbox, CheckboxGroup } from '@primer/react'
import actionMenuImage from './images/actionmenu.png'

const Feature = {
    FocusableContent: 'focusable-content',
    Contextual: 'contextual',
    TriggerInGlobalNavigation: 'trigger-in-global-navigation',
    NoOuterRightTriggerLimitation: 'no-outer-right-trigger-limitation',
    Actionable: 'actionable',
    FormElements: 'form-elements',
    DeepLinking: 'deep-linking',
}

const featureInfo = {
    [Feature.FocusableContent]: {
        question: 'Content is focusable',
        description: 'Links and menu items are elements that require this.',
    },
    [Feature.Contextual]: {
        question: 'Provide extra context on the main content',
        description:
            'For example when providing insights for code you’re currently looking at.',
    },
    [Feature.TriggerInGlobalNavigation]: {
        question: 'Triggered through the global navigation',
        description:
            'Often used for the navigation or global tooling like Copilot',
    },
    [Feature.NoOuterRightTriggerLimitation]: {
        question: 'Trigger is not in the far right of the viewport',
        description:
            'For example non full width layouts won’t have triggers there',
    },
    [Feature.Actionable]: {
        question: 'User is expected to take action',
        description: 'This could be making a selection or',
    },
    [Feature.FormElements]: {
        question: 'Form elements',
        description: 'Includes inputs, checkboxes, radio buttons, sliders...',
    },
    [Feature.DeepLinking]: {
        question: 'Linkable from outside the platform',
        description:
            'For example linking from out help documentation, through Slack or through tutorials.',
    },
}

const components = [
    {
        id: 'hover-cards',
        name: 'Hover cards',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'tooltip',
        name: 'Tooltip',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'action-menu',
        name: 'Action Menu',
        image: actionMenuImage,
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'select-panel',
        name: 'Select panel',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'dialog',
        name: 'Dialog',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'Right sidesheet',
        name: 'Right sidesheet',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
        ],
    },
    {
        id: 'right-side-panel',
        name: 'Right sidepanel',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.DeepLinking,
            Feature.Contextual,
            Feature.Actionable,
        ],
    },
    {
        id: 'new-page',
        name: 'New page',
        description: `Vertical list of interactive actions or options. It's composed of items presented in a consistent.`,
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.FormElements,
            Feature.DeepLinking,
            Feature.Actionable,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
]

function Playground() {
    const [selection, setSelection] = useState({
        [Feature.FocusableContent]: false,
        [Feature.Contextual]: false,
        [Feature.TriggerInGlobalNavigation]: false,
        [Feature.NoOuterRightTriggerLimitation]: false,
        [Feature.Actionable]: false,
        [Feature.FormElements]: false,
        [Feature.DeepLinking]: false,
    })

    const features = Object.keys(selection).map((key) => {
        const value = selection[key]
        return (
            <FeatureToggle
                key={key}
                id={key}
                isOn={value}
                onChange={(newValue) => {
                    setSelection({ ...selection, [key]: newValue })
                }}
            />
        )
    })

    const possibleFeatures = Object.keys(selection).filter((key) => {
        return !!selection[key]
    })

    let compatibleComponents = []
    let inCompatibleComponents = []
    components.forEach(function (component) {
        let intersection = component.features.filter((x) =>
            possibleFeatures.includes(x)
        )
        if (intersection.length == possibleFeatures.length) {
            compatibleComponents.push(component)
        } else {
            inCompatibleComponents.push(component)
        }
    })

    return (
        <Box
            as="main"
            sx={{
                display: 'flex',
                p: 5,
                flexDirection: 'column',
                bg: '#FAFAFC',
                minHeight: '100vh',
            }}
        >
            <Text sx={{ fontSize: 7, pb: 4, fontWeight: 'bold' }}>
                Component picker
            </Text>
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Box sx={{ pr: 5 }}>
                    <Box sx={{ bg: '#F5F5F7', borderRadius: '30px', p: 5 }}>
                        <Text
                            as="h2"
                            sx={{ fontSize: 1, pb: 3, color: 'fg.subtle' }}
                        >
                            Checklist (requirements)
                        </Text>
                        <CheckboxGroup>{features}</CheckboxGroup>
                    </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: [
                                'repeat(1,1fr)',
                                'repeat(1,1fr)',
                                'repeat(1,1fr)',
                                'repeat(2,1fr)',
                                'repeat(3,1fr)',
                            ],
                            gap: 5,
                        }}
                    >
                        {compatibleComponents.map((c) => {
                            return <ComponentCard id={c.id} disabled={false} />
                        })}
                        {inCompatibleComponents.map((c) => {
                            return <ComponentCard id={c.id} disabled={true} />
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function ComponentCard({ id, disabled }) {
    const component = components.find((c) => c.id === id)
    return (
        <Box
            sx={{
                pb: '100%',
                position: 'relative',
                opacity: disabled ? 0.5 : 1,
                transition: 'all .2s ease-in-out',
                cursor: disabled ? 'default' : 'pointer',
                ':hover': {
                    transform: !disabled && 'scale(1.05)',
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bg: '#F5F5F7',
                    display: 'flex',
                    flexDirection: 'column',
                    pb: 6,
                    px: 6,
                    justifyContent: 'flex-end',
                    borderRadius: '30px',
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                {component.image && (
                    <Box
                        sx={{
                            display: 'flex',
                            overflow: 'hidden',
                            justifyContent: 'center',
                            flex: 1,
                        }}
                    >
                        <img src={component.image} />
                    </Box>
                )}

                <Text sx={{ fontSize: 2, pb: 2, fontWeight: 'semibold' }}>
                    {component.name}
                </Text>
                <Text
                    sx={{
                        fontSize: 1,
                        color: 'fg.muted',
                        fontWeight: 'light',
                    }}
                >
                    {component.description}
                </Text>
            </Box>
        </Box>
    )
}

function FeatureToggle({ id, isOn, onChange }) {
    const info = featureInfo[id]
    return (
        <Box display="flex" maxWidth="300px">
            <CheckboxGroup.Label>{info.question}</CheckboxGroup.Label>
            <FormControl>
                <Checkbox
                    value="one"
                    onChange={(e) => onChange(e.target.checked)}
                    checked={isOn}
                />
                <FormControl.Label>{info.question}</FormControl.Label>
            </FormControl>
        </Box>
    )
}

export default Playground
