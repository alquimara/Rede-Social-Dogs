import { lazy, React, useEffect } from 'react'
import Head from '../Head/Head'
import useFetch from '../../Hooks/useFetch'
import Erro from '../Erro/Erro'
import Loading from '../Loading/Loading'
import { STATS_GET } from '../../api/Api'
import { Suspense } from 'react'

const UserStatsGraphs = lazy(() => import('./UserStatisGraph/UserStatsGraphs'))

const UserStatis = () => {
  const { data, loading, erro, request } = useFetch()

  useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token')
      const { url, options } = STATS_GET(token)
      await request(url, options)
    }
    getData()
  }, [request])
  if (erro) return <Erro erro={erro} />
  if (loading) return <Loading />
  if (data)
    return (
      <section>
        <Suspense>
          <Head title="Estatísticas" />
          <UserStatsGraphs data={data} />
        </Suspense>
      </section>
    )
  else return null
}

export default UserStatis
