import React from 'react'

const NotFound = ({ erro }) => {
  return (
    <div className="container mainContainer">
      <h1 className={`title  ${erro ? 'erro' : ''}`}>Erro: 404</h1>
      <p>Página não encontrada</p>
    </div>
  )
}

export default NotFound
