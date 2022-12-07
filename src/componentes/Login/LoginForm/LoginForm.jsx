import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../Context/useContext'
import useForm from '../../../Hooks/useForm'
import Erro from '../../Erro/Erro'
import Button from '../../Form/Button/Button'
import stylesBtn from '../../Form/Button/Button.module.css'
import styles from './LoginForm.module.css'
import Input from '../../Form/Input/Input'
import Head from '../../Head/Head'

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
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input type="text" name="usuario" label="Usuário:" {...username} />
        <Input type="password" name="senha" label="Senha:" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro erro={erro} />
        <Link className={styles.perdeu} to="/login/perdeu">
          Perdeu a senha
        </Link>
        <div className={styles.cadastro}>
          <h2 className={styles.subtitle}>Cadastre-se</h2>
          <p>Ainda não possui conta? Cadastre-se no site.</p>
          <Link className={stylesBtn.button} to="/login/criar">
            Cadastro
          </Link>
        </div>
      </form>
    </section>
  )
}

export default LoginForm
