import React, { useCallback, useState } from 'react'

const useFetch = () => {
  const [data, setData] = useState(null)
  const [erro, setErro] = useState(null)
  const [loading, setLoading] = useState(false)

  const request = useCallback(async function (url, options) {
    let response
    let json
    try {
      setErro(null)
      setLoading(true)
      response = await fetch(url, options)
      json = await response.json()
      if (!response.ok) throw new Error(json.message)
      setData(json)
    } catch (error) {
      setErro(error.message)
      json = null
    } finally {
      setLoading(false)
      setData(json)
      return { response, json }
    }
  }, [])

  return { data, erro, loading, request }
}

export default useFetch
