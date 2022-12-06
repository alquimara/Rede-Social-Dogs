import React from 'react'
import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../../Context/useContext'
import Feed from '../Feed/Feed'
import UserHeader from './UserHeader/UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStatis from './UserStatis'

const User = () => {
  const { data } = useContext(UserContext)
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatis />} />
      </Routes>
    </section>
  )
}

export default User
