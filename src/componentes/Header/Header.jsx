import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../../assents/dogs.svg'
import { UserContext } from '../../Context/useContext.jsx'
import styles from './Header.module.css'

const Header = () => {
  const { data } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link
          to={'/'}
          aria-label="icone de um rosto de cachorro"
          className={styles.logo}
        >
          <Dogs />
        </Link>
        {data ? (
          <Link to={'/conta'} className="login">
            {data.nome}
          </Link>
        ) : (
          <Link to={'/login'} className={styles.login}>
            Login/Criar
          </Link>
        )}
      </nav>
    </header>
  )
}

export default Header
