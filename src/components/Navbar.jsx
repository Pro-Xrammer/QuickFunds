import { useState } from 'react';
import Button from '../components/Button';
import { TiThMenu } from 'react-icons/ti';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const navItems = [
    { name: 'Home' },
    { name: 'Services' },
    { name: 'How we work?' },
    { name: 'About Us' }
  ];

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const handleNavClick = () => {
    if (toggle) setToggle(false);
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between z-50 relative">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Quick<span className="text-[#50AC97]">Funds</span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-8 items-center">
        {navItems.map(({ name }, index) => (
          <li key={index} className="cursor-pointer hover:text-[#50AC97] transition">
            {name}
          </li>
        ))}
        <li>
          <Button text="Contact Us" />
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden text-3xl cursor-pointer z-50"
        onClick={handleToggle}
      >
        {toggle ? <IoMdClose /> : <TiThMenu />}
      </div>

      {/* Mobile Menu */}
      {toggle && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 transition-all duration-300">
          {navItems.map(({ name }, index) => (
            <div
              key={index}
              onClick={handleNavClick}
              className="text-lg cursor-pointer hover:text-[#50AC97] transition"
            >
              {name}
            </div>
          ))}
          <Button text="Contact Us" onClick={handleNavClick} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
