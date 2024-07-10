import React from 'react'
import AnchorTag from '../atoms/anchorTag'

function Headerlogin() {
  return (
    <div>
        <div className="flex gap-[7px]">
            <AnchorTag variant="login">Login</AnchorTag>
            <span className='text-[12px] text-[#747474]'>/</span>
            <AnchorTag variant="login"> Register</AnchorTag>
        </div>
    </div>
  )
}

export default Headerlogin