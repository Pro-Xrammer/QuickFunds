import { RiFacebookFill, RiInstagramFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';
import { LiaLinkedinIn } from 'react-icons/lia';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbMailFilled } from 'react-icons/tb';
import { FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#2A6877] text-white px-6 md:px-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 animate-fadeIn">
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Quick<span className="text-[#50AC97]">Funds</span>
          </h2>
          <p className="text-base text-gray-200 leading-relaxed mb-6">
            Our mission is to empower individuals and businesses by providing them with the financial resources they need to achieve their goals.
          </p>
          <div className="flex gap-4">
            {[RiFacebookFill, FaWhatsapp, LiaLinkedinIn, RiInstagramFill].map((Icon, index) => (
              <div
                key={index}
                className="bg-white text-[#2A6877] p-2 rounded-full hover:scale-110 hover:bg-[#50AC97] hover:text-white transition-all duration-300"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-100">
            <li className="hover:text-[#50AC97] transition">Personal Loan</li>
            <li className="hover:text-[#50AC97] transition">Business Loan</li>
            <li className="hover:text-[#50AC97] transition">Education Loan</li>
            <li className="hover:text-[#50AC97] transition">Auto Loan</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-100">
            <li className="flex items-start gap-3">
              <BiSolidPhoneCall size={20} className="text-[#50AC97]" />
              +91 99999 99999
            </li>
            <li className="flex items-start gap-3">
              <TbMailFilled size={20} className="text-[#50AC97]" />
              xyzfh5@gmail.com
            </li>
            <li className="flex items-start gap-3">
              <FaLocationDot size={20} className="text-[#50AC97]" />
              Address line-1, Address line-2, City, State - PIN
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copy */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} QuickFunds. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
