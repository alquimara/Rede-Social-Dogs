import React, { useEffect, useState } from 'react'
import styles from './UserStatisGraph.module.css'

const UserStatsGraphs = ({ data }) => {
  const [statsGraph, setStatsGraph] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, acessos) => acc + acessos)
    )
  }, [data])
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={styles.total}>
        <p>Acessos:{total}</p>
      </div>
    </section>
  )
}

export default UserStatsGraphs
