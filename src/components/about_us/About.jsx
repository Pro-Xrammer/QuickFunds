import React from 'react'
import Table from '../../images/Table.png'
import Button from '../Button'

const About = () => {
  return (
    <>
    <div className='flex   justify-between flex-wrap pt-[4rem] px-[125px] bg-[#f1f1f1] pb-[3rem]  '>
        <div className='h-[604px]  w-[455px] gap-[14px] '>
        <h2 className='  h-[56px] font-semibold  text-[#2A6877] text-[40px] mb-12'>About us</h2>
        <img className='h-[370px] w-[360px] mb-12'src={Table} alt="image"/>
        <p className='h-[130px] text-[20px] text-[#424545] '>QuickFunds- Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!</p>
        </div>
        <div className=' w-[450px] rounded-[21px]  py-[45px] px-[20px] gap-[28px] bg-[#FFFFFF] my-[8rem] '>
            <h2 className='w-[91px] h-[19px] text-[16px] mb-[7px] mx-[6px]'> Your Name</h2>
            <input className='w-[395px] h-[46px] rounded-[20px] border-[2px] mb-[19px] pl-[10px]' type="text" />
            <h2 className='w-[110px] h-[19px] text-[16px] mb-[7px] mx-[6px]'>Phone number</h2>
            <input className='w-[395px] h-[46px] rounded-[20px] border-[2px] mb-[19px] pl-[10px]' type="text" />
            <h2 className='w-[110px] h-[19px] text-[16px] mb-[7px] mx-[6px]'>Email address</h2>
            <input className='w-[395px] h-[46px] rounded-[20px] border-[2px] mb-[19px] pl-[10px]' type="text" />
            <div className='flex justify-center mt-[2rem] text-[23px] '><Button text={"Send"}/></div>
        </div>
    </div>
    </>
  )
}

export default About;