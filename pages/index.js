"use client"

// import ShopSibebar from "@/components/organisms/ShopSibebar"
import Shop from "./shop"
<<<<<<< HEAD

function Index() {
  return (
    <div className='' >
        <Shop />
=======
import Headermain from "@/components/organisms/Headermain";
import BannerSlider from "@/components/organisms/BannerSlider";
import HomeWCollection from "@/components/organisms/HomeWCollection";
import HomeGameBanner from "@/components/organisms/HomeGameBanner";
import HomeMCollection from "@/components/organisms/HomeMCollection";

function Index() {
  return (
    <div className=' ' >
        {/* <Shop /> */}
      
      
      <Headermain/>
      <BannerSlider />
      <HomeWCollection />
      <HomeGameBanner />
      <HomeMCollection />
        
>>>>>>> 350cf0782f18281a884102a26ac0ba62c512f2b9
    </div>
  )
}

<<<<<<< HEAD
export default Index
=======
export default Index;
>>>>>>> 350cf0782f18281a884102a26ac0ba62c512f2b9
