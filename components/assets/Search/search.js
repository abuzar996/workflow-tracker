import React from 'react'
import Image from 'next/image'
import styles from './search.module.css';
import searchIcon from '@/public/Vectors/Search.svg'
const search = ({onChange}) => {
  return (
    <div className={styles.searchContainer}>
        <Image  className={styles.imageDiv} alt="" src={searchIcon}/>
        <input className={styles.inputDiv} placeholder='Search' type="text" onChange={onChange}/>
    </div>
  )
}

export default search