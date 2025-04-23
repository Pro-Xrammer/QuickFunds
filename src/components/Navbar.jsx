import React, { useState } from 'react'
import Button from '../components/Button'
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const navItems = [
    { name: "Home" },
    { name: "Services" },
    { name: "How we work?" },
    { name: "About Us" }
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <div>
        <h2 className="text-2xl font-bold">Quick<span className="text-[#50AC97]">Funds</span></h2>
      </div>

      <ul className={`md:flex gap-6 items-center transition-all duration-300 ${
        toggle ? "flex flex-col absolute top-16 right-6 bg-white rounded-lg p-4 shadow-lg" : "hidden md:flex"
      }`}>
        {navItems.map(({ name }, index) => (
          <li key={index} className="list-none cursor-pointer hover:text-[#50AC97]">
            {name}
          </li>
        ))}
        <li>
          <Button text={"Contact Us"} />
        </li>
      </ul>

      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={handleToggle}
      >
        {toggle ? "✕" : <TiThMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
