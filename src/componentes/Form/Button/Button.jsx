import React from 'react'
import stylesBtn from './Button.module.css'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={stylesBtn.button}>
      {children}
    </button>
  )
}

export default Button
