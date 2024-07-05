"use client"

import Heading from "@/components/atoms/Heading";
import AnchorTag from "@/components/atoms/anchorTag";
import Headermid from "@/components/molecules/Headermid";
import Home from "./home";
import AboutData from "@/components/organisms/AboutData";
import Counter from "@/components/organisms/Counter";
import Container from "@/components/atoms/Container";
import Progress from "@/components/organisms/Progress"
import SearchHeader from "@/components/molecules/SearchHeader";
import Headermain from "@/components/organisms/Headermain";
import Ried from "@/components/molecules/Ried";
import Footer from "@/components/organisms/Footer";

function Index() {
  return (
    <div className=' ' >
      
      
      <Headermain/>
      {/* <Home /> */}
      <AboutData/>
      <Ried/>
      <Counter/>
      <Progress/>
      <Footer/>
    
    </div>
  )
}

export default Index;