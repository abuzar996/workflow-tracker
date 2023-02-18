import React,{useEffect,useState} from 'react';
import styles from './ellipse.module.css';
import { useSize } from "@/hooks/useSize";
import { useTheme } from "@/hooks/useTheme";
const Ellipse = ({children,size, theme,onClick}) => {

  const ellipseSize=useSize(size,styles);
  const ellipseTheme=useTheme(theme,styles);

  
  return (
    <div 
        className={`${styles.ellipse} ${ellipseSize} ${ellipseTheme}`}
        onClick={onClick}
    >{children}</div>
  )
}

export default Ellipse;