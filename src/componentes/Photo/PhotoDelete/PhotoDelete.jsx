import React from 'react'
import { PHOTO_DELETE } from '../../../api/Api'
import useFetch from '../../../Hooks/useFetch'
import styles from './PhotoDelete.module.css'

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch()
  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?')
    if (confirm) {
      const token = window.localStorage.getItem('token')
      const { url, options } = PHOTO_DELETE(id, token)
      const { response } = await request(url, options)
      if (response.ok) window.location.reload()
    }
  }

  return (
    <div>
      {loading ? (
        <button disabled>Delete</button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Delete
        </button>
      )}
    </div>
  )
}

export default PhotoDelete
