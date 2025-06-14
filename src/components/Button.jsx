function Button({ text, className = '' }) {
  return (
    <div className="button">
      <button
        className={`${className}rounded-full border border-[#2A6877] bg-[#2A6877] text-white py-3 px-6
                   hover:bg-white hover:text-[#2A6877] hover:shadow-md 
                   transition-all duration-300 ease-in-out 
                   transform hover:scale-105`}
      >
        {text}
      </button>
    </div>
  );
}
export default Button