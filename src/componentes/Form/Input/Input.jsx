import React from 'react'
import styles from './Input.module.css'

const Input = ({ label, name, type, value, onChange, erro, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <p className="erro">{erro}</p>}
    </div>
  )
}

export default Input
