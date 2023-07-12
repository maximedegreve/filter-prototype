import { useState } from 'react'
import { Box, useColorSchemeVar, ProgressBar } from '@primer/react'
import { VIEW_HEIGHT } from './constants'
import { TelescopeIcon } from '@primer/octicons-react'

import Fail from './Fail'

function Step({ data, onPass, onFail, current, total }) {
    const [isFailed, setIsFailed] = useState(false)

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

    const imageLeft = data.useCorrect ? doImage : dontImage
    const imageRight = data.useCorrect ? dontImage : doImage

    const setFailed = () => {
        setIsFailed(true)
    }

    if (isFailed) {
        return (
            <Fail
                data={data}
                current={current}
                total={total}
                onContinue={() => {
                    onFail()
                    setIsFailed(false)
                }}
            />
        )
    }
    const left = total - current
    return (
        <Box sx={{ minHeight: VIEW_HEIGHT }}>
            <Box
                sx={{ display: 'flex', justifyContent: 'center', mb: 3, mt: 1 }}
            >
                <Box
                    sx={{
                        bg: 'accent.subtle',
                        color: 'accent.fg',
                        py: 2,
                        borderRadius: 20,
                        fontSize: 1,
                        display: 'flex',
                        px: 3,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        alignItems: 'center',
                        borderColor: 'accent.muted',
                    }}
                >
                    <Box sx={{ display: 'flex', mr: 2 }}>
                        <TelescopeIcon />
                    </Box>
                    Which variant is the correct application of{' '}
                    {data.step.component}?
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
                    onClick={data.useCorrect ? onPass : setFailed}
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
                        cursor: 'pointer',
                        transition: 'all .2s ease-in-out',
                        ':hover': {
                            transform: 'scale(1.02)',
                            bg: 'canvas.inset',
                        },
                        img: {
                            maxWidth: 465,
                            width: '100%',
                        },
                    }}
                >
                    <img
                        src={imageLeft}
                        width="100%"
                        maxWidth={456}
                        alt="to be added"
                        srcSet={`${imageLeft} 1x, ${imageLeft} 2x`}
                    />
                </Box>

                <Box
                    onClick={data.useCorrect ? setFailed : onPass}
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
                        cursor: 'pointer',
                        transition: 'all .2s ease-in-out',
                        ':hover': {
                            transform: 'scale(1.02)',
                            bg: 'canvas.inset',
                        },
                        img: {
                            maxWidth: 465,
                            width: '100%',
                        },
                    }}
                >
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

export default Step
