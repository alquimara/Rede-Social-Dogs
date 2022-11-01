import React, { useEffect } from 'react'
import { PHOTO_GET } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import { ContainerModal } from './Style'
import Erro from '../../Erro/Erro'
import Loading from '../../Loading/Loading'
import PhotoContent from '../../Photo/PhotoContent'
import { useContext } from 'react'
import { UserContext } from '../../../Context/useContext'

const FeedModal = ({ photo }) => {
  const { setModalPhoto } = useContext(UserContext)
  const { data, erro, loading, request } = useFetch()
  function openModal(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])
  return (
    <ContainerModal onClick={openModal}>
      {erro && <Erro erro={erro} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </ContainerModal>
  )
}

export default FeedModal
