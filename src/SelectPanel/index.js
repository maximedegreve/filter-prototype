import { useState } from 'react'
import { Box } from '@primer/react'

import Header from './Header.js'
import Footer from './Footer.js'
import List from './List.js'
import TemporaryDialog from './TemporaryDialog.js'

const items = [
    {
        text: 'Status',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: true,
    },
    {
        text: 'Stage',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: true,
    },
    {
        text: 'Assignee',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: true,
    },
    {
        text: 'Team',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: true,
    },
    {
        text: 'Estimate',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: false,
    },
    {
        text: 'Due Date',
        description: 'A fox jumps through a white fence',
        descriptionVariant: 'block',
        selected: false,
    },
]

function SelectPanel({ type = 'single', title, modal = false }) {
    return (
        <TemporaryDialog modal={modal}>
            <Header title={title} />
            <List items={items} type={type} />
            <Footer declaritveControlsEnabled={true} modal={modal} />
        </TemporaryDialog>
    )
}

export default SelectPanel
