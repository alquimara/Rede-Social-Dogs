import React, { useContext, useRef, useState } from 'react'
import { useEffect } from 'react'

import { UserContext } from '../../../Context/useContext'
import PhotoCommentsForm from '../PhotoCommentForm/PhotoCommentsForm'
import styles from './PhotoComment.module.css'

const PhotoComments = ({ id, comments, single }) => {
  const [coments, setComents] = useState(() => comments)
  const commentsSection = useRef(null)
  const { login } = useContext(UserContext)

  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight
  }, [coments])
  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${single ? styles.single : ''}`}
      >
        {coments.map(com => (
          <li key={com.comment_ID}>
            <b>{com.comment_author}:</b>
            <span>{com.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={id} setComments={setComents} />}
    </>
  )
}

export default PhotoComments
