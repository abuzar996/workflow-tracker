import React from 'react'
import Wrapper from '@/components/assets/Wrapper';
import Image from '@/components/assets/Image';
import PlusIcon from '@/public/Vectors/Plus.svg';
import Search from '@/components/assets/Search';
const SearchContainer = () => {
  return (
    <Wrapper size='xxl' theme='light'>
        <Wrapper size='sm'  theme='primary'>
            <Image src={PlusIcon} alt='plusIcon' size='md'/>
        </Wrapper>
        <Search/>
    </Wrapper>
  )
}

export default SearchContainer