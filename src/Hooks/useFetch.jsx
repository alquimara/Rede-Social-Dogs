import React, { useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [erro, setEroo] = useState(null)
  const [loading, setLoading] = useState(false)

  function request() {}

  return { data, erro, loading, request }
}

export default useFetch
