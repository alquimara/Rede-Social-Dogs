import React, { useEffect, useState } from 'react'

const useMediaQuery = media => {
  const [isMediaQuery, setIsMediaQuery] = useState(null)
  useEffect(() => {
    function changeIsMediauery() {
      const { matches } = window.matchMedia(media)
      setIsMediaQuery(matches)
    }
    changeIsMediauery()
    window.addEventListener('resize', changeIsMediauery)
    return () => window.removeEventListener('resize', changeIsMediauery)
  }, [media])

  return isMediaQuery
}

export default useMediaQuery
