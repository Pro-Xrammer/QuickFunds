import React from 'react'
import image from "../images/heroimg.png"
const Hero = () => {
  return (
    <div className='flex mb-[16px]  items-center  md:flex-row flex-col '>
        <div className=' mx-[2rem] my-[59px]  '>
            <div><h2 className='w-[480px] font-bold  text-[#2A6877] text-[52px] '>Quick and Easy Loans for Your Financial Needs.</h2></div>
            <p className='w-[542px]'>Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.</p>
            <button className='py-3 px-6 bg-[#2A6877 border-2 border-[#2A6877] rounded-full mt-3 gap-3]'>Get Started</button>   
        </div>
        <div>
                <img className='' src={image} alt="there is an image" />
            </div>
    </div>
  )
}

export default Hero;