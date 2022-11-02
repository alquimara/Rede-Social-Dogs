import React, { useContext, useState } from 'react'

import { UserContext } from '../../Context/useContext'
import PhotoCommentsForm from './PhotoCommentsForm'

const PhotoComments = ({ id, comments }) => {
  const [coments, setComents] = useState(() => comments)
  const { login } = useContext(UserContext)
  return (
    <>
      <ul className="comentario">
        {coments.map(com => (
          <li key={com.comment_ID}>
            <b>
              {com.comment_author}:<span>{com.comment_content}</span>
            </b>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={id} setComments={setComents} />}
    </>
  )
}

export default PhotoComments
