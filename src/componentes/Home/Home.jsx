import React from 'react'
import { ContainerHome } from './Style'
import Feed from '../Feed/Feed'

const Home = () => {
  return (
    <ContainerHome className="container containerBody mainContainer">
      <Feed />
    </ContainerHome>
  )
}

export default Home
