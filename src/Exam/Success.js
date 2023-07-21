import {
    Box,
    Button,
    useColorSchemeVar,
    ProgressBar,
    Label,
} from '@primer/react'
import { VIEW_HEIGHT } from './constants'
import { RocketIcon } from '@primer/octicons-react'

function Success({ data, onContinue, total, current }) {
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

    const CorrectLabel = () => (
        <Label size="large" variant="success">
            Correct
        </Label>
    )

    const IncorrectLabel = () => (
        <Label size="large" variant="danger">
            Incorrect
        </Label>
    )

    const imageLeft = data.useCorrect ? doImage : dontImage
    const imageRight = data.useCorrect ? dontImage : doImage
    const LabelLeft = data.useCorrect ? CorrectLabel : IncorrectLabel
    const LabelRight = data.useCorrect ? IncorrectLabel : CorrectLabel
    const messageLeft = data.useCorrect ? data.step.do : data.step.dont
    const messageRight = data.useCorrect ? data.step.dont : data.step.do

    const left = total - current

    return (
        <Box sx={{ minHeight: VIEW_HEIGHT }}>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 1 }}
            >
                <Box
                    sx={{
                        bg: 'success.subtle',
                        minHeight: 46,
                        borderRadius: 23,
                        display: 'flex',
                        fontSize: 1,
                        alignItems: 'center',
                        pl: 3,
                        pr: '12px',
                        color: 'success.fg',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'success.muted',
                    }}
                >
                    <Box sx={{ display: 'flex', mr: 2 }}>
                        <RocketIcon />
                    </Box>
                    Congratulations! You've picked the correct application of{' '}
                    {data.step.component}
                    <Button
                        onClick={onContinue}
                        sx={{ ml: 3, borderRadius: 20 }}
                        size="small"
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr'],
                    gridGap: 3,
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        bg: 'canvas.default',
                        justifyContent: 'center',
                        position: 'relative',
                        alignItems: 'center',
                        height: 500,
                        borderRadius: '12px',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        overflow: 'hidden',
                        borderColor: 'border.subtle',
                    }}
                >
                    <Box sx={{ position: 'absolute', left: 3, top: 3 }}>
                        <LabelLeft />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bg: 'primer.canvas.backdrop',
                            left: 0,
                            bottom: 0,
                            right: 0,
                            p: 3,
                            fontSize: 0,
                            borderTopWidth: 1,
                            borderTopStyle: 'solid',
                            borderTopColor: 'border.subtle',
                        }}
                    >
                        {messageLeft}
                    </Box>
                    <img
                        src={imageLeft}
                        alt="to be added"
                        srcSet={`${imageLeft} 1x, ${imageLeft} 2x`}
                    />
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        bg: 'canvas.default',
                        justifyContent: 'center',
                        position: 'relative',
                        alignItems: 'center',
                        height: 500,
                        borderRadius: '12px',
                        overflow: 'hidden',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'border.subtle',
                    }}
                >
                    <Box sx={{ position: 'absolute', left: 3, top: 3 }}>
                        <LabelRight />
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bg: 'primer.canvas.backdrop',
                            left: 0,
                            bottom: 0,
                            right: 0,
                            p: 3,
                            fontSize: 0,
                            borderTopWidth: 1,
                            borderTopStyle: 'solid',
                            borderTopColor: 'border.subtle',
                        }}
                    >
                        {messageRight}
                    </Box>
                    <img
                        src={imageRight}
                        alt="to be added"
                        srcSet={`${imageRight} 1x, ${imageRight} 2x`}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    pt: 4,
                }}
            >
                <Box sx={{ flex: 1, px: 9, display: 'block' }}>
                    <ProgressBar progress={(current / total) * 100} />
                </Box>
                <Box
                    sx={{
                        fontSize: 0,
                        pt: 3,
                        color: 'fg.muted',
                        fontWeight: 'semibold',
                        textAlign: 'center',
                    }}
                >
                    {left} slides left to reveal your grade
                </Box>
            </Box>
        </Box>
    )
}

export default Success
