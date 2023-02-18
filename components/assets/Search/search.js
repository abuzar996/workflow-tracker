import React from 'react'
import Image from 'next/image'
import styles from './search.module.css';
import searchIcon from '@/public/Vectors/Search.svg'
import Wrapper from '../Wrapper';
const search = ({onChange}) => {
  return (
    <Wrapper size='xxlx' theme='light'>
        <Image  className={styles.imageDiv} alt="" src={searchIcon}/>
        <input className={styles.inputDiv} placeholder='Search' type="text" onChange={onChange}/>
    </Wrapper>
  )
}

export default search