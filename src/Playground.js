import { useState } from 'react'
import {
    Box,
    Button,
    StyledOcticon,
    ActionList,
    FormControl,
    Checkbox,
    CheckboxGroup,
} from '@primer/react'

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
        question: 'Hover cards',
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'tooltip',
        question: 'Tooltip',
        features: [
            Feature.Contextual,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'action-menu',
        question: 'Action Menu',
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
        question: 'Select panel',
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
        question: 'Dialog',
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
        question: 'Right sidesheet',
        features: [
            Feature.FocusableContent,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
        ],
    },
    {
        id: 'dialog',
        question: 'Dialog',
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.DeepLinking,
            Feature.Contextual,
            Feature.Actionable,
            Feature.TriggerInGlobalNavigation,
            Feature.NoOuterRightTriggerLimitation,
        ],
    },
    {
        id: 'Right side panel',
        question: 'Right sidepanel',
        features: [
            Feature.FormElements,
            Feature.FocusableContent,
            Feature.DeepLinking,
            Feature.Contextual,
            Feature.Actionable,
        ],
    },
]
function Playground() {
    const [selection, setSelection] = useState({
        [Feature.FocusableContent]: true,
        [Feature.Contextual]: true,
        [Feature.TriggerInGlobalNavigation]: true,
        [Feature.NoOuterRightTriggerLimitation]: true,
        [Feature.Actionable]: true,
        [Feature.FormElements]: true,
        [Feature.DeepLinking]: true,
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

    const compatibleComponents = components.filter((component) => {
        const matchesFeatures = component.features.every((id) => selection[id])
        return matchesFeatures
    })

    console.log(compatibleComponents)
    return (
        <main>
            <h1>Validate your component usage</h1>
            <Box>
                <CheckboxGroup>{features}</CheckboxGroup>
            </Box>

            <Box>
                <h2>Compatible components</h2>
                <Box></Box>
            </Box>
        </main>
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
