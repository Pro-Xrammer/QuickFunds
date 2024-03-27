import React from 'react'

function Button({text}) {
  return (
    
    <div className='button'>
        <button className='w-[126px] height-[48px] rounded-[50px] border-[1px] py-[12px] px-[20px] gap-[10px] bg-[#2A6877] text-[#FFFFFF]'>{text}</button>
        </div>
  )
}

export default Button;