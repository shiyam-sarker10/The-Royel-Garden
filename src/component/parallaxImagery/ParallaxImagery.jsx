import React from 'react';

const ParallaxImagery = () => {
    return (
      <div data-aos="fade-up">
        <div className="relative">
          <div className="parallax flex items-center justify-center px-4">
            <div className="z-10 md:w-[45%] leading-8 space-y-10">
              <h1 className="text-white font-bold text-3xl md:text-4xl  text-center lg:text-5xl">
                Discover The Royal Garden: Your Oasis of Tranquility and Luxury
              </h1>
              <div className="flex justify-center">
                <button className="px-4 text-white rounded-lg font-bold py-2 bg-light-blue-600">
                  Know More
                </button>
              </div>
            </div>
          </div>
          <div className="bg-black/50 absolute inset-0 "></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    );
};

export default ParallaxImagery;