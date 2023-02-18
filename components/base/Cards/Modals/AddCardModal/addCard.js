import React from 'react'
import Wrapper from '@/components/assets/Wrapper'
import Button from '@/components/assets/Button'
import Typography from '@/components/assets/Typography'
import styles from './addCard.module.css';
import Image from '@/components/assets/Image';
import Close from '@/public/Vectors/Close.svg'
import SelectButton from '@/components/assets/SelectButton';
const AddCard = ({onClick,options}) => {
  return (
    <div>
        <div className={styles.line}></div>
        <div className={styles.card}>
            <Wrapper>
                <Wrapper>
                    <Typography font='title'>Card Title</Typography>
                </Wrapper>
                <Wrapper>
                    <Image onClick={onClick} src={Close} alt='close' size='smh'/>
                </Wrapper>
            </Wrapper>
           
        </div>
        <div className={styles.card2}>
            <Wrapper>
               <input type="text" placeholder='Enter Card Name' className={styles.input}/>
            </Wrapper>
        </div>
        <div className={styles.card}>
            <Wrapper>
                <div className={styles.selectButton}>
                    <Wrapper>
                        <SelectButton options={options}/>
                    </Wrapper>
                </div>
               <div >
                    <Wrapper>
                        <Button theme={'primary'}>Add</Button>
                    </Wrapper>
                </div>
            </Wrapper>
        </div>
    </div>
  )
}

export default AddCard