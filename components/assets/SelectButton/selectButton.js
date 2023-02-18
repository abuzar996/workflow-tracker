import React, { useEffect, useState } from 'react'
import Typography from '../Typography';
import styles from './selectButton.module.css';
const SelectButton = ({options}) => {
    
    //const [allOptions,setOptions]=useState(['Select a project'])
    // useEffect(()=>{
    //     if(options)
    //     {
            
    //         setOptions(allOptions.concat(options));
    //     }
    // },[options,allOptions])
  return (
   
        <select className={styles.selectButton}>
            {options?.map((option,id)=>(
                
                <option value={option} key={id} className={styles.options}>
                    {option}
                </option>
                
            ))}
            
            
        </select>
  
  )
}

export default SelectButton