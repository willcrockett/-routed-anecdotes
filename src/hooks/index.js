import { useState, useEffect } from "react"

export const useField = (type) => {
    const [value, setValue] = useState('')
    
    const onChange = (event) => {
        setValue(event.target.value)
    }
    const reset = () => {
        setValue('')
    }
    const fields = {
        type,
        value,
        onChange
    }
    return {
        fields,
        reset
    }

}
