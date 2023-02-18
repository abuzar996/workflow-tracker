import React from 'react'
import Wrapper from '@/components/assets/Wrapper';
import Ellipse from '@/components/assets/EllipseWrapper';
import styles from './profileSelector.module.css';
import Line from '@/components/assets/Line';
import Image from '@/components/assets/Image';
import Arrow_Chevron from '@/public/Vectors/Arrow.svg';
import Typography from '@/components/assets/Typography';
import myImage from '@/public/Images/abuzar.jpg';
import myImage2 from '@/public/Images/abuzar2.jpg';

const ProfileSelector = () => {
  return (

          <Wrapper size='xl' theme ="light">
          <Wrapper size='mdx' theme="opaque">
            <Wrapper size='lgx' theme="opaque">
                <Wrapper size='smx' theme='opaque'>
                    <Ellipse size='md' theme='light'>
                    <Image
                            size='md'
                             src={myImage2} alt='abuzar'/>
                    </Ellipse> 
                     <Wrapper size='xxs' theme='orange'>
                        <Typography font='label'>15</Typography>
                     </Wrapper>
                </Wrapper>
                <Line></Line>
                <Wrapper size='smx' theme='opaque'>
                    <Ellipse size='md' theme='light'>
                        <Image
                            size='md'
                             src={myImage} alt='abuzar'/>
                    </Ellipse> 
                     <Wrapper size='xxs' theme='violet'>
                        <Typography font='label'>11</Typography>
                     </Wrapper>
                </Wrapper> 
            </Wrapper> 
          </Wrapper> 
            <Wrapper size='smmx' theme='light'>
               
               <Image

               src={Arrow_Chevron} alt='Arrow'/>
            </Wrapper>
        </Wrapper>

  )
}

export default ProfileSelector