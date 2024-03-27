import React, { useState } from 'react'
import Button from '../components/Button'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    let arr=[
        {name:"home"},
        {name:"Services"},
        {name:"How we work?"},
        {name:"About Us"},
        {name:"home"},
]
const [toggle,settoggle] = useState(false);
 function counter() {
    settoggle(!toggle);
    console.log(toggle);
  }
  return (
    <div className='flex justify-between items-center height-[72px] py-[9px] px-[70px] md:flex-row flex-col '>
        <div><h2 className='text-[30px]  md:flex-row flex-col pb-[12px]'>Quick<span className='text-[#50AC97]'>Funds</span></h2></div>
        <div><ul className={` ${toggle ? "flex gap-[10px]  height-[28px] items-center md:flex-row flex-col ":" md:flex justify-between items-centergap-[20px]  hidden"}`} >
        {
        arr.map(({name})=>{
            return <li  className='list-none '>{name}</li>
        })
        }
        <div className=' '><Button text={"Contact Us"}/></div>

        </ul>
        <div className=" md:hidden block absolute top-5 right-5 text-black" onClick={counter}>{toggle?"X ":<TiThMenu/>}</div>
        </div>
       
    </div>
    
  )
}

export default Navbar; 