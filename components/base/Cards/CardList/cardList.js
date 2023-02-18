import React from 'react'
import styles from './cardList.module.css';
import Card from '../Card';

const CardList = ({List}) => {

  return (

    <div>
        {List.map((list)=>(
            <Card key={list.id} {...list}/>
        ))}
    </div>
  )
}

export default CardList