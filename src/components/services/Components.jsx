
const CardComponent = ({ para, text, images }) => {
  return (
    <div className="w-[340px] mx-auto mb-6 px-6 py-6 rounded-[32px] bg-white shadow-md 
                    border-2 border-white text-center flex flex-col items-center 
                    animate-fadeUp transition-all duration-500">

      {/* Image */}
      <div className="mb-4">
        <img src={images} alt="icon" className="w-[80px] h-[80px] object-contain mx-auto" />
      </div>

      {/* Title */}
      <h2 className="text-[28px] font-semibold text-[#2A6877] mb-3">
        {text}
      </h2>

      {/* Paragraph */}
      <p className="text-[16px] text-[#6F6969] mb-4 leading-relaxed px-2">
        {para}
      </p>

      {/* Button */}
      <button
        className="py-2 px-6 rounded-full border-2 border-[#2A6877] text-[#2A6877] 
                   hover:bg-[#2A6877] hover:text-white transition-all duration-300"
      >
        Apply Now
      </button>
    </div>
  );
};

export default CardComponent;
