import AccountData from "@/components/organisms/AccountData";
import Dashboard from "@/components/organisms/Dashboard";
import Footer from "@/components/organisms/Footer";
import Headermain from "@/components/organisms/Headermain";
import Mianaccount from "@/components/templates/Mianaccount";

function Account() {
  return (
    <div className='' >
      
      
          <Headermain />
          <AccountData />
          <Dashboard />
          <Mianaccount/>
          <Footer/>

        
    </div>
  )
}

export default Account;
