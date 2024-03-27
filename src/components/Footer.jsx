import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";
import { RiInstagramFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TbMailFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
<div className=' footer h-[590px] flex justify-between flex-wrap items-center px-[158px] gap-8 text-[#fff]'>
  <div className='w-[355px] h-[188px] gap-[24px] '>
        <h2 className='w-[190px] h-[24px] font-semibold text-[28px] mb-[2rem] '>Quicks <span className='text-[#50AC97]'>Funds</span></h2>
        <p className='w-[355px] h-[96px] text-[18px] mb-[2rem]'>Our mission is to empower individuals and 
        businesses by providing them with the
        financial resources they
        need to achieve their goals.</p>
    <div className='w-[150px] flex gap-4 '>
    <div className='flex w-[30px] justify-center rounded-[2rem] items-center h-[27px] gap-[16px] bg-white text-[black]'>
      <RiFacebookFill />
    </div>
    <div className='flex w-[30px] justify-center rounded-[2rem] items-center  h-[27px] gap-[16px]  bg-white text-[black]'>
      <FaWhatsapp />
    </div>
    <div className='flex w-[30px] justify-center rounded-[2rem] items-center h-[27px] gap-[16px]  bg-white text-[black]'>
      <LiaLinkedinIn />
     
    </div>
    <div className='flex w-[30px] justify-center rounded-[2rem] items-center h-[27px] gap-[16px]  bg-white text-[black]'>
      <RiInstagramFill />
    </div>
    </div>
  </div>
    <div className='flex justify-between  w-[506px] md:flex-row flex-col '>
    <div className='w-[508px] h-[185px] gap-[126px] '>
      
      <div className='w-[156px] h-[32px] mb-[10px]'>
        <h2 className='h-[24px] font-semibold text-[20px]'>OUR SERVICES</h2>
        </div>
          <h2 className='w-[128px] h-[21px] text-[18px] mb-[10px]'>Personal loan</h2>
          <h2 className='w-[130px] h-[21px] text-[18px] mb-[10px]'>Business loan</h2>
          <h2 className='w-[130px] h-[21px] text-[18px] mb-[10px]'>Education loan</h2>
          <h2 className='w-[130px] h-[21px] text-[18px] mb-[10px]'>Auto loan</h2>
    </div>
    <div className='w-[224px] h-[185px] gap-4 '>
      <div className='w-[140px] h-[32px]  mb-[10px]'>
        <h2 className='w-[140px] h-[24px] font-semibold text-[20px] '>CONTACT US</h2>
      </div>
        <div className='flex items-center justify-between w-[195px] h-[21px] mb-[10px] '>
          <div><BiSolidPhoneCall /></div> <h2 className='w-[158px] h-[21px] text-[18px] '>+91 99999 99999</h2>
        </div>
        <div className='flex items-center justify-between w-[195px] h-[21px] mb-[10px]'>
          <div><TbMailFilled /></div><h2 className='w-[158px] h-[21px] text-[18px] '>xyzfh5@gmail.com</h2>
        </div>
        <div className='flex items-center justify-between w-[195px] h-[21px] mb-[10px]'>
        <div><FaLocationDot /></div> <h2 className='w-[158px] h-[21px] text-[18px] '>Address line-1 Address line-2, city, state-pin code.</h2>
        </div>
    </div>
    </div>
      
   
</div>    
    </>
  )
}

export default Footer;