import React,{useState,useEffect} from 'react'
import styles from './button.module.css';
import './button.module.css';
const Button = ({children,size,color}) => {
    const [className, setClassName] =useState(null);
    useEffect(()=>{
        if(size==='md')
        {
            setClassName(styles.buttonContainerMd)
        }
        else if(size==='sm')
        {
            setClassName(styles.buttonContainerSm)
        }
        else if(size==='lg' && color==='dark')
        {
            setClassName(styles.buttonContainerDarklg)
        }
        else if(size==='lg' && color==='light')
        {
            setClassName(styles.buttonContainerLightlg)
        }
        else if(size==='xl' && color==='dark')
        {
            setClassName(styles.buttonContainerDarkxl)
        }
        else if(size==='xl' && color==='light')
        {
            setClassName(styles.buttonContainerDarkRedlg)
        }
        return ()=>{}
    },[size,color])
  return (
    <button 
        className={className}
    >{children}</button>
  )
}

export default Button;