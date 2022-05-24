import React from 'react'
import { Bottom } from './Bottom'
import styles from "./card.module.css"
import { Subtitle } from './Subtitle'
import Title from './Title'
import Uppercard from './Uppercard'

 const Card = () => {
    const list1 = {
        value: "26/01/11",
        subheading1:"Amazon Gift",
        subheading2: "Pay",
        device:"Desktop-Mobile"
    }
  return (
    <div className={styles.card}>
       <Uppercard  date={list1.value}></Uppercard>
       <Title></Title>
       <Subtitle subheading1={list1.subheading1} subheading2={list1.subheading2}></Subtitle>
       <Bottom device={list1.device}></Bottom>
    </div>
    
  )
}

export default Card
