import React from 'react'
import Button from '@/components/assets/Button';
import Wrapper from '@/components/assets/Wrapper';
import Image from '@/components/assets/Image';
import Typography from '@/components/assets/Typography';
import Plus from '@/public/Vectors/Plus.svg'
import styles from './buttonModal.module.css'
const ButtonModal = ({onClick}) => {
  return (
    <div className={styles.buttonModal}>
    <Button onClick={onClick}>
        <Wrapper theme='transparent'>
            <Wrapper theme='transparent'>
                <Image src={Plus} alt='add' size='xxs' theme='primary'/>
            </Wrapper>
            <Wrapper theme='transparent'>
                <Typography font='modal'>Add Card</Typography>
            </Wrapper>
        </Wrapper>
    </Button>
    </div>
  )
}

export default ButtonModal