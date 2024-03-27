import React from 'react'
import Button from '../Button';
import Components from "./Components";
import image from "../../images/Vector.png"
import imag from "../../images/Group 6.png"
import img from '../../images/Group 5.png'

const Services = () => {
  return ( 
    <div className='px-[125px] gap-[18px]  bg-[#f1f1f1]   pb-[3rem]  '>
        <div className='flex  h-[56px] justify-center font-bold text-[40px] text-[#2A6877] py-9'>
            <h2>Our Services</h2>
        </div>
        <div>
        <div className='flex flex-wrap mt-[5rem] gap-2 md:flex-row flex-col'> 
        <Components para={"Personal loans provideborrowers with flexibility in how they use the funds."} text={"Personal Loan "} images={image}/>
        <Components para={"Business Loan Services providefinancial assistance to businessesfor various purposes.."} text={"Business Loan"} images={imag}/>
        <Components para={"Auto Loan Services provide financing options for individualsbusinesses to purchase a vehicle."} text={"Auto Loan"} images={img}/>
        
        </div>
        </div>
        <div className='flex justify-center rounded-[50px] py-[12px] px-[20px] mt-[3rem] '><Button text={"View More"}/></div>
    </div>
  )
}

export default Services;