import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhotoComments from './PhotoComments'
import { ContainerPhotoContent } from './Style'

const PhotoContent = ({ data }) => {
  const { photo, comments } = data
  return (
    <ContainerPhotoContent>
      <div className="photo">
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className="details">
        <div>
          <p className="author">
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className="visualizacao">{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul>
            <li>{photo.peso} Kg</li>
            <li>
              {photo.idade} {`${photo.idade <= 1 ? 'ano' : 'anos'}`}
            </li>
          </ul>
        </div>
        <PhotoComments id={photo.id} comments={comments} />
      </div>
    </ContainerPhotoContent>
  )
}

export default PhotoContent
