import { useState } from 'react'
import {
    Box,
    useColorSchemeVar,
    Button,
    ProgressBar,
    Text,
    IconButton,
    Label,
    SegmentedControl,
} from '@primer/react'
import { CheckIcon, XIcon } from '@primer/octicons-react'

import exam from './data/exam'

function Exam() {
    const [exam, setExam] = useState(generateExam())

    const currentExam = exam.find((t) => t.passed === null)
    const current = exam.filter((t) => t.passed !== null).length

    const onPass = () => {
        const newExam = [...exam].map((item) => {
            if (item.step.id === currentExam.step.id) {
                return {
                    ...currentExam,
                    passed: true,
                }
            }
            return item
        })
        setExam(newExam)
    }

    const onFail = () => {
        const newExam = [...exam].map((item) => {
            if (item.step.id === currentExam.step.id) {
                return {
                    ...currentExam,
                    passed: false,
                }
            }
            return item
        })
        setExam(newExam)
    }

    return (
        <Box>
            {currentExam ? (
                <Step
                    data={currentExam}
                    current={current}
                    total={exam.length}
                    onPass={onPass}
                    onFail={onFail}
                />
            ) : (
                <Grade
                    exam={exam}
                    onClickRestart={() => setExam(generateExam())}
                />
            )}
        </Box>
    )
}

function Grade({ exam, onClickRestart }) {
    const totalWrongAnswers = exam.filter((t) => t.passed === false).length
    const grade = calculateGrade(totalWrongAnswers, exam.length)

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                alignItems: 'center',
                flexDirection: 'column',
                height: 500,
                borderColor: 'border.subtle',
            }}
        >
            <Box sx={{ fontWeight: 'semibold' }}>
                <Text sx={{ mr: 2 }}>You're grade is</Text>
                <Label size="large" variant={grade.color}>
                    {grade.grade}
                </Label>
            </Box>
            <Box sx={{ fontSize: 1, mt: 1, color: 'fg.muted' }}>
                {grade.message}
            </Box>
            <Button sx={{ mt: 3 }} onClick={onClickRestart}>
                Restart
            </Button>
        </Box>
    )
}
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

function Step({ data, onPass, onFail, current, total }) {
    const [isFailed, setIsFailed] = useState(false)

    console.log(data)

    const themeAwareImage = useColorSchemeVar(
        {
            light: data.useCorrect
                ? data.step.image?.lightDo
                : data.step.image?.lightDont,
            dark: data.useCorrect
                ? data.step.image?.darkDo
                : data.step.image?.darkDont,
        },
        data.useCorrect ? data.step.image?.lightDo : data.step.image?.lightDont
    )

    const setFailed = () => {
        setIsFailed(true)
    }

    if (isFailed) {
        return (
            <Fail
                data={data}
                onContinue={() => {
                    onFail()
                    setIsFailed(false)
                }}
            />
        )
    }
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
                        display: isFailed ? 'none' : 'block',
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
                        onClick={data.useCorrect ? onPass : setFailed}
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
                        onClick={data.useCorrect ? setFailed : onPass}
                    />
                </Box>
            </Box>

            <Box
                sx={{
                    display: isFailed ? 'flex' : 'none',
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
                <Button
                    onClick={() => {
                        onFail()
                        setIsFailed(false)
                    }}
                >
                    Continue
                </Button>
            </Box>

            <Box
                sx={{
                    display: isFailed ? 'none' : 'flex',
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

const calculateGrade = (wrongAnswers, totalQuestions) => {
    const percentage = ((totalQuestions - wrongAnswers) / totalQuestions) * 100

    if (percentage >= 95) {
        return {
            grade: 'A+++',
            message: "Wow! You're a genius! Keep up the amazing work!",
            color: 'sponsors',
        }
    } else if (percentage >= 90) {
        return {
            grade: 'A++',
            message: "Great job! You're acing the subject!",
            color: 'sponsors',
        }
    } else if (percentage >= 85) {
        return {
            grade: 'A+',
            message: "Well done! You're excelling in your studies!",
            color: 'sponsors',
        }
    } else if (percentage >= 80) {
        return {
            grade: 'A',
            message:
                "Congratulations! You've got a solid grasp on the material!",
            color: 'success',
        }
    } else if (percentage >= 75) {
        return {
            grade: 'B-',
            message:
                "Not bad! You're doing well, but there's room for improvement!",
            color: 'primary',
        }
    } else if (percentage >= 70) {
        return {
            grade: 'B',
            message: "Good job! You're on the right track!",
            color: 'primary',
        }
    } else if (percentage >= 65) {
        return {
            grade: 'C-',
            message: "Keep going! You're making progress!",
            color: 'primary',
        }
    } else if (percentage >= 60) {
        return {
            grade: 'C',
            message:
                "You're doing alright, but a little more effort can go a long way!",
        }
    } else if (percentage >= 55) {
        return {
            grade: 'D-',
            message: "Don't give up! You're almost there!",
            color: 'attention',
        }
    } else if (percentage >= 50) {
        return {
            grade: 'D',
            message: "You're making an effort, but you can do better!",
            color: 'severe',
        }
    } else {
        return {
            grade: 'F',
            message:
                "Oops! Don't worry, everyone has off days. Keep pushing forward!",
            color: 'danger',
        }
    }
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
