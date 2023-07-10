import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
function App() {
    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <Playground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
