import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/useContext'
import { Navigate } from 'react-router-dom'

const ProtectedRouter = ({ children }) => {
  const { login } = useContext(UserContext)
  return login ? children : <Navigate to="/login" />
}

export default ProtectedRouter
