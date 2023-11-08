import React from "react";
import Process from "./Process/Process";

const HowItWorks = () => {
  return (
    <div className="bg-gradient-to-r pt-32 from-[#173f32]   to-[#161429] text-black lg:px-[5%] md:px-[5%] px-[2%]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-around md:flex-row gap-10 flex-col items-center">
          
          <div className="max-w-[400px]">
            <img
              className="w-full"
              src="https://i.ibb.co/hWVvg71/vu6wqwt.png"
              alt=""
            />
          </div>
        </div>
        <Process></Process>
      </div>
    </div>
  );
};

export default HowItWorks;
