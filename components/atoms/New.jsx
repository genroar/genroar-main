import React from 'react'
import Button from './Button'
import { BsFillBasket2Fill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa";

function New() {
  return (
    <div className='relative w-[260px] overflow-hidden'>
      <img className='w-[100%]' src="/assits/images/product1bg.png" alt="image" />
      <div className="absolute  top-0 opacity-0 transition 0.5s ease-in hover:opacity-[100%]"><img className='w-[100%]' src="/assits/images/product1.webp" alt="" />
        <div className=" absolute top-[10px] right-[10px] w-[50px] h-[50px] bg-white text-[#666] flex items-center justify-center text-[14px]"><FaPlus /></div>
        <div className=" absolute opacity-0 hover:opacity-[100%] top-[20px] right-[10px] w-[50px] h-[80px] bg-white text-[#666] flex flex-col divide-y justify-center  transition 0.5s ease-in cursor-pointer"><BsFillBasket2Fill  className='w-[20px] h-[15px] mt-[-5px] ' /><FaRegHeart className='w-[20px] h-[15px] py-[5px]  ' /><HiOutlineAdjustmentsHorizontal className='w-[20px] h-[15px] pt-[5px] ' /></div>
        <Button variant='shop-proButton'> + Quick View </Button>
      </div>
    </div>
  )
}

export default New