import React from 'react'
import Wrapper from '@/components/assets/Wrapper';
import Typography from '@/components/assets/Typography';
import Image from '@/components/assets/Image';

import Filter from '@/public/Vectors/Filter.svg'
import Sort from '@/public/Vectors/Sort.svg';
import Menu from '@/public/Vectors/Menu.svg';

import styles from './header.module.css';
const Header = ({Title,size}) => {
  return (
    
    <Wrapper theme ='opaque'>
        <Wrapper theme ='opaque'>
            <Wrapper theme='opaque'>
                <Wrapper theme={'opaque'}>
                    <Typography font='standard'>{Title}</Typography>
                </Wrapper>
                <Wrapper theme={'opaque'}>
                    <Typography font='fade'>(<span>{size}</span>)</Typography>
                </Wrapper>
            </Wrapper>
            <Wrapper theme='opaque'>
                <Wrapper theme ='opaque'>
                    <Image src={Filter} alt='img' size='smh' theme='opaque'/>
                </Wrapper>
                <Wrapper theme ='opaque'>
                    <Image src={Sort} alt='img' size='smh' theme='opaque'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper theme='opaque'>
              <Wrapper theme ='opaque'>
                    <Image src={Menu} alt='img' size='smh' theme='opaque'/>
                </Wrapper>
        </Wrapper>
    </Wrapper>
  )
}

export default Header