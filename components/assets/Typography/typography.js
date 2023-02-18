import React from 'react'
import styles from './typography.module.css';
import { useFont } from '@/hooks/useFont';
const Typography = ({children,font}) => {
const fontStyle=useFont(font,styles);
  return (
    <div className={fontStyle}>{children}</div>
  )
}

export default Typography