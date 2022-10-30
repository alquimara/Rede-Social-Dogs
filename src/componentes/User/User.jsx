import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Feed from '../Feed/Feed'
import { ContainerUser } from './Style'
import UserHeader from './UserHeader'
import UserPhotoPost from './UserPhotoPost/UserPhotoPost'
import UserStatis from './UserStatis'

const User = () => {
  return (
    <section className="containerBody container">
      <ContainerUser>
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="postar" element={<UserPhotoPost />} />
          <Route path="estatisticas" element={<UserStatis />} />
        </Routes>
      </ContainerUser>
    </section>
  )
}

export default User
