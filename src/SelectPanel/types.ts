import React, { ReactNode } from 'react'

export enum MessageLevel {
    Warning = 'warning',
    Error = 'error',
}

export enum SelectionVariant {
    Single = 'single',
    Multiple = 'multiple',
}

export enum DialogSize {
    Small = 'small',
    Medium = 'medium',
    Portrait = 'portrait',
    Large = 'large',
    XLarge = 'xlarge',
}

export type Item = {
    id: string | number
    text: string
    description?: string
    descriptionVariant?: 'block' | 'inline' | undefined
    leadingVisual?: ReactNode
    trailingVisual?: ReactNode
}

export type ExtraActionButton = {
    text: string | number
    onClick: () => void
    type: 'button'
}

export type ExtraActionLink = {
    text: string | number
    onClick: () => void
    type: 'link'
}

export type ExtraActionCheckbox = {
    text: string | number
    onChange: React.ChangeEvent<HTMLInputElement>
    selected: boolean
    type: 'checkbox'
}

export type Message = {
    level: MessageLevel
    title: string
    description?: ReactNode
}

export type Empty = {
    title: string
    description?: ReactNode
}
