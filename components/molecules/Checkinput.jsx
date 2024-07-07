import React from 'react'
import PropTypes from 'prop-types'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

function Checkinput(props) {
    const { } = props

    return (


        <div className='mt-[20px] w-[49%]'>
            <div className='text-[#ffffff] bg-[#242424] uppercase py-[5px] px-[10px] text-[16px] font-semibold leading-[30px]	'>
                BILLING DETAILS
            </div>
            <div className='in flex flex-col gap-[15px] mt-[10px]'>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-[5px]'>

                        <h2>First Name <span className='text-orange-500'>*</span></h2>

                        <Input
                            variant='ten'
                            type='text'
                            placeholder=''>


                        </Input></div>

                    <div className='flex flex-col gap-[5px]'>
                        <h2>Last Name <span className='text-orange-500'>*</span></h2>
                        <Input
                            variant='ten'
                            type='text'
                            placeholder=''>


                        </Input></div>

                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Company Name</h2>
                    <Input
                        variant='eleven'
                        type='text'
                        placeholder=''>


                    </Input></div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>country <span className='text-orange-500'>*</span></h2>
                    <select name="bangladesh" id="bangladesh" className='w-[100%]  h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-[#ddd] py-[5px]  text-[##747474]  pb-[10px]  overflow-scroll '>
                        <option value="bangladesh">bangladesh</option>
                        <option value="">hello</option>
                        <option value="">hello</option>
                        <option value="">hello</option>
                        <option value="">hello</option>

                    </select>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Street address <span className='text-orange-500'>*</span></h2>
                    <Input
                        variant='eleven'
                        type='text'
                        placeholder='House number and street name'>


                    </Input>
                </div>
                <div> <Input
                    variant='eleven'
                    type='text'
                    placeholder='Apartment, suite, unit etc. (optional)'>


                </Input></div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Town / City <span className='text-orange-500'>*</span></h2>
                    <Input
                        variant='eleven'
                        type='text'
                        placeholder=''>


                    </Input>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>State / County <span className='text-orange-500'>*</span></h2>
                    <Input
                        variant='eleven'
                        type='text'
                        placeholder=''>


                    </Input>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-[5px]'>

                        <h2>Phone <span className='text-orange-500'>*</span></h2>

                        <Input
                            variant='ten'
                            type='text'
                            placeholder=''>


                        </Input></div>

                    <div className='flex flex-col gap-[5px]'>
                        <h2>
                            Email Address<span className='text-orange-500'>*</span></h2>
                        <Input
                            variant='ten'
                            type='text'
                            placeholder=''>


                        </Input></div>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <Input variant='check1'
                        type='checkbox'
                        placeholder='crate'
                        id='check'>

                    </Input>
                    <label htmlFor="check">Create an account?</label>
                </div>
                <div className='flex gap-[10px] items-center'>
                    <Input variant='check1'
                        type='checkbox'
                        placeholder='crate'
                        id='ship'>

                    </Input>
                    <label htmlFor="ship" className='cursor-pointer text-15px bg-black text-white font-semibold leading-[27px]	py-[5px] px-[10px]'>Ship to a different address?</label>
                </div>
                <div className='flex flex-col gap-[5px]'>
                    <h2>Order Notes</h2>
                    <textarea name="" id="" placeholder='Notes about your order, e.g. special notes for delivery.' className='overflow-scroll-x h-[40px] outline-none border-[1px] text-[14px] px-[20px] border-#ddd py-[10px] resize-none text-[#747474]  px-[10px]'></textarea>

                </div>

            </div>
        </div>



    )
}

Checkinput.propTypes = {

}

export default Checkinput
