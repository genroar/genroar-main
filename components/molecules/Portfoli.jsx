import React from 'react'
import Container from '../atoms/Container'
import Button from '../atoms/Button'
import AnchorTag from '../atoms/anchorTag'
import Span from '../atoms/Span'
import PortfolioCompany from './PortfolioCompany'
import PortfolioComputer from './portfolioComputer'
import PortfolioGeneral from "./portfolioGeneral"
import PortfolioHipster from './portfolioHipster'
import PortfolioJustfood from './portfolioJustfood'

function Portfoli() {
  return (
    <div>
        <Container>
        <div className='pt-[4%]'>
            <div className='flex gap-[5px]'>
                <AnchorTag variant="success">Home</AnchorTag>
                <span className='text-[#999] text-[12px]'>/</span>
               <Span>Portfolio</Span>
            </div>
        </div>
           <div className='pt-[3%]'>
           <div className='bg-[#ddd] flex justify-center py-[30px] h-[110px] gap-[3px]  items-center '>
                <div className=''>
                <Button variant='rectangle-4'>All</Button>
                </div>
                <PortfolioCompany/>
                <PortfolioComputer/>
                <PortfolioGeneral/>
                <PortfolioHipster/>
                <PortfolioJustfood/>
            </div>
           </div>
        </Container>
    </div>
  )
}

export default Portfoli