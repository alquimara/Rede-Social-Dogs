import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/useContext'
import FeedModal from './FeedModal/FeedModal'
import FeedPhotos from './FeedPhoto/FeedPhotos'

const Feed = () => {
  const { modalPhoto } = useContext(UserContext)
  return (
    <>
      {modalPhoto && <FeedModal photo={modalPhoto} />}
      <FeedPhotos />
    </>
  )
}

export default Feed
