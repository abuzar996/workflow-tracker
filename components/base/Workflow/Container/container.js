import React from 'react'
import styles from './container.module.css';
import CardContainer from '../../Cards/CardContainer/CardBody';
import CardList from '../../Cards/CardList';
import {List,options,List2,List3} from '@/constants/cardData';
const Container = () => {
  return (
    <div className={styles.container}>
        <div className={styles.boxes}>
             <CardContainer key="1" variable={true} options={options} title='Backlog' size={List2.length}>
              <CardList key="Backlog CardList" List={List2}/>
            </CardContainer>
        </div>
          <div className={styles.boxes}>
             <CardContainer key="1" variable={true} options={options} title='To Do' size={List2.length}>
              <CardList key="Backlog CardList" List={List2}/>
            </CardContainer>
        </div>
         <div className={styles.boxes}>
             <CardContainer key="1" variable={true} options={options} title='In Process' size={List2.length}>
              <CardList key="Backlog CardList" List={List}/>
            </CardContainer>
        </div>
         <div className={styles.boxes}>
             <CardContainer key="1" variable={true} options={options} title='In Review' size={List2.length}>
              <CardList key="Backlog CardList" List={List2}/>
            </CardContainer>
        </div>
         <div className={styles.boxes}>
             <CardContainer key="1" variable={false} options={options} title='Completed' size={List2.length}>
              <CardList key="Backlog CardList" List={List}/>
            </CardContainer>
        </div>
    </div>
  )
}

export default Container