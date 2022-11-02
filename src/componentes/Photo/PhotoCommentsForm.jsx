import { useState } from 'react'
import { COMMENT_POST } from '../../api/Api'
import { ReactComponent as Enviar } from '../../assents/enviar.svg'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Erro/Erro'

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('')
  const { request, erro } = useFetch()

  async function handleSubmit(event) {
    event.preventDefault()
    console.log(id)
    const token = window.localStorage.getItem('token')
    const { url, options } = COMMENT_POST(id, { comment }, token)
    const { response, json } = await request(url, options)
    if (response.ok) {
      setComment('')
      setComments(comments => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label id="comentario">Comentario:</label>
      <textarea
        htmlFor="comentario"
        placeholder="Escreva seu Comentário"
        value={comment}
        onChange={event => setComment(event.target.value)}
      />
      <button>
        <Enviar />
      </button>
      {erro && <Erro erro={erro} />}
    </form>
  )
}

export default PhotoCommentsForm
