import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Dogs } from '../../assents/dogs-footer.svg'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dogs. Alguns Direitos Reservados.</p>
    </footer>
  )
}
