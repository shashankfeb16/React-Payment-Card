import React from 'react'
import styles from "./card.module.css"
import logo2 from "../img/applelogo.png"
const Uppercard2 = ({date}) => {
    return (
        <div className={styles.date}>
            <p>{date}</p>
            <img src={logo2}alt="" className={styles.logo1} />

        </div>
    )
}

export default Uppercard2
