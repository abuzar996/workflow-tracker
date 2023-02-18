import React from 'react'
import styles from './card.module.css';
import Wrapper from '@/components/assets/Wrapper';
import Ellipse from '@/components/assets/EllipseWrapper';
import Typography from '@/components/assets/Typography';
import Image from '@/components/assets/Image';
import FileCheck from '@/public/Vectors/FileCheck.svg'
import Description from '@/public/Vectors/Description.svg';
import Message from '@/public/Vectors/Message.svg';
import CheckList from '@/public/Vectors/Checklist.svg';
import Link from '@/public/Vectors/Link.svg';

import Jhon from '@/public/Images/jhon.jpg'
const Card = ({project,title,tags,messages,links,checkList}) => {
  return (
    <div className={styles.card}>
        <div className={styles.wrap}>
        
        <Wrapper theme='light'>
            {project?
            <Wrapper theme='light'>
                <Wrapper theme='light'>
                    <Ellipse theme='red' size='xxs'/>
                </Wrapper>
                <Wrapper theme='light'>
                    <Typography font='project'>{project}</Typography>
                </Wrapper>
            </Wrapper>
            :null}
             <Wrapper theme='light'>
                <Wrapper theme='light'>
                    <Image size='smh' src={FileCheck} alt='img'/>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        </div>
        <div className={styles.wrap}>
        <Wrapper theme='light'>
            <Wrapper theme='light'>
                <Typography font='heading'>{title}</Typography>
            </Wrapper>
        </Wrapper>
        </div>
         <div className={styles.wrap}>
        <Wrapper theme='light'>
            <Wrapper theme='yellow'>
                <Typography font='api'>{tags?tags[0]:null}</Typography>
            </Wrapper>
            <Wrapper theme='pink'>
                <Typography font='heading'>{tags?tags[1]:null}</Typography>
            </Wrapper>
        </Wrapper>
        </div>
        <div  className={styles.wrap}>
        <Wrapper theme='light'>
            <Wrapper theme='light'>
                <Wrapper theme='light'>
                    <Image src={Description} alt='des' size='smh'/>
                </Wrapper>
                {messages?messages>0?
                <Wrapper theme='light'>
                    
                    <Wrapper theme='light'>
                        <Image src={Message} alt='des' size='smh'/>
                    </Wrapper>
                     <Wrapper theme='light'>
                        <Typography font='inner'>{messages}</Typography>
                    </Wrapper>
                    
                </Wrapper>
                :null:null}
                {checkList?
                <Wrapper theme='light'>
                    <Wrapper theme='light'>
                        <Image src={CheckList} alt='des' size='smh'/>
                    </Wrapper>
                     <Wrapper theme='light'>
                        <Typography font='inner'>8/9</Typography>
                    </Wrapper>
                    
                </Wrapper>
                :null}
                 {links?links>0?
                 <Wrapper theme='light'>
                    <Wrapper theme='light'>
                        <Image src={Link} alt='des' size='smh'/>
                    </Wrapper>
                     <Wrapper theme='light'>
                        <Typography font='inner'>2</Typography>
                    </Wrapper>
                </Wrapper>
                :null:null}
            </Wrapper>
        
        </Wrapper>
        </div>
        <div className={styles.wrap}>
        <Wrapper theme='light'>
            <Wrapper theme='opaque'>
                <div className={styles.styledDiv}>
                <Typography font='timer'>Created 3 days ago</Typography>
                </div>
            </Wrapper>
            <Wrapper theme='light'>
                <Ellipse size='sm' theme='light'>
                    <Image src={Jhon} alt='Image' size='xxs'/>
                </Ellipse>
            </Wrapper>
        </Wrapper>
        </div>
    </div>
  )
}

export default Card