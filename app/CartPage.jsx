'use client'
import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import "../app/globals.css"


const CartPage=()=> {
  return (
    <div className='mx-[50px] flex flex-col items-center justify-center'>
        <div className="uper"></div>
        <div className="mid border-[1px] w-[80%] border-[#474747] ">
            <table >
                <thead bgcolor='#f2f2f2'>
                   <tr>
                    <td>DELETE</td>
                    <td>IMAGE</td>
                    <td>PRODUCT</td>
                    <td>PRICE</td>
                    <td>QUANTITY </td>
                    <td>TOTAL</td>
                   </tr>
                </thead>
                <tbody >
                <tr align='center'>
                    <td ><FaRegTrashCan />
                      </td>
                    <td cellPadding='50px'>
                      <img src="/assits/images/sidebar1.png" alt="" />
                      </td>
                    <td>Handbag Fringilla</td>
                    <td>£65.00</td>
                    <td>QUANTITY </td>
                    <td>£130.00</td>
                   </tr>
                   <tr align='center'>
                    <td cellPadding='50px'><FaRegTrashCan />
                      </td>
                    <td cellPadding='50px'><img src="/assits/images/sidebar1.png" alt="" /></td>
                    <td>Handbag Fringilla</td>
                    <td>£65.00</td>
                    <td>QUANTITY </td>
                    <td>£130.00</td>
                   </tr>
                   <tr align='center'>
                    <td cellPadding='50px'><FaRegTrashCan />
                      </td>
                    <td cellPadding='50px'><img src="/assits/images/sidebar1.png" alt="" /></td>
                    <td>Handbag Fringilla</td>
                    <td>£65.00</td>
                    <td>QUANTITY </td>
                    <td>£130.00</td>
                   </tr>
                </tbody>
                <tfoot>
                 <button>
                    UPDATE CART
                    </button>
                </tfoot>
            </table>
        </div>
        <div className="end">
            <div className="left"></div>
            <div className="right"></div>
        </div>
    </div>
  );
};

export default CartPage;