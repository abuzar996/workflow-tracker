import React from 'react'
import Image from 'next/image'
import styles from './image.module.css';
import { useSize } from '@/hooks/useSize';
import { useTheme } from '@/hooks/useTheme';
const CustomImage = ({src,alt,size,theme,onClick}) => {
  const ImageSize=useSize(size,styles);
  const ImageTheme=useTheme(theme,styles);

  return (
    <Image onClick={onClick} className ={`${ImageSize} ${ImageTheme}`} src={src} alt={alt}/>
  )
}

export default CustomImage