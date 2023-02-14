import Search from "@/components/assets/Search";
import Button from "@/components/assets/Button";
import Image from 'next/image'
import plusIcon from '@/public/Vectors/Plus.svg';

import React,{useState} from 'react'

const AppLayout = ({children}) => {
  const [searchText,setSearchText] = useState('');
  return (
    <>
        <Search onChange={(e)=>{setSearchText(e.target.value)}}/>
        <Button size='lg' color='light'>Clear</Button>
        <main>{children}</main>
    </>
  )
}
export default AppLayout;