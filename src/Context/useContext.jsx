import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/Api'

export const UserContext = createContext()

export const UseStoreContext = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  const navigate = useNavigate()

  const userLogout = useCallback(
    async function () {
      setData(null)
      setErro(null)
      setLoading(false)
      setLogin(false)
      window.localStorage.removeItem('token')
      navigate('/login')
    },
    [navigate]
  )
  async function getUser(token) {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
  }
  async function userLogin(username, password) {
    try {
      setErro(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({
        username,
        password
      })
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('Usuário Inválido')
      const json = await response.json()
      window.localStorage.setItem('token', json.token)
      await getUser(json.token)
      navigate('/conta')
    } catch (error) {
      setErro(error.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setErro(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token Invalido')
          await getUser(token)
        } catch (error) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }

    autoLogin()
  }, [userLogout])

  return (
    <UserContext.Provider
      value={{
        userLogin,
        data,
        userLogout,
        erro,
        loading,
        login
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
