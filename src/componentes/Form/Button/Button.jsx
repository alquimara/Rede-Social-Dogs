import React from 'react'
import { ContainerButton } from './Style.js'

const Button = ({ children, className }) => {
  return <ContainerButton className={className}>{children}</ContainerButton>
}

export default Button
