import React from 'react'

const Comp = ({heading,para,image,booloperater}) => {
  return (
    <div>
        {booloperater?
        (
            <div className='gap-[4rem] mx-[158px]  flex justify-between my-[8rem] flex-wrap'>
        <div className=''><img src={image} alt="image" /></div> 
        <div className='w-[546px]  '><h2 className='h-[56px] text-[33px] font-bold text-[#2a3436] py-6 mb-[4rem]  '>{heading}</h2>
        <p className='h-[115px] font-[18px] text-[#424545]  '>{para}</p></div>
    </div>
        ):
        (
            <div className='gap-[4.6rem] mx-[158px]  flex justify-between  my-[5rem] flex-wrap  '>
    <div className='w-[546px] gap-4  '>
        <h2 className='h-[56px] text-[33px] font-bold text-[#2a3436] py-6 mb-[4rem]'>{heading}</h2>
        <p className='h-[115px] font-[18px] text-[#424545]  '>{para}</p>
        </div>
        <div className=''><img src={image} alt="image" /></div>
    </div>
        )
        }








    </div>
  )
}

export default Comp;