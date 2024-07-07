import React from 'react'

function ShopTags({tags}) {
  return (
    <div >
        <a  className='border-[1px] hover:bg-[rgb(255,106,40)] hover:text-white transition-[0.9s] border-gray-200 px-[15px] rounded-[50px] py-[5px]' href="#">{tags}</a>
    </div>
  )
}

export default ShopTags