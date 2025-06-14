import image from "../images/heroimg.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">

      {/* Left Text Section */}
      <div className="flex-1 text-center md:text-left animate-fadeUp">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2A6877] max-w-xl mx-auto md:mx-0">
          Quick and Easy Loans for Your Financial Needs.
        </h2>
        <p className="text-gray-700 mt-4 max-w-lg mx-auto md:mx-0">
          Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.
        </p>
        <div className="mt-6">
          <Button text={"Get Started"} />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 max-w-md md:max-w-lg animate-slideIn">
        <img src={image} alt="hero illustration" className="w-full h-auto object-contain" />
      </div>
    </div>
  );
};

export default Hero;
