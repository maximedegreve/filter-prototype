import { useState, useMemo } from 'react'
import { Box, useColorSchemeVar, ProgressBar, IconButton } from '@primer/react'
import { CheckIcon, XIcon } from '@primer/octicons-react'

import exam from './data/exam'

function Exam() {
    const [exam, setExam] = useState(generateExam())

    console.log(exam)
    const currentExam = exam.find((t) => t.passed === null)
    const current = exam.filter((t) => t.passed !== null).length

    console.log(currentExam)

    const onClickCorrect = () => {}

    const onClickIncorrect = () => {}

    return (
        <Box>
            <Step
                data={currentExam}
                current={current}
                total={exam.length}
                onClickCorrect={onClickCorrect}
                onClickIncorrect={onClickIncorrect}
            />
        </Box>
    )
}

function Step({ data, onClickCorrect, onClickIncorrect, current, total }) {
    const themeAwareImage = useColorSchemeVar(
        {
            light: data.step.image?.lightDo,
            dark: data.step.image?.darkDo,
        },
        data.step.image?.lightDo
    )

    const left = total - current
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
                    src={themeAwareImage}
                    alt="to be added"
                    srcSet={`${themeAwareImage} 1x, ${themeAwareImage} 2x`}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        right: 4,
                        button: {
                            borderRadius: 20,
                        },
                        transition: 'all .2s ease-in-out',
                        ':hover': {
                            transform: 'scale(1.2)',
                        },
                    }}
                >
                    <IconButton
                        leadingIcon={CheckIcon}
                        variant="primary"
                        onClickCorrect={onClickCorrect}
                        size="large"
                        aria-label="Correct"
                    />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        left: 4,

                        button: {
                            borderRadius: 20,
                        },
                        transition: 'all .2s ease-in-out',
                        ':hover': {
                            transform: 'scale(1.2)',
                        },
                    }}
                >
                    <IconButton
                        leadingIcon={XIcon}
                        variant="danger"
                        size="large"
                        aria-label="Incorrect"
                        onClickCorrect={onClickIncorrect}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', pt: 4 }}>
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

function generateExam() {
    const mapped = exam.map((exam) => {
        return {
            step: exam,
            useCorrect: Math.random() < 0.4, //40% probability of getting true
            passed: null,
        }
    })
    return shuffle(mapped)
}

function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length

    for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor(
            (newArray.length - start) * Math.random()
        )
        const randomItem = newArray.splice(randomPosition, 1)

        newArray.push(...randomItem)
    }

    return newArray
}

export default Exam
