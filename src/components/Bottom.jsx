import React from 'react'
import styles from "./card.module.css"

export const Bottom = ({device}) => {
  return (
    <div className={styles.device}>
        <p>{device}</p>
    </div>
  )
}
