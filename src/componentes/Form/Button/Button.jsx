import React from 'react'
import { ContainerButton } from './Style.js'

const Button = ({ children, ...props }) => {
  return <ContainerButton {...props}>{children}</ContainerButton>
}

export default Button
