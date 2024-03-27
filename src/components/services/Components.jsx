import React from 'react'

const components = ({para ,text ,images}) => {
  return (
    <div className=' gap-[17px] h-[341px] py-[29px] px-[16px] mb-[1rem] rounded-[39px] w-[340px] mx-[auto] flex-col text-center  border-2 border-#fff'>
       <div className='flex justify-center'> <img src={images} alt="image" /></div>
      <div className=''><h2 className='h-[]24px text-[33px] flex justify-center'>{text}</h2></div>
       <div> <p className='h-[74px] text-[16px] text-[#6F6969]'>{para}</p></div>
        <div>  <button className='py-3 px-6  border-2 border-[#2A6877] rounded-full mt-3 gap-[3px]'>Apply Now</button>
</div>
        </div>
  )
}

export default components;