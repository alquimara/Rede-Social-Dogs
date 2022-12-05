import React, { useEffect, useState } from 'react'
import styles from './UserPhotoPost.module.css'
import Input from '../../Form/Input/Input'
import useForm from '../../../Hooks/useForm'
import useFetch from '../../../Hooks/useFetch'
import Button from '../../Form/Button/Button'
import { PHOTO_POST } from '../../../api/Api'
import Erro from '../../Erro/Erro'
import { useNavigate } from 'react-router-dom'

const UserPhotoPost = () => {
  const nome = useForm()
  const peso = useForm('number')
  const idade = useForm('number')
  const [img, setImg] = useState({})
  const { data, erro, request, loading } = useFetch()
  const navigate = useNavigate()
  useEffect(() => {
    if (data) navigate('/conta')
  }, [data, navigate])

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData()
    formData.append('img', img.raw)
    formData.append('nome', nome.value)
    formData.append('peso', peso.value)
    formData.append('idade', idade.value)
    const token = window.localStorage.getItem('token')
    const { url, options } = PHOTO_POST(token, formData)
    request(url, options)
  }
  function handleImg(event) {
    setImg({
      preview: URL.createObjectURL(event.target.files[0]),
      raw: event.target.files[0]
    })
  }
  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome:" nome="nome" type="text" {...nome} />
        <Input label="Peso:" nome="peso" type="number" {...peso} />
        <Input label="Idade:" nome="idade" type="number" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImg}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Erro erro={erro} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  )
}

export default UserPhotoPost
