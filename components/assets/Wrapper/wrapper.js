import React,{useState,useEffect} from "react";
import styles from './wrapper.module.css';
import { useSize } from "@/hooks/useSize";
import { useTheme } from "@/hooks/useTheme";

const Wrapper=({children,size,theme,border})=>{
    
    const wrapperSize=useSize(size,styles);
    const wrapperTheme=useTheme(theme,styles);
    return (
        <div
            className={`${styles.wrapper} ${wrapperSize} ${wrapperTheme} ${border===true?styles.border:null}`}
        >{children}</div>
    )
}
export default Wrapper;