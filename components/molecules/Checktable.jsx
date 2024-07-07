import React from 'react'
import Input from '../atoms/Input'

function Checktable() {
    return (


        <div className="mt-[20px] w-[49%]">
            <div className=''>
                <div className='text-[#ffffff] bg-[#242424] uppercase py-[5px] px-[10px] text-[16px] font-semibold leading-[30px]	'>
                    YOUR ORDER

                </div>
                <div>
                    <table className='table mt-[10px]'>
                        <thead className='bg-[rgb(242,242,242)] h-[50px] w-[100%] text-[13px] font-bold text-[#747474] leading-[24px]'>
                            <tr >
                                <th className='py-[15px] w-[100%] '>Product</th>
                                <th className='py-[15px] '>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-t  border-r py-[15px] px-[45px] '>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t  border-r py-[15px] px-[103px] '>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t  border-r py-[15px] px-[45px] '>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t  border-r py-[15px] px-[103px] '>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t  border-r py-[15px] px-[45px] '>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t  border-r py-[15px] px-[103px] '>$165.00</td>
                            </tr>
                            <tr>
                                <td className='border-t  border-r py-[15px] px-[45px] '>Handbag Fringilla <strong>× 2</strong></td>
                                <td className='border-t  border-r py-[15px] px-[103px] '>$165.00</td>
                            </tr>
                        </tbody>
                        <tfoot className=' text-[rgb(120, 130, 153)]  '>
                            <tr>
                                <th className='border-t  py-[15px] px-[67px]'>Cart Subtotal</th>
                                <td className='border-t  py-[15px] px-[103px]'>$215.00</td>
                            </tr>
                            <tr>
                                <th className='border-t  py-[15px] px-[103px]'>Shipping</th>
                                <th className='border-t  py-[15px] px-[103px]'>$215.00</th>
                            </tr>
                            <tr>
                                <th className='border-t border-b py-[15px] px-[103px]'>Shipping</th>
                                <th className='border-t  border-b py-[15px] px-[103px]'>$215.00</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className='flex gap-[10px] items-center mt-[40px]'>
                    <Input variant='check'
                        type='radio'
                        placeholder=''
                        id='radio'>

                    </Input>
                    <label htmlFor="radio">Create an account?</label>
                </div>
                <div className='flex gap-[10px] items-center mt-[20px]'>
                    <Input variant='check'
                        type='radio'
                        placeholder=''
                        id='pay'>

                    </Input>
                    <label htmlFor="pay" className='flex items-center'>PayPal <img src="/assits/images/papyel.webp" alt="" width={160} /></label>
                </div>
                <div className=" px-[2px] py-[10px] text-white w-[40%] text-center mt-[20px] bg-[#ff6a28] hover:bg-[black] hover:cursor-pointer transform transition 0.7s ease-in uppercase font-semibold text-[18px] leading-30px">
                    <button type="submit">Proceed to PayPal</button>
                </div>
            </div>

        </div>

    )
}

export default Checktable