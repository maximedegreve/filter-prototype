import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
import Explorer from './Explorer'

import './reset.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Playground />,
    },
    {
        path: '/explorer',
        element: <Explorer />,
    },
])

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <RouterProvider router={router} />
            </BaseStyles>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
