import React,{useState,useEffect} from 'react'
import styles from './button.module.css';
import './button.module.css';
import { useSize } from "@/hooks/useSize";
import { useTheme } from "@/hooks/useTheme";
const Button = ({children,size,theme,onClick}) => {
    const btnSize=useSize(size,styles);
    const btnTheme=useTheme(theme,styles);
  return (
    <button 
        className={`${styles.button} ${btnSize} ${btnTheme}`}
        onClick={onClick}
    >{children}</button>
  )
}

export default Button;