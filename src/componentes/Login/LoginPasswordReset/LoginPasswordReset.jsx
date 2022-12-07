import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RESET_PASSWORD } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import useForm from '../../../Hooks/useForm'
import Erro from '../../Erro/Erro'
import Button from '../../Form/Button/Button'
import Input from '../../Form/Input/Input'

const LoginPasswordReset = () => {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const { loading, erro, request } = useFetch()
  const [key, setKey] = useState('')
  const password = useForm('password')
  async function handleSubmit(event) {
    event.preventDefault()
    if (password.validate()) {
      const { url, options } = RESET_PASSWORD({
        login,
        key,
        password: password.value
      })
      const { response } = await request(url, options)
      if (response.ok) {
        navigate('/login')
      }
    }
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])
  return (
    <div>
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Erro erro={erro} />
    </div>
  )
}

export default LoginPasswordReset
