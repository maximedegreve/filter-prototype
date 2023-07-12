import {
    Box,
    Button,
    useColorSchemeVar,
    ProgressBar,
    Label,
} from '@primer/react'
import { VIEW_HEIGHT } from './constants'
import { AlertIcon } from '@primer/octicons-react'

function Fail({ data, onContinue, total, current }) {
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

    const left = total - current

    return (
        <Box sx={{ minHeight: VIEW_HEIGHT }}>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 1 }}
            >
                <Box
                    sx={{
                        bg: 'danger.subtle',
                        minHeight: 46,
                        borderRadius: 23,
                        display: 'flex',
                        fontSize: 1,
                        alignItems: 'center',
                        pl: 3,
                        pr: '12px',
                        color: 'danger.fg',
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'danger.muted',
                    }}
                >
                    <Box sx={{ display: 'flex', mr: 2 }}>
                        <AlertIcon />
                    </Box>
                    Oh no! You've picked the incorrect application of{' '}
                    {data.step.component}
                    <Button
                        onClick={onContinue}
                        sx={{ ml: 3, borderRadius: 20 }}
                        size="small"
                        variant="danger"
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: ['auto', 'auto', 'auto', 'auto auto'],
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
                        borderColor: 'border.subtle',
                    }}
                >
                    <Box sx={{ position: 'absolute', left: 3, top: 3 }}>
                        <LabelLeft />
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
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'border.subtle',
                    }}
                >
                    <Box sx={{ position: 'absolute', left: 3, top: 3 }}>
                        <LabelRight />
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

export default Fail
