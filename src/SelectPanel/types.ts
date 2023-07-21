import { ReactNode } from 'react'

export enum NoticeType {
    Warning = 1,
    Error,
    Empty,
}

export enum SelectionType {
    Single = 1,
    Multiple,
}

export enum DialogSizeType {
    Small = 1,
    Medium,
    Portrait,
    Large,
    XLarge,
}

export type ItemType = {
    id: string | number
    text: string
    description?: string
    descriptionVariant?: string
    leadingVisual: ReactNode
    trailingVisual: ReactNode
}
