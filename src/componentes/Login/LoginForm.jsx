import React, { useContext } from 'react'
import { UserContext } from '../../Context/useContext'
import useForm from '../../Hooks/useForm'
import Button from '../Form/Button/Button'
import Input from '../Form/Input/Input'
import { ContainerLogin } from './Style'

const LoginForm = () => {
  const username = useForm()
  const password = useForm()
  const { userLogin } = useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }
  return (
    <ContainerLogin className="containerBody">
      <section>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="usuario" label="Usuário:" {...username} />
          <Input type="password" name="senha" label="Senha:" {...password} />
          <Button>Enviar</Button>
        </form>
      </section>
    </ContainerLogin>
  )
}

export default LoginForm
