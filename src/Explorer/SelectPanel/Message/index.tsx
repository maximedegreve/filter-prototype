import { ReactNode } from 'react'
import { MessageLevel } from '../types'
import FullMessage from './FullMessage'
import SubtleMessage from './SubtleMessage'

export default function Message({
    title,
    description,
    level,
    isSubtle,
}: {
    title: string
    description: ReactNode
    level: MessageLevel
    isSubtle: boolean
}) {
    if (isSubtle) {
        return (
            <SubtleMessage
                title={title}
                description={description}
                level={level}
            />
        )
    } else {
        return (
            <FullMessage
                title={title}
                description={description}
                level={level}
            />
        )
    }
}
