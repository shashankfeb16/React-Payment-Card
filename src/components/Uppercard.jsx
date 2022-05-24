import React from 'react'
import styles from "./card.module.css"
import logo1 from "../img/amazonlogo.png"
const Uppercard = ({date}) => {
    return (
        <div className={styles.date}>
            <p>{date}</p>
            <img src={logo1}alt="" className={styles.logo1} />

        </div>
    )
}

export default Uppercard
