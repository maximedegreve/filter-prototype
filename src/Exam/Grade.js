import { Box, Button, Text, Label } from '@primer/react'
import monaOutroImage from './images/mona-outro-2x.png'
import Starfield from './Starfield'

function Grade({ exam, onClickRestart }) {
    const totalWrongAnswers = exam.filter((t) => t.passed === false).length
    const grade = calculateGrade(totalWrongAnswers, exam.length)

    return (
        <Box sx={{ position: 'relative' }}>
            <Starfield />
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
                <Box
                    sx={{
                        img: {
                            objectFit: 'cover',
                            width: [120, 120, 200, 200],
                            height: [120, 120, 200, 200],
                            borderRadius: [60, 60, 100, 100],
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: 'avatar.border',
                        },
                    }}
                >
                    <img
                        src={monaOutroImage}
                        alt="to be added"
                        srcSet={`${monaOutroImage} 1x, ${monaOutroImage} 2x`}
                    />
                </Box>
                <Box sx={{ fontWeight: 'semibold', pt: 2 }}>
                    <Text sx={{ mr: 2, fontSize: [3, 3, 4, 4] }}>
                        You're grade is
                    </Text>
                    <Label
                        size="large"
                        variant={grade.color}
                        sx={{ fontSize: [2, 2, 3, 3], height: 30 }}
                    >
                        {grade.grade}
                    </Label>
                </Box>
                <Box sx={{ fontSize: 2, mt: 1, color: 'fg.muted' }}>
                    {grade.message}
                </Box>
                <Button sx={{ mt: 3 }} onClick={onClickRestart}>
                    Restart
                </Button>
            </Box>
        </Box>
    )
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

export default Grade
