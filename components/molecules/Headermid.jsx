import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'
import AnchorTag from '../atoms/anchorTag'

function Headermid() {
  return (
    
    <div className='flex justify-between pt-[10px] items-center '>
        <div className='flex  list-none items-center gap-[60px]  '>
            <li><AnchorTag variant='Header'>Home</AnchorTag></li>
            <li><AnchorTag variant='Header'>Shop</AnchorTag></li>
            <li><AnchorTag variant='Header'>Blog</AnchorTag></li>
            <li><AnchorTag variant='Header'>Pages</AnchorTag></li>
            <li><AnchorTag variant='Header'>About US</AnchorTag></li>
            <li><AnchorTag variant='Header'>Contact Us</AnchorTag></li>
        </div>
        <div className=''>
            <Paragraph>Call Free Support: <AnchorTag variant='success'>01234567890</AnchorTag></Paragraph>
            
        </div>
    </div>
    
  )
}

export default Headermid