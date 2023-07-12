import { Box, Button, Text } from '@primer/react'
import { VIEW_HEIGHT } from './constants'
import monaIntroImage from './images/mona-intro-2x.png'
import { LightBulbIcon } from '@primer/octicons-react'

function Intro({ onClickStart }) {
    return (
        <Box
            sx={{
                minHeight: VIEW_HEIGHT,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    maxWidth: 480,
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    pt: 4,
                }}
            >
                <Box
                    sx={{
                        img: {
                            objectFit: 'cover',
                            width: 200,
                            height: 200,
                            borderRadius: 100,
                        },
                    }}
                >
                    <img
                        src={monaIntroImage}
                        alt="to be added"
                        srcSet={`${monaIntroImage} 1x, ${monaIntroImage} 2x`}
                    />
                </Box>
                <Text
                    sx={{ fontWeight: 'semibold', fontSize: 4, mt: 3, mb: 2 }}
                >
                    Welcome to the Test Flight Simulator, cadet!
                </Text>
                <Text sx={{ fontWeight: 'normal', mb: 3, color: 'fg.muted' }}>
                    Get ready to test your design skills and make split-second
                    decisions as you navigate our challenging slides. Buckle up,
                    soar high, and let's see how far you can fly!
                </Text>
                <Button variant="primary" size="large" onClick={onClickStart}>
                    Ready for takeoff
                </Button>

                <Box sx={{ mt: 8, display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ color: 'attention.fg', display: 'flex', mr: 2 }}>
                        <LightBulbIcon size={16} />
                    </Box>

                    <Text
                        sx={{
                            fontWeight: 'normal',
                            fontSize: 0,

                            color: 'attention.fg',
                        }}
                    >
                        You can take this test as many times as you want.
                    </Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Intro
