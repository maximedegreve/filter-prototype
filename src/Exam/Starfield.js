import { useTheme } from '@primer/react'
import React, { useLayoutEffect, useState } from 'react'
import StarfieldAnimation from 'react-starfield-animation'

function Starfield() {
    const { colorScheme } = useTheme()

    const [showStarField, setShowStarfield] = useState(false)
    useLayoutEffect(() => {
        setTimeout(() => {
            setShowStarfield(true)
        }, 1000)
    }, [])

    return (
        <StarfieldAnimation
            style={{
                transition: 'opacity 1s',
                transitionDelay: '0.05s',
                opacity: showStarField ? 1 : 0,
                position: 'absolute',
                top: -16,
                left: -16,
                right: -16,
                zIndex: 0,
                bottom: -16,
                height: '100%',
                pointerEvents: 'none',
                filter: colorScheme === 'light' && 'invert(100%)',
            }}
        />
    )
}

export default Starfield
