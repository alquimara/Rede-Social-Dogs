import React from 'react'
import { ContainerHome } from './Style'
import Feed from '../Feed/Feed'
import Loading from '../Loading/Loading'

const Home = () => {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  )
}

export default Home
