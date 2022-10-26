import React, { createContext, useState } from 'react'
import { TOKEN_POST, USER_GET } from '../api/Api'

export const UserContext = createContext()

export const UseStoreContext = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)

  async function getUser(token) {
    const { url, options } = USER_GET(token)

    const response = await fetch(url, options)
    const json = await response.json()
    setData(json)
    setLogin(true)
    console.log(data)
  }
  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({
      username,
      password
    })
    const response = await fetch(url, options)
    const json = await response.json()
    window.localStorage.setItem('token', json.token)
    getUser(json.token)
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  )
}
