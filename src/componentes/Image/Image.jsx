import React from 'react'
import { useState } from 'react'
import styles from './Image.module.css'

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true)
  function handleLoad(event) {
    event.target.style.opacity = 1
    setSkeleton(false)
  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  )
}

export default Image
