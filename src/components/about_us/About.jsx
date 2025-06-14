import React from 'react';
import Table from '../../images/Table.png';
import Button from '../Button';

const About = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-6 md:px-[125px]">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">

        {/* Left Content */}
        <div className="w-full lg:w-[50%] animate-fadeUp">
          <h2 className="text-[#2A6877] text-3xl md:text-4xl font-semibold mb-6">About us</h2>
          <img
            src={Table}
            alt="About visual"
            className="w-full max-w-md mb-6"
          />
          <p className="text-[#424545] text-base md:text-lg">
            <strong>QuickFunds</strong> – Your trusted financial partner for loans. Quick approvals, competitive rates, and personalized solutions to meet your unique needs. Empowering you to achieve your financial goals. Apply online today!
          </p>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[45%] bg-white p-6 md:p-10 rounded-[21px] shadow-lg animate-slideIn">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border-2 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A6877]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full border-2 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A6877]"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-2 rounded-[20px] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#2A6877]"
            />
          </div>
          <div className="flex justify-center">
            <Button text="Send" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
