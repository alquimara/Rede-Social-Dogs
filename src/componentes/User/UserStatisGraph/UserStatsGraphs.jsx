import React, { useEffect, useState } from 'react'
import styles from './UserStatisGraph.module.css'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

const UserStatsGraphs = ({ data }) => {
  const [statsGraph, setStatsGraph] = useState([])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((acc, acessos) => acc + acessos)
    )
    setStatsGraph(
      data.map(item => {
        return {
          x: item.title,
          y: item.acessos
        }
      })
    )
  }, [data])
  return (
    <section className={`animeLeft ${styles.graph}`}>
      <div className={`${styles.total} ${styles.graphItem}`}>
        <p>Acessos:{total}</p>
      </div>
      <div className={styles.graphItem}>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          data={statsGraph}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: '#fff',
              strokeWidth: 2
            },

            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className={styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment="start" data={statsGraph} />
        </VictoryChart>
      </div>
    </section>
  )
}

export default UserStatsGraphs
