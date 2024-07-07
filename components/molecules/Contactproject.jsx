import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Input from '../atoms/Input'
import Label from '../atoms/Label'
import Button from '../atoms/Button'

function Contactproject() {
    return (
        <div className='w-[100%]'>
            <div className='py-[6%]'>
                <Heading level='3'>Tell Us Your Project</Heading>
            </div>

            <div className='pt-[20px]'>
                <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                    <Label>
                        Your Name (required)
                    </Label>
                </div>
                <Input variant='five' type='text' placeholder='Name*' />
            </div>

            <div className='pt-[20px]'> 
                <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                    <Label>
                        Your Email (required)
                    </Label>
                </div>
                <Input variant='five' type='email' placeholder='Email*' />
            </div>

            <div className='pt-[20px]'>
                <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                    <Label>
                        Subject
                    </Label>
                </div>
                <Input variant='five' type='email' placeholder='Subject*' />
            </div>

            <div className='pt-[20px]'>
                <div className='font-[600] text-[14px] mb-[10px] text-[#242424]'>
                    <Label>
                        Subject
                    </Label>
                </div>
                <textarea name='mytext' placeholder='Message' className='h-[170px] w-[100%] text-[#747474] border-[#cacaca] p-[15px] text-[14px]   border-[1px] outline-none'></textarea>
            </div>
            <div className='pt-[6%]'>
                <Button variant='contact'> send</Button>
            </div>
        </div>
    )
}

export default Contactproject