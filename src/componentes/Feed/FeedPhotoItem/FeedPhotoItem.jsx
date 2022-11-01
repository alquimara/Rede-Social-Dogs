import React, { useContext } from 'react'
import { UserContext } from '../../../Context/useContext'
import { ContainerPhotoItem } from './Style'

const FeedPhotoItem = ({ photo }) => {
  const { setModalPhoto } = useContext(UserContext)
  function handleModal() {
    setModalPhoto(photo)
  }
  return (
    <ContainerPhotoItem onClick={handleModal}>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </ContainerPhotoItem>
  )
}

export default FeedPhotoItem
