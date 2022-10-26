import React from 'react'
import { ContainerInput } from './Style.js'

const Input = ({ label, name, type, value, onChange, erro, onBlur }) => {
  return (
    <ContainerInput>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className="erro">{erro}</p>}
    </ContainerInput>
  )
}

export default Input
