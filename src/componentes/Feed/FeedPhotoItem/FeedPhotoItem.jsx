import React from 'react'
import { ContainerPhotoItem } from './Style'

const FeedPhotoItem = ({ photo }) => {
  return (
    <ContainerPhotoItem>
      <img src={photo.src} alt={photo.title} />
      <span>{photo.acessos}</span>
    </ContainerPhotoItem>
  )
}

export default FeedPhotoItem
