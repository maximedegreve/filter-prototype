import React, { ReactNode } from 'react'

export enum MessageLevel {
    Warning = 'warning',
    Error = 'error',
}

export enum SelectionVariant {
    Single = 'single',
    Multiple = 'multiple',
}

export type SelectionMultipleVariant = {
    type: SelectionVariant.Multiple
    selected: Item[]
    onChange: ({ selected }: { selected: Item[] }) => void
}

export type SelectionSingleVariant = {
    type: SelectionVariant.Single
    selected: Item
    onChange: ({ selected }: { selected: Item }) => void
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

export enum ExtraActionType {
    Checkbox = 'checkbox',
    Link = 'link',
    Button = 'button',
}

export type ExtraActionButton = {
    text: string | number
    onClick: () => void
    type: ExtraActionType.Button
}

export type ExtraActionLink = {
    text: string | number
    onClick: () => void
    type: ExtraActionType.Link
}

export type ExtraActionCheckbox = {
    text: string | number
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    checked: boolean
    type: ExtraActionType.Checkbox
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
