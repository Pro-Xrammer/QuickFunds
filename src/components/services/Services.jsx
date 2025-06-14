import Button from '../Button';
import Components from './Components';

import image from '../../images/Vector.png';
import imag from '../../images/Group 6.png';
import img from '../../images/Group 5.png';

const Services = () => {
  return (
    <section className="bg-[#f1f1f1] py-12 px-6 md:px-[125px] animate-fadeIn">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-[#2A6877] text-3xl md:text-4xl font-bold mb-6">
          Our Services
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <div className="animate-fadeUp delay-100">
          <Components
            para="Personal loans provide borrowers with flexibility in how they use the funds."
            text="Personal Loan"
            images={image}
          />
        </div>
        <div className="animate-fadeUp delay-200">
          <Components
            para="Business Loan Services provide financial assistance to businesses for various purposes."
            text="Business Loan"
            images={imag}
          />
        </div>
        <div className="animate-fadeUp delay-300">
          <Components
            para="Auto Loan Services provide financing options for individuals and businesses to purchase a vehicle."
            text="Auto Loan"
            images={img}
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <Button text="View More" />
      </div>
    </section>
  );
};

export default Services;
