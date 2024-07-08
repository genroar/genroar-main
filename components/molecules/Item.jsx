import React from 'react'
import AnchorTag from '../atoms/anchorTag'
import { PiBasket } from "react-icons/pi";

function Item() {
  return (
    <div>
      <div className='flex gap-[10px] hover:text-[#ff6a28] border-[1px] border-[#dbdbdb] rounded-[50px] py-[8px] px-[10px] hover:cursor-pointer	'>
        <PiBasket />
        <AnchorTag variant="productName" href='/cart'>2 Items(s)</AnchorTag>
      </div>
    </div>
  )
}

export default Item