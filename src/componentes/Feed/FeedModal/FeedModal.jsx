import React, { useEffect } from 'react'
import { PHOTO_GET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import styles from './FeedModal.module.css'
import Erro from '../../Erro/Erro'
import Loading from '../../Loading/Loading'
import PhotoContent from '../../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  function openModal(event) {
    console.log(photo)
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }
  return (
    <div className={styles.modal} onClick={openModal}>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
