import React, { useContext } from 'react'
import { USER_POST } from '../../../api/Api'
import { UserContext } from '../../../Context/useContext'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Erro from '../../Erro/Erro'
import Button from '../../Form/Button/Button'
import Input from '../../Form/Input/Input'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm('email')
  const password = useForm('password')
  const { userLogin } = useContext(UserContext)
  const { erro, loading, request } = useFetch()
  async function hanldeSubmit(event) {
    event.preventDefault()
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response.ok) userLogin(username.value, password.value)
  }
  return (
    <section className="containerBody animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={hanldeSubmit}>
        <Input type="text" name="usuario" label="Usuário:" {...username} />
        <Input type="text" name="email" label="Email:" {...email} />
        <Input type="password" name="senha" label="Senha:" {...password} />
        {loading ? (
          <Button className="disabled">Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Erro erro={erro} />
      </form>
    </section>
  )
}

export default LoginCreate
