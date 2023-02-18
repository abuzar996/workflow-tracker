import React from 'react'
import Styles from './header.module.css';
import Wrapper from '@/components/assets/Wrapper'
import Typography from '@/components/assets/Typography'
import Line from '@/components/assets/Line';
import Ellipse from '@/components/assets/EllipseWrapper';
import EllipseNotifier from '@/components/assets/EllipseNotifier/ellipseNotifier';

import Image from '@/components/assets/Image';
import Workflow from '@/public/Vectors/Workflow.svg';
import Code from '@/public/Vectors/Code.svg';
import Design from '@/public/Vectors/Design.svg';
import Annoucement from '@/public/Vectors/Annoucement.svg';
import Pinned from '@/public/Vectors/Pinned.svg';
import Double from '@/public/Vectors/Double_file.svg';
import Save from '@/public/Vectors/Save.svg';
import Filter from '@/public/Vectors/Filter.svg';
import Sort from '@/public/Vectors/Sort.svg';

import MyImage from '@/public/Images/abuzar.jpg';
import Jhon from '@/public/Images/jhon.jpg';
import Alice from '@/public/Images/alice.jpg';
import Bob from '@/public/Images/bob.jpg';

const Header = () => {
  return (
    <div className={Styles.header}>
        <Wrapper theme='light'>
            <Wrapper theme='light'>
                <Typography font='h1'>
                        Workflow
                </Typography>
            </Wrapper>
            <Wrapper theme='light'>
                <Wrapper theme='light'>
                    <Ellipse size='md' theme='opaque'>
                        <Image src={Workflow} alt='Workflow' size='xxs' theme='opaque'/>
                    </Ellipse>
                    <Ellipse size='md' theme='secondary'>
                        <Image src={Design} alt='Design' size='xxs' theme='none'/>
                    </Ellipse>
                    <Ellipse size='md' theme='opaque'>
                        <Image src={Code} alt='Code' size='xxs' theme='opaque'/>
                    </Ellipse>
                    <Ellipse size='md' theme='opaque'>
                        <Image src={Annoucement} alt='Annoucement' size='xxs' theme='opaque'/>
                    </Ellipse>
                </Wrapper>
                <Line></Line>
                <Wrapper theme='light' >
                    <EllipseNotifier value='2'>
                         <Image src={MyImage} alt='myImage' size='md'/>
                    </EllipseNotifier>
                    <EllipseNotifier value='5'>
                         <Image src={Jhon} alt='myImage' size='md'/>
                    </EllipseNotifier>
                    <EllipseNotifier value='1'>
                         <Image src={Alice} alt='myImage' size='md'/>
                    </EllipseNotifier>
                    <EllipseNotifier value='4'>
                         <Image src={Bob} alt='myImage' size='md'/>
                    </EllipseNotifier>
                </Wrapper>
            </Wrapper>
        </Wrapper>
        <Wrapper  theme='light'>
            <Wrapper border={true} theme='light'>
                <Image src={Pinned} alt='myImage' size='xs'/>
            </Wrapper>
            <Wrapper  border={true} theme='light'>
                <Image src={Double} alt='myImage' size='xs'/>
            </Wrapper>
            <Wrapper border={true} theme='light'>
                <Wrapper theme='light'>
                    <Image src={Save} alt='myImage' size='xs'/>
                </Wrapper>
                <Typography font='normal'>
                    Views
                </Typography>
            </Wrapper>
            <Wrapper  border={true} theme='light'>
                <Wrapper theme='light'>
                    <Image src={Filter} alt='myImage' size='xs'/>
                </Wrapper>
                <Typography font='normal'>
                    Filter
                </Typography>
            </Wrapper>
            <Wrapper border={true} theme='light'>
                <Wrapper theme='light'>
                    <Image src={Sort} alt='myImage' size='xs'/>
                </Wrapper>
                <Typography font='normal'>
                    Sort By
                </Typography>
            </Wrapper>
        </Wrapper>
    </div>
  )
}

export default Header