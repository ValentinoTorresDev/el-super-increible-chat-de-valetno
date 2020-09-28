
import { useState } from 'react'

const useInput = (initialValue) => {
  const [value, setvalue] = useState(initialValue)
  const onChange = (e) => setvalue(e.target.value)

  return { value, onChange }
}

export default useInput
