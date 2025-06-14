
const Comp = ({ heading, para, image, booloperater }) => {
    return (
        <div
            className={`flex flex-col ${booloperater ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center justify-between gap-12 px-6 md:px-20 py-16 animate-fadeIn`}
        >
            {/* Image Section */}
            <div className="w-full lg:w-1/2 animate-slideIn">
                <img src={image} alt="section visual" className="w-full max-w-md mx-auto lg:mx-0" />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-left animate-fadeUp">
                <h2 className="text-[#2a3436] text-3xl md:text-4xl font-bold mb-6">{heading}</h2>
                <p className="text-[#424545] text-base md:text-lg leading-relaxed">{para}</p>
            </div>
        </div>
    );
};

export default Comp;
