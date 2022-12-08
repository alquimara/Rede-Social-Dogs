import React, { useContext } from 'react'
import { UserContext } from '../../../Context/useContext'
import Image from '../../Image/Image'
import styles from './FeedPhotoItem.module.css'

const FeedPhotoItem = ({ photo, setModalPhoto }) => {
  function handleModal() {
    setModalPhoto(photo)
  }
  return (
    <li className={styles.photo} onClick={handleModal}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  )
}

export default FeedPhotoItem
