import React,{useState,useEffect} from 'react'

export const useSize = (size,styles) => {
    const [containerSize,setSize]=useState(size);
    useEffect(() => {
      
      if(size==='xxs'){setSize(styles.xxs);}
      else if(size==='xs'){setSize(styles.xs);}
      else if(size==='xxhs'){setSize(styles.xxhs);}
      else if(size==='xsh'){setSize(styles.xsh);}
      else if(size==='lgh'){setSize(styles.lgh);}
      else if(size==='sm'){setSize(styles.sm);}
      else if(size==='smx'){setSize(styles.smx);}
      else if(size==='smh'){setSize(styles.smh);}
      else if(size==='smmh'){setSize(styles.smmh);}
      else if(size==='smmx'){setSize(styles.smmx);}
      else if(size==='lgx'){setSize(styles.lgx);}
      else if(size==='lgxh'){setSize(styles.lgxh);}
      else if(size==='lggh'){setSize(styles.lghh);}
      else if(size==='md'){setSize(styles.md);}
      else if(size==='mdh'){setSize(styles.mdh);}
       else if(size==='mddh'){setSize(styles.mddh);}
      else if(size==='mdx'){setSize(styles.mdx);}
      else if(size==='lg'){setSize(styles.lg);}
      else if(size==='xl'){setSize(styles.xl);}
      else if(size==='xlh'){setSize(styles.xlh);}
      else if(size==='xxl'){setSize(styles.xxl);}
      else if(size==='xxlx'){setSize(styles.xxlx);}
      else{setSize(null)}
      return () => {
      }
    }, [size,styles])
    return containerSize;
}
