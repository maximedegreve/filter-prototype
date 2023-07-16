import { ThemeProvider, BaseStyles } from '@primer/react'

import Playground from './Playground'
import SelectPanel from './SelectPanel'

function App() {
    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <SelectPanel
                    title="Select labels"
                    description="Pick your favourite labels"
                    modal={true}
                    onSearchValueChange={() => alert('update')}
                    onSearchValueClear={() => alert('clear')}
                    searchValue="Test"
                />
                <Playground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
