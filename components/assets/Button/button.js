import React,{useState,useEffect} from 'react'
import styles from './button.module.css';
import './button.module.css';
const Button = ({children,size,color}) => {
    const [className, setClassName] =useState(null);
  
  return (
    <button 
        className={className}
    >{children}</button>
  )
}

export default Button;