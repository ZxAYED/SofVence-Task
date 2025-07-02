import joinus from "../../../../public/joinus.png";

const JoinUs = () => {
  return (
    <div className="w-full max-w-[1520px] mx-auto bg-gradient-to-r from-[#F46A39] to-[#F7813B] rounded-xl overflow-hidden shadow-md mt-32">
      <div className="relative flex flex-col md:flex-row justify-between items-start md:items-stretch">
        <div className="text-white md:max-w-xl text-center md:text-left px-6 md:px-[60px] pt-[60px] pb-[60px] z-10">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold mb-4 leading-tight">
            WHY WAIT? JOIN <br className="hidden md:block" /> US TODAY!
          </h2>
          <p className="mb-6 text-base md:text-lg font-normal">
            Start your journey with Us and experience a platform designed for
            trust, quality, and convenience.
          </p>
          <button className="bg-[#192D4E] hover:bg-blue-800 text-[#FEECEB] font-medium text-[18px] px-10 py-4 rounded-2xl transition">
            Sign Up Now
          </button>
        </div>

        <div className="w-full md:flex-1 relative min-h-[250px] md:min-h-[300px] pt-10 md:pt-[60px]">
          <img
            src={joinus}
            alt="Join Us"
            className="absolute bottom-0 right-0 md:w-[80%] max-w-[600px] w-[70%] mx-auto md:mx-0 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
