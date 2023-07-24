import { ReactNode } from 'react'
import { MessageLevel } from '../types'
import FullMessage from './FullMessage'
import SubtleMessage from './SubtleMessage'

export default function Message({
    title,
    description,
    level,
    totalItems,
}: {
    title: string
    description: ReactNode
    level: MessageLevel
    totalItems: number
}) {
    if (totalItems > 0) {
        return (
            <FullMessage
                title={title}
                description={description}
                level={level}
            />
        )
    } else {
        return (
            <SubtleMessage
                title={title}
                description={description}
                level={level}
            />
        )
    }
}
