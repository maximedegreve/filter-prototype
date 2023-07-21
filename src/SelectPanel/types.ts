import React, { ReactNode } from 'react'

export enum NoticeType {
    Warning = 1,
    Error,
    Empty,
}

export enum SelectionType {
    Single = 'single',
    Multiple = 'multiple',
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
    descriptionVariant?: 'block' | 'inline' | undefined
    leadingVisual: ReactNode
    trailingVisual: ReactNode
}

export type ExtraActionButtonType = {
    text: string | number
    onClick: () => void
    type: 'button'
}

export type ExtraActionLinkType = {
    text: string | number
    onClick: () => void
    type: 'link'
}

export type ExtraActionCheckboxType = {
    text: string | number
    onChange: React.ChangeEvent<HTMLInputElement>
    selected: boolean
    type: 'checkbox'
}
