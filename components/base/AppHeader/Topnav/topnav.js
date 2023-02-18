import React from 'react';
import ProfileSelector from '../ProfileSelector';
import NotificationManager from '../NotificationManager';
import styles from './topnav.module.css'
import SearchContainer from '../SearchContainer';
import Image from '@/components/assets/Image';
import Wrapper from '@/components/assets/Wrapper';
import Suggestions from '@/public/Vectors/Suggestions.svg'
const topnav = () => {
  return (
    <div className={styles.nav}>
        <ProfileSelector/>
        <Wrapper size='sm' theme='light'>
          <Image src={Suggestions} alt='Suggestions' size='md'></Image>
        </Wrapper>
        <SearchContainer/>   
        <NotificationManager/>
    </div>
  )
}

export default topnav;