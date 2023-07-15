import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
import SelectPanel from './SelectPanel'

function App() {
    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <SelectPanel title="Select labels" modal={true} />
                <Playground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
