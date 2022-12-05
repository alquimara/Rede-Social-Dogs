import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../Context/useContext'
import { ReactComponent as MinhaFotos } from '../../../assents/feed.svg'
import { ReactComponent as Estatisticas } from '../../../assents/estatisticas.svg'
import { ReactComponent as Postar } from '../../../assents/adicionar.svg'
import { ReactComponent as Sair } from '../../../assents/sair.svg'
import useMediaQuery from '../../../Hooks/useMediaQuery'
import styles from './UserNavHeader.module.css'

const UserNavHeader = () => {
  const { userLogout } = useContext(UserContext)
  const mobile = useMediaQuery('(max-width:40rem)')
  const [mobileMenu, setMobileMenu] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          aria-label="menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}

      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink className="NavLink" to="/conta" end>
          <MinhaFotos />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink className="NavLink" to="estatisticas">
          <Estatisticas />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink className="NavLink" to="postar">
          <Postar />
          {mobile && 'Postar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserNavHeader
