import { useState } from 'react'
import { Box, Button, Text, Label } from '@primer/react'

import Intro from './Intro.js'
import Step from './Step.js'
import exam from './data'

function Exam() {
    const [exam, setExam] = useState(generateExam())
    const [started, setStarted] = useState(false)

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

    if (!started) {
        return (
            <Intro
                onClickStart={() => {
                    setStarted(true)
                }}
            />
        )
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
                    onClickRestart={() => {
                        setStarted(false)
                        setExam(generateExam())
                    }}
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

/*
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
                </Box>*/
