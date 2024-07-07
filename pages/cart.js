import CartData from "@/components/organisms/CartData";
import Checkcode from "@/components/organisms/Checkcode";
import CheckForm from "@/components/organisms/CheckForm";
import Checkpolicy from "@/components/organisms/Checkpolicy";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";

function Cart() {
  return (
    <div className='' >
      
      
          <Headermain />
          <CartData />
            <Checkpolicy />
          <Checkcode />
         <CheckForm/>
         
         <Footer/>
    </div>
  )
}

export default Cart;