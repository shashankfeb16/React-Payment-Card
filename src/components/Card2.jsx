import React from 'react'
import { Bottom } from './Bottom'
import styles from "./card.module.css"
import { Subtitle } from './Subtitle'
import Title from './Title'
import Uppercard from './Uppercard'
import Uppercard2 from './Uppercard2'

 const Card2 = () => {
    const list1 = {
        value: "28/01/11",
        subheading1:"AppleGift",
        subheading2: "Pay",
        device:"MacOs-Mobile"
    }
  return (
    <div className={styles.card2}>
       <Uppercard2  date={list1.value}></Uppercard2>
       <Title></Title>
       <Subtitle subheading1={list1.subheading1} subheading2={list1.subheading2}></Subtitle>
       <Bottom device={list1.device}></Bottom>
    </div>
    
  )
}

export default Card2