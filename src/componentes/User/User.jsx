import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../Context/useContext'
import NotFound from '../Erro/NotFound'
import Feed from '../Feed/Feed'
import Head from '../Head/Head'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStatis from './UserStatis'

const User = () => {
  const { data } = useContext(UserContext)
  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default User
