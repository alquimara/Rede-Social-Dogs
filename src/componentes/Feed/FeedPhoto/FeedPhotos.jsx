import React, { useEffect } from 'react'
import { PHOTOS_GET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem'
import Erro from '../../Erro/Erro'
import Loading from '../../Loading/Loading'
import styles from './FeedPhoto.module.css'

const FeedPhotos = ({ setModalPhoto }) => {
  const { data, erro, loading, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options)
    }
    fetchPhotos()
  }, [request])
  if (erro) return <Erro erro={erro} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotoItem photo={photo} key={photo.id} />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
