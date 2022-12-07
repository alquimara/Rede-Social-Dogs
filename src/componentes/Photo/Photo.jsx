import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET_SINGLE } from '../../api/Api'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Erro/Erro'
import Head from '../Head/Head'
import Loading from '../Loading/Loading'
import PhotoContent from './PhotoContent'

const Photo = () => {
  const { id } = useParams()
  const { data, loading, erro, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET_SINGLE(id)
    request(url, options)
  }, [id, request])
  if (erro) return <Erro erro={erro} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <PhotoContent data={data} single={true} />
      </section>
    )
  else return null
}

export default Photo
