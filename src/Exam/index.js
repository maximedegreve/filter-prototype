import { useState } from 'react'
import { Box } from '@primer/react'

import Intro from './Intro'
import Step from './Step'
import Grade from './Grade'
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
