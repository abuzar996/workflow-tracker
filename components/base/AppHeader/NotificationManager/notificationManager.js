import React from 'react';
import Wrapper from '@/components/assets/Wrapper';
import Ellipse from '@/components/assets/EllipseWrapper';
import Image from '@/components/assets/Image';
import Announcement from '@/public/Vectors/Annoucement.svg'
import Calendar from '@/public/Vectors/Calendar.svg';
import ChatAlert from '@/public/Vectors/ChatAlert.svg';
import myImage from '@/public/Images/abuzar.jpg';
const NotificationManager = () => {
  return (
    <Wrapper size='xl' theme='light'>
        <Wrapper size='sm' theme='light'>
            <Image src={Announcement} alt='Announcement' size='xs'/>
        </Wrapper>
         <Wrapper size='sm' theme='light'>
             <Image src={Calendar} alt='Calender' size='xs'/>
        </Wrapper>
         <Wrapper size='sm' theme='light'>
            <Image src={ChatAlert} alt='ChatAlert' size='xs'/>
        </Wrapper>
        <Ellipse size='xl' theme='light'>
            <Image src={myImage} alt='abuzar' size='lg'/>
        </Ellipse>
    </Wrapper>
  )
}

export default NotificationManager