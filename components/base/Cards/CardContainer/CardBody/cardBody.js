import React, { useState } from 'react'
import styles from './cardBody.module.css';
import Header from '../Header';
import ButtonModal from '../../Modals/ButtonModal';
import AddCard from '../../Modals/AddCardModal';
import Container from '../Conatiner';
import Wrapper from '@/components/assets/Wrapper';
const CardBody = ({children,variable,title,size,options}) => {
  console.log(options);
  const [addModal,setAddModal]=useState(false)
  function onClick(){
    setAddModal(!addModal)
  }
  return (
    <div className={styles.cardbody}>
      
      <Header Title={title} size={size}/>
      
      <Container variable={variable}>
          {children}
      </Container>
      
      {
        variable===true?
      
        addModal===true?
        <AddCard  options={options}  onClick={onClick}/>:
        <ButtonModal onClick={onClick}/>
        :null
      }
      
     
    </div>
  )
}

export default CardBody