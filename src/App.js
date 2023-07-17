import { ThemeProvider, BaseStyles } from '@primer/react'
import { useState } from 'react'

import Playground from './Playground'
import SelectPanel from './SelectPanel'

function App() {
    const [searchValue, setSearchValue] = useState('')

    return (
        <ThemeProvider colorMode="dark">
            <BaseStyles>
                <SelectPanel
                    title="Select labels"
                    type="multiple"
                    modal={false}
                    subtleError={
                        <>
                            We couldn't load the authors. Try again or if the
                            problem persists{' '}
                            <a href="mailto:hello@github.com">
                                contact support
                            </a>
                            .
                        </>
                    }
                    onSearchValueChange={(e) => setSearchValue(e.target.value)}
                    onSearchValueClear={() => setSearchValue('')}
                    searchValue={searchValue}
                />
                <Playground />
            </BaseStyles>
        </ThemeProvider>
    )
}

export default App
