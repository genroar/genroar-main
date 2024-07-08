import React from 'react'
import Paragraph from '../atoms/Paragraph'
import AnchorTag from '../atoms/anchorTag'

function Headermid() {
  return (
    
    <div className='flex justify-between pt-[10px] items-center '>
        <div className='flex  list-none items-center gap-[60px]  '>
            <li><AnchorTag variant='Header' href='/'>Home</AnchorTag></li>
            <li><AnchorTag variant='Header' href='/'>Shop</AnchorTag></li>
            <li><AnchorTag variant='Header' href='/'>Pages</AnchorTag>
             <ul className='dropdown border absolute opacity-5 z-0 invisible pr-[100px] pl-[30px]  '>
              <li><AnchorTag variant='Headerh' href='/'> About Us</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Services</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Login</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>My Account</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Error 404</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Compare</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Privacy Policy</AnchorTag></li>
              <li><AnchorTag variant='Headerh' href='/'>Coming Soon</AnchorTag></li>
             </ul>
            </li>
            <li><AnchorTag variant='Header' href='/about'>About US</AnchorTag></li>
            <li><AnchorTag variant='Header' href='/contact'>Contact Us</AnchorTag></li>
        </div>
        <div className=''>
            <Paragraph>Call Free Support: <AnchorTag variant='success'>01234567890</AnchorTag></Paragraph>
            
        </div>
    </div>
    
  )
}

export default Headermid