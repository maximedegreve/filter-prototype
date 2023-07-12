import { useState } from 'react'
import { Box, Button, useColorSchemeVar, SegmentedControl } from '@primer/react'

function Fail({ data, onContinue }) {
    const [previewIsDo, setPreviewIsDo] = useState(true)

    const doImage = useColorSchemeVar(
        {
            light: data.step.image?.lightDo,
            dark: data.step.image?.darkDo,
        },
        data.step.image?.lightDo
    )

    const dontImage = useColorSchemeVar(
        {
            light: data.step.image?.lightDont,
            dark: data.step.image?.darkDont,
        },
        data.step.image?.lightDont
    )

    const image = previewIsDo ? doImage : dontImage

    return (
        <Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    bg: 'canvas.inset',
                    justifyContent: 'center',
                    position: 'relative',
                    alignItems: 'center',
                    height: 500,
                    borderRadius: '12px',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: 'border.subtle',
                }}
            >
                <img
                    src={image}
                    alt="to be added"
                    srcSet={`${image} 1x, ${image} 2x`}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 4,
                    }}
                >
                    <SegmentedControl
                        onChange={(selectedIndex) => {
                            setPreviewIsDo(selectedIndex === 0 ? true : false)
                        }}
                        aria-label="File view"
                    >
                        <SegmentedControl.Button selected={previewIsDo}>
                            Correct
                        </SegmentedControl.Button>
                        <SegmentedControl.Button selected={!previewIsDo}>
                            Incorrect
                        </SegmentedControl.Button>
                    </SegmentedControl>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    pt: 3,
                }}
            >
                <Box
                    sx={{
                        fontSize: 0,
                        color: 'attention.fg',
                        textAlign: 'left',
                        pr: 4,
                    }}
                >
                    Sadly this answer is incorrect. {data.step.explanation}
                </Box>
                <Button onClick={onContinue}>Continue</Button>
            </Box>
        </Box>
    )
}

export default Fail
