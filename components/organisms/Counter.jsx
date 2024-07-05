import React from 'react'
import Counter3 from '../molecules/Counter3'
import { CiLocationArrow1 } from "react-icons/ci";
import { FaPersonBurst } from "react-icons/fa6";
import { FaWineGlass } from "react-icons/fa";
import { IoAlarm } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import Container from '../atoms/Container';

function Counter() {
  return (
    <Container>
    <div className='w-[100%] flex gap-[20px]'>
        <div className="w-[24%] ">
        <Counter3 targetCount={2140} startCount={154} icon={<FaPersonBurst className='text-[30px]' />} contant={"Happy customer"}/>
        </div>
        <div className="w-[24%]">
        <Counter3 targetCount={8080} startCount={154} icon={<FaWineGlass className='text-[30px]' />} contant={"AWARDS WON"} />
        </div>
        <div className="w-[24%]">
        <Counter3 targetCount={2150} startCount={154} icon={<IoAlarm  className='text-[30px]' />} contant={"HOURS WORKED"}/>
        </div>
        <div className="w-[24%]">
        <Counter3 targetCount={2170} startCount={154} icon={<BiSolidLike  className='text-[30px]' />} contant={"COMPLETE PROJECTS"}/>
        </div>
    </div>
    </Container>
  )
}

export default Counter