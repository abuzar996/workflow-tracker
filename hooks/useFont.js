import React,{useState,useEffect} from 'react'

export const useFont = (font,styles) => {
    const [fontSize,setFontSize]=useState(null);

    useEffect(()=>{
        if(font==='label'){setFontSize(styles.label)}
        else if(font==='h1'){setFontSize(styles.h1)}
        else if(font==='fade'){setFontSize(styles.fade)}
        else if(font==='info'){setFontSize(styles.info)}
        else if(font==='light'){setFontSize(styles.light)}
        else if(font==='modal'){setFontSize(styles.modal)}
        else if(font==='standard'){setFontSize(styles.standard)}
        else if(font==='normal'){setFontSize(styles.normal)}
        else if(font==='heading'){setFontSize(styles.heading)}
        else if(font==='api'){setFontSize(styles.api)}
        else if(font==='project'){setFontSize(styles.project)}
        else if(font==='inner'){setFontSize(styles.inner)}
        else if(font==='timer'){setFontSize(styles.timer)}
         else if(font==='title'){setFontSize(styles.title)}
        else{setFontSize(null)}
        return ()=>{}
    },[font,styles])
    return fontSize;
}
