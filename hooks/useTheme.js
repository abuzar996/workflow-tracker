import React,{useState,useEffect} from 'react'

export const useTheme = (theme,styles) => {
    
    const [containerTheme,setTheme]=useState(null);

    useEffect(()=>{
        if(theme==='primary'){setTheme(styles.primary)}
        else if(theme==='secondary'){setTheme(styles.secondary)}
        else if(theme==='danger'){setTheme(styles.danger)}
        else if(theme==='info'){setTheme(styles.info)}
        else if(theme==='light'){setTheme(styles.light)}
        else if(theme==='opaque'){setTheme(styles.opaque)}
        else if(theme==='orange'){setTheme(styles.orange)}
        else if(theme==='violet'){setTheme(styles.violet)}
        else if(theme==='transparent'){setTheme(styles.transparent)}
        else if(theme==='red'){setTheme(styles.red)}
         else if(theme==='yellow'){setTheme(styles.yellow)}
          else if(theme==='pink'){setTheme(styles.pink)}
        
        else{setTheme(null)}
        return ()=>{}
    },[theme,styles])
    return containerTheme;
}
