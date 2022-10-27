import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Container } from './Style.js'
import { ReactComponent as Dogs } from '../../assents/dogs.svg'
import { UserContext } from '../../Context/useContext.jsx'

const Header = () => {
  const { data, userLogout } = useContext(UserContext)

  return (
    <Container>
      <nav className="container">
        <Link
          to={'/'}
          aria-label="icone de um rosto de cachorro"
          className="logo"
        >
          <Dogs />
        </Link>
        {data ? (
          <Link to={'/conta'} className="login">
            {data.nome}
            <button onClick={userLogout}>sair</button>
          </Link>
        ) : (
          <Link to={'/login'} className="login">
            Login/Criar
          </Link>
        )}
      </nav>
    </Container>
  )
}

export default Header
