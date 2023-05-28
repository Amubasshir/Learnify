const HeroSection = () => {
  return (
    <div className="relative hero-section min-h-screen  bg-[#0C0C0D] ">
      <div className="pt-5">
        <h1 className="text-9xl font-extrabold font-inter leading-[130px] wrapper text-white text-center">
          <span className="text-[#FFCC78]">GROW </span>
          <br />
          FASTER <br />
          WITH <span className="text-[#F4877A]">LEARNIFY</span>
        </h1>
        <p className="text-lg font-normal leading-7 font-inter text-[#ffffff] text-center pt-5">
          We work with professionals and leaders who want to build careers that
          fulfil <br /> them intellectually, financially and emotionally.
        </p>
        <div className="flex gap-5 items-center justify-center pt-10 pb-2">
          <button className="w-52 h-16 rounded-full px-8 py-4 bg-[#5DE8C1] text-lg font-semibold leading-7 font-inter text-[#0C0C0D] text-center">
            Learnify
          </button>
          <button className="w-52 h-16 rounded-full px-8 py-4 bg-[#FFFFFF] text-lg font-semibold leading-7 font-inter text-[#0C0C0D] text-center">
            Learn more
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span className="pt-4 pr-2">
            <img src="/star.png" alt="star icon" />
          </span>
          <p className="text-white text-lg font-normal leading-7 text-center pt-5">
            4.8 Average Session Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
