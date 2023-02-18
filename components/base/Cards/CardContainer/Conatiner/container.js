import React from 'react'
import styles from './container.module.css';
const Container = ({children,variable}) => {
  return (
    <div className={variable===true?styles.container:styles.containerFalse}>{children}</div>
  )
}

export default Container