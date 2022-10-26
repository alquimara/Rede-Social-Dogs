import { isValidDateValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const types = {
  email: {
    regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i,
    message: 'Preencha um email valido'
  }
}
const useForm = type => {
  const [value, setValue] = useState('')
  const [erro, setErro] = useState(null)

  function validate(value) {
    if (type === false) return true
    if (value.length === 0) {
      setErro('Preencha uma valor')
      return false
    } else if (types[type] && !types[type].regex.test(value)) {
      setErro(types[type].message)
      return false
    } else {
      setErro(null)
      return true
    }
  }

  function onChange(event) {
    if (erro) {
      validate(event.target.value)
    }
    setValue(event.target.value)
  }

  return {
    value,
    setValue,
    onChange,
    erro,
    validate: () => validate(value),
    onBlur: () => validate(value)
  }
}

export default useForm
