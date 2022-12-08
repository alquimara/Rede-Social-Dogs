import React, { useEffect } from 'react'
import { PHOTOS_GET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import FeedPhotoItem from '../FeedPhotoItem/FeedPhotoItem'
import Erro from '../../Erro/Erro'
import Loading from '../../Loading/Loading'
import styles from './FeedPhoto.module.css'

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
  const { data, erro, loading, request } = useFetch()

  useEffect(() => {
    async function fetchPhotos() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page, total, user })
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) {
        setInfinite(false)
      }
    }
    fetchPhotos()
  }, [request, user, page, setInfinite])
  if (erro) return <Erro erro={erro} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map(photo => (
          <FeedPhotoItem
            photo={photo}
            key={photo.id}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos
