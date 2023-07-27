import React from 'react'
import { CheckboxValue } from './types'

// 🐛 Primer's checkbox does not support small sizes as used in the actionlist items
// Issue to be created

const Checkbox = ({
    value,
    onChange,
}: {
    value: CheckboxValue
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
    const checkboxRef = React.useRef<HTMLInputElement | null>(null)

    React.useEffect(() => {
        if (checkboxRef && checkboxRef.current) {
            if (value === CheckboxValue.Checked) {
                checkboxRef.current.checked = true
                checkboxRef.current.indeterminate = false
            } else if (value === CheckboxValue.Unchecked) {
                checkboxRef.current.checked = false
                checkboxRef.current.indeterminate = false
            } else if (value === CheckboxValue.Indeterminate) {
                checkboxRef.current.checked = false
                checkboxRef.current.indeterminate = true
            }
        }
    }, [value])

    return <input ref={checkboxRef} type="checkbox" onChange={onChange} />
}

export default Checkbox
