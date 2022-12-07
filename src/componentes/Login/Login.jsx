import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm'
import LoginCreate from './LoginCreate/LoginCreate'
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset'
import { UserContext } from '../../Context/useContext'
import styles from './Login.module.css'
import NotFound from '../Erro/NotFound'

const Login = () => {
  const { login } = useContext(UserContext)
  if (login === true) return <Navigate to="/conta" />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login
