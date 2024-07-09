import React from "react";
import AnchorTag from "../atoms/anchorTag";

const Hover = () => {
    return (
        <div className="p-[30px] w-[85%] bg-[#fff] ">
            <div className="flex mb-[20px]   ">
                <div className="">
                    <ul className="pr-[120px] border-r grid gap-[8px] s  ">
                        <li className=" text-[15px]  "><AnchorTag href="/" ><b>Shops Layout</b></AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Full Width</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Full Width List</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Right Sidebar</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Right Sidebar List</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >List View</AnchorTag></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="pr-[120px] border-r grid gap-[8px] ml-[40px]  ">
                        <li className=" text-[15px]  "><AnchorTag href="/" ><b>Other Pages</b></AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Portfolio</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Portfolio Details</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Cart</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >CheckOut</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >My Account</AnchorTag></li>
                    </ul>
                </div>
                <div className="">
                    <ul className="pr-[120px] border-r grid gap-[8px] ml-[40px]  ">
                        <li className=" text-[15px] "><AnchorTag href="/" ><b>Product Types</b></AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Product Details</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Product Sidebar</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Product Gellery</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Product Grouped</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Product Variable</AnchorTag></li>

                    </ul>
                </div>
                <div className="">
                    <ul className="pr-[120px] grid gap-[8px] ml-[40px]  ">
                        <li className=" text-[15px]  "><AnchorTag href="/" ><b>Collection</b></AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Handbag</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Accessories</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Clothing</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Shoes</AnchorTag></li>
                        <li><AnchorTag href="/" variant="success" >Check Trousers</AnchorTag></li>
                    </ul>
                </div>
            </div>
            <div className="">
                <img src="/assits/images/hoverbanner.webp" alt="" />
            </div>
        </div>
    )
}

export default Hover