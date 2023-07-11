import { useState } from 'react'
import { Box, Text, Button, Checkbox, useColorSchemeVar } from '@primer/react'
import { CheckCircleIcon, CircleSlashIcon } from '@primer/octicons-react'

import components from './data/components'
import Feature from './data/feature'
import ColorModeSwitcher from './ColorModeSwitcher'

const featureInfo = {
    [Feature.FormElements]: {
        question: 'Includes form elements',
        description:
            'The triggered content that is about to appear includes various form elements such as inputs, buttons, and checkboxes.',
    },
    [Feature.DeepLinking]: {
        question: 'Should support deeplinking',
        description:
            'The triggered content needs to be linkable from help documentation, chat apps, social media or through tutorials.',
    },
    [Feature.FocusableContent]: {
        question: 'Elements need keyboard focus',
        description:
            'The triggered content has interactive elements that needs keyboard focus.',
    },
    [Feature.Contextual]: {
        question: 'Provides information related to the page content',
        description:
            'The triggered content helps users to understand the page content better.',
    },
    [Feature.TriggerInGlobalNavigation]: {
        question: 'Entry point is in the global navigation',
        description: 'The triggered content is part of the navigation.',
    },
    [Feature.NoOuterRightTriggerLimitation]: {
        question:
            'Entry point is not positioned in the far right of the viewport',
        description:
            'For example non full width layouts won’t have triggers there',
    },
}

function Playground() {
    const [selection, setSelection] = useState({
        [Feature.FormElements]: false,
        [Feature.DeepLinking]: false,
        [Feature.FocusableContent]: false,
        [Feature.Contextual]: false,
        [Feature.TriggerInGlobalNavigation]: false,
        [Feature.NoOuterRightTriggerLimitation]: false,
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
        if (intersection.length === possibleFeatures.length) {
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
                p: [4, 6, 7, 8],
                flexDirection: 'column',
                bg: 'canvas.inset',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    marginBottom: 7,
                    display: 'flex',
                    flexDirection: [
                        'column-reverse',
                        'column-reverse',
                        'column-reverse',
                        'row',
                    ],
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <Text
                        sx={{
                            fontSize: [4, 6, 6, 7],
                            fontWeight: 'semibold',
                            pb: 1,
                            mt: [5, 5, 5, 0],
                        }}
                    >
                        🪄 Component Whiz
                    </Text>
                    <Text
                        sx={{
                            fontSize: [1, 2, 2, 3],
                            fontWeight: 'light',
                            letterSpacing: 1.1,
                        }}
                    >
                        The secret potion to unlocking design/accessibility
                        excellence.{' '}
                        <Box
                            sx={{
                                display: [
                                    'inline',
                                    'inline',
                                    'inline',
                                    'block',
                                ],
                            }}
                        >
                            Make informed choices, ensuring that every component
                            you pick is a stroke of genius.
                        </Box>
                    </Text>
                </Box>
                <ColorModeSwitcher />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: ['column', 'column', 'column', 'row'],
                }}
            >
                <Box sx={{ pr: [0, 0, 0, 7] }}>
                    <Text
                        sx={{
                            fontSize: 1,
                            fontWeight: 'bold',
                            color: 'fg.muted',
                        }}
                    >
                        Checklist
                    </Text>
                    <Box
                        sx={{
                            display: 'grid',
                            width: 'max-content',
                            maxWidth: ['100%', '100%', '100%', 420],
                            gridTemplateColumns: 'auto',
                            gap: 4,
                            mt: 3,
                        }}
                    >
                        {features}
                    </Box>
                </Box>
                <Box sx={{ flex: 1 }}>
                    <Text
                        sx={{
                            fontSize: 1,
                            fontWeight: 'bold',
                            color: 'fg.muted',
                        }}
                    >
                        {compatibleComponents.length} components
                    </Text>
                    <Box
                        sx={{
                            display: 'inline-grid',
                            width: '100%',
                            gridAutoFlow: 'dense',
                            gridTemplateColumns:
                                'repeat(auto-fill, minmax(440px, 1fr))',
                            gap: 5,
                            mt: 3,
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

    const themeAwareImage = useColorSchemeVar(
        {
            light: component.image?.light2x,
            dark: component.image?.dark2x,
        },
        component.light
    )

    return (
        <Box
            sx={{
                pb: '100%',
                position: 'relative',
                opacity: disabled ? 0.5 : 1,
                transition: 'all .2s ease-in-out',
                ':hover': {
                    transform: !disabled && 'scale(1.05)',
                },
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    borderRadius: '12px',
                    borderWidth: 0.5,
                    borderStyle: 'solid',
                    borderColor: 'border.subtle',
                    bg: 'canvas.default',
                    boxShadow: 'shadow.small',
                    display: 'flex',
                    flexDirection: 'column',
                    pb: 6,
                    px: 6,
                    justifyContent: 'flex-end',
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        right: 4,
                        top: 4,
                        width: 24,
                        height: 24,
                        color: disabled ? 'danger.fg' : 'success.fg',
                    }}
                >
                    {disabled ? (
                        <CircleSlashIcon size={24} />
                    ) : (
                        <CheckCircleIcon size={24} />
                    )}
                </Box>
                {component.image && (
                    <Box
                        sx={{
                            position: 'relative',
                            flex: 1,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                left: 0,
                                right: 0,
                                bottom: 0,
                                img: {
                                    width: 340,
                                    height: 220,
                                    objectFit: 'contain',
                                },
                            }}
                        >
                            <img
                                src={themeAwareImage}
                                alt="to be added"
                                srcSet={`${themeAwareImage} 1x, ${themeAwareImage} 2x`}
                            />
                        </Box>
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
                        mb: 3,
                    }}
                >
                    {component.description}
                </Text>
                <Box>
                    <Button as="a" href={component.url}>
                        View documentation
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

function FeatureToggle({ id, isOn, onChange }) {
    const info = featureInfo[id]
    return (
        <Box
            as="label"
            sx={{
                display: 'grid',
                borderRadius: '12px',
                gridTemplateColumns: '30px 1fr',
                borderWidth: 0.5,
                borderStyle: 'solid',
                gridGap: 1,
                borderColor: 'border.subtle',
                bg: 'canvas.default',
                boxShadow: 'shadow.small',
                p: 4,
                cursor: 'pointer',
                transition: 'background .2s',
                ':hover': {
                    bg: 'canvas.subtle',
                },
            }}
        >
            <Box sx={{ mt: 1 }}>
                <Checkbox
                    value="one"
                    onChange={(e) => onChange(e.target.checked)}
                    checked={isOn}
                />
            </Box>
            <Box>
                <Text
                    sx={{
                        fontSize: 2,
                        fontWeight: 'semibold',
                    }}
                >
                    {info.question}
                </Text>

                <Text
                    sx={{
                        fontSize: 1,
                        color: 'fg.muted',
                        display: 'block',
                        fontWeight: 'light',
                    }}
                >
                    {info.description}
                </Text>
            </Box>
        </Box>
    )
}

export default Playground
