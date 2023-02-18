import React from 'react'
import styles from './workflowBody.module.css';
const WorkflowBody = ({children}) => {
  return (
    <div className={styles.body}>{children}</div>
  )
}

export default WorkflowBody