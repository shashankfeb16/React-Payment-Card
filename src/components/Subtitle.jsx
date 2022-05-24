import React from 'react'
import styles from "./card.module.css"
export const Subtitle = ({subheading1,subheading2}) => {
  return (
    <div className={styles.sub}>
        <h1>{subheading1}</h1>
        <h1>{subheading2}</h1>
    </div>
  )
}
