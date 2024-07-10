import OrdersPage from '@/components/molecules/orderpage'
import AccountData from "@/components/organisms/AccountData";
import Dashboard from "@/components/organisms/Dashboard";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import React from 'react'

function order() {
  return (
      <div>
               
          <Headermain />
          <AccountData />
          <OrdersPage/>

          <Footer/>

    </div>
  )
}

export default order