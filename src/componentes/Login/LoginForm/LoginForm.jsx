import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Context/useContext'
import useForm from '../../../Hooks/useForm'
import Erro from '../../Erro/Erro'
import Button from '../../Form/Button/Button'
import { ContainerButton } from '../../Form/Button/Style'
import Input from '../../Form/Input/Input'
import { ContainerLoginForm } from './Style.js'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin, erro, loading } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <ContainerLoginForm className="containerBody animeLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="usuario" label="Usuário:" {...username} />
        <Input type="password" name="senha" label="Senha:" {...password} />
        {loading ? (
          <Button className="disabled">Carregando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro erro={erro} />

        <Link className="linkPerdeuSenha" to="/login/perdeu">
          Perdeu a senha
        </Link>
        <div className="cadastroForm">
          <h2>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link to="/login/criar">
            <ContainerButton>Cadastre-se</ContainerButton>
          </Link>
        </div>
      </form>
    </ContainerLoginForm>
  )
}

export default LoginForm
