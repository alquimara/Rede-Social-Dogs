import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import UserNavHeader from '../UserNavHeader/UserNavHeader'
import styles from './UserHeader.module.css'

const UserHeader = () => {
  const [title, setTitle] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste uma Foto')
        break
      case '/conta/estatisticas':
        setTitle('Estatisticas')
        break

      default:
        setTitle('Minha Conta')
    }
  }, [pathname])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserNavHeader />
    </header>
  )
}

export default UserHeader
